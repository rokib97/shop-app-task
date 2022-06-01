import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToShop, categoryFilter, deleteAllShop } from "../actions";
import Shop from "./Shop";

const AddShop = () => {
  const list = useSelector((state) => state.shopReducer.list);
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
  const handleCategory = (event) => {
    const category = event.target.value;
    dispatch(categoryFilter(category));
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
                      message: "Input Only Alphabets Without Space",
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
                className="btn btn-primary w-full max-w-xs text-white"
                type="submit"
                value="add"
              />
            </form>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title font-bold text-2xl">List Of All Shops</h2>
          <h2 className="text-xl font-bold">Filter By</h2>
          <div>
            <select
              onBlur={handleCategory}
              class="select select-primary w-full max-w-xs m-2"
            >
              <option>Grocery</option>
              <option>Butcher</option>
              <option>Baker</option>
              <option>Chemist</option>
              <option>Stationery shop</option>
            </select>
            <select class="select select-primary w-full max-w-xs">
              <option>Thane</option>
              <option>Pune</option>
              <option>Mumbai Suburban</option>
              <option>Nashik</option>
              <option>Nagpur</option>
              <option>Ahmednagar</option>
              <option>Solapur</option>
            </select>
          </div>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Area</th>
                  <th>Category</th>
                  <th>Opening Date</th>
                  <th>Closing Date</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((shop, index) => (
                  <Shop
                    key={shop.id}
                    shop={shop.data}
                    index={index}
                    id={shop.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div class="card-actions justify-end">
            <button
              onClick={() => dispatch(deleteAllShop())}
              disabled={list.length === 0}
              class="btn btn-primary text-white "
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShop;
