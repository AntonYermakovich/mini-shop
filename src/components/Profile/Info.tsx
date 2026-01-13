const Info = () => {
  return (
    <div className="md:col-span-3 bg-white rounded-xl shadow p-8">
      <h1 className="text-2xl font-bold mb-6">Личные данные</h1>

      <form className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-600">Имя</label>
          <input
            type="text"
            defaultValue="Иван"
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Фамилия</label>
          <input
            type="text"
            defaultValue="Иванов"
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            defaultValue="ivan@mail.ru"
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Телефон</label>
          <input
            type="tel"
            defaultValue="+7 900 000-00-00"
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="md:col-span-2">
          <h2 className="font-semibold mb-3">Смена пароля</h2>
        </div>
        <div>
          <label className="text-sm text-gray-600">Новый пароль</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Подтверждение</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Сохранить изменения
          </button>
        </div>
      </form>
    </div>
  );
};

export default Info;
