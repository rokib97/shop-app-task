import React from "react";
import { useForm } from "react-hook-form";
const AddShop = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add Shop</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Shop Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only Alphabets",
                  },
                })}
                type="text"
                placeholder="Shop Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Area</span>
              </label>
              <select
                {...register("area", {
                  required: {
                    value: true,
                    message: "Area is Required",
                  },
                })}
                type="text"
                placeholder="Area"
                className="input input-bordered w-full max-w-xs"
              >
                <option>Thane</option>
                <option>Pune</option>
                <option>Mumbai Suburban</option>
                <option>Nashik</option>
                <option>Nagpur</option>
                <option>Ahmednagar</option>
                <option>Solapur</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Shops Category</span>
              </label>
              <select
                {...register("category", {
                  required: {
                    value: true,
                    message: "Category is Required",
                  },
                })}
                type="text"
                placeholder="Category"
                className="input input-bordered w-full max-w-xs"
              >
                <option>Grocery</option>
                <option>Butcher</option>
                <option>Baker</option>
                <option>Chemist</option>
                <option>Nagpur</option>
                <option>Stationery shop</option>
              </select>
            </div>

            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddShop;
