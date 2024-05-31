import { useLoaderData, useParams } from "react-router-dom";


const ViewProperty = () => {
    const EstateData = useLoaderData();
    const { Id } = useParams();
    const intID = parseInt(Id)

    const selectedData = EstateData.find(estate => estate?.id === intID);
    const { estate_title, segment_name, image, description, price, status, area, location, facilities } = selectedData;

    return (
        <div>
            <div className="container mx-auto my-14">

                <div className="card lg:card-side bg-base-100 ">
                    <div className="w-[95%] lg:w-[45%] p-9 lg:h-auto bg-base-200 rounded-xl">
                        <figure >
                            <img src={image} alt="Album" className="h-72 rounded-xl lg:h-auto" />
                        </figure>
                    </div>

                    <div className="lg:w-[50%] mt-7 lg:mt-1 flex flex-col pl-14 space-y-5 text-[#131313B3] ">
                        <h2 className="card-title text-5xl text-black">{estate_title}</h2>
                        <p className="text-lg font-medium ">Segment : {segment_name}</p>
                        <h2 className="border-y-2 py-3 mt-5 font-bold text-xl text-black">Location:  {location}</h2>

                        <div className="border-b-2 pb-3"> 
                            <div className="flex gap-7 lg:gap-20">
                                <h1>Pricce : <span className="text-xl font-semibold"> ${price}</span></h1>
                                <h1>Status : <span className="text-3xl font-semibold text-green-500">{status}</span></h1>
                            </div>
                            <p className="font-semibold text-black">Area : {area}</p>
                        </div>
                        <h1 className="flex-grow leading-[2rem] ">
                            <span className="text-xl font-semibold text-black">description : </span>{description}
                        </h1>

                        <div className='flex gap-4 border-b-2 pb-7'>
                            <h1 className="text-xl font-semibold text-black">Facilities : </h1>
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    facilities.map((item, idx) =>
                                        <span className='bg-base-200 px-5 py-1 rounded-xl text-[#23BE0A]'
                                            key={idx}>
                                            #{item}
                                        </span>
                                    )
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProperty;