import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const Profile = () => {
    const { user } = useContext(AuthContext)

console.log("get: ",user)


    return (
        <div className=" border-2 rounded-2xl p-5 my-3 mb-7 mx-auto">

            <div className="w-full mx-auto text-center">
                <div className="avatar online ">
                    <div className="h-48 text-center  rounded-full">
                        <img className=" " src={user?.photoURL} />
                    </div>
                </div>
            </div>

            <div className="mx-auto text-center mt-3 mb-15">
                <h1 className="lg:text-5xl font-extrabold italic" >{user?.displayName
                }</h1>
            </div>


            <div className=" mt-6 text-lg">
                <h1 className="text-2xl font-bold underline mb-5">Personal Information : ---------</h1>
                <p className="font-semibold italic">Name : {user?.displayName} </p>
                <p className="font-semibold italic">Email : {user?.email}</p>
                <p className="font-semibold italic">Email Verified :  
                 {
                    user?.emailVerified ? "No" : "Yes"
                 }
                </p>

            </div>


        </div>
    );
};

export default Profile;