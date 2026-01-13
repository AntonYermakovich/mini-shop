import { useEffect } from "react";

const Agreement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Пользовательское соглашение</h1>
          <p className="mt-4 text-indigo-100 max-w-2xl">
            Настоящее соглашение регулирует отношения между пользователем и
            интернет‑магазином
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
          <p className="text-sm text-gray-700">
            Используя сайт интернет‑магазина ShopLogo, пользователь подтверждает
            согласие с условиями настоящего Пользовательского соглашения.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">2. Предмет соглашения</h2>
          <p className="text-sm text-gray-700">
            Продавец предоставляет пользователю доступ к сервисам сайта и
            возможности приобретения товаров дистанционным способом.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            3. Права и обязанности сторон
          </h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>
              Пользователь обязуется предоставлять достоверную информацию при
              оформлении заказа
            </li>
            <li>Продавец обязуется обеспечить корректную работу сайта</li>
            <li>Стороны обязуются соблюдать действующее законодательство РФ</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">4. Оформление заказа</h2>
          <p className="text-sm text-gray-700">
            Заказ считается оформленным после подтверждения пользователем всех
            данных и выбора способа оплаты и доставки.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">5. Оплата и доставка</h2>
          <p className="text-sm text-gray-700">
            Условия оплаты и доставки указаны на соответствующих страницах сайта
            и являются неотъемлемой частью настоящего соглашения.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">6. Ответственность сторон</h2>
          <p className="text-sm text-gray-700">
            Стороны несут ответственность за неисполнение или ненадлежащее
            исполнение обязательств в соответствии с законодательством РФ.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            7. Заключительные положения
          </h2>
          <p className="text-sm text-gray-700">
            Продавец вправе вносить изменения в настоящее соглашение без
            предварительного уведомления пользователя.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">8. Контактная информация</h2>
          <p className="text-sm text-gray-700">
            По всем вопросам вы можете обратиться в службу поддержки:{" "}
            <span className="font-medium">support@shop.ru</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Agreement;
