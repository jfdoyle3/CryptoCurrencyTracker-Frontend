import React, {useState, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../Providers/AuthProvider';
import {useNavigate} from 'react-router-dom';
import FavoritesForm from './FavoritesForm';
import { apiHostUrl } from '../../config';

const AddFavorite = () => {

 
  const [query, setQuery] = useState({
    symbol: '',
  });

  const [auth] = useContext(AuthContext);
  const navigate=useNavigate();
  const [submitting, setSubmitting] = useState(false);


  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (token) => {
    const data = query;
    try {
      const res = await axios.post(`${apiHostUrl}/api/trackers/addFavorite/`, data, {
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
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Add Favorite</h1>
      <FavoritesForm
        query={query} 
        updateForm={updateForm} 
        onSubmit={onSubmit}
        submitting={submitting}
      />
    </div>
  )
}

export default AddFavorite;