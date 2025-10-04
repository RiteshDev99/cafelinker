import { Button, Input, Logo } from '../index.js'
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    // const login = async(data) => {
    //     setError("")
    //     try {
    //         const session = await authService.login(data)
    //         if (session) {
    //             const userData = await  authService.getCurrentUser()
    //             if (userData) dispatch(authLogin(session));
    //             navigate("/")
    //         }
    //     } catch (error) {
    //         setError(error.message)
    //     }
    // }

    return (
        <div className="flex items-center justify-center min-w-[100vw]">
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline text-[#1573d1]"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm font-medium text-primary hover:underline text-[#1573d1] "
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full cursor-pointer hover:bg-[#1573d1] duration-200"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
