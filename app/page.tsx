"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { Check } from "lucide-react";
import avatar1 from "@/public/avatar1.png";
import avatar2 from "@/public/avater2.png";
import avatar3 from "@/public/avatar3.png";
import strips from "@/public/strips.png";
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => setProgress(25), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <main className="min-h-screen py-12 bg-[#304330] relative overflow-clip">
      <div className="px-44">
        <Image src={logo} width={200} alt="logo" />
        <div className="px-7 pt-2">
          <Progress value={progress} className="rounded-sm h-2" />
        </div>
      </div>
      <div className="absolute bg-[#405F3F] w-screen h-[20vh] bottom-0 left-0" />      
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[35vh] left-0" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[50vh] left-[30vw]" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[35vh] left-[60vw]" />
      <div className="absolute bg-[#405F3F] w-[20vw] h-[10vh] bottom-[50vh] left-[90vw]" />
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-light text-white text-center mt-10">Choose Your Child's Plan</h1>
        <div className="flex text-white space-x-16 mt-8 font-light text-sm">
          <h4 className="flex"><Check className="text-green-600 mr-2" />5-day free trial</h4>
          <h4 className="flex"><Check className="text-green-600 mr-2" />Use All Features</h4>
          <h4 className="flex"><Check className="text-green-600 mr-2" />No Charges During Your Trial</h4>
        </div>
      </div>
      <div className="flex mt-16 w-full justify-center flex-wrap gap-y-7">
        <div className="bg-black rounded-3xl p-3 z-10 mx-12">
          <Card className="h-[36rem] z-20 w-[25rem] rounded-3xl pl-5 relative -mt-5 -ml-5 border-2 border-black">
            <CardHeader>
              <Image src={strips} alt="strips" className="absolute left-[-2rem] top-2"/>
              <CardTitle className="font-normal">
                <Image src={avatar1} width={70} height={70} alt="avatar1" className="mb-5"/>
                English, Maths and Science
              </CardTitle>
              <CardDescription className="text-black mt-5">Get inspired and build confidence in key<br/> subjects.</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-5xl">$39.99<span className="text-2xl">/mo</span></h3>
              <p>Save £95.98 with a yearly plan</p>
              <Button onClick={() => router.push("/child")} variant="outline" className="border-2 border-blue-400 text-blue-400 w-full mt-5 rounded-sm text-xl py-6 hover:text-blue-700">Try For Free</Button>
            </CardContent>
            <CardFooter>
            <div className="flex space-y-2 mt-0 font-light text-sm flex-col text-black">
              <h4 className="flex"><Check className="text-green-600 mr-2" />5-day free trial</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />Use All Features</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />No Charges During Your Trial</h4>
            </div>
            </CardFooter>
          </Card>
        </div>
        <div className="bg-black rounded-3xl p-3 z-10 mx-12">
          <Card className="h-[36rem] z-20 w-[25rem] rounded-3xl pl-5 relative -mt-5 -ml-5 border-2 border-black">
            <CardHeader>
              <Image src={strips} alt="strips" className="absolute left-[-2rem] top-2"/>
              <CardTitle className="font-normal">
                <Image src={avatar2} width={70} height={70} alt="avatar1" className="mb-5"/>
                Exam Prep
              </CardTitle>
              <CardDescription className="text-black mt-5">Boost preparation for 11+ grammar and private school exams.</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-5xl">$39.99<span className="text-2xl">/mo</span></h3>
              <p>Save £95.98 with a yearly plan</p>
              <Button onClick={() => router.push("/child")} variant="outline" className="border-2 border-blue-400 text-blue-400 w-full mt-5 rounded-sm text-xl py-6 hover:text-blue-700">Try For Free</Button>
            </CardContent>
            <CardFooter>
            <div className="flex space-y-2 mt-0 font-light text-sm flex-col text-black">
              <h4 className="flex"><Check className="text-green-600 mr-2" />5-day free trial</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />Use All Features</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />No Charges During Your Trial</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />Verbal reasoning, non-verbal reasoning</h4>
            </div>
            </CardFooter>
          </Card>
        </div>
        <div className="bg-black rounded-3xl p-3 z-10 mx-12">
          <Card className="h-[36rem] z-20 w-[25rem] rounded-3xl pl-5 relative -mt-5 -ml-5 border-2 border-black">
            <CardHeader>
              <Image src={strips} alt="strips" className="absolute left-[-2rem] top-2"/>
              <CardTitle className="font-normal">
                <Image src={avatar3} width={70} height={70} alt="avatar1" className="mb-5"/>
                Exam Prep
              </CardTitle>
              <CardDescription className="text-black mt-5">Start preparing for 11+ grammar and private school exams.</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-5xl">$39.99<span className="text-2xl">/mo</span></h3>
              <p>Save £167.98 with a yearly plan</p>
              <Button onClick={() => router.push("/child")} variant="outline" className="border-2 border-blue-400 text-blue-400 w-full mt-5 rounded-sm text-xl py-6 hover:text-blue-700">Try For Free</Button>
            </CardContent>
            <CardFooter>
            <div className="flex space-y-2 mt-0 font-light text-sm flex-col text-black">
              <h4 className="flex"><Check className="text-green-600 mr-2" />5-day free trial</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />Use All Features</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />No Charges During Your Trial</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />Verbal reasoning, non-verbal reasoning</h4>
              <h4 className="flex"><Check className="text-green-600 mr-2" />Downloadable paper resources for practise</h4>
            </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
