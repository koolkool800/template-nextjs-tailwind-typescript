import styled from "styled-components"
import tw from "twin.macro"
interface IProps {
  open?: boolean
}
export const SideBar = styled.ul<IProps>`
  ${({ open }) =>
    open
      ? tw`md:min-w-[267px] min-w-[200px] flex flex-col  `
      : tw`md:min-w-[267px] min-w-[200px] md:flex md:flex-col hidden `}
`
export const Container = styled.div`
  ${tw` `}
`
