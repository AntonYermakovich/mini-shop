import ReactPaginate from "react-paginate";
import { useGetAllCategoriesQuery } from "../../store/category/category";
import { useGetAllProductsQuery } from "../../store/products/products";
import { formatPrice } from "../../utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { IProduct } from "../../interfaces";
import type { IProductsFilters } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToCart } from "../../store/cart/cart.slice";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState<IProductsFilters>({});
  const cart = useAppSelector((state) => state.cart.items);

  const { data: products, isLoading: isLoadingProducts } =
    useGetAllProductsQuery(filters);

  const { data: categories, isLoading: isLoadingCategories } =
    useGetAllCategoriesQuery();

  const [itemOffset, setItemOffset] = useState<number>(0);
  const [itemsPerPage] = useState<number>(12);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((products?.length ?? 0) / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    if (!products) return;
    const newOffset = (e.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product: IProduct) => {
    dispatch(
      addToCart({
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      })
    );
  };

  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">Каталог товаров</h1>
          <p className="text-indigo-100 mt-2">
            Выберите товары по категориям и фильтрам
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-8">
        <aside className="bg-white rounded-xl shadow p-6 space-y-6 h-fit">
          <div>
            <h3 className="font-semibold mb-3">Категории</h3>
            <ul className="space-y-2 text-sm">
              {isLoadingCategories &&
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-white p-4 animate-pulse">
                    <h3 className="h-3 w-2/3 bg-gray-200 rounded mx-auto"></h3>
                  </div>
                ))}
              <li
                onClick={() =>
                  setFilters((prev) => ({ ...prev, categoryId: undefined }))
                }
              >
                <input
                  id="all"
                  type="radio"
                  className="mr-2"
                  name="category"
                  value=""
                  defaultChecked
                />
                <label htmlFor="all">Все товары</label>
              </li>
              {categories?.map((category) => (
                <li
                  key={category.id}
                  className="flex items-center"
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, categoryId: category.id }))
                  }
                >
                  <input
                    id={category.id.toString()}
                    type="radio"
                    className="mr-2"
                    name="category"
                    value={category.id}
                  />
                  <label htmlFor={category.id.toString()}>
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Цена</h3>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="От"
                className="w-1/2 border rounded px-2 py-1"
                name="minPrice"
              />
              <input
                type="number"
                placeholder="До"
                className="w-1/2 border rounded px-2 py-1"
                name="maxPrice"
              />
            </div>
          </div>
        </aside>

        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">
              Всего товаров: {products?.length}
            </p>
            <select className="border rounded px-3 py-2 text-sm">
              <option>По популярности</option>
              <option>Сначала дешевле</option>
              <option>Сначала дороже</option>
              <option>По новизне</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingProducts &&
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition animate-pulse"
                >
                  <div className="rounded mb-4 w-full h-70 bg-gray-200" />
                  <h3 className="h-4 w-2/3 bg-gray-200 rounded mx-auto"></h3>
                  <p className="h-4 w-1/3 bg-gray-200 rounded mx-auto mt-2"></p>
                </div>
              ))}

            {currentItems?.map((product) => {
              const isInCart = cart.some((i) => i.productId === product.id);

              return (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
                >
                  <img
                    src={product.images[0]}
                    className="mb-4 w-full h-70 object-cover"
                    alt={product.title}
                  />
                  <h3 className="font-semibold truncate">{product.title}</h3>
                  <p className="text-indigo-600 font-bold my-2">
                    {formatPrice(product.price)}
                  </p>
                  {!isInCart ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 cursor-pointer"
                    >
                      В корзину
                    </button>
                  ) : (
                    <button
                      className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      В корзине
                    </button>
                  )}
                </Link>
              );
            })}
          </div>

          <ReactPaginate
            pageCount={pageCount}
            nextLabel={false}
            previousLabel={false}
            onPageChange={handlePageClick}
            containerClassName="flex justify-center mt-10 gap-2"
            pageClassName="h-10 w-10"
            pageLinkClassName="w-full h-full border flex items-center justify-center hover:border-indigo-600 transition cursor-pointer rounded"
            activeLinkClassName="bg-indigo-600 text-white border-indigo-600"
          />
        </div>
      </section>
    </>
  );
};

export default Catalog;
