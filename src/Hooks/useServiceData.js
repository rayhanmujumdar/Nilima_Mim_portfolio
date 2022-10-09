import  { useEffect, useState } from "react";
import axios from "axios";
const useServiceData = () => {
  const [serviceData, setService] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("https://raw.githubusercontent.com/rayhanmujumdar/Nilima_Mim_portfolio/main/public/data.json");
      setService(data);
    })();
  }, []);
  return [serviceData,setService];
};

export default useServiceData;
