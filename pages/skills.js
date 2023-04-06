import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from '../components/CarouselItem';
import { Pagination } from 'swiper';
import { Autoplay } from 'swiper';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import Footer  from '@/components/Footer';
const skills = () => {
    const skillImage=[{
        id:1,
        label:'Illustrator',
        icon:'https://img.icons8.com/color/480/null/adobe-illustrator--v1.png',
        percentage:'90%'
    },
    {
        id:2,
        label:'Photoshop',
        icon:'https://img.icons8.com/color/480/null/adobe-photoshop--v1.png',
        percentage:'90%'
    },
    {
        id:3,
        label:'After Effect',
        icon:'https://img.icons8.com/color/480/null/adobe-after-effects--v1.png',
        percentage:'90%'
    },
    {
        id:4,
        label:'Adobe Xd',
        icon:'https://img.icons8.com/color/480/null/adobe-xd--v1.png',
        percentage:'90%'
    },
    {
        id:5,
        label:'Figma',
        icon:'https://img.icons8.com/color/480/null/figma--v1.png',
        percentage:'90%'
    },
    {
        id:6,
        label:'Html',
        icon:'https://img.icons8.com/color/480/null/html-5--v1.png',
        percentage:'90%'
    },
    {
        id:7,
        label:'CSS',
        icon:'https://img.icons8.com/color/480/null/css3.png',
        percentage:'90%'
    },
    {
        id:8,
        label:'Javascript',
        icon:'https://img.icons8.com/color/480/null/javascript--v1.png',
        percentage:'90%'
    },
    {
        id:9,
        label:'Bootstrap',
        icon:'https://img.icons8.com/color/480/null/bootstrap.png',
        percentage:'90%'
    },
    {
        id:10,
        label:'Tailwind',
        icon:'https://img.icons8.com/color/480/null/tailwindcss.png',
        percentage:'90%'
    },
    {
        id:11,
        label:'Material UI',
        icon:'https://img.icons8.com/color/480/null/material-ui.png',
        percentage:'90%'
    },
    {
        id:12,
        label:'PHP',
        icon:'https://img.icons8.com/color/480/null/php.png',
        percentage:'90%'
    },
    {
        id:13,
        label:'Firebase',
        icon:'https://img.icons8.com/color/480/null/firebase.png',
        percentage:'90%'
    },
    {
        id:14,
        label:'React js',
        icon:'https://img.icons8.com/color/480/null/react-native.png',
        percentage:'90%'
    },
    
]
const displaySkill=skillImage.map((item)=>(
   <SwiperSlide key={item.id}>
    <div className="flex flex-col items-center">
        <div className=" font-bold text-xl">
            {item.label}
        </div>
       <img src={item.icon} alt={item.label} className="w-80"/>
    </div>
      
   </SwiperSlide>
))
    return (
        <div className='flex flex-col justify-between h-[calc(100vh_-_68px)]'>
         <Head>
            <title>Contact me</title>
            <meta name="description" content="about levis nyingi" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-full pt-10">
        <Swiper
    className="w-full flex justify-center"
      id="homeCarousel"
      autoplay={{
        delay:2000, 
        disableOnInteraction:false
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
            {displaySkill}
    </Swiper>
        </div>
        <Footer/>
        </div>
    );
}

export default skills;