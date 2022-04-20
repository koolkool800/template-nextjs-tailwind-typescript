import styled from "styled-components"
import tw from "twin.macro"

export const BannerContainer = styled.div`
  ${tw` py-4  lg:max-w-[1300px] mx-auto flex-col lg:flex-row md:gap-6 flex gap-4`}
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
  }
`

export const Img = styled.img`
  ${tw`rounded-[20px] mx-auto lg:mx-0  lg:w-[427px]  lg:block  md:w-[400px] w-full h-full  `}
`

export const Wrapper = styled.div`
  ${tw`md:flex w-full  md:items-center md:justify-center mt-4  gap-4 grid grid-cols-2`}
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`
export const ItemContainer = styled.div`
  ${tw`flex flex-col gap-2 cursor-pointer  md:hover:shadow-lg hover:rounded-[6px]  md:p-2`}
`
