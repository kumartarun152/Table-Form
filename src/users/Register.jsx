import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function Register({userInfo}) {


    let {userData,setuserData}=userInfo;

    let hendelForm=(event)=>{
      
        let form=event.target;

        let userObj={
            uName:form.uName.value,
            uEmail:form.uEmail.value,
            uPhone:form.uPhone.value,
            uPassword:form.uPassword.value


        }

        let data=[...userData]
        data.push(userObj)
       

        console.log(data)

         setuserData(data)
         form.reset()

         event.preventDefault();
   

    }


    return (
        <div className='py-[100px]'>
            <div className="bg-red-300 p-6 rounded shadow-2xl  text-left">

                <h2 className="text-3xl font-bold mb-10 text-black-800">Create Your Account</h2>

                <form className="  space-y-5" onSubmit={hendelForm}>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Name</label>
                        <input type="text" name='uName' className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Email</label>
                        <input type="email" name='uEmail' className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Phone</label>
                        <input type="text" name='uPhone' className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>
 
                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Password</label>
                        <input type="password" name='uPassword' className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="agree"/>
                           
                    </div>

                    <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>

                </form>

            </div>
    <ToastContainer/>
        </div>
    )
}
