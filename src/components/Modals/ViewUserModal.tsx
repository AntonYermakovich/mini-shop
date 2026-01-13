import { type IUser } from "../../interfaces";
import { formatDate } from "../../utils";

interface IViewUser {
  closeModal: () => void;
  user: IUser;
}

const ViewUserModal = ({ closeModal, user }: IViewUser) => {
  return (
    <div
      id="userModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-black/50 absolute inset-0" onClick={closeModal}></div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.avatar}
            className="w-20 h-20 rounded-full"
            alt={user.name}
          />
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <span className="inline-block mt-1 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded capitalize">
              {user.role}
            </span>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">ID пользователя</span>
            <span>#{user.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Дата регистрации</span>
            <span>{formatDate(user.creationAt)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Последний вход</span>
            <span>Сегодня, 14:32</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Статус</span>
            <span className="text-green-600">Активен</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 cursor-pointer">
            Редактировать
          </button>
          <button className="flex-1 border py-2 rounded-lg hover:bg-gray-50 cursor-pointer" onClick={closeModal}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewUserModal;
