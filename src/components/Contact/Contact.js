import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Title from "../../utils/Title";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Email Send");
          reset();
        },
        (error) => {
          toast.error(error.message);
        }
      )
      .catch((err) => {
        toast.err(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Title title="Contact" />
      <div className="hero-content flex-col lg:flex-row lg:gap-x-10 w-full">
        <div className="text-center lg:text-left w-full">
          <h1
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-4xl font-bold before:min-w-full md:block inline-block before:h-0.5 before:bg-gray-400 relative before:absolute before:bottom-[-5px]"
          >
            Contact Info
          </h1>
          <div className="mt-3">
            <div
              data-aos="fade-right"
              data-aos-delay="60"
              data-aos-duration="1200"
              className="flex gap-x-2 items-center my-2"
            >
              <EnvelopeIcon className="h-6 w-6 text-success"></EnvelopeIcon>
              <a
                href="mailto:nilimaakterm730@gmail.com"
                target="__blank"
                className="text-xl"
              >
                nilimaakterm730@gmail.com
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="1400"
              className="flex gap-x-2 items-center my-2"
            >
              <PhoneIcon className="h-6 w-6 text-success"></PhoneIcon>
              <a href="tel:+880 1617-921169" className="text-xl">
                +880 1617-921169
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="1600"
              className="flex gap-x-2 items-center my-2"
            >
              <MapPinIcon className="h-6 w-6 text-success"></MapPinIcon>
              <p className="text-xl">Uttara, Dhaka</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100"
        >
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
          >
            <div data-aos="fade-left"
          data-aos-delay="60"
          data-aos-duration="1200" className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is Require",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Type your valid email",
                  },
                })}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500 pt-1">{errors.email.message}</p>
              )}
              {errors.type === "pattern" && (
                <p className="text-red-500 pt-1">{errors.email.message}</p>
              )}
            </div>
            <div data-aos="fade-left"
          data-aos-delay="65"
          data-aos-duration="1300" className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is Require" })}
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-500 pt-1">{errors.name.message}</p>
              )}
            </div>
            <div data-aos="fade-left"
          data-aos-delay="70"
          data-aos-duration="1400" className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                {...register("subject", { required: "Subject is Require" })}
                name="subject"
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
              {errors.subject && (
                <p className="text-red-500 pt-1">{errors.subject.message}</p>
              )}
            </div>
            <div data-aos="fade-left"
          data-aos-delay="75"
          data-aos-duration="1500" className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                {...register("message", { required: "Message is Require" })}
                name="message"
                type="text"
                placeholder="Write message"
                className="input input-bordered min-h-[150px]"
              />
              {errors.message && (
                <p className="text-red-500 pt-1">{errors.message.message}</p>
              )}
            </div>
            <div data-aos="fade-left"
          data-aos-delay="80"
          data-aos-duration="1600" className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Send Mail
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
