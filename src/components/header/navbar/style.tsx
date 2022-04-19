import styled from "styled-components"
import tw from "twin.macro"
interface IMobileProps {
  open: boolean
}
export const ItemsContainer = styled.ul`
  ${tw` lg:flex items-center gap-8 text-custom-primaryColor text-[14px] font-normal hidden  `}
`
export const Container = styled.div`
  ${tw` w-full max-w-[1300px] mx-auto  hidden md:flex items-center gap-8 h-[50px] `}
`
export const MobileContainer = styled.div<IMobileProps>`
  ${({ open }) =>
    open
      ? tw`w-[50%] px-2 py-4 overflow-scroll z-10 h-full  select-none bg-white  fixed left-0 top-[80px]`
      : tw`hidden`}
`
