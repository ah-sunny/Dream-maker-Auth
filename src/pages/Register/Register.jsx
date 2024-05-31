import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import signupImage from '../../../public/real-estate-key-family-home-symbol-and-house-security.jpg';
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
    const [showPass, setShowPass] = useState(false)
 const {createUser, updateUserProfile,logOut} = useContext(AuthContext)
 const navigate = useNavigate()
//  const location = useLocation()
//  const from = location.state?.form?.pathname || '/' ;

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoURL = form.get('photoURL');
        // console.log(name, email, password,photoURL);

        if (password.length < 6) {
            toast.error(' Password should be at least 6 characters')
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should be at one uppercase characters.')
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Your password should be at one lowercase characters.')
            return;
        }

        //create user
        createUser(email, password)
            .then(result => {
                // console.log(result.user)
                updateUserProfile(name,photoURL)
                .then(()=>{
                    console.log("user profile info updated")
                })
                if (result.user) {
                    swal({
                        // title: "Good job!",
                        title: `Created, Please LogIn`,
                        icon: "success",
                        button: "continue",
                      });
                      
                }
                e.target.reset()
                logOut();
                navigate('/logIn')
            })
            .catch(error => {
                // console.error(error)
                toast.error(`${error.message}`)
            })

    }


    return (
        <div className='mb-10 lg:w-[78%] mx-auto border-2 p-5 mt-10 rounded-xl shadow-2xl'>
        <h2 className="text-3xl mt-3 mb-5 text-center italic"> Register Here </h2>
        <div className='flex gap-4 justify-center '>
            <div>
                <img className='hidden lg:block h-80 w-[100%]' src={signupImage} alt="" />
            </div>

            <div className='flex flex-col lg:w-[40%]items-center justify-center'>
                <form onSubmit={handleRegister} className=" p-0 mx-auto">

                    <div className='flex flex-col lg:flex-row gap-6 w-full'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name :</span>
                            </label>
                            <input type="text" required name="name" placeholder="Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL :</span>
                            </label>
                            <input type="text" required name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row  gap-6 w-full'> 
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email :</span>
                            </label>
                            <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="relative form-control">
                            <label className="label">
                                <span className="label-text">Password :</span>
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                required name="password" placeholder="Password" className="input input-bordered" />

                            <span className='absolute right-[7%] bottom-[40%] ' onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>

                            <label className="label">
                            </label>
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                </form>
            </div>

            {/* {
                registerError && <p className='text-red-500'>{registerError} </p>
            } */}
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Register;