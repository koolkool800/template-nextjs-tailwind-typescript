import React, { useEffect, useState } from "react"
import {
  AddUser,
  Cart,
  Dropdown,
  Hamburger,
  Logo,
  Messenger,
  Notify,
  Search,
  UsaIcon,
  User,
} from "../../assets/svg/Icons"
import { ItemsNav } from "./navbar"
import {
  Button,
  ButtonSearch,
  IconsContainer,
  ItemsContainer,
  MobileNav,
  Nav,
  SearchBar,
  SearchContainer,
} from "./style"
export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <Nav>
      <div className="flex items-center gap-4">
        <Logo />
        <div className="md:flex hidden items-center gap-2">
          <UsaIcon />
          <Dropdown color="white" className="cursor-pointer text-white" />
        </div>
      </div>
      <SearchContainer>
        <SearchBar type="text" placeholder="All   I  I’m shopping for..." />
        <ButtonSearch type="submit">
          <Search />
        </ButtonSearch>
      </SearchContainer>
      <IconsContainer>
        <Cart className="cursor-pointer hover:opacity-70" />
        <Button>
          <User className="hover:opacity-70" />
          <span>Log in</span>
        </Button>
        <Button>
          <AddUser className="hover:opacity-70" />
          <span>Sign up</span>
        </Button>
        <Messenger className="cursor-pointer hover:opacity-70" />
        <Notify className="cursor-pointer hover:opacity-70" />
      </IconsContainer>
      <div className="md:hidden sm:block">
        <Hamburger
          onClick={() => handleOpenMenu()}
          className="text-white z-10 relative cursor-pointer select-none"
        />
        <MobileNav open={open}>
          <div className="flex flex-col  justify-center items-center gap-4">
            <Hamburger
              onClick={() => handleOpenMenu()}
              className="text-white z-30 absolute top-5 cursor-pointer right-5"
            />
            <Cart className="cursor-pointer" />
            <Button>
              <User />
            </Button>
            <Button>
              <AddUser />
            </Button>
            <Messenger className="cursor-pointer " />
            <Notify className="cursor-pointer " />
          </div>
          <ItemsContainer>
            {ItemsNav.map((item, index) => (
              <li
                key={index}
                className="py-[5px]   list-none border-transparent  hover:shadow-md border-[0.25px] hover:border-white  text-center text-white hover:cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ItemsContainer>
        </MobileNav>
      </div>
    </Nav>
  )
}
