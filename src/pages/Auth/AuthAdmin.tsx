const AuthAdmin = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 text-gray-100 rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-indigo-400 mb-2">
            ShopAdmin
          </div>
          <p className="text-gray-400 text-sm">Вход в панель управления</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email администратора
            </label>
            <input
              type="email"
              placeholder="admin@shop.ru"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded bg-gray-700" />{" "}
              Запомнить
            </label>
            {/* <a href="#" className="text-indigo-400 hover:underline">
              Забыли пароль?
            </a> */}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition cursor-pointer"
          >
            Войти
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-400 text-center">
          🔒 Доступ только для администраторов
        </div>
      </div>
    </div>
  );
};

export default AuthAdmin;
