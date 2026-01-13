const AddAddressModal = () => {
  return (
    <div
      id="addAddressModal"
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-xl max-w-xl w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6">Добавить адрес</h2>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Название адреса</label>
            <input
              type="text"
              placeholder="Например: Дом"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Город</label>
            <input
              type="text"
              placeholder="Москва"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Адрес</label>
            <input
              type="text"
              placeholder="Улица, дом, квартира"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Получатель</label>
              <input
                type="text"
                placeholder="Иван Иванов"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Телефон</label>
              <input
                type="tel"
                placeholder="+7 900 000-00-00"
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-indigo-600" />
            <label className="text-sm">Сделать адресом по умолчанию</label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 border rounded"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressModal;
