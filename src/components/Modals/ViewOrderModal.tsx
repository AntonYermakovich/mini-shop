const ViewOrderModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div
      id="viewOrderModal"
      className="fixed inset-0  flex items-center justify-center"
    >
      <div className="bg-black/50 absolute inset-0" onClick={closeModal}></div>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Заказ #1024</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold mb-2">Информация о клиенте</h3>
            <p>
              <span className="font-medium">Имя:</span> Иван Иванов
            </p>
            <p>
              <span className="font-medium">Телефон:</span> +7 900 000-00-00
            </p>
            <p>
              <span className="font-medium">Email:</span> ivan@mail.ru
            </p>
            <p>
              <span className="font-medium">Адрес доставки:</span> Москва, ул.
              Пример, 10
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <h3 className="font-semibold mb-2">Информация о заказе</h3>
            <p>
              <span className="font-medium">Дата:</span> 12.01.2026
            </p>
            <p>
              <span className="font-medium">Оплата:</span> Карта
            </p>
            <p>
              <span className="font-medium">Статус:</span>{" "}
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                Новый
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">Товары</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Товар</th>
                  <th className="p-3 text-left">Цена</th>
                  <th className="p-3 text-left">Кол-во</th>
                  <th className="p-3 text-left">Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Смартфон X</td>
                  <td className="p-3">29 990 ₽</td>
                  <td className="p-3">1</td>
                  <td className="p-3">29 990 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm">
            <p>
              <span className="font-medium">Итого:</span> 29 990 ₽
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
              onClick={closeModal}
            >
              Закрыть
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer">
              Изменить статус
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderModal;
