import { useGetAllProductsQuery } from "../../store/products/products";
import { useGetAllUsersQuery } from "../../store/users/users.api";
import { formatPrice } from "../../utils";

const DashBoard = () => {
  const {data: users} = useGetAllUsersQuery()
  const {data: products} = useGetAllProductsQuery(undefined)

  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Дашборд</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm">Администратор</span>
          <img src="https://i.pravatar.cc/32?img=3" className="rounded-full" />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500">Заказы</p>
          <p className="text-2xl font-bold">124</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500">Выручка</p>
          <p className="text-2xl font-bold">{formatPrice(3240)}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500">Пользователи</p>
          <p className="text-2xl font-bold">{users?.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500">Товары</p>
          <p className="text-2xl font-bold">{products?.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Последние заказы</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">№</th>
                <th className="text-left p-4">Клиент</th>
                <th className="text-left p-4">Дата</th>
                <th className="text-left p-4">Сумма</th>
                <th className="text-left p-4">Статус</th>
                <th className="text-left p-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">12345</td>
                <td className="p-4">Иван Петров</td>
                <td className="p-4">12.01.2026</td>
                <td className="p-4">39 980 ₽</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                    В обработке
                  </span>
                </td>
                <td className="p-4">
                  <a href="#" className="text-indigo-600 hover:underline">
                    Открыть
                  </a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4">12344</td>
                <td className="p-4">Анна Смирнова</td>
                <td className="p-4">11.01.2026</td>
                <td className="p-4">19 990 ₽</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                    Завершён
                  </span>
                </td>
                <td className="p-4">
                  <a href="#" className="text-indigo-600 hover:underline">
                    Открыть
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
