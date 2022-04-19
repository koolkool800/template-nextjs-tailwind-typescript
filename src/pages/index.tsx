import { Header } from "../components/header"
import { Navbar } from "../components/header/navbar"
import styled from "styled-components"
import tw from "twin.macro"
import { Banner } from "../components/banner"
import { Sidebar } from "../components/sidebar"
import { FeaturedItems, Items, ListProducts } from "../components/items"
import { SlideItems } from "../components/slideItems"
import { Footer } from "../components/footer"
import { Copyright } from "../components/footer/copyright"
import { Dropdown, DropUp } from "../assets/svg/Icons"
import { useState } from "react"
import { Sidebar2 } from "../components/header/navbar/Sidebar2"

export const Layout = styled.div`
  ${tw` mx-5 lg:mx-40 md:mx-20 `}
`
const BackTopContainer = styled.div`
  ${tw`bg-[#276955] my-10 lg:my-0 p-[10px] opacity-[0.7]`}
`
const BacktTopDesc = styled.p`
  ${tw`font-normal text-[14px] text-center text-white`}
`
export const ColorLayout = styled.div`
  ${tw`bg-custom-primaryColor`}
`
const SidebarSection = styled.div`
  ${tw`flex md:flex-row flex-col  max-w-[1300px]  mx-auto`}
`
const SideBarTitle = styled.p`
  ${tw`flex md:hidden  items-center gap-1 cursor-pointer `}
`
const SlideContainer = styled.div`
  ${tw`max-w-[1300px] my-10  mx-auto`}
`
export default function Home() {
  const [openIRating, setOpenIRating] = useState<boolean>(false)
  return (
    <main className="overflow-x-hidden">
      <ColorLayout>
        <Layout>
          <Header />
        </Layout>
      </ColorLayout>
      <Layout>
        <div className="border-b-2">
          <Navbar />
        </div>
        <Banner />
        <SidebarSection>
          <Sidebar />
          <div className="md:hidden ">
            <SideBarTitle onClick={() => setOpenIRating(!openIRating)}>
              Items Rating
              <span>{openIRating ? <DropUp /> : <Dropdown />}</span>
            </SideBarTitle>
            <Sidebar2 open={openIRating} />
          </div>
          <Items />
        </SidebarSection>
        <SlideContainer>
          <SlideItems title="Other Products Of The Shop" items={ListProducts} />
          <SlideItems
            title="Featured Items You May Like"
            items={FeaturedItems}
          />
        </SlideContainer>
      </Layout>
      <BackTopContainer>
        <BacktTopDesc>Back to top</BacktTopDesc>
      </BackTopContainer>
      <Layout>
        <div className="max-w-[1300px] mx-auto">
          <Footer />
        </div>
      </Layout>
      <div className="max-w-[1300px] mx-auto">
        <Copyright />
      </div>
    </main>
  )
}

/*

  
/*
wrapper max-w flex items-center justify-center

container { 

  max-w-xl w-full 
}
*/
