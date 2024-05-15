import Image from "next/image"
import github from "../../assets/images/heart-developer.gif"
import dots from "../../assets/images/dots.webp"
import { EXPERIENCE_DES } from "@/constant"

export default function About() {
  return (
    <div className="py-[48px] px-[112px] ">
      <div className="flex flex-col items-center gap-[8px] animate-fade-left pb-[24px]">
        <div className="text-[#555555]">Get to know more</div>
        <div className="animate-fade-up md:text-[48px] sm:text-[32px] sm:text-center font-bold">About me</div>
      </div>
      <div className="flex gap-[48px] animate-fade-right">
        <Image src={github} width={500} height={500} alt="github avt" className="rounded-[16px]" />
        <div className="flex flex-col gap-[24px]">
          <div className="flex justify-between gap-[48px]">
            <div className="rounded-[16px] w-[48%] p-[12px] bg-[#FFF] text-center">
              <div className="text-[#000000] bg-[#fff] font-bold">Experience</div>
              <div className="text-[#000000] bg-[#fff]">2+ years</div>
              <div className="text-[#000000] bg-[#fff]">Frontend Development</div>
            </div>
            <div className="rounded-[16px] w-[48%] p-[12px] bg-[var(--footer-divider)] text-center">
              <div className="bg-[var(--footer-divider)] font-bold">Education</div>
              <div className="bg-[var(--footer-divider)]">B.Sc. Bachelors Degree</div>
              <div className="bg-[var(--footer-divider)]">Software Technology</div>
            </div>
          </div>
          <div className="animate-fade-left">
            {EXPERIENCE_DES?.map((item, index) => (
              <div key={index} className="flex justify-start items-center py-[4px] px-[8px] gap-[8px]">
                <Image src={dots} width={15} height={15} alt="github avt" className="rounded-[16px]" />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
