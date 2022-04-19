import React from "react"
import { BannerContainer, Img, ItemContainer, ItemsContainer } from "./style"
const bannerItems = [
  {
    title: "Sony WH-1000XM4 Wireless Industry...",
    price: "$ 248.99",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277611420_400253731572521_5266521739199419057_n.png?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=VjX5rJztOxoAX9iQKBN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKneK-D_WuURtZrmJTZkke0M1jXNB2mkFiO7A64nTRXmA&oe=627ED4E5",
  },
  {
    title: "Sony WH-1000XM4 Wireless Industry...",
    price: "$ 248.99",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278327538_737391260755538_5381281459160623909_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=mJxWKAgKkCsAX-yPRCU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK9wo6js-VEFCARZZ3wG6-5ztOX4AN3nSt3x0_F1HObfA&oe=627E99D3",
  },
  {
    title: "Sony WH-1000XM4 Wireless Industry...",
    price: "$ 248.99",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/277279966_386582516447383_2510162052412288195_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=DBS3AQ4LksgAX-K90f2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIW4HAkqF1duMqvw1iOxILqoFhbToKxVzxurXke_wz-9w&oe=627C1F87",
  },
  {
    title: "Sony WH-1000XM4 Wireless Industry...",
    price: "$ 248.99",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/278208607_669453190774926_2087021223503968278_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Zpatc8pgExAAX9fmOZI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI61J_1pd5AJf-8pu1y82bFykHzqRCX3yBC7icRvYT2KQ&oe=627DDEC1",
  },
]

export const Banner = () => {
  return (
    <BannerContainer>
      <Img
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/277409559_346506950843245_3683662310621238007_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=GX0U_tAUXQUAX-hN51j&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJdlALEiolm_eufrPR71Gg30BQNLuxcdV167oKkGEk23w&oe=627C4CC4"
        alt="asd"
      />
      <ItemsContainer>
        {bannerItems.map((item, index) => (
          <ItemContainer key={index}>
            <img
              className="w-[150px]   lg:w-[244px] lg:h-[200px] h-[150px] mx-auto  rounded-[10px]"
              src={item.image}
              alt="image-picture"
            />
            <li className="list-none text-[12px] lg:text-sm">{item.title}</li>
            <span className="flex gap-2 items-center text-[14px]">
              {item.price}

              <span className="text-[#B9B7B7] text-[14px] line-through">
                {" "}
                $389.00
              </span>
            </span>
          </ItemContainer>
        ))}
      </ItemsContainer>
    </BannerContainer>
  )
}
