import styled from "styled-components"
import avatar from "../../assets/images/about_me.gif"
import Image from "next/image"
import { LINK_URL } from "@/constant"
import { useRouter } from "next/navigation"
import { useState } from "react"
import LoadingAvatar from "../Loading/components/LoadingAvatar"
import { ThemeChanger } from "@/hooks/useTheme"

export default function Header() {
    const [isShow, setIsShow] = useState(true)
    setTimeout(() => {
        setIsShow(false)
    }, 500);

    const router = useRouter()
    return (
        <div className="flex flex-wrap md:justify-between items-center md:p-[36px] sm:gap-[24px] sm:p-[12px] sm:justify-center">
            <MenuLeft className="cursor-pointer flex items-center gap-[12px] animate-jump-in hover:animate-wiggle" onClick={() => router.push("/")}>
                {isShow ? <LoadingAvatar /> : <Image className="rounded-[16px] w-[40px] h-[40px]" src={avatar} alt="avt developer" />}
                <div className="text-[16px] font-semibold hover:text-[var(--primary-700)] hover:animate-wiggle">V.NNGUYEN</div>
            </MenuLeft>
            <MenuRight className="flex justify-center items-center md:gap-[24px] sm:gap-[12px] animate-jump-in">
                {LINK_URL?.map((item) => (
                    <Item key={item.id} onClick={() => router.push(item.url)} className="light:text-[var(--gray-25)] hover:animate-wiggle-more hover:text-[var(--primary-700)] cursor-pointer sm:text-[14px]">{item.title}</Item>
                ))}
                <MenuRight className="bg-white dark:bg-black">
                    <ThemeChanger />
                </MenuRight>
            </MenuRight>
        </div>
    )
}

const MenuLeft = styled.div`
    padding: 12px 24px;
    border: 1px solid var(--background-600);
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`

const MenuRight = styled.div`
    padding: 10px 24px;
    border: 1px solid var(--background-600);
    border-radius: 30px;
    @media (max-width: 576px) {
        padding: 4px 12px;
    }
`

const Item = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    @media (max-width: 576px) {
        font-size: 12px;
    }
`