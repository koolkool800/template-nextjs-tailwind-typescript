import styled from "styled-components"
import tw from "twin.macro"
//md:flex md:justify-between gap-4 my-8 pb-6 border-b-2 md:mx-10  md:flex-row
export const FooterContainer = styled.div`
  ${tw` grid grid-cols-2 pl-10  md:flex md:justify-between lg:gap-4 md:gap-2 lg:my-8`} /* @media screen and (max-width: 765px) {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 20px;
  } */
  @media screen and (max-width: 750px) {
    padding-left: 150px;
  }
  @media screen and (max-width: 700px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 50px;
  }
`
