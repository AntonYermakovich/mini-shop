const OrderModal = () => {
  return (
    <div
      id="orderModal"
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Заказ №12345</h2>
        <p className="text-sm text-gray-500 mb-6">
          12 января 2026 • Статус:{" "}
          <span className="text-green-600 font-medium">Доставлен</span>
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-4">
            <img src="https://via.placeholder.com/70" className="rounded" />
            <div className="flex-1">
              <p className="font-medium">Смартфон X</p>
              <p className="text-sm text-gray-500">1 шт.</p>
            </div>
            <p className="font-semibold">29 990 ₽</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="https://via.placeholder.com/70" className="rounded" />
            <div className="flex-1">
              <p className="font-medium">Наушники Pro</p>
              <p className="text-sm text-gray-500">1 шт.</p>
            </div>
            <p className="font-semibold">9 990 ₽</p>
          </div>
        </div>

        <div className="border-t pt-4 space-y-2 text-sm">
          <p>
            <span className="text-gray-500">Доставка:</span> Курьером, 0 ₽
          </p>
          <p>
            <span className="text-gray-500">Адрес:</span> г. Москва, ул. Примерная,
            10
          </p>
          <p>
            <span className="text-gray-500">Оплата:</span> Банковская карта
          </p>
          <p className="font-semibold text-lg mt-2">Итого: 39 980 ₽</p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
