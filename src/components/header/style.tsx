import styled from "styled-components"
import tw from "twin.macro"

export const Nav = styled.nav`
  ${tw`bg-custom-primaryColor md:h-20 h-14 max-w-[1300px] mx-auto   flex justify-between items-center`}
`

export const SearchContainer = styled.div`
  ${tw` lg:flex relative lg:w-[650px]  lg:h-[45px]   `}
  @media screen and (max-width: 1385px) {
    display: none;
  }
`

export const SearchBar = styled.input`
  ${tw` w-full rounded-full  p-4 outline-none `}
  @media screen and (max-width: 1400px) {
    max-width: 700px;
  }
`
export const ButtonSearch = styled.button`
  ${tw` absolute h-full top-0 -right-2`}
  @media screen and (max-width: 1400px) {
    right: 40px;
  }
`
export const Button = styled.div`
  ${tw`flex items-center gap-2 text-white border-transparent border-2 font-normal text-[12px]  `}
  cursor: pointer;
`

export const IconsContainer = styled.div`
  ${tw`flex items-center gap-4`}
  @media screen and (max-width: 770px) {
    display: none;
  }
`
interface IMobileProps {
  open: boolean
}
export const MobileNav = styled.div<IMobileProps>`
  ${({ open }) =>
    open
      ? tw`w-[50%] px-2 py-4 z-10 h-full select-none 	 bg-[rgba(0, 0, 0, 0.9)]  fixed right-0 top-0`
      : tw`hidden`}
`
//
export const ItemsContainer = styled.ul`
  ${tw`flex flex-col py-10 gap-2  `}
`
