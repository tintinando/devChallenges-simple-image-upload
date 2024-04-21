import React, { FC, useEffect, useRef, useState } from 'react'
import ExitIcon from '../icons/Exit'
import { API_URL } from '../constants'

const UploadingFile: FC = () => {
  return (
    <div className='w-[480px] h-[100px] flex flex-col justify-center items-center rounded-md shadow-xl'>
      <p className='text-xs mb-4'><span className='font-bold'>Uploading</span>, please wait...</p>
      <div className='relative overflow-hidden w-[325px] h-[6px] rounded-full bg-borderColor dark:bg-bgProgressDark'>
        <div className='absolute top-0 -left-14 h-full w-14 rounded-full bg-progress animated-bar' />
      </div>
    </div >
  )
}

interface Props {
  setUrlImage: React.Dispatch<React.SetStateAction<string>>
}

export const DropFile: FC<Props> = ({ setUrlImage }) => {
  const [dragOver, setDragOver] = useState(false)
  const [fileIsBig, setFileIsBig] = useState(false)
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!fileIsBig) return
    if (inputRef.current) inputRef.current.value = ''
    setTimeout(() => setFileIsBig(false), 2000)
  }, [fileIsBig])

  const uploadImage = async (file: File): Promise<void> => {
    if (file.size > (2 * 1024 * 1024)) {
      setFileIsBig(true)
      return
    }

    const preset = import.meta.env.VITE_API_PRESET
    const data = new FormData()
    data.append('upload_preset', preset)
    data.append('file', file)
    setUploading(true)

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: data
      })
      const json = await response.json()
      setUploading(false)
      console.log(json)

    } catch (e) {
      setUploading(false)
      console.error('Error in upload image', e)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    setDragOver(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      uploadImage(files[0])
        .catch(console.error)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      uploadImage(files[0])
        .catch(console.error)
    }
  }

  return (
    <>
      <div className='relative bg-secondaryLight dark:bg-secondaryDark dark:text-textDark rounded-xl'>
        {fileIsBig &&
          <div className='absolute bg-red-600/30 rounded-md top-2 left-2 px-4 py-2'>File is too big</div>
        }
        <input type='file' ref={inputRef} accept="image/png, image/gif, image/jpeg" className='hidden' onChange={handleFileChange} />
        {uploading
          ? <UploadingFile />
          : <div
            className='w-[540px] h-[340px] flex flex-col justify-center items-center border-[1px] border-dashed border-borderColor dark:border-buttonDark rounded-md dark:text-textDark m-3'
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            {!dragOver && (
              <>
                <h3 className='mt-4 mb-1 font-medium'>Drag & drop a file or <span>browse files</span></h3>
                <h4 className='text-xs font-light'>JPG, PNG or GIF - Max file size 2MB</h4>
              </>
            )}
            <ExitIcon />
          </div>}
      </div>
    </>
  )
}
