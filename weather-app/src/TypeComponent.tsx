import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import axios from "axios";

export const TypeComponent = () => {
  const { type, city = "almaty" } = useParams();
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

  console.log("type data");
  console.log(data);
  return (
    <div>
      Type component
      {city && <Outlet />}
    </div>
  );
};
