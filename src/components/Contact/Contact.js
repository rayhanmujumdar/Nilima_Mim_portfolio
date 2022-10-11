import React from "react";
import { useForm } from "react-hook-form";

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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                <span className="label-text">Description</span>
              </label>
              <textarea
              {...register('description',{required: "Description is Require"})}
                type="text"
                placeholder="Description"
                className="input input-bordered min-h-[150px]"
              />
              {errors.description && <p className="text-red-500 pt-1">{errors.description.message}</p>}
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
