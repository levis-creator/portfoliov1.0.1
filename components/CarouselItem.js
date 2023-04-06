
import Image from 'next/image';
import styles from '@/styles/CarouselItem.module.css'

const CarouselItem = ({img, middleText}) => {
    return (
        <div className='h-80 sm:h-96 m-0'>
            <Image 
            src={img} className="rounded-full object-cover h-64 sm:h-72 md:h-80 w-64 sm:w-72 md:w-80 mx-auto relative"
            alt={middleText}/>
            <div className={`${styles.carouselText} 
            ${styles.carouselTextPosition} 
            ${styles.carouselTextTransform}`}>
                {middleText}</div>  
        </div>
    );
}

export default CarouselItem;