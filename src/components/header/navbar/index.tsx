import React, { useEffect, useState } from "react"
import { Hamburger } from "../../../assets/svg/Icons"
import { Sidebar } from "../../sidebar"
import { Sidebar2 } from "./Sidebar2"
import { Container, ItemsContainer, MobileContainer } from "./style"

export const ItemsNav = [
  "All",
  "New Arrival",
  " Best Seller",
  " Agriculture",
  " Textile",
  " Customer Service",
  " Drop Shipping",
]
export const Navbar = () => {
  return (
    <Container>
      <Hamburger className="cursor-pointer" />
      <ItemsContainer>
        {ItemsNav.map((item, index) => (
          <li key={index} className="list-none hover:cursor-pointer">
            {item}
          </li>
        ))}
      </ItemsContainer>
    </Container>
  )
}
