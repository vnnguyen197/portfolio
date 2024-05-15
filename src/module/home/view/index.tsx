"use client"
import Image from "next/image";
import avatar from "../../../assets/images/personal.jpg"
import { CV_LINK } from "@/constant";
import { useState } from "react";

export default function HomePage() {
    const [isShow, setIsShow] = useState(true)
    setTimeout(() => {
        setIsShow(false)
    }, 3000);

    return (
        <div className="md:p-[56px] sm:p-[0px] flex flex-wrap sm:justify-center gap-[24px] hover:animate-fade-right" >
            <div className="rounded-[50%] border-dashed border-2 border-indigo-600p">
                <Image className="rounded-[50%] md:w-[340px] md:h-[340px] sm:w-[200px] sm:h-[200px]" src={avatar} alt="avt developer" />
            </div>
            <div className="flex justify-center items-center gap-[12px] flex-col">
                <div className="text-[#555555]">{`Hello, I'm`}</div>
                {isShow ? (
                    <div className="animate-bounce md:text-[48px] sm:text-[32px] sm:text-center font-bold">Curtis Nguyen</div>
                ) : (
                    <div className="animate-shake md:text-[48px] sm:text-[32px] sm:text-center font-bold">Curtis Nguyen</div>
                )}
                <div className="text-[#555555] md:text-[28px] sm:text-[22px] font-semibold">Frontend Developer</div>
                <div className="flex flex-wrap gap-[12px]">
                    <a href={CV_LINK} target="_blank" className="w-[100px] text-center cursor-pointer rounded-[24px] py-[12px]  bg-[var(--primary-700)] active:bg-black hover:animate-pulse">View CV</a>
                    <div className="w-[100px] text-center cursor-pointer rounded-[24px] py-[12px] bg-[var(--dark-grey)] hover:animate-pulse">Contact</div>
                </div>
            </div>
            {/* <div>{`I'm a Frontend Engineer passionate about creating intuitive and engaging user experiences.`}</div> */}
        </div>
    )
}

