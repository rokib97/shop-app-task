import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToShop } from "../actions";

const AddShop = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [closingDate, setClosingDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addToShop(data));
  };

  return (
    <>
      <div class="card lg:card-side bg-base-100 shadow-xl mt-12">
        <div className="card w-96 bg-base-100 shadow-xl mr-6">
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
                <label className="label">
                  {errors.area?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.area.message}
                    </span>
                  )}
                </label>
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
                <label className="label">
                  {errors.category?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.category.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Opening Date</span>
                </label>
                <input
                  {...register("date", {
                    required: {
                      value: true,
                      message: "Opening Date is Required",
                    },
                  })}
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  placeholder="Date"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.date?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.date.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Closing Date</span>
                </label>
                <input
                  {...register("close", {
                    required: {
                      value: true,
                      message: "Closing Date is Required",
                    },
                  })}
                  value={closingDate}
                  min={date}
                  onChange={(e) => setClosingDate(e.target.value)}
                  type="date"
                  placeholder="Date"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.close?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.close.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="add"
              />
            </form>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShop;
