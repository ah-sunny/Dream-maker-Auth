import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import swal from 'sweetalert';
import signupImage from '../../../public/real-estate-key-family-home-symbol-and-house-security.jpg';
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
    const { signIn ,createGoogleUser,createGithubUser} = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || '/' ;


    const handleLogIn = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log('clicked', email, password)
        //signIn user
        signIn(email, password)
            .then(result => {
                // console.log(result.user)
                swal({
                    // title: "Good job!",
                    title: `Welcome "${result.user?.displayName}"`,
                    icon: "success",
                    button: "continue",
                  });
                  navigate(from, {replace: true });
            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }
    const handleGoogleLogIn = ()=>{
        createGoogleUser()
        .then(result => {
            // console.log(result.user)
            swal({
                // title: "Good job!",
                title: `Welcome "${result.user?.displayName}"`,
                icon: "success",
                button: "continue",
              });
              navigate(from, {replace: true });
        })
        .catch(error => {
            toast.error(`${error.message}`)
        })

        
    }
    const handleGithubLogin = ()=>{
        createGithubUser()
        .then(result => {
            // console.log(result.user)
            swal({
                // title: "Good job!",
                title: `Welcome "${result.user?.displayName}"`,
                icon: "success",
                button: "continue",
              });
              navigate(from, {replace: true });
        })
        .catch(error => {
            toast.error(`${error.message}`)
        })
    }


    return (

        <div className='mb-10 lg:w-[78%] mx-auto border-2 p-5 mt-10 rounded-xl shadow-2xl'>
            <h2 className="text-3xl mt-3 mb-5 text-center italic"> Log In Your Account </h2>
            <div className='flex gap-4 justify-center '>
                <div>
                    <img className='hidden lg:block h-80 w-[100%]' src={signupImage} alt="" />
                </div>

                <div className='flex flex-col lg:w-[40%]items-center justify-center'>
                    <form onSubmit={handleLogIn} className=" p-0 mx-auto">

                        <div className='flex flex-col  gap-2 w-full'>
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                        <div><p className="text-2xl font-bold mx-auto text-center my-2  "> OR </p></div>
            <div className="flex justify-center gap-4">
                <div onClick={handleGoogleLogIn}
                    className="card bg-base-100 shadow-xl w-30 flex flex-row items-center gap-2 px-4 py-1 text-xl font-bold ">
                    <span><FcGoogle></FcGoogle></span>
                    <p>Google</p>
                </div>
                <div onClick={handleGithubLogin} className="card bg-base-100 shadow-xl w-30 flex flex-row items-center gap-2 px-4 py-1 text-xl font-bold ">
                    <span><FaGithub ></FaGithub ></span>
                    <p>GitHub</p>
                </div>
            </div>

                        <p className="text-center mt-4">Do not have an account ? <Link className="text-blue-600 font-bold" to="/register"> Register</Link></p>
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

export default LogIn;