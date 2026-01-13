const Address = () => {
  return (
    <div className="md:col-span-3">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Адреса доставки</h1>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
          + Добавить адрес
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-4 flex justify-between flex-wrap gap-4">
        <div>
          <p className="font-semibold">Основной адрес</p>
          <p className="text-sm text-gray-600">
            г. Москва, ул. Примерная, д. 10, кв. 5
          </p>
          <p className="text-sm text-gray-500">
            Получатель: Иван Иванов, +7 900 000-00-00
          </p>
        </div>
        <div className="flex gap-3 text-sm">
          <button className="text-indigo-600 hover:underline">
            Редактировать
          </button>
          <button className="text-red-600 hover:underline">Удалить</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 flex justify-between flex-wrap gap-4">
        <div>
          <p className="font-semibold">Рабочий адрес</p>
          <p className="text-sm text-gray-600">
            г. Москва, Бизнес-центр «Пример», офис 210
          </p>
          <p className="text-sm text-gray-500">
            Получатель: Иван Иванов, +7 900 000-00-00
          </p>
        </div>
        <div className="flex gap-3 text-sm">
          <button className="text-indigo-600 hover:underline">
            Редактировать
          </button>
          <button className="text-red-600 hover:underline">Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default Address;
