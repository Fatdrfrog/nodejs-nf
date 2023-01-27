import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export const CityComponent = () => {
  const { type, city } = useParams();

  const [data, setData] = useState([]);

  const getAxios = async () => {
    axios
      .get(`http://localhost:8000/${type}/${city}`)
      .then((res) => res.data)
      .then((res) => setData(res));
  };

  useEffect(() => {
    getAxios();
  }, [type, city]);

  console.log("city data");
  console.log(data);

  return <div>City {city}</div>;
};
