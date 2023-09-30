// "use client";
// //localhost:3000/pTE3-2
// import React from "react";
// import SideBar from "@/components/compoTE4/Sidebar";
// import Y3 from "@/components/compoTE4/bar/Y3";
// import { useState, useEffect } from "react";
// export default function page() {
//   const [pageLoaded, setPageLoaded] = useState(false);
//   useEffect(() => {
//     // เพิ่มข้อมูลลงใน Session Storage เมื่อหน้าถูกโหลด
//     sessionStorage.setItem("pageTE3-2", "true");

//     // ตรวจสอบข้อมูลจาก Session Storage เมื่อหน้าถูกโหลด
//     const loaded = sessionStorage.getItem("pageTE3-2");
//     if (loaded === "true") {
//       setPageLoaded(true);
//     }
//   }, []);
//   const [numberA, setNumberA] = useState(""); // สร้าง state สำหรับเก็บข้อมูลที่ผู้ใช้ป้อน

//   const shownumA = () => {
//     console.log("A",numberA)
//   };
//   const [numberB, setNumberB] = useState(""); // สร้าง state สำหรับเก็บข้อมูลที่ผู้ใช้ป้อน

//   const shownumB = () => {
//     console.log("B",numberB)
//   };
//   const AB = ()=>{
//     console.log(numberA,numberB)
//   }
//   return (
//     <div className="flex ">
//       <div className="flex bg-green-100">
//         <SideBar />
//         <Y3 />
//       </div>
//       <div className="text-white ml-72 mt-36">
//         <div>
//         <label>ป้อนข้อมูล:</label>
//         <input
//           className="text-black"
//           type="number"
//           value={numberA}
//           onChange={(e) => setNumberA(e.target.value)} // อัปเดต state เมื่อมีการเปลี่ยนแปลงในกล่องข้อความ
//         />
//         <button onClick={shownumA}>A</button>
//         </div>
//         <br/>
//         <div>
//         <label>ป้อนข้อมูล:</label>
//         <input
//           className="text-black"
//           type="number"
//           value={numberB}
//           onChange={(e) => setNumberB(e.target.value)} // อัปเดต state เมื่อมีการเปลี่ยนแปลงในกล่องข้อความ
//         />
//         <button onClick={shownumB}>B</button>
//       </div>
//       <button className="text-white" onClick={AB}>Submit</button>
//       </div>
     
//     </div>
//   );
// }

import React from 'react'

export default function page() {
  return (
    <div>
      1111
    </div>
  )
}
