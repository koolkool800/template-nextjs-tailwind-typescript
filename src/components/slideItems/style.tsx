import styled from "styled-components"
import tw from "twin.macro"

export const ItemContainer = styled.div`
  ${tw` flex justify-center m-2 max-w-[200px]  lg:w-[200px] max-h-[350px] lg:h-[350px]  mx-auto flex-col  hover:cursor-pointer hover:shadow-lg hover:rounded-[10px] p-2`}/* @media screen and (max-width: 399px) {
    width: 150px;
  } */
  //duoi 400 px width la 150
`
export const Img = styled.img`
  ${tw`rounded-[9px]  lg:w-[200px] lg:h-[230px] `}/* @media screen and (min-width: 399px) {
    width: 150px;
  } */
`
export const Title = styled.h1`
  ${tw`text-custom-primaryColor font-normal text-[10px] md:text-[12px] lg:text-[14px] `}
`
