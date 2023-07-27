import React from "react";
function Login() {
return (
    <div className="w-4/12 h-100vh items-center m-auto my-64 justify-center bg-gray-200 rounded-lg ">
        
        <form>
            <div>
                    <div className="bg-red-100">
                    <h1 className="">Please sign in</h1>
                    </div>

                    {/* Email */}
                    <div className="bg-green-100">
                        <label >Email address</label><br/>
                        <input type="email" className="" placeholder="Enter Email"/>   
                    </div>


                    {/* Password */}
                    <div className="bg-blue-100">
                        <label>Password</label><br/>
                        <input type="password" className="" placeholder="Enter Password"/>
                    </div>


                    {/* Submit */}
                    <div className="bg-yellow-100">
                        <button type="submit">
                        Sign in
                        </button>
                    </div>
            </div>
        </form>
    </div>

);
}

export default Login;






        // <div >
        //     <label>
        //     <input type="checkbox"  /> 
        //     Remember me
        //     </label>
        // </div>