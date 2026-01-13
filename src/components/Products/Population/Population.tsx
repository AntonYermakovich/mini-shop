const Population = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Рекомендуем</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
          <img src="https://placehold.co/300x300" className="rounded-xl mb-3" />
          <div className="text-sm text-gray-500">Электроника</div>
          <h3 className="font-medium leading-snug">Смартфон X Pro 128GB</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-lg">39 990 ₽</span>
            <span className="text-sm line-through text-gray-400">44 990 ₽</span>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700">
            В корзину
          </button>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
          <img src="https://placehold.co/300x300" className="rounded-xl mb-3" />
          <div className="text-sm text-gray-500">Дом</div>
          <h3 className="font-medium leading-snug">Робот-пылесос SmartClean</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-lg">21 490 ₽</span>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700">
            В корзину
          </button>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
          <img src="https://placehold.co/300x300" className="rounded-xl mb-3" />
          <div className="text-sm text-gray-500">Одежда</div>
          <h3 className="font-medium leading-snug">Куртка зимняя мужская</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-lg">7 990 ₽</span>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700">
            В корзину
          </button>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
          <img src="https://placehold.co/300x300" className="rounded-xl mb-3" />
          <div className="text-sm text-gray-500">Красота</div>
          <h3 className="font-medium leading-snug">Фен профессиональный</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-lg">5 490 ₽</span>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700">
            В корзину
          </button>
        </div>
      </div>
    </section>
  );
};

export default Population;
