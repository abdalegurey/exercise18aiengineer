"use client"
import React from 'react'
import { useSendemails } from '../hooks/useSendemails';


const page = () => {


    const {mutate,isPending,data}=  useSendemails()


      const submit = () => {
    mutate(["farax@gmail.com",
      "ali@gmail.com",
      "maxamed@gmail.com",
      "ahmed@gmail.com",
      "abdi@gmail.com",
      "hassan@gmail.com",
      "ibrahim@gmail.com",
      "mohamed@gmail.com",
      "yusuf@gmail.com",
      "omar@gmail.com"]);
  };



  console.log("data",data)

  return (
    <div>
      <button onClick={submit} disabled={isPending}>
      {isPending ? "Sending..." : "Send Emails"}
    </button>


    </div>
      
  )
}

export default page
