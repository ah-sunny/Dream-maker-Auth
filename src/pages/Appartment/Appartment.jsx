import { useEffect, useState } from "react";
import ShowEstateData from "./ShowEstateData";


const Appartment = () => {
    const [estateData, setEstateData] = useState([])

useEffect(()=>{
    fetch('residential.json')
    .then(res=> res.json())
    .then(data=> setEstateData(data))
},[])

    return (
        <div className="my-24">

            <h1 className="text-4xl mb-16 font-bold mx-auto text-center"> Your Can Choice Your Dearm Appartment</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    estateData.map((estate,idx)=> <ShowEstateData
                    key={idx} 
                    estate={estate}>
                    </ShowEstateData> )
                }
            </div>
            
        </div>
    );
};

export default Appartment;


// {estate_title,segment_name,description,price,status,area,location,facilities}