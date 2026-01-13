import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">Покупай удобно и выгодно</h1>
          <p className="text-lg mb-8 text-indigo-100">
            Тысячи товаров с быстрой доставкой по всей стране
          </p>
          <div className="flex gap-4">
            <Link
              to="/catalog"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Перейти в каталог
            </Link>
            <a
              href="#"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600"
            >
              Акции
            </a>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
          className="rounded-xl shadow-xl"
          alt="Онлайн-шопинг"
        />
      </div>
    </section>
  );
};

export default Hero;
