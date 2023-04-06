import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import CarouselItem from "./CarouselItem";
import Link from "next/link";

const HomeCarousel = () => {
  const displayItems = [
    {
      id: 1,
      image: require("./assets/webpic.png"),
      text: "Levis Nyingi",
      link: "/about-me",
    },
    {
      id: 2,
      image: require("./assets/diego-ph-fIq0tET6llw-unsplash.jpg"),
      text: "Skills",
      link: "/skills",
    },
    {
      id: 3,
      image: require("./assets/dylan-gillis-o1T-KexJWaU-unsplash.jpg"),
      text: "Contact Me",
      link: "/contact-me",
    },
  ];
  const sliderItem = displayItems.map((sliderItem) => (
    <SwiperSlide key={sliderItem.id} className="w-fit ">
      <Link href={sliderItem.link}>
        <CarouselItem img={sliderItem.image} middleText={sliderItem.text} />
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className=" flex justify-center relative w-[340px] sm:w-[500px]
      "
      id="homeCarousel"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {sliderItem}
    </Swiper>
  );
};

export default HomeCarousel;
