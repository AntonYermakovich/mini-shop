import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center text-center">
      <div className="text-7xl mb-6">🛒</div>
      <h1 className="text-3xl font-bold mb-4">Ваша корзина пуста</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Похоже, вы ещё не добавили ни одного товара в корзину. Самое время это
        исправить 🙂
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/catalog"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Перейти в каталог
        </Link>
        <Link to="/" className="border px-8 py-3 rounded-lg hover:bg-gray-100">
          На главную
        </Link>
      </div>

      <div className="mt-16 w-full">
        <h2 className="text-2xl font-bold mb-8">Популярные товары</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="https://via.placeholder.com/300"
              className="rounded mb-4"
            />
            <h3 className="font-semibold">Смартфон X</h3>
            <p className="text-indigo-600 font-bold my-2">29 990 ₽</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              В корзину
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="https://via.placeholder.com/300"
              className="rounded mb-4"
            />
            <h3 className="font-semibold">Наушники Pro</h3>
            <p className="text-indigo-600 font-bold my-2">9 990 ₽</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              В корзину
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="https://via.placeholder.com/300"
              className="rounded mb-4"
            />
            <h3 className="font-semibold">Смарт-часы</h3>
            <p className="text-indigo-600 font-bold my-2">14 490 ₽</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              В корзину
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="https://via.placeholder.com/300"
              className="rounded mb-4"
            />
            <h3 className="font-semibold">Игровая мышь</h3>
            <p className="text-indigo-600 font-bold my-2">3 490 ₽</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartEmpty;
