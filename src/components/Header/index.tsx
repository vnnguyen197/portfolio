import styled from "styled-components"
import avatar from "../../assets/images/home.jpg"
import Image from "next/image"
import { LINK_URL } from "@/constant"
import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()
    return (
        <div className="bg-[rgba(9, 20, 26, .5)] flex flex-wrap justify-around items-center md:p-[36px] sm:gap-[24px] sm:p-[12px]">
            <MenuLeft className="cursor-pointer flex items-center gap-[12px] animate-jump-in hover:animate-wiggle" onClick={() => router.push("/")}>
                <Image className="rounded-[16px] w-[50px] h-[50px]" src={avatar} alt="avt developer" />
                <div className="text-[18px] font-semibold">V.NNGUYEN</div>
            </MenuLeft>
            <MenuRight className="flex gap-[24px] text-[18px] animate-jump-in">
                {LINK_URL?.map((item) => (
                    <Item key={item.id} onClick={() => router.push(item.url)} className="hover:animate-wiggle-more hover:text-[var(--primary-700)] cursor-pointer">{item.title}</Item>
                ))}
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
    padding: 12px 24px;
    border: 1px solid var(--background-600);
    background: var(--background-700);
    border-radius: 30px;
`

const Item = styled.div`
    background: var(--background-700);
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
`