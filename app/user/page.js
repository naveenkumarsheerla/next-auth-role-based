"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const users = () => {
    const router = useRouter('');

    const { data, error, isLoading } = useSWR("http://localhost:3000/api/getEmployees", fetcher);
    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";

    const columns = [
        {
            key: "name",
            label: "Name",
        },
        {
            key: "email",
            label: "Email",
        },
        {
            key: "role",
            label: "Role",
        },
    ];
    const handleBack = () => {
        router.back();

    }
    return (
        <div style={{ marginTop: '5rem' }}>


            <center>
                <h1 className="font-bold">Users</h1>
                <table className="table-fixed border border-gray-300 ">
                    <thead >
                        <tr >
                            {columns.map((column) =>
                                <th key={column.key} className=" border border-gray-300">{column.label}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index} >
                                <td className=" border border-gray-300">{user.name}</td>
                                <td className=" border border-gray-300">{user.email}</td>
                                <td className=" border border-gray-300">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>

            <div style={{ marginLeft: '75rem' }}>
                <button onClick={handleBack} className="text-1xl  underline"  >Go Back</button>

            </div>
        </div>
    )
}

export default users
