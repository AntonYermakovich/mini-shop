import { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Способы оплаты</h1>
          <p className="mt-4 text-indigo-100">Безопасно, быстро и удобно</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Банковская карта</h3>
            <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Онлайн‑банкинг</h3>
            <p className="text-sm text-gray-600">
              Сбербанк, Тинькофф, Альфа‑Банк
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Электронные кошельки</h3>
            <p className="text-sm text-gray-600">ЮMoney, QIWI</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Оплата при получении</h3>
            <p className="text-sm text-gray-600">Наличные или карта курьеру</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Безопасность платежей</h2>
            <p className="text-gray-600 mb-4">
              Все платежи защищены с помощью SSL‑шифрования и соответствуют
              стандартам PCI DSS.
            </p>
            <ul className="space-y-3 text-sm">
              <li>• Защищённое соединение</li>
              <li>• Мы не храним данные карт</li>
              <li>• Подтверждение платежа</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Возврат средств</h3>
            <p className="text-sm text-gray-700">
              Возврат денежных средств осуществляется тем же способом, которым
              была произведена оплата, в течение 3–10 рабочих дней.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10">Часто задаваемые вопросы</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">
              Можно ли оплатить заказ при получении?
            </h4>
            <p className="text-sm text-gray-600">
              Да, вы можете выбрать оплату при получении курьеру или в пункте
              выдачи.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">
              Безопасно ли оплачивать картой?
            </h4>
            <p className="text-sm text-gray-600">
              Да, мы используем современные протоколы защиты и не храним данные
              карт.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
