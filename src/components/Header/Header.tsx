import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import TopBar from "./TopBar/TopBar";
import { useAppSelector } from "../../store/hooks";

const Header = () => {
  const cart = useAppSelector(state => state.cart.items)

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
            className="hidden md:flex items-center gap-2 px-4 py-2 border rounded-xl font-medium hover:bg-gray-50 text"
          >
            ☰ Каталог
          </Link>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Искать товары"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            {/* <div className="flex items-center gap-6">
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  className="rounded-full"
                />
                <span className="text-sm font-medium">Tony Mind</span>
              </Link>
            </div> */}
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
