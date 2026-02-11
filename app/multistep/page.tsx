'use client';

import { useRegisterUsers } from "../hooks/useRegisterUsers";


type user={
  name:string,
  id:string
}
export default function Page() {
  const { mutate, isPending,data } = useRegisterUsers();

  const submit = () => {
    mutate(["ali", "axmed"]);
  };


  console.log("data",data?.users)
  return (
    <div>
      <button onClick={submit} disabled={isPending}>
      {isPending ? "Sending..." : "Send Users"}
    </button>

    <div>

      {
         data?.users?.map((user:user)=>{
          return <h1 key={user.id}>{user.name}</h1>
        })
      }

     
    </div>
    </div>
  );
}
