import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { resultinterface } from '@/Interface/interface'
import CardSignUpPage from './CardSignUpPage'


const LoginForm = () => {
  const [selectedtitle,setSelectedtitle]=useState<string>("");
  const [result, setResult] = useState<resultinterface>({role:""});

  useEffect(()=>{
    console.log(result)
  },[result,setResult])

  return (
    <div className="w-[90%] h-[55%] mx-auto relative top-[20%] z-30 sm:w-[60%] sm:h-[90%] sm:right-[16%] lg:right-[20%] sm:top-[5%] lg:w-[50%] xl:w-[40%] xl:right-[24%] xl:h-[92%]">
      <div className="w-full h-full object-contain absolute right-[50%] ">
        <Image src="/Bind.svg" alt="/images/Bind.svg" fill priority />
      </div>
      <div className="w-[97%] mx-auto h-full bg-white rounded-lg pt-10 pl-8 ">
        <h1 className="text-center text-2xl">Choose Your Role</h1>
        <div className="flex gap-4 mt-4 w-[97%] md:ml-4 xl:ml-8 ">
          <CardSignUpPage
            image="/image 4.svg"
            text="I am a tutor"
            setSelectedtitle={setSelectedtitle}
            selectedtitle={selectedtitle}
          />
          <CardSignUpPage
            image="/image 5.svg"
            text="I am a Teacher"
            setSelectedtitle={setSelectedtitle}
            selectedtitle={selectedtitle}
          />
          <CardSignUpPage
            image="/image 6.svg"
            text="I am a Parent"
            setSelectedtitle={setSelectedtitle}
            selectedtitle={selectedtitle}
          />
        </div>
        {selectedtitle ? (
          <button
            onClick={() => {
              setResult({ role: selectedtitle });
            }}
            className=" bg-[#28B925] text-white py-2 px-6 text-md w-[60%] mx-auto rounded-lg mt-12 ml-16 md:ml-20 xl:text-[1.5vw] xl:ml-24 relative"
          >
            Join as a {selectedtitle}
          </button>
        ) : (
          <button onClick={()=>{window.alert("Please select a role first")}} className="bg-[#D9D9D9] relative text-white py-2 px-6 text-md w-[60%] mx-auto rounded-lg mt-12 ml-16 md:ml-20 xl:text-[1.5vw] xl:ml-24 ">
            Create an account
          </button>
        )}
        <div className="text-sm text-center mt-4 xl:text-lg relative">
          Already Have an account?{" "}
          <a href="" className="text-[#28B925]">
            LogIn
          </a>
        </div>
        <h1 className="text-xs text-center mt-10 w-[80%] md:w-[75%] lg:w-[60%] mx-auto xl:text-lg relative">
          By logging in, you agree to our
          <span className="text-[#5694F0]"> Terms and Conditions</span> and
          <span className="text-[#5694F0]"> Privacy Policy</span>
        </h1>
        <div className="w-[90%] h-[0.1vw] mx-auto bg-[#8C8A8A] mt-16 sm:mt-28 md:mt-24 lg:mt-20 xl:mt-28 relative"></div>
        <h1 className="text-sm text-[#8C8A8A] text-center mt-2 xl:text-lg relative">
          Have A Referal
        </h1>
      </div>
    </div>
  );
}

export default LoginForm
