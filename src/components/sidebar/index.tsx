import React, { ReactNode, useState } from "react"
import {
  AutomotiveIcon,
  EarbudIcon,
  ElectricIcon,
  FilmIcon,
  HeadphoneIcon,
  HomeIcon,
  IndustrialIcon,
  MusicalIcon,
  MusicIcon,
  OfficeIcon,
  RecordingIcon,
  SportIcon,
  TvIcon,
} from "../../assets/svg/category/Icons"
import { Dropdown } from "../../assets/svg/Icons"
import { ListStars } from "../stars"
import { PickItem } from "./Exam"
import { SideBar } from "./style"

interface ISidebaritems {
  img: ReactNode
  title: String
}

const SidebarItems: ISidebaritems[] = [
  {
    img: <ElectricIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <TvIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <IndustrialIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <MusicalIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <HomeIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <AutomotiveIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <OfficeIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <SportIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <MusicIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <RecordingIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <HeadphoneIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <EarbudIcon />,
    title: "Portable Bluetooth Speakers",
  },
  {
    img: <FilmIcon />,
    title: "Portable Bluetooth Speakers",
  },
]

const plans = [4, 3, 2, 1]

const brands = ["MARSHALL", " JBL", "BOSE"]
const brands2 = ["Our Brands"]
const brands3 = ["Enegy Star"]
const brands4 = ["Include Out of Stock"]
const brands5 = ["New", " Used"]
export const Sidebar = () => {
  const [brandSelected, setBrandSelected] = useState<string>("")
  const [plansSelected, setPlansSelected] = useState<number>(0)

  return (
    <SideBar>
      <div>
        <h1 className="py-6 text-[16px] font-normal text-[#1B1B1B]">
          Department
        </h1>
        <div className="flex flex-col gap-[20px]  px-1  md:px-2">
          {SidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 cursor-pointer hover:cursor-pointer p-1 hover:shadow-lg hover:rounded-[10px]"
            >
              {item.img}
              <p className="text-[14px]">{item.title}</p>
            </div>
          ))}
        </div>
        <h1 className="flex items-center gap-2 text-custom-primaryColor py-4 text-[14px] font-normal">
          <span>
            <Dropdown color="#276955" />
          </span>{" "}
          See Fewer Deparments
        </h1>
      </div>
      <div className="py-4">
        <h1>Review Rating</h1>
        <PickItem
          options={plans}
          optionSelected={plansSelected}
          renderOption={(option) => <ListStars currentStars={option} />}
          haveCheckBox
          onSelect={(plan) => setPlansSelected(plan)}
        />
      </div>
      <div className="py-4">
        <h1>Brand</h1>
        <PickItem
          options={brands}
          optionSelected={brandSelected}
          renderOption={(option) => (
            <h1 className="font-normal text-[14px]">{option}</h1>
          )}
          haveCheckBox
          onSelect={(brand) => setBrandSelected(brand)}
        />
      </div>
      <div className="py-4">
        <h1>From Our Brands</h1>
        <PickItem
          options={brands2}
          optionSelected={brands2[0]}
          renderOption={(option) => <h1>{option}</h1>}
          haveCheckBox
          onSelect={() => {}}
        />
      </div>
      <div className="py-4">
        <h1>Certification</h1>
        <PickItem
          options={brands3}
          optionSelected={""}
          renderOption={(option) => <h1>{option}</h1>}
          haveCheckBox
          onSelect={() => {}}
        />
      </div>
      <div className="py-4">
        <h1>Condition</h1>
        <PickItem
          options={brands5}
          optionSelected={""}
          renderOption={(option) => <h1>{option}</h1>}
          onSelect={() => {}}
        />
      </div>
      <div className="py-4">
        <h1>Availability</h1>
        <PickItem
          options={brands4}
          optionSelected={brands4[0]}
          renderOption={(option) => <h1>{option}</h1>}
          haveCheckBox
          onSelect={() => {}}
        />
      </div>
    </SideBar>
  )
}
