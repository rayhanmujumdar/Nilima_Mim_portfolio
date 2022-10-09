import useServiceData from "../../Hooks/useServiceData";

import ServiceCard from "./ServiceCard";
const Service = () => {
  const [serviceData] = useServiceData()

  return (
    <div className="flex flex-col justify-start items-center gap-y-10 my-10 min-h-screen">
        {
            serviceData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
        }
      
    </div>
  );
};

export default Service;
