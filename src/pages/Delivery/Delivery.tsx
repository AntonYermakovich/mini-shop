import { useEffect } from "react";

const Delivery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Доставка и оплата</h1>
          <p className="mt-4 text-indigo-100">
            Удобные и быстрые способы получения заказов
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10">Способы доставки</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">Курьером</h3>
            <p className="text-sm text-gray-600 mb-4">
              Доставка до двери по вашему адресу
            </p>
            <ul className="text-sm space-y-2">
              <li>Срок: 1–2 дня</li>
              <li>Стоимость: от 390 ₽</li>
              <li>Оплата при получении</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">Пункт выдачи</h3>
            <p className="text-sm text-gray-600 mb-4">
              Получение заказа в удобном пункте
            </p>
            <ul className="text-sm space-y-2">
              <li>Срок: 2–4 дня</li>
              <li>Стоимость: от 199 ₽</li>
              <li>Более 3000 пунктов</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">Почта России</h3>
            <p className="text-sm text-gray-600 mb-4">Доставка по всей России</p>
            <ul className="text-sm space-y-2">
              <li>Срок: 5–10 дней</li>
              <li>Стоимость: от 250 ₽</li>
              <li>Отслеживание посылки</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-10">Способы оплаты</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border rounded-xl p-6 text-center">
              Банковская карта
            </div>
            <div className="border rounded-xl p-6 text-center">Онлайн‑банкинг</div>
            <div className="border rounded-xl p-6 text-center">Наличными</div>
            <div className="border rounded-xl p-6 text-center">При получении</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Важно знать</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>• Бесплатная доставка при заказе от 5 000 ₽</li>
            <li>• Заказы обрабатываются ежедневно с 9:00 до 21:00</li>
            <li>• Возможна примерка перед покупкой</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Delivery;
