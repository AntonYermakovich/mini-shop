const Advantages = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="font-semibold mb-2">Быстрая доставка</h3>
          <p className="text-sm text-gray-600">По всей стране от 1 дня</p>
        </div>
        <div>
          <div className="text-4xl mb-4">💳</div>
          <h3 className="font-semibold mb-2">Удобная оплата</h3>
          <p className="text-sm text-gray-600">Карты, онлайн, при получении</p>
        </div>
        <div>
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="font-semibold mb-2">Гарантия качества</h3>
          <p className="text-sm text-gray-600">Только проверенные товары</p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
