import type { IUser } from "../../store/users/user.types";

interface IDeleteUser {
  closeModal: () => void;
  user: IUser;
}

const DeleteUserModal = ({ closeModal, user }: IDeleteUser) => {
  return (
    <div
      id="deleteUserModal"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-black/50 absolute inset-0" onClick={closeModal}></div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-center relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={closeModal}
        >
          ✕
        </button>

        <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl">
          ⚠️
        </div>

        <h2 className="text-xl font-bold mb-2">Удалить пользователя?</h2>
        <p className="text-sm text-gray-500 mb-6">
          Пользователь <b>{user.name}</b> будет удалён без возможности
          восстановления.
        </p>

        <div className="flex gap-3">
          <button
            className="flex-1 border py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={closeModal}
          >
            Отмена
          </button>
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 cursor-pointer">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
