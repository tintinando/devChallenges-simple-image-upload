import { FC, useState } from 'react'
import './App.css'
import LogoIcon from './icons/Logo'
import { DarkModeButton } from './components/DarkModeButton'
import { DropFile } from './components/DropFile'
import { Route, Routes } from 'react-router-dom'
import { Success } from './components/Success'

export const App: FC = () => {
  const [urlImage, setUrlImage] = useState<string>('')

  return (
    <div className='flex flex-col h-screen bg-primaryLight dark:bg-primaryDark'>
      <header className='flex flex-row justify-between items-center p-4 border-b-[1px] border-borderColor dark:border-secondaryDark'>
        <LogoIcon className='fill-primaryDark dark:fill-primaryLight' />
        <DarkModeButton />
      </header>
      <main className='flex justify-center items-center flex-grow'>
        <Routes>
          <Route path='/' element={<DropFile setUrlImage={setUrlImage} />} />
          <Route path='success' element={<Success urlImage={urlImage} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
