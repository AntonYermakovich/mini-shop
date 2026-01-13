import { useState } from "react";
import DashBoard from "../../components/AdminPanel/DashBoard";
import Products from "../../components/AdminPanel/Products";
import Category from "../../components/AdminPanel/Category";
import Orders from "../../components/AdminPanel/Orders";
import Users from "../../components/AdminPanel/Users";
import Settings from "../../components/AdminPanel/Settings";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-900 text-gray-200 flex flex-col">
          <div className="p-6 text-2xl font-bold text-white">AdminPanel</div>
          <nav className="flex-1 px-4 space-y-2">
            <div
              onClick={() => setTab(0)}
              className={`block px-4 py-2 rounded cursor-pointer ${
                tab === 0 ? "bg-indigo-600" : "hover:bg-gray-800"
              }`}
            >
              📊 Дашборд
            </div>
            <div
              onClick={() => setTab(1)}
              className={`block px-4 py-2 rounded cursor-pointer ${
                tab === 1 ? "bg-indigo-600" : "hover:bg-gray-800"
              }`}
            >
              📦 Товары
            </div>
            <div
              onClick={() => setTab(2)}
              className={`block px-4 py-2 rounded cursor-pointer ${
                tab === 2 ? "bg-indigo-600" : "hover:bg-gray-800"
              }`}
            >
              🗂 Категории
            </div>
            <div
              onClick={() => setTab(3)}
              className={`block px-4 py-2 rounded cursor-pointer ${
                tab === 3 ? "bg-indigo-600" : "hover:bg-gray-800"
              }`}
            >
              🧾 Заказы
            </div>
            <div
              onClick={() => setTab(4)}
              className={`block px-4 py-2 rounded cursor-pointer ${
                tab === 4 ? "bg-indigo-600" : "hover:bg-gray-800"
              }`}
            >
              👤 Пользователи
            </div>
            <div
              onClick={() => setTab(5)}
              className={`block px-4 py-2 rounded cursor-pointer ${
                tab === 5 ? "bg-indigo-600" : "hover:bg-gray-800"
              }`}
            >
              ⚙️ Настройки
            </div>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <Link
              to="/admin"
              className="block text-sm text-red-400 hover:underline"
            >
              Выйти
            </Link>
          </div>
        </aside>

        {tab === 0 && <DashBoard />}

        {tab === 1 && <Products />}

        {tab === 2 && <Category />}

        {tab === 3 && <Orders />}

        {tab === 4 && <Users />}

        {tab === 5 && <Settings />}
      </div>

    </>
  );
};

export default AdminPanel;
