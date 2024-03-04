"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogIn() {
    const router = useRouter('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const result = await signIn('credentials', { redirect: false, email, password })
            if (result.error) {
                alert("UnAuthorized Login")
            } else {
                router.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-center text-3xl font-bold mb-8">Log In</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border text-black  border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Sign in</button>
                </form>
            </div>
        </div>
    );
}
