import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw` flex flex-wrap gap-1 md:gap-4`}
`
export const ItemContainer = styled.div`
  ${tw` flex justify-center gap-[2px] md:gap-[4px] text-[14px] mx-auto flex-col w-[170px] md:w-[200px] h-[320px] md:h-[350px] lg:h-[442px] hover:cursor-pointer hover:shadow-lg hover:rounded-[10px] p-2`}
  @media screen and (max-width: 399px) {
    width: 150px;
  }
  //duoi 400 px width la 150
`
export const Img = styled.img`
  ${tw`rounded-[9px] w-[200px]   lg:w-[244px] lg:h-[244px] h-[150px] `}
`
export const Title = styled.h1`
  ${tw`font-normal lg:text-[16px] text-[13px] text-[#1B1B1B] `}
`
export const Span1 = styled.span`
  ${tw`text-[12px]  text-[#636363] hidden md:flex gap-1 `}
`

export const Span2 = styled.span`
  ${tw`font-normal text-[14px] hidden md:block text-[#636363] `}
`
export const Span3 = styled.span`
  ${tw`text-custom-primaryColor hidden md:block `}
`
