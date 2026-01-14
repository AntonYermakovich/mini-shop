import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

import TopBar from "./TopBar/TopBar";
import { useAppSelector } from "../../store/hooks";
import type { IProductsFilters } from "../../interfaces";
import { useGetAllProductsQuery } from "../../store/products/products";
import { useDebounce } from "../../hooks";
import { formatPrice } from "../../utils";

const Header = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const [filters, setFilters] = useState<IProductsFilters>({});
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: products, isFetching } = useGetAllProductsQuery(filters, {
    skip: !filters.title || filters.title.length < 2,
  });

  useEffect(() => {
    if (!debouncedSearch || debouncedSearch.length < 2) {
      setFilters({});
      setOpenDropdown(false);
      return;
    }

    setFilters({ title: debouncedSearch });
  }, [debouncedSearch]);

  useEffect(() => {
    if (debouncedSearch.length >= 2 && !isFetching) {
      setOpenDropdown(true);
    }
  }, [debouncedSearch, isFetching]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onFocusHandler = () => {
    search && setOpenDropdown(true)
  }

  return (
    <>
      <TopBar />

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-2xl font-extrabold text-indigo-600">
            Mini shop
          </Link>

          <Link
            to="/catalog"
            className="hidden md:flex items-center gap-2 px-4 py-2 border rounded-xl font-medium hover:bg-gray-50"
          >
            ☰ Каталог
          </Link>

          <div className="flex-1 relative" ref={dropdownRef}>
            <input
              type="text"
              value={search}
              placeholder="Искать товары"
              onChange={onSearchChange}
              onFocus={onFocusHandler}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {openDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-xl shadow max-h-60 overflow-auto">
                {isFetching && (
                  <div className="px-4 py-2 text-gray-500">Загрузка...</div>
                )}

                {!isFetching && products?.length === 0 && (
                  <div className="px-4 py-2 text-gray-500">
                    Ничего не найдено
                  </div>
                )}

                {!isFetching &&
                  products?.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="px-4 py-2 cursor-pointer hover:bg-indigo-50 flex items-center gap-4"
                      onClick={() => setOpenDropdown(false)}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-12 h-12 rounded-lg object-cover border"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 line-clamp-1">
                          {product.title}
                        </p>
                        <p className="text-sm font-semibold text-indigo-600">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/login" className="hover:text-indigo-600">
              Войти
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-indigo-600 cursor-pointer"
            >
              <FaCartShopping className="text-2xl" />
              <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
