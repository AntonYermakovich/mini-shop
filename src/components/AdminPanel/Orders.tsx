import { useState } from "react";
import ViewOrderModal from "../Modals/ViewOrderModal";

const Orders = () => {
  const [isViewOrder, setIsViewOrder] = useState<boolean>(false);

  return (
    <>
      <main className="flex-1 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-2xl font-bold">Заказы</h1>
          <div className="flex gap-3">
            <select className="border rounded px-3 py-2">
              <option>Все статусы</option>
              <option>Новый</option>
              <option>В обработке</option>
              <option>Отправлен</option>
              <option>Завершён</option>
              <option>Отменён</option>
            </select>
            <input type="date" className="border rounded px-3 py-2" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left">№</th>
                <th className="p-4 text-left">Клиент</th>
                <th className="p-4 text-left">Дата</th>
                <th className="p-4 text-left">Сумма</th>
                <th className="p-4 text-left">Статус</th>
                <th className="p-4 text-left">Оплата</th>
                <th className="p-4 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-medium">#1024</td>
                <td className="p-4">Иван Иванов</td>
                <td className="p-4">12.01.2026</td>
                <td className="p-4">29 990 ₽</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                    Новый
                  </span>
                </td>
                <td className="p-4">Карта</td>
                <td className="p-4 space-x-3">
                  <button
                    className="text-indigo-600 hover:underline"
                    onClick={() => setIsViewOrder(!isViewOrder)}
                  >
                    Открыть
                  </button>
                  <button className="text-red-600 hover:underline">
                    Удалить
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">#1023</td>
                <td className="p-4">Анна Петрова</td>
                <td className="p-4">11.01.2026</td>
                <td className="p-4">15 490 ₽</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    В обработке
                  </span>
                </td>
                <td className="p-4">Онлайн</td>
                <td className="p-4 space-x-3">
                  <button
                    className="text-indigo-600 hover:underline"
                    onClick={() => setIsViewOrder(!isViewOrder)}
                  >
                    Открыть
                  </button>
                  <button className="text-red-600 hover:underline">
                    Удалить
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">#1022</td>
                <td className="p-4">Олег Смирнов</td>
                <td className="p-4">10.01.2026</td>
                <td className="p-4">7 990 ₽</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                    Завершён
                  </span>
                </td>
                <td className="p-4">Наличные</td>
                <td className="p-4 space-x-3">
                  <button
                    className="text-indigo-600 hover:underline"
                    onClick={() => setIsViewOrder(!isViewOrder)}
                  >
                    Открыть
                  </button>
                  <button className="text-red-600 hover:underline">
                    Удалить
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {isViewOrder && (
        <ViewOrderModal closeModal={() => setIsViewOrder(!isViewOrder)} />
      )}
    </>
  );
};

export default Orders;
