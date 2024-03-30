import toast, { Toaster } from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocilLogin = () => {

    const { googleLogin } = useAuth();
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const newUser = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                    password: 'Login with Google',
                    role: 'user'
                }
                axiosPublic.post('/post/user', newUser)
                    .then(async res => {
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                        navigate(location?.state ? location.state : '/');
                        toast.success('Login Successfully !')
                    })
                    .catch(error => {
                        toast.error('Login Failed.!')
                        console.log(error)
                })
                
            })
            .catch(error => {
                toast.error('Login Failed.!')
                console.log(error)
        })
    }

    return (
        <section className="mt-2">
            <Toaster></Toaster>
            <button onClick={handleGoogleLogin} className="w-full text-center text-lg gap-3 font-semibold text-white py-1 rounded-lg bg-green-600 flex items-center justify-center"><BsGoogle className="text-xl"></BsGoogle> Sign Up with Google</button>
        </section>
    );
};

export default SocilLogin;