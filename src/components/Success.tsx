import { FC, useEffect } from "react";
import { API_URL } from '../constants'
import { Button } from "./Button";
import LinkIcon from "../icons/Link";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "../icons/Download";

interface Props {
  urlImage: string
}

export const Success: FC<Props> = ({ urlImage }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (urlImage === '') navigate('/')
  }, [urlImage])

  const handleShare = (): void => {

  }

  return (
    <div className="flex flex-col text-textDark">
      <div className='bg-secondaryLight dark:bg-secondaryDark dark:text-textDark rounded-xl overflow-hidden'>
        <div className='w-[514px] h-[316px] flex flex-col justify-center items-center border-[1px] border-dashed border-borderColor dark:border-buttonDark rounded-md dark:text-textDark m-3'>
          <img className='h-full w-full object-contain' src={API_URL + urlImage} />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full justify-center py-3">
        <Button onClick={handleShare}><LinkIcon />Share</Button>
        <a href={API_URL + urlImage} download='dd' target="_blank" rel="noreferrer">
          <Button><DownloadIcon />Download</Button>
        </a>
      </div>
    </div>
  )
}