import React from "react";
import { useForm } from "react-hook-form";
import { EnvelopeIcon,PhoneIcon,MapPinIcon } from '@heroicons/react/24/solid'

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row lg:gap-x-10 w-full">
        <div className="text-center lg:text-left w-full">
          <h1 className="text-4xl font-bold before:min-w-full md:block inline-block before:h-0.5 before:bg-gray-400 relative before:absolute before:bottom-[-5px]">Contact Info</h1>
          <div className="mt-3">
            <div className="flex gap-x-2 items-center my-2">
                <EnvelopeIcon className="h-6 w-6 text-success"></EnvelopeIcon>
                <p className="text-xl">nilimaakterm730@gmail.com</p>
            </div>
            <div className="flex gap-x-2 items-center my-2">
                <PhoneIcon className="h-6 w-6 text-success"></PhoneIcon>
                <a href="tel:+880 1617-921169" className="text-xl">+880 1617-921169</a>
            </div>
            <div className="flex gap-x-2 items-center my-2">
                <MapPinIcon className="h-6 w-6 text-success"></MapPinIcon>
                <p className="text-xl">Uttara, Dhaka</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register('email',{required: "Email is Require",pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Type your valid email'
                }})}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <p className="text-red-500 pt-1">{errors.email.message}</p>}
              {errors.type === "pattern" && <p className="text-red-500 pt-1">{errors.email.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              {...register('name',{required: "Name is Require"})}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500 pt-1">{errors.name.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
              {...register('subject',{required: "Subject is Require"})}
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
              {errors.subject && <p className="text-red-500 pt-1">{errors.subject.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
              {...register('message',{required: "Message is Require"})}
                type="text"
                placeholder="Write message"
                className="input input-bordered min-h-[150px]"
              />
              {errors.message && <p className="text-red-500 pt-1">{errors.message.message}</p>}
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Send Mail</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
