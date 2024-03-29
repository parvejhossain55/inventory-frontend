import axios from "axios";
import React, { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/category`);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  return categories;
};

export default useCategory;
