import React from "react";

const ForgotPassword = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Please enter a valid Email address"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex justify-center text-left">
      <div className="w-full max-w-xs r">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Enter your Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="john.doe@company.com"
              required
            />
            <p className="text-red-500 text-sm italic">
              {errors.userName?.message}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
