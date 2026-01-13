import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { formatPrice } from "../../utils";
import { clearCart } from "../../store/cart/cart.slice";

const ConfrimedOrder = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.items);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const confirmedHandler = () => {
    navigate("/catalog");
    dispatch(clearCart());
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4">Спасибо за заказ!</h1>
        <p className="text-gray-600 mb-8">
          Ваш заказ <span className="font-semibold">№123456</span> успешно
          оформлен. Мы отправили подтверждение на вашу электронную почту.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
          <h2 className="font-semibold mb-4">Детали заказа</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Статус</span>
              <span className="text-green-600">Принят</span>
            </li>
            <li className="flex justify-between">
              <span>Способ оплаты</span>
              <span>Банковская карта</span>
            </li>
            <li className="flex justify-between">
              <span>Доставка</span>
              <span>Курьером</span>
            </li>
            <li className="flex justify-between font-semibold pt-2 border-t">
              <span>Итого</span>
              <span>{formatPrice(totalPrice)}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 cursor-pointer"
            onClick={confirmedHandler}
          >
            Перейти в каталог
          </button>
          {/* <a href="#" className="border px-8 py-3 rounded-xl hover:bg-gray-100">
            Мои заказы
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ConfrimedOrder;
