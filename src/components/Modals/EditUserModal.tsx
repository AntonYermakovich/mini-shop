import type { IUser } from "../../store/users/user.types";

interface IEditUser {
  closeModal: () => void;
  user: IUser;
}

const EditUserModal = ({ closeModal, user }: IEditUser) => {
  return (
    <div
      id="editUserModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-black/50 absolute inset-0" onClick={closeModal}></div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-6">Редактирование пользователя</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Фото профиля</label>
            <div className="flex items-center gap-4">
              <img
                id="avatarPreview"
                src={user.avatar}
                className="w-20 h-20 rounded-full object-cover"
                alt={user.name}
              />
              <label className="flex-1 cursor-pointer">
                <div className="border-2 border-dashed rounded-xl p-4 text-center text-sm text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition">
                  Перетащите фото сюда или нажмите для загрузки
                </div>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Имя</label>
            <input
              type="text"
              value={user.name}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={user.email}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Роль</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option
                value={user.role}
                selected={
                  user.role.toLocaleLowerCase() === "Admin".toLocaleLowerCase()
                }
              >
                Администратор
              </option>
              <option
                value={user.role}
                selected={
                  user.role.toLocaleLowerCase() ===
                  "Customer".toLocaleLowerCase()
                }
              >
                Менеджер
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Статус</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Активен</option>
              <option>Заблокирован</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 cursor-pointer"
            >
              Сохранить
            </button>
            <button
              type="button"
              className="flex-1 border py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              onClick={closeModal}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
