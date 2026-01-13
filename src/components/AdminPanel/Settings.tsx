const Settings = () => {
  return (
    <main className="flex-1 p-8">
    <h1 className="text-2xl font-bold mb-8">Настройки</h1>

    <div className="bg-white rounded-xl shadow p-6 max-w-3xl">
      <form className="space-y-6">
        <div>
          <label className="block text-sm mb-1">
            Название магазина
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Мой магазин"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email для связи</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="admin@shop.ru"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Телефон</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="+7 900 000-00-00"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Адрес</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="г. Москва, ул. Пример, 10"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Валюта</label>
          <select className="w-full border rounded px-3 py-2">
            <option>₽ Рубль</option>
            <option>$ Доллар</option>
            <option>€ Евро</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">
            Срок доставки по умолчанию (дней)
          </label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            placeholder="3"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="reset"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Сбросить
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </main>
  )
}

export default Settings