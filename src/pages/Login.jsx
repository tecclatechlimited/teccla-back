import {React ,useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link , useNavigate} from "react-router-dom";
import { userAuth } from "../Context/AuthContext";

const schema = yup.object().shape({
  userName: yup.string().required("Your Username is required"),
  email: yup.string().email().required("Please enter a valid Email address"),
  password: yup.string().min(5).max(20).required("Enter your password"),
});

const Login = () => {
  const { currentUser, login } = userAuth();
  console.log("MY Auth user", currentUser);
  const [ err, setErr ] = useState(false);


  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data; 

    try {
      await login( email, password);
      // Signed in
      // const user = userCredential.user;
      // console.log("user:", user);
      // ...
    } catch (err) {

      setErr(true);

    }

    console.log(data);
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/portal");
    }
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div className="flex justify-center text-left">
      <div className="w-full max-w-lg rounded-md border-4 border-orange-700">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md  border-orange-700 rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl text-center font-bold mb-4">Log in</h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("userName")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="username"
              type="text"
              placeholder="Username"
            />
            <p className="text-red-500 text-sm italic">
              {errors.userName?.message}
            </p>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="john.doe@company.com"
            />

            <p className="text-red-500 text-sm italic">
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password")}
              // className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"

              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-sm italic">
              {errors.password?.message}
            </p>
          </div>

          {/* <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label for="rememberMe" className="text-sm">
              Remember me
            </label>
          </div> */}
                    {err && <span className="text-red-600 text-sm">Wrong email or password</span>}


          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
          <h3>
            Don't have an account?
            <Link
              to="/signup"
              className="text-xs hover:text-blue-500  hover:underline"
            >
              Sign up
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
