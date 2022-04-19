import { ReactNode, SVGProps, useState } from "react"
import { RadioGroup } from "@headlessui/react"
import { ListStars } from "../stars"

interface ICheckboxProps extends SVGProps<SVGSVGElement> {}
const CheckBoxIcon: React.FC<ICheckboxProps> = ({ ...rest }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
    />
  </svg>
)
const CheckBoxIcon2: React.FC<ICheckboxProps> = ({ ...rest }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
      fill="currentColor"
    />
  </svg>
)
interface IPickItemProps<T = any, B = boolean> {
  options?: T[]
  optionSelected?: T
  onSelect?: (option: T) => void
  renderOption: (option: T) => ReactNode
  haveCheckBox?: B
}
export const PickItem = <T,>(props: IPickItemProps<T>) => {
  const { options, optionSelected, onSelect, haveCheckBox, renderOption } =
    props

  return (
    <div className="w-full py-2 ">
      <div className="w-full max-w-[250px] mx-auto">
        <RadioGroup value={optionSelected as any} onChange={onSelect}>
          <div className="space-y-2">
            {options.map((option, index) => (
              <RadioGroup.Option key={index} value={option}>
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        {haveCheckBox && (
                          <CheckBoxIcon2
                            className={
                              checked
                                ? "text-custom-primaryColor border-custom-primaryColor border-[1px] p-[2px] rounded-full "
                                : "text-transparent border-custom-primaryColor border-[1px] rounded-full"
                            }
                          />
                        )}
                        {renderOption(option)}
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
