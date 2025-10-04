import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import {Button, Input, Logo} from '../index.js'
import {useForm} from 'react-hook-form'
import { Locate } from "lucide-react";
function Signup() {
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()


    // const create = async(data) => {
    //     setError("")
    //     try {
    //         const userData = await authService.createAccount(data)
    //         if (userData) {
    //             const currentUser = await authService.getCurrentUser()
    //             if(currentUser) dispatch(login(userData));
    //             navigate("/")
    //         }
    //     } catch (error) {
    //         setError(error.message)
    //     }
    // }

    return (
        <div className="flex items-center justify-center  min-w-[100vw] ">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline text-[#1573d1]"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form className=''>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name : "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Cafe Name : "
                            type="password"
                            placeholder="Cafe name"
                            {...register("password", {
                                required: true,})}
                        />
                        <Input
                            label="Email : "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password : "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,})}
                        />


                        <div className="relative">
                            <Input
                                label="Address:"
                                type="text"
                                placeholder="Enter your address"
                                {...register("address", { required: true })}
                            />
                            <span className="absolute right-3 top-[38px] text-gray-500 cursor-pointer "

                            >
                               <Locate size={22} />
                             </span>
                        </div>
                        <Button type="submit" className="w-full cursor-pointer hover:bg-[#1573d1] duration-200">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default Signup
