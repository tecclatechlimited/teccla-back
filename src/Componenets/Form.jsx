import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Your Name is required"),
    email: yup.string().email().required("Please enter a valid Email address"),
    phonenumber: yup
      .string()
      // .number()
      // .positive()
      .matches(/^\d{11}$/, "Phone number must be 11 numbers")
      .nullable(),
    message: yup.string().required("Please enter your message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className=" bg-white p-8 shadow-md text-left rounded-md border-2 border-orange-700">
        <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4" id="contactId">
            <label
              htmlFor="firstName"
              className="block text-left font-medium mb-1"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Firstname"
            />
            <p className="text-red-500 text-sm italic">
              {errors.name?.message}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left font-medium mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <p className="text-red-500 text-sm italic">
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-left font-medium mb-1"
            >
              Phone Number <span className="font-thin">(optional)</span>
            </label>
            <input
              {...register("phonenumber")}
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <p className="text-red-500 text-sm italic">
              {errors.phonenumber?.message}
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-left font-medium mb-1"
            >
              Message
            </label>
            <input
              {...register("message")}
              type="text"
              id="description"
              placeholder="Message"
              className="w-full px-3 py-6 border border-gray-300 rounded"
            />
            <p className="text-red-500 text-sm italic">
              {errors.message?.message}
            </p>
          </div>
          <button
            type="submit"
            className="bg-orange-700 text-white px-6 py-2 rounded font-medium"
          >
            Enquire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
