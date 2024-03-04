"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Dashboard = () => {

  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p>Please login</p>;

  return (
    <>
      <center>
        < h1 className="font-bold mt-36"> Dashboard</h1 >
      </center>
    </>

  )




};

export default Dashboard;