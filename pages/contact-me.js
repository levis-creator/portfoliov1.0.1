import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineDownCircle } from 'react-icons/ai';
const page = () => {
    const socialMedia=[{
        id:1,
        socialplatform:'instagram',
        username:'@levisgoefry'
    },
    {
        id:2,
        socialplatform:'Twitter',
        username:'@levisgoefry'
    },
    {
        id:3,
        socialplatform:'Github',
        username:'@levis-creator'
 
    },
    
]
const displaySocial=socialMedia.map((item)=>(
    <div className="flex flex-col items-center" key={item.id}>
                    <div className="font-bold sm:text-lg">
                    {item.socialplatform}
                    </div>
                    <div className="font-light sm:text-lg">
                       {item.username}
                    </div>
                </div>
))
    return (
        <div className='flex flex-col justify-between h-[calc(100vh_-_85px)] w-screen'>
         <Head>
            <title>Contact me</title>
            <meta name="description" content="about levis nyingi" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col items-center space-y-8 pt-20 lg:pt-7 ">
            <div className="font-light text-2xl text-center p-10 sm:text-3xl sm:px-20 lg:px-80 lg:text-5xl">
            I’m  Levis Nyingi, full stack
            developer and UI/UX designer
            based in Kenya. Always 
            available to talk about 
            new opportunities
            </div>
            <Link href="/files/Levis Nyingi CV.pdf">
            <div className="button w-fit flex items-center gap-1 text-2xl">
                <AiOutlineDownCircle />
                Resume  
            </div>
            </Link>
            <div className="grid grid-cols-3 space-x-2 space-y-2 items-center">
               {displaySocial}
        <div className="flex col-span-7 flex-col items-center">
                    <div className="font-bold sm:text-lg" >
                    Email
                    </div>
                    <div className="font-light sm:text-lg">
                    levis.nyingi@gmail.com
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
       </div>
    );
}

export default page;