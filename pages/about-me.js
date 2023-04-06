import Head from 'next/head';
import  Image  from 'next/image';

import img from '@/components/assets/webpic.png';
import Link from 'next/link';
import Footer from '@/components/Footer';

const page= () => {
    return (
        <div className='w-screen h-[calc(100vh_-_62px)]   flex flex-col justify-between'>
         <Head>
        <title>About me</title>
        <meta name="description" content="about levis nyingi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' w-full max-h-full block mx-auto m-0 lg:flex lg:flex-row items-center lg:pt-20 lg:justify-between  lg:px-[97px]'>
        <div className='h-[375px] flex items-end lg:w-fit ' >

        <Image height={256}
        width={256}
        src="/assets/images/webpic.png"
        className='mx-auto h-64 sm:h-72 w-64 sm:w-72 lg:w-96 lg:h-96 rounded-full  '/>
        </div>
        <div className='w-full p-11 flex flex-col items-center space-y-5 lg:order-first lg:p-0 lg:items-start lg:w-[460px] ' >
        <div className=' text-center font-semibold text-2xl leading-relaxed sm:text-3xl sm:px-24 md:px-48 lg:p-0 lg:text-5xl lg:font-bold lg:text-left lg:leading-[57.6px]   '>
        Hello, I’m Levis Nyingi
        a full-stack  Developer
        and UI/UX Designer
        </div>
        {/* the button */}
        <Link href="/contact-me">
        <div className='button'>
        <div className='text-xl mx-auto'>
            More
        </div>
        </div>
        
        </Link>
        </div>
        
      </div>
      <div className='bottom-0'>
      <Footer/>
      </div>
        </div>
    );
}

export default page;