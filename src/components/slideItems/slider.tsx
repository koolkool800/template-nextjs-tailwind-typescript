import React, { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { ISlideITrems } from "../items"
import { ListStars } from "../stars"
import { Next, Prev } from "../../assets/svg/Icons"
import { render } from "@headlessui/react/dist/utils/render"
import { Img, ItemContainer, Title } from "./style"

export default function SimpleSlider() {
  const FeaturedItems: ISlideITrems[] = [
    {
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/277826585_1162795751190017_4257293453583233103_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=gF4rplz7FjIAX9L-yWn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJkdUw1Yx8NqHm1fw75XJUBJdfDywrV5zXx6c9Zswo48g&oe=627BB8E3",
      stars: 5,
      price: 142,
      title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    },
    {
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/278089439_534426088026137_3464803764025357339_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=qo8dSzxcOUYAX-TJ8Mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI9J2AcsLVYoBQc3W-8OJtFcl8EduhLISEv7kp79xqFtQ&oe=627EA498",
      stars: 4,
      price: 142,
      title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    },
    {
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/277593683_3116750328574683_2793256862989580439_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=eE6UjzVRi0QAX_M3JF-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKXvGNerPxsPCs3d5RTfcH4qUx3lV-Hu7bvrowzb_RQCQ&oe=627D508B",
      stars: 5,
      title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
      price: 142,
    },
    {
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/277418295_330845692364507_6908627012738531754_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=vbsv8rZCWLYAX8x-Lty&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIv81_xglpjAFZVr3NM5xwmUNW80vZ8NSlntiv4XLutiw&oe=627B8253",
      stars: 4,
      title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
      price: 142,
    },
    {
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/277889528_387568506710454_9172859704563720280_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=hksuOIpWVecAX97NRLq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKYUKWzzN9ibV2JQlw2BryDtJKGqazhqawDVlX5tzaNHg&oe=627D10EE",
      stars: 2,
      title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
      price: 142,
    },
    {
      image:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/277826450_675896060195194_8102106142593797151_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=PBwD6vyfZjIAX_I2yZ3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJkOw-Of7ME1ZxPSsQt8-76cKrcJ2-dtVvVS9o64drflw&oe=627DA81A",
      stars: 3,
      price: 142,
      title: "Marshall Major IV On-Ear Bluetooth Headphones, Brown",
    },
  ]
  const [sliderRef, setSliderRef] = useState(null)

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          zIndex: 1,
        }}
        onClick={onClick}
      ></div>
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      ></div>
    )
  }
  const sliderSettings = {
    // arrows: true,
    // slidesToShow: 5,
    // slidesToScroll: 1,
    // infinite: true,
    // dots: true,
    // speed: 500,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="" />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="relative py-10 p-4">
      <Slider ref={sliderRef} className="py-4 " {...sliderSettings}>
        {FeaturedItems.map(({ image, title, stars, price }, index) => (
          <ItemContainer key={index}>
            <Img src={image} alt="slide-image" />
            <Title>{title}</Title>
            <span className="flex">
              <ListStars currentStars={stars} />
            </span>
            <span className="text-[#E40F0A] text-[14px]">$ {price}</span>
          </ItemContainer>
        ))}
      </Slider>
    </div>
  )
}
