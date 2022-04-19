import React from "react"
import { Next, Prev } from "../../assets/svg/Icons"
import { ISlideITrems } from "../items"
import { ListStars } from "../stars"
import SimpleSlider from "./slider"

interface IProps {
  title: string
  items: ISlideITrems[]
}

export const SlideItems = (props: IProps) => {
  const { items, title } = props
  return (
    <>
      <h1 className="font-medium text-[20px] text-[#1B1B1B] ">{title}</h1>
      {/* <div className="flex justify-center items-center w-full my-20 gap-4 relative">
        <Prev />
        {items.map(({ image, title, stars, price }, index) => (
          <div className="w-[203px] flex flex-col gap-2 hover:cursor-pointer hover:shadow-lg hover:rounded-[10px] p-1">
            <img className="w-[203px]" src={image} alt="slide-image" />
            <p className="text-custom-primaryColor font-normal text-[14px]">
              {title}
            </p>
            <span className="flex">
              <ListStars currentStars={stars} />
            </span>
            <span className="text-[#E40F0A] text-[14px]">$ {price}</span>
          </div>
        ))}
        <Next />
      </div> */}
      <SimpleSlider />
    </>
  )
}
