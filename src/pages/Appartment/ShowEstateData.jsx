import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const ShowEstateData = ({ estate }) => {
    const {id, estate_title, segment_name, price, status ,image} = estate;

    const navigate = useNavigate();

    const handleViewProperty = (id) =>{
        navigate(`/appartment/${id}`)
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-2">
                <figure><img src={image} className="h-56 w-full rounded-xl" /></figure>
                <div className="card-body w-full">
                    <div className="flex justify-between font-semibold text-xl ">
                        <h1>Price : ${price}</h1>
                        <h1>Status : {status}</h1>
                    </div>
                    <h2 className="card-title font-extrabold">{estate_title}</h2>
                    <p>Segment : {segment_name}</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>handleViewProperty(id)} className="btn btn-outline border-x-4 border-0 btn-primary ">View Property</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
ShowEstateData.propTypes = {
    estate: PropTypes.object.isRequired,
}

export default ShowEstateData;