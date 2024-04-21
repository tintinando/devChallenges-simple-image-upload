import { SVGProps, FC } from 'react'

const LogoSmallIcon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={26}
    viewBox='0 0 22 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      opacity={0.6}
      d='M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z'
      fill='#9DC4F8'
    />
    <path
      d='M6 6C6 4.89543 6.89543 4 8 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H8C6.89543 20 6 19.1046 6 18V6Z'
      fill='#3662E3'
    />
    <path
      d='M10.2927 14.707C10.3855 14.7999 10.4957 14.8736 10.617 14.9238C10.7384 14.9741 10.8684 15 10.9997 15C11.131 15 11.2611 14.9741 11.3824 14.9238C11.5037 14.8736 11.6139 14.7999 11.7067 14.707L12.9997 13.4141L12.9997 25C12.9997 25.2652 13.105 25.5196 13.2926 25.7071C13.4801 25.8946 13.7345 26 13.9997 26C14.2649 26 14.5192 25.8946 14.7068 25.7071C14.8943 25.5196 14.9997 25.2652 14.9997 25L14.9997 13.4141L16.2927 14.707C16.4808 14.8917 16.7342 14.9947 16.9978 14.9935C17.2614 14.9923 17.5139 14.887 17.7003 14.7006C17.8867 14.5142 17.992 14.2617 17.9932 13.9981C17.9943 13.7345 17.8914 13.4811 17.7067 13.293L14.7067 10.293C14.6138 10.2001 14.5036 10.1264 14.3823 10.0762C14.261 10.0259 14.131 10 13.9996 10C13.8683 10 13.7383 10.0259 13.617 10.0762C13.4957 10.1264 13.3855 10.2001 13.2926 10.293L10.2926 13.293C10.1998 13.3858 10.1261 13.4961 10.0758 13.6174C10.0256 13.7387 9.9997 13.8687 9.9997 14C9.99971 14.1313 10.0256 14.2613 10.0759 14.3827C10.1261 14.504 10.1998 14.6142 10.2927 14.707V14.707Z'
      fill='#C2DAF9'
    />
  </svg>
)
export default LogoSmallIcon
