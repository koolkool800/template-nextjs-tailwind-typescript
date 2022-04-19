import React from "react"
import { Item } from "./Item"
import { FooterContainer } from "./style"

const items1 = [
  "Your Account",
  "Your Order",
  "Track your order",
  " Shipping Rate",
  " Dakoli Assistant",
  "Return",
  "Help",
]
const items2 = [
  "Start selling",
  "How to sell",
  "Manager Seller Central",
  " Affiliate",
  " Advertising Product",
]

const items3 = [
  "Career",
  " About us",
  " Manager Seller Central",
  "Affiliate",
  "Advertising Product",
  "Blog",
  "Govemment Relation",
]
const items4 = [
  "Career",
  " About us",
  " Manager Seller Central",
  "Affiliate",
  "Advertising Product",
  "Blog",
  "Govemment Relation",
]
export const Footer = () => {
  return (
    <FooterContainer>
      <Item title="Let's Us Help You" items={items1} />
      <Item title="Make some extra cash" items={items2} />
      <Item title="Make some extra cash" items={items3} />
      <Item title="Make some extra cash" items={items4} />
    </FooterContainer>
  )
}
