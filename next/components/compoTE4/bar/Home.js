import React from "react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data } = useSession();

  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(data?.user.isOnline || true);
  }, [data]);

  return (
    <div className="fixed z-40">
    <div className="w-screen h-20 bg-slate-600 flex items-center border-2 border-black pl-8 py-8">
      <div className="text-4xl text-white font-medium">
        Home
      </div>
      <div className="text-white ml-auto">
        {data?.user.firstname}
        
      </div>
      <div className="bg-green-500 w-4 h-4 rounded-full ml-4 mr-8"></div>
    </div>
  </div>
  );
}

//  <div className="fixed z-40">
//       <div className=" w-screen h-20 bg-slate-600 flex items-center border-2 border-black pl-8 py-8">
//         <div className="text-4xl text-white font-medium ">
//           Home
//         </div>
//         <div className="text-white ">{data?.user.firstname}</div>
//           {/* <div>
//             <p>Name: {data?.user.firstname}</p>
//             <p>Online Status: {isOnline ? "Online" : "Offline"}</p>
//           </div> */}
//       </div>
//     </div> 