import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import FavoritesForm from "./FavoritesForm";
import { apiHostUrl } from "../../../config";

const AddFavorite = (props) => {
  const navigate = useNavigate();
  const [auth] = useContext(AuthContext);

  const addFavorite= async()=>{
    const res = await axios.post(
      `${apiHostUrl}/api/trackers/addFavorite/BTC`,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      }
    )
    navigate(`/trackers`)
  }

  return (
      <div>
        <button type="button" onClick={addFavorite}>Add BTC</button>
        </div>
  );
};
export default AddFavorite;