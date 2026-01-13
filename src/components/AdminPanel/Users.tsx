import { useState } from "react";
import { useGetAllUsersQuery } from "../../store/users/users.api";
import { formatDate } from "../../utils";
import AddUserModal from "../Modals/AddUserModal";
import ViewUserModal from "../Modals/ViewUserModal";
import { useGetOneUserQuery } from "../../store/users/users.api";
import EditUserModal from "../Modals/EditUserModal";
import DeleteUserModal from "../Modals/DeleteUserModal";
import ReactPaginate from "react-paginate";

const Users = () => {
  const { data: users } = useGetAllUsersQuery();
  const [isAddUser, setIsAddUser] = useState<boolean>(false);
  const [isViewUser, setIsViewUser] = useState<boolean>(false);
  const [isEditUser, setIsEdtiUser] = useState<boolean>(false);
  const [isDeleteUser, setIsDeleteUser] = useState<boolean>(false);

  const [itemOffset, setItemOffset] = useState<number>(0);
  const [itemsPerPage] = useState<number>(9);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((users?.length ?? 0) / itemsPerPage);

  const [viewUserSelectedId, setViewUserSelectedId] = useState<number | null>(
    null
  );
  const [editUserSelectedId, setEdtiUserSelectedId] = useState<number | null>(
    null
  );
  const [deleteUserSelectedId, setDeleteiUserSelectedId] = useState<
    number | null
  >(null);

  const { data: userSelectedInfo } = useGetOneUserQuery(viewUserSelectedId!, {
    skip: !viewUserSelectedId,
  });
  const { data: userEditSelected } = useGetOneUserQuery(editUserSelectedId!, {
    skip: !editUserSelectedId,
  });
  const { data: userDeleteSelected } = useGetOneUserQuery(
    deleteUserSelectedId!,
    {
      skip: !deleteUserSelectedId,
    }
  );

  const viewUserHandler = (userId: number) => {
    setIsViewUser(true);
    setViewUserSelectedId(userId);
  };

  const editUserHandler = (userId: number) => {
    setIsEdtiUser(true);
    setEdtiUserSelectedId(userId);
  };

  const deleteUserModal = (userId: number) => {
    setIsDeleteUser(true);
    setDeleteiUserSelectedId(userId);
  };

  const handlePageClick = (e: { selected: number }) => {
    if (!users) return;
    const newOffset = (e.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Пользователи ({users?.length})</h1>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer"
            onClick={() => setIsAddUser(!isAddUser)}
          >
            + Добавить пользователя
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Имя</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Роль</th>
                <th className="p-4 text-left">Статус</th>
                <th className="p-4 text-left">Дата регистрации</th>
                <th className="p-4 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((user, index) => {
                return (
                  <tr key={user.id} className="border-t">
                    <td className="p-4 font-medium">{user.id}</td>
                    <td className="p-4">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                      {user.role === "admin" ? "Админ" : "Покупатель"}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          index === 4
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {index === 4 ? "Не активен" : "Активен"}
                      </span>
                    </td>
                    <td className="p-4">{formatDate(user.creationAt)}</td>
                    <td className="p-4 space-x-3">
                      <button
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => viewUserHandler(user.id)}
                      >
                        Открыть
                      </button>
                      <button
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => editUserHandler(user.id)}
                      >
                        Редактировать
                      </button>
                      <button
                        className="text-red-600 hover:underline cursor-pointer"
                        onClick={() => deleteUserModal(user.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ReactPaginate
          pageCount={pageCount}
          nextLabel={false}
          previousLabel={false}
          onPageChange={handlePageClick}
          containerClassName="mt-6 flex justify-end gap-2 text-sm"
          pageLinkClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
          activeLinkClassName="bg-indigo-600 text-white hover:bg-indigo-600 hover:text-white rounded border border-indigo-600"
        />
      </main>

      {isAddUser && (
        <AddUserModal closeModal={() => setIsAddUser(!isAddUser)} />
      )}

      {isViewUser && userSelectedInfo && (
        <ViewUserModal
          user={userSelectedInfo}
          closeModal={() => {
            setIsViewUser(false);
            setViewUserSelectedId(null);
          }}
        />
      )}

      {isEditUser && userEditSelected && (
        <EditUserModal
          user={userEditSelected}
          closeModal={() => {
            setEdtiUserSelectedId(null);
            setIsEdtiUser(false);
          }}
        />
      )}

      {isDeleteUser && userDeleteSelected && (
        <DeleteUserModal
          user={userDeleteSelected}
          closeModal={() => setIsDeleteUser(false)}
        />
      )}
    </>
  );
};

export default Users;
