import { useEffect } from "react";

const Return = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Возврат и обмен</h1>
          <p className="mt-4 text-indigo-100">
            Простая и понятная процедура возврата товара
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10">Условия возврата</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">Сроки</h3>
            <p className="text-sm text-gray-600">
              Вы можете вернуть товар в течение 14 дней с момента получения.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">Состояние товара</h3>
            <p className="text-sm text-gray-600">
              Товар должен быть без следов использования, с сохранённой
              упаковкой.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">Документы</h3>
            <p className="text-sm text-gray-600">
              Необходимо предоставить чек или номер заказа.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-10">Как оформить возврат</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border rounded-xl p-6">
              <span className="text-indigo-600 font-bold text-lg">1</span>
              <p className="mt-3 text-sm">
                Свяжитесь с поддержкой или оформите заявку в личном кабинете
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <span className="text-indigo-600 font-bold text-lg">2</span>
              <p className="mt-3 text-sm">
                Упакуйте товар и подготовьте документы
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <span className="text-indigo-600 font-bold text-lg">3</span>
              <p className="mt-3 text-sm">
                Передайте товар курьеру или в пункт приёма
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <span className="text-indigo-600 font-bold text-lg">4</span>
              <p className="mt-3 text-sm">
                Ожидайте подтверждения и возврата средств
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">
            Возврат денежных средств
          </h3>
          <p className="text-sm text-gray-700">
            Деньги возвращаются тем же способом оплаты в течение 3–10 рабочих
            дней после проверки товара.
          </p>
        </div>
      </section>
    </>
  );
};

export default Return;
