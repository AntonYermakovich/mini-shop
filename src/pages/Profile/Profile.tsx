import { useState } from "react";
// import OrderModal from "../../components/Modals/OrderModal";
// import AddAddressModal from "../../components/Modals/AddAddressModal";
import Info from "../../components/Profile/Info";
import Order from "../../components/Profile/Order";
import Address from "../../components/Profile/Address";
import Favorite from "../../components/Profile/Favorite";

const Profile = () => {
  const [tab, setTab] = useState<number>(0);

  const handleTab = (tab: number) => {
    setTab(tab);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
      <aside className="bg-white rounded-xl shadow p-6 space-y-4 h-fit">
        <div className="flex items-center gap-3 mb-6">
          <img src="https://i.pravatar.cc/60?img=3" className="rounded-full" />
          <div>
            <p className="font-semibold">Иван Иванов</p>
            <p className="text-sm text-gray-500">ivan@mail.ru</p>
          </div>
        </div>
        <nav className="space-y-2 text-sm">
          <a
            href="#"
            className={`block px-3 py-2 rounded ${
              tab === 0 ? "bg-indigo-600 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => handleTab(0)}
          >
            Профиль
          </a>
          <a
            href="#"
            className={`block px-3 py-2 rounded ${
              tab === 1 ? "bg-indigo-600 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => handleTab(1)}
          >
            Мои заказы
          </a>
          <a
            href="#"
            className={`block px-3 py-2 rounded ${
              tab === 2 ? "bg-indigo-600 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => handleTab(2)}
          >
            Адреса доставки
          </a>
          <a
            href="#"
            className={`block px-3 py-2 rounded ${
              tab === 3 ? "bg-indigo-600 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => handleTab(3)}
          >
            Избранное
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded hover:bg-gray-100 text-red-600"
          >
            Выйти
          </a>
        </nav>
      </aside>

      {tab === 0 && <Info />}
      {tab === 1 && <Order />}
      {tab === 2 && <Address />}
      {tab === 3 && <Favorite />}

      {/* <OrderModal /> */}
      {/* <AddAddressModal /> */}
    </section>
  );
};

export default Profile;
