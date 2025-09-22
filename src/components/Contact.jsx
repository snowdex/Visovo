import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Have a question or an idea you'd like to explore? The Visevo team is
            ready to assist.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
        >
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-4 rounded-xl bg-transparent border border-white/10"
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full p-4 rounded-xl bg-transparent border border-white/10"
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full p-4 rounded-xl bg-transparent border border-white/10"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="w-full p-4 rounded-xl bg-transparent border border-white/10"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <textarea
              rows="6"
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-4 rounded-xl bg-transparent border border-white/10"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="sm:col-span-2 bg-white text-zinc-900 font-semibold py-4 px-8 rounded-full shadow-lg hover:scale-105 hover:bg-zinc-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
