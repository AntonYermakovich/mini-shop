import { formatPrice } from "../../utils";

const BestSellers = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Хиты продаж</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <img
              src="https://buyphone.by/wp-content/uploads/2025/09/iPhone-17-Pro-Max-Cosmic-Orange.png"
              className="rounded mb-4 w-full h-40 object-contain"
              alt="Смартфон X"
            />
            <h3 className="font-semibold">Смартфон X</h3>
            <p className="text-indigo-600 font-bold my-2">{formatPrice(1700)}</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
              В корзину
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <img
              src="https://ipad-market.by/images/airpods-pro1.jpg"
              className="rounded mb-4 w-full h-40 object-contain"
              alt="Наушники Pro"
            />
            <h3 className="font-semibold">Наушники Pro</h3>
            <p className="text-indigo-600 font-bold my-2">{formatPrice(700)}</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
              В корзину
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <img
              src="https://temptindia.com/cdn/shop/files/Artboard1.png?v=1704273967"
              className="rounded mb-4 w-full h-40 object-contain"
              alt="Смарт-часы"
            />
            <h3 className="font-semibold">Смарт-часы</h3>
            <p className="text-indigo-600 font-bold my-2">{formatPrice(900)}</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
              В корзину
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            <img
              src="https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-black-gaming-mouse-wired-high-speed-png-image_15967753.png"
              className="rounded mb-4 w-full h-40 object-contain"
              alt="Игровая мышь"
            />
            <h3 className="font-semibold">Игровая мышь</h3>
            <p className="text-indigo-600 font-bold my-2">{formatPrice(120)}</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
