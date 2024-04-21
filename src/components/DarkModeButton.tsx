import { FC } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import MoonFillIcon from '../icons/MoonFill'
import SunFillIcon from '../icons/SunFill'

export const DarkModeButton: FC = () => {
  const { isDarkTheme, toggleTheme } = useDarkMode()

  const handleClick = (): void => {
    toggleTheme()
  }

  return (
    <figure
      onClick={handleClick}
      className='flex justify-center items-center bg-white dark:bg-buttonDark border-[1px] border-borderColor dark:border-none w-[38px] h-[38px] rounded-md cursor-pointer hover:brightness-95 dark:hover:brightness-110'
    >
      {
        isDarkTheme
          ? <SunFillIcon className='fill-[#4D5562] dark:fill-primaryLight stroke-[#4D5562] dark:stroke-primaryLight' />
          : <MoonFillIcon className='fill-[#4D5562] dark:fill-primaryLight' />
      }
    </figure>
  )
}
