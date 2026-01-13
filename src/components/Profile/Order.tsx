const Order = () => {
  return (
    <div className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-6">Мои заказы</h1>

          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <div className="flex justify-between flex-wrap gap-4 mb-4">
              <div>
                <p className="font-semibold">Заказ №12345</p>
                <p className="text-sm text-gray-500">от 12 января 2026</p>
              </div>
              <div className="text-sm">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                  Доставлен
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="flex gap-4">
                <img
                  src="https://buyphone.by/wp-content/uploads/2025/09/iPhone-17-Pro-Max-Cosmic-Orange.png"
                  className="rounded h-15 w-15 object-contain"
                />
                <div>
                  <p className="font-medium">Смартфон X</p>
                  <p className="text-sm text-gray-500">1 шт.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://ipad-market.by/images/airpods-pro1.jpg"
                  className="rounded h-15 w-15 object-contain"
                />
                <div>
                  <p className="font-medium">Наушники Pro</p>
                  <p className="text-sm text-gray-500">1 шт.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="font-semibold">Сумма: 39 980 ₽</p>
              <button className="text-indigo-600 hover:underline text-sm">
                Подробнее
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between flex-wrap gap-4 mb-4">
              <div>
                <p className="font-semibold">Заказ №12312</p>
                <p className="text-sm text-gray-500">от 28 декабря 2025</p>
              </div>
              <div className="text-sm">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                  В пути
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="flex gap-4">
                <img
                  src="https://temptindia.com/cdn/shop/files/Artboard1.png?v=1704273967"
                  className="rounded h-15 w-15 object-contain"
                />
                <div>
                  <p className="font-medium">Смарт-часы</p>
                  <p className="text-sm text-gray-500">1 шт.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="font-semibold">Сумма: 14 490 ₽</p>
              <button className="text-indigo-600 hover:underline text-sm">
                Подробнее
              </button>
            </div>
          </div>
        </div>
  )
}

export default Order