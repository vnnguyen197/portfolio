import Image from "next/image"
import github from "../../../assets/images/home.jpg"
import dots from "../../../assets/images/dots.webp"
import cat from "../../../assets/images/cats.webp"
import education from "../../../assets/images/education.png"
import { EXPERIENCE_DES } from "@/constant"

export default function AboutPage() {
    return (
        <div>
            <div className="flex flex-col items-center gap-[8px] animate-fade-left pb-[24px]">
                <div className="text-[#555555]">Get to know more</div>
                <div className="flex gap-[4px] animate-fade-up md:text-[48px] sm:text-[32px] sm:text-center font-bold">
                    <div>About me</div>
                </div>
            </div>
            <div className="flex max-[600px]:flex-wrap gap-[36px] animate-fade-right">
                <Image src={github} width={400} alt="github avt" className="rounded-[16px]" />
                <div className="flex flex-col gap-[24px] justify-center">
                    <div className="flex max-[600px]:flex-wrap justify-between gap-[36px]">
                        <div className="max-[600px]:w-full bg-gradient-to-r from-cyan-500 to-blue-500 border-[1px] border-solid border-[#fff] rounded-[16px] w-[48%] p-[12px] text-center hover:animate-wiggle cursor-pointer">
                            <div className="text-[var(--gray-25)] bg-transparent font-bold">Experience</div>
                            <div className="text-[var(--gray-25)] bg-transparent">2+ years</div>
                            <div className="text-[var(--gray-25)] bg-transparent">Frontend Development</div>
                        </div>
                        <div className="max-[600px]:w-full bg-gradient-to-r from-cyan-500 to-blue-500 border-[1px] border-dotted border-[#fff] rounded-[16px] w-[48%] p-[12px] text-center hover:animate-wiggle cursor-pointer">
                            <div className="text-[var(--gray-25)] bg-transparent font-bold">Education</div>
                            <div className="text-[var(--gray-25)] bg-transparent">B.Sc. Bachelors Degree</div>
                            <div className="text-[var(--gray-25)] bg-transparent">Software Technology</div>
                        </div>
                    </div>
                    <div className="animate-fade-left">
                        {EXPERIENCE_DES?.map((item, index) => (
                            <div key={index} className="flex justify-start items-center pt-[10px] px-[0px] gap-[8px]">
                                <Image src={dots} width={15} height={15} alt="github avt" className="rounded-[16px]" />
                                <div className="text-[14px]">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}