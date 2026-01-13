import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-indigo-600 mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Страница не найдена</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          К сожалению, страница, которую вы ищете, не существует или была
          удалена.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            На главную
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">© 2026 Мой магазин</div>
      </div>
    </div>
  );
};

export default ErrorPage;
