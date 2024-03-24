import { memo, SVGProps } from 'react';

const Frame6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 864 342' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_f_62_2)'>
      <path
        d='M207.252 38.5L540.752 10C622.752 10 711.252 12.4752 828.752 47.0311C850.252 53.354 854.952 100 853.752 106C852.252 113.5 855.252 144.5 848.252 147C841.252 149.5 850.252 206 838.752 216C829.552 224 834.919 239.833 838.752 257.5C820.586 287.167 759.752 309.7 741.752 316.5C719.252 325 394.252 339.5 305.752 326.5C217.252 313.5 93.7523 246.534 93.7523 257.5C93.7523 272 0.752291 235 10.7523 196L26.7523 136L72.2522 65.5L207.252 38.5Z'
        fill='url(#paint0_linear_62_2)'
      />
      <path
        d='M207.252 38.5L540.752 10C622.752 10 711.252 12.4752 828.752 47.0311C850.252 53.354 854.952 100 853.752 106C852.252 113.5 855.252 144.5 848.252 147C841.252 149.5 850.252 206 838.752 216C829.552 224 834.919 239.833 838.752 257.5C820.586 287.167 759.752 309.7 741.752 316.5C719.252 325 394.252 339.5 305.752 326.5C217.252 313.5 93.7523 246.534 93.7523 257.5C93.7523 272 0.752291 235 10.7523 196L26.7523 136L72.2522 65.5L207.252 38.5Z'
        stroke='black'
      />
    </g>
    <defs>
      <filter
        id='filter0_f_62_2'
        x={-148.5}
        y={-148.5}
        width={1160.93}
        height={638.69}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={79} result='effect1_foregroundBlur_62_2' />
      </filter>
      <linearGradient id='paint0_linear_62_2' x1={128.5} y1={-19} x2={835} y2={304} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#212121' />
        <stop offset={0.496257} stopColor='#112224' />
        <stop offset={1} stopColor='#033137' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Frame6Icon);
export { Memo as Frame6Icon };
