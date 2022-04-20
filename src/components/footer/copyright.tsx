import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Para = styled.p`
  ${tw`text-custom-primaryColor font-normal text-[10px] md:text-[16px]`}
`
const Cotainer = styled.div`
  ${tw`md:my-4 md:mx-4 lg:mx-0  mt-8  flex justify-between items-center`}
`
export const Copyright = () => {
  return (
    <Cotainer>
      <Para>@ 2021 All Rights Reserved</Para>
      <Para>We Using Safe Payment For</Para>
    </Cotainer>
  )
}
