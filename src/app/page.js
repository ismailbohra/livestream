'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const [roomId, setRoomId] = useState()
  const router  = useRouter()

  const handlejoin=()=>{
    if(!roomId) return
    router.push(`/room/${roomId}`)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-6xl uppercase text-center leading-[3rem] font-bold">
        Aashara 1446H
      </h1>
      <div className="mt-8 w-full">
        <input
          onChange={(e)=>{setRoomId(e.target.value)}}
          placeholder="Enter ID"
          type="text"
          className="block px-6 py-3 mx-auto outline-none bg-gray-300 rounded-lg"
        />
        <button onClick={handlejoin} className=" mt-4 px-6 py-2 block mx-auto rounded-lg bg-blue-900 text-white">
          Join
        </button>
      </div>
    </div>
  );
}

export default page;
