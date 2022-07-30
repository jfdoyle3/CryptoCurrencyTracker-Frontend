import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import EditProfileForm from "./UpdateForm";
import { apiHostUrl } from "../../config";

const UpdatedProfile = () => {
  let navigate = useNavigate();

  const [query, setQuery] = useState({
    name: "",
  });

  const [auth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (token) => {
    const data = query;
    try {
      const res = await axios.put(`${apiHostUrl}/api/trackers/`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      navigate("/trackers");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <EditProfileForm
      query={query}
      updateForm={updateForm}
      onSubmit={onSubmit}
    />
  );
};
export default UpdatedProfile;