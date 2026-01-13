import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormLogin {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const loginHandler: SubmitHandler<IFormLogin> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              Mini shop
            </div>
            <p className="text-gray-500 text-sm">Войдите в свой аккаунт</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(loginHandler)}>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                placeholder="you@email.com"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Поле обязательно для заполнения",
                  },
                  pattern: {
                    value:
                      /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                    message: "Это не email",
                  },
                })}
              />
              <span className="text-xs font-medium text-red-800">
                {errors.email?.message}
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Пароль</label>
              <input
                type="password"
                placeholder="Введите пароль"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Поле обязательно для заполнения",
                  },
                  minLength: {
                    value: 5,
                    message: "Минимальное колличество символов 5",
                  },
                })}
              />
              <span className="text-xs font-medium text-red-800">
                {errors.password?.message}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Запомнить меня
              </label>
              <Link to="/forget" className="text-indigo-600 hover:underline">
                Забыли пароль?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition cursor-pointer"
            >
              Войти
            </button>
          </form>

          {/* <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3 text-xs text-gray-400">или</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button className="w-full border py-3 rounded-xl font-medium hover:bg-gray-50 transition mb-4 cursor-pointer">
            Войти через Google
          </button> */}

          <p className="text-center text-sm text-gray-600 mt-2">
            Нет аккаунта?{" "}
            <Link
              to="/registration"
              className="text-indigo-600 font-medium hover:underline"
            >
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
