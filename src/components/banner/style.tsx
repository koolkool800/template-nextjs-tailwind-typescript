import styled from "styled-components"
import tw from "twin.macro"

export const BannerContainer = styled.div`
  ${tw` py-4 lg:max-w-[1300px] mx-auto flex-col lg:flex-row md:gap-6 flex gap-4`}
`

export const Img = styled.img`
  ${tw`rounded-[20px] mx-auto lg:mx-0  lg:w-[427px] lg:block  md:w-[400px] w-[300px]`}
`

export const ItemsContainer = styled.div`
  ${tw`flex  items-center justify-center mt-4  gap-4`}
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`
export const ItemContainer = styled.div`
  ${tw`flex flex-col mx-auto w-[170px] md:w-[200px] lg:h-[300px] p-2 lg:gap-2 gap-1 hover:cursor-pointer hover:shadow-lg hover:rounded-[10px]  `}
  @media screen and (max-width: 399px) {
    width: 150px;
  }
`
