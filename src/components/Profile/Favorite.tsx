const Favorite = () => {
  return (
    <div className="md:col-span-3">
      <h1 className="text-2xl font-bold mb-6">Избранное</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4 relative">
          <button className="absolute top-3 right-3 text-red-500 text-xl">
            ♥
          </button>
          <img
            src="https://buyphone.by/wp-content/uploads/2025/09/iPhone-17-Pro-Max-Cosmic-Orange.png"
            className="rounded mb-4 h-50 w-full flex mx-auto object-contain"
          />
          <h3 className="font-semibold">Смартфон X</h3>
          <p className="text-sm text-gray-500 mb-2">256 ГБ, чёрный</p>
          <div className="flex justify-between items-center">
            <span className="font-bold">29 990 ₽</span>
            <button className="bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm">
              В корзину
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 relative">
          <button className="absolute top-3 right-3 text-red-500 text-xl">
            ♥
          </button>
          <img
            src="https://ipad-market.by/images/airpods-pro1.jpg"
            className="rounded mb-4 h-50 w-full flex mx-auto object-contain"
          />
          <h3 className="font-semibold">Наушники Pro</h3>
          <p className="text-sm text-gray-500 mb-2">Шумоподавление</p>
          <div className="flex justify-between items-center">
            <span className="font-bold">9 990 ₽</span>
            <button className="bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700 text-sm">
              В корзине
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 relative">
          <button className="absolute top-3 right-3 text-red-500 text-xl">
            ♥
          </button>
          <img
            src="https://temptindia.com/cdn/shop/files/Artboard1.png?v=1704273967"
            className="rounded mb-4 h-50 w-full flex mx-auto object-contain"
          />
          <h3 className="font-semibold">Смарт-часы</h3>
          <p className="text-sm text-gray-500 mb-2">Силиконовый ремешок</p>
          <div className="flex justify-between items-center">
            <span className="font-bold">14 490 ₽</span>
            <button className="bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
