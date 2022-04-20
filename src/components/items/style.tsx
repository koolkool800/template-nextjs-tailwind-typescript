import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw` grid lg:grid-cols-4 gap-4  md:grid-cols-3 grid-cols-2 lg:gap-8`}
  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const ItemContainer = styled.div`
  ${tw` flex md:p-2  cursor-pointer  flex-col md:hover:shadow-lg md:hover:rounded-[6px] gap-1 md:gap-2`}
`
export const Img = styled.img`
  ${tw`rounded-[9px] w-full object-cover `}
`
export const Title = styled.h1`
  ${tw`font-normal lg:text-[16px]  text-[13px] text-[#1B1B1B] `}
  //preventing text overflow and it will limit in 3 lines
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
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
