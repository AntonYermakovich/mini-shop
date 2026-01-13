import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Контакты</h1>
          <p className="mt-4 text-indigo-100 max-w-2xl">
            Свяжитесь с нами любым удобным способом — мы всегда рады помочь
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Наши контакты</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p className="font-semibold">Телефон</p>
              <p className="text-gray-600">+7 (900) 000‑00‑00</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">support@shop.ru</p>
            </div>
            <div>
              <p className="font-semibold">Адрес</p>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 10</p>
            </div>
            <div>
              <p className="font-semibold">Время работы</p>
              <p className="text-gray-600">Пн–Вс: 9:00 – 21:00</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-xl font-semibold mb-6">Написать нам</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <textarea
              rows={4}
              placeholder="Сообщение"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center text-gray-500">
          Карта (Google / Яндекс)
        </div>
      </section>
    </>
  );
};

export default Contacts;
