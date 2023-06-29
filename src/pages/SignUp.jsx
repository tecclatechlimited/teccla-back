import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../config/firebase";
import { updateProfile } from "firebase/auth";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

const schema = yup.object().shape({
  firstName: yup.string().required("Your Firstname is required"),
  lastName: yup.string().required("Your Lastname is required"),
  email: yup.string().email().required("Please enter a valid Email address"),
  password: yup.string().min(5).max(20).required("Enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Please Confirm your password"),
});

const SignUp = () => {
  const { currentUser, signup } = userAuth();
  const [ err, setErr ] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password, firstName, lastName } = data;

    try {
      //  const user = currentUser
      await signup(email, password, firstName, lastName);

      // const user = userCredential.user;
      // setCurrentUser(user)
      // ...
    } catch (error) {
      const errorMessage = error.message;
      console.log("errorMessage:", errorMessage);
      console.log(error);
      setErr(true)
      // ..
    }

    console.log(data);
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/portal");
    }
    console.log(currentUser);
  }, [currentUser]);

  // console.log(data);
  // reset();

  return (
    <div className="flex justify-center text-left">
      <div className="w-full max-w-lg rounded-md border-4 border-orange-700">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md  border-orange-700 rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl text-center font-bold mb-4">Sign Up</h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Firstname
            </label>
            <input
              {...register("firstName")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="fullname"
              type="text"
              placeholder="Firstname"
            />
            <p className="text-red-500 text-sm italic">
              {errors.fullName?.message}
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Lastname
            </label>
            <input
              {...register("lastName")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="username"
              type="text"
              placeholder="Lastname"
            />
            <p className="text-red-500 text-sm italic">
              {errors.lastName?.message}
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

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight "
              id="confirmpassword"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-sm italic">
              {errors.confirmPassword?.message}
            </p>
          </div>
          {err && <span>Something went wrong</span>}


          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <h3>
            Have and account already?
            <Link
              to="/login"
              className="text-xs hover:text-blue-500  hover:underline"
            >
              Log in
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
