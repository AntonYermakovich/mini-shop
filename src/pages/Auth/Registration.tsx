import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isAgree: boolean;
}

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();

  const registrationHandler: SubmitHandler<IFormRegister> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            Mini shop
          </div>
          <p className="text-gray-500 text-sm">Создание нового аккаунта</p>
        </div>

        {/* <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Фото профиля</label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-indigo-500 transition text-center">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm text-gray-600">
              Перетащите фото сюда или{" "}
              <span className="text-indigo-600 font-medium">выберите файл</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG до 5MB</p>
            <input type="file" accept="image/*" className="hidden" />
          </label>
        </div> */}

        <form
          className="space-y-5"
          onSubmit={handleSubmit(registrationHandler)}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Имя</label>
            <input
              type="text"
              placeholder="Ваш имя"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("firstname", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                minLength: {
                  value: 2,
                  message: "Минимальное колличество символов 2",
                },
              })}
            />
            <span className="text-xs font-medium text-red-800">
              {errors.firstname?.message}
            </span>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Фамилия</label>
            <input
              type="text"
              placeholder="Ваша фамилия"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                minLength: {
                  value: 2,
                  message: "Минимальное колличество символов 2",
                },
              })}
            />
            <span className="text-xs font-medium text-red-800">
              {errors.lastname?.message}
            </span>
          </div>

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
                  value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
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
              placeholder="Минимум 5 символов"
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

          <div className="flex flex-wrap items-start gap-2 text-sm">
            <input
              type="checkbox"
              id="isAgree"
              className="mt-1"
              {...register("isAgree", {
                required: {
                  value: true,
                  message: "Вы не подтвердили",
                },
              })}
            />
            <label htmlFor="isAgree">
              Я принимаю условия{" "}
              <Link to="/agreement" className="text-indigo-600 hover:underline">
                пользовательского соглашения
              </Link>
            </label>
            <span className="text-xs font-medium text-red-800 block">
              {errors.isAgree?.message}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 cursor-pointer transition"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-3">
          Уже есть аккаунт?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
