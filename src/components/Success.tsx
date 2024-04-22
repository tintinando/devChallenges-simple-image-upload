import { FC, useEffect, useState } from "react";
import { Button } from "./Button";
import LinkIcon from "../icons/Link";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "../icons/Download";

interface Props {
  urlImage: string
}

export const Success: FC<Props> = ({ urlImage }) => {
  const [clipboardAlert, setClipboardAlert] = useState<Boolean | null>(false) // true = OK, null = error
  const navigate = useNavigate()

  // go to root if there isn't image
  useEffect(() => {
    if (urlImage === '') navigate('/')
  }, [urlImage])

  // turn off clipboard alert after 1,5 seconds
  useEffect(() => {
    if (clipboardAlert === false) return
    setTimeout(() => setClipboardAlert(false), 1500)
  }, [clipboardAlert])

  // download file, create blob, create anchor, click it
  const handleDownload = async () => {
    try {
      const response = await fetch(urlImage)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(new Blob([blob]))
      const filename = urlImage.split('/').pop()
      const $a = document.createElement('a')
      $a.href = url
      $a.setAttribute('download', filename ?? 'dd')
      document.body.appendChild($a)
      $a.click()
      document.body.removeChild($a)
    } catch (error) {
      console.error('Error in download ', error)
    }
  }

  const handleShare = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(urlImage)
      setClipboardAlert(true)
    } catch {
      setClipboardAlert(null)
    }
  }

  return (
    <div className="relative flex flex-col text-textDark">
      <div className={`transition-opacity duration-200 absolute top-2 left-2 p-4 rounded-md bg-green-800/90 ${clipboardAlert === true ? 'opacity-100' : 'opacity-0'}`}>Copied successfully</div>
      <div className={`transition-opacity duration-200 absolute top-2 left-2 p-4 rounded-md bg-red-800/90 ${clipboardAlert === null ? 'opacity-100' : 'opacity-0'}`}>Error on copy</div>

      <div className='bg-secondaryLight dark:bg-secondaryDark dark:text-textDark rounded-xl overflow-hidden'>
        <div className='w-[514px] h-[316px] flex flex-col justify-center items-center border-[1px] border-dashed border-borderColor dark:border-buttonDark rounded-md dark:text-textDark m-3'>
          <img className='h-full w-full object-contain' src={urlImage} />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full justify-center py-3">
        <Button onClick={handleShare}><LinkIcon />Share</Button>
        <Button onClick={handleDownload}><DownloadIcon />Download</Button>
      </div>
    </div>
  )
}