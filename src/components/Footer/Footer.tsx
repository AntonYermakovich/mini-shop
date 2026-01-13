import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="text-white font-bold text-lg mb-3">Market</div>
          <p>Маркетплейс с миллионами товаров и быстрой доставкой</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Покупателям</div>
          <ul className="space-y-2">
            <li>
              <Link to="/delivery" className="hover:text-white">
                Доставка
              </Link>
            </li>
            <li>
              <Link to="/payment" className="hover:text-white">
                Оплата
              </Link>
            </li>
            <li>
              <Link to="/return" className="hover:text-white">
                Возврат
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Компания</div>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-white">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Документы</div>
          <ul className="space-y-2">
            <li>
              <Link to="/policy" className="hover:text-white">
                Политика
              </Link>
            </li>
            <li>
              <Link to="/agreement" className="hover:text-white">
                Соглашение
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
