const AddUserModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div
      id="addUserModal"
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-black/50 absolute inset-0" onClick={closeModal}></div>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">Добавить пользователя</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Имя</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Иван Иванов"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="ivan@mail.ru"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Роль</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Покупатель</option>
              <option>Менеджер</option>
              <option>Админ</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Статус</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Активен</option>
              <option>Заблокирован</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
              onClick={closeModal}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
