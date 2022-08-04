import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import FavoritesForm from "./FavoritesForm";
import { apiHostUrl } from "../../../config";

const AddFavorite = (props) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    symbol: '',
  });

  const [auth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (token) => {
    const symbol = query.symbol;
    console.log(symbol);
    try {
      const res = await axios.post(`${apiHostUrl}/api/trackers/addFavorite/${symbol}`,  {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log('posted');
      navigate("/trackers");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <FavoritesForm
      query={query}
      updateForm={updateForm}
      onSubmit={onSubmit}
    />
  );
};
export default AddFavorite;