import { useEffect } from "react";

const Policy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Политика конфиденциальности</h1>
          <p className="mt-4 text-indigo-100 max-w-2xl">
            Информация о том, как мы собираем, используем и защищаем
            персональные данные
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
          <p className="text-sm text-gray-700">
            Настоящая Политика конфиденциальности определяет порядок обработки и
            защиты персональных данных пользователей интернет‑магазина ShopLogo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            2. Какие данные мы собираем
          </h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>Имя, фамилия</li>
            <li>Контактный телефон</li>
            <li>Email‑адрес</li>
            <li>Адрес доставки</li>
            <li>Данные, необходимые для обработки заказа</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">3. Цели обработки данных</h2>
          <p className="text-sm text-gray-700 mb-2">
            Персональные данные используются для:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>оформления и доставки заказов</li>
            <li>обратной связи с клиентом</li>
            <li>улучшения качества сервиса</li>
            <li>выполнения требований законодательства</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            4. Защита персональных данных
          </h2>
          <p className="text-sm text-gray-700">
            Мы принимаем необходимые организационные и технические меры для
            защиты персональных данных от неправомерного доступа, утраты или
            раскрытия.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            5. Передача данных третьим лицам
          </h2>
          <p className="text-sm text-gray-700">
            Передача персональных данных возможна только в случаях,
            предусмотренных законодательством РФ, либо для выполнения заказа
            (службы доставки, платёжные системы).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">6. Права пользователя</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>получать информацию о своих данных</li>
            <li>требовать уточнения или удаления данных</li>
            <li>отозвать согласие на обработку данных</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">7. Контакты</h2>
          <p className="text-sm text-gray-700">
            По всем вопросам, связанным с обработкой персональных данных, вы
            можете связаться с нами по email:{" "}
            <span className="font-medium">support@shop.ru</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Policy;
