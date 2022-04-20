import React from "react"

export const Item: React.FC<{ title: string; items: Array<string> }> = ({
  title,
  items,
}) => {
  return (
    <div className="float-left w-1/2 min-h-[250px]">
      <div className="max-w-[300px]  mx-auto">
        <h1 className="text-custom-primaryColor hover:cursor-pointer md:text-[14px] text-[12px] lg:text-[16px] lg:text-base font-medium">
          {title}
        </h1>
        <ul className="mt-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <li
              className="lg:text-[14px] hover:cursor-pointer md:text-[12px] text-[10px] text-[#1B1B1B] font-normal"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
