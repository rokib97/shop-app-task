import React from "react";
import { useDispatch } from "react-redux";
import { deleteShop } from "../actions";
import UpdateModal from "./UpdateModal";

const Shop = ({ shop, index, id }) => {
  const dispatch = useDispatch();
  const { name, category, close, date, area } = shop || {};
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{area}</td>
        <td>{category}</td>
        <td>{date}</td>
        <td>{close}</td>
        <td>
          <button
            onClick={() => dispatch(deleteShop(id))}
            class="btn btn-xs btn-warning text-white text-bold"
          >
            Delete
          </button>
        </td>
        <td>
          <label
            htmlFor="update-modal"
            className="btn btn-xs btn-success text-white text-bold"
          >
            Update
          </label>
        </td>
      </tr>
      <UpdateModal />
    </>
  );
};

export default Shop;
