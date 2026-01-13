import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">О компании</h1>
          <p className="mt-4 text-indigo-100 max-w-2xl">
            Мы создаём удобный и честный интернет‑магазин с качественными
            товарами и отличным сервисом.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Кто мы</h2>
          <p className="text-gray-600 mb-4">
            ShopLogo — это современный интернет‑магазин, работающий по всей
            России. Мы отбираем товары у проверенных поставщиков и гарантируем
            качество каждой покупки.
          </p>
          <p className="text-gray-600">
            Наша цель — сделать онлайн‑покупки простыми, быстрыми и безопасными
            для каждого клиента.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <ul className="space-y-4 text-sm">
            <li>✔ Более 5 лет на рынке</li>
            <li>✔ Тысячи довольных клиентов</li>
            <li>✔ Быстрая доставка по всей стране</li>
            <li>✔ Поддержка 7 дней в неделю</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-xl mb-3">Качество</h3>
              <p className="text-sm text-gray-600">
                Мы продаём только проверенные товары от надёжных брендов.
              </p>
            </div>
            <div className="border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-xl mb-3">Честность</h3>
              <p className="text-sm text-gray-600">
                Прозрачные цены, понятные условия доставки и возврата.
              </p>
            </div>
            <div className="border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-xl mb-3">Клиент</h3>
              <p className="text-sm text-gray-600">
                Мы всегда ставим интересы клиента на первое место.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-indigo-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-indigo-600">5+</div>
            <p className="text-sm mt-2">лет работы</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-indigo-600">50 000+</div>
            <p className="text-sm mt-2">заказов</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-indigo-600">15 000+</div>
            <p className="text-sm mt-2">клиентов</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-indigo-600">24/7</div>
            <p className="text-sm mt-2">поддержка</p>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-indigo-100 mb-8">
            Наша команда поддержки всегда готова помочь
          </p>
          <a
            href="#"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Связаться с нами
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
