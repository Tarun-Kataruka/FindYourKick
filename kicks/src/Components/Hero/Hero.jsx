import React, { useEffect,useState } from 'react'
// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"
// import banner_1 from "../Assets/banner_1.jpg"
// import banner_2 from "../Assets/banner_2.avif"
// import banner_3 from "../Assets/banner_3.webp"

const Hero = ({newCollectionRef}) => {
    const scrollToNewCollections = () =>{
        if(newCollectionRef.current){
            newCollectionRef.current.scrollIntoView({behavior:'smooth'});
        }
    }
    return(
    <div className="h-screen bg-custom-gradient flex">
        <div className="flex flex-1 flex-col justify-center gap-5 px-44 leading-4">
            <h2 className='text-2xl text-slate-900 font-semibold'> NEW ARRIVALS</h2>
            <div>
                <div className='flex items-center gap-5'>
                    <p className='text-slate-800 text-8xl font-bold'>NEW</p>
                    <img src={hand_icon} alt='' className='w-24' />
                </div>
                <p className='text-slate-800 text-7xl font-bold'>Collections</p>
                <p className='text-slate-800 text-7xl font-bold'>for everyone</p>
            </div>
            <div onClick={scrollToNewCollections} className='flex justify-center items-center gap-4 w-80 h-16 rounded-3xl mt-7 bg-red-500 text-xl text-white font-medium'>
                <div>Latest collection</div>
                <img src ={arrow_icon} alt='' />
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <img src={hero_img} alt='' />

        </div>
    </div>
    )
}

export default Hero





    // const [currentImage,setCurrentImage] = useState(0)

    // const desktopImages = [
    //    banner_1,
    //    banner_2,
    //    banner_3
    // ]

    // const nextImage = () =>{
    //     if(desktopImages.length-1>currentImage){
    //         setCurrentImage(prev => prev+1)
    //     }
    // }
    // const prevImage = () =>{
    //     if(currentImage != 0){
    //         setCurrentImage(prev => prev -1)
    //     }
    // }
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         if(desktopImages.length -1 >currentImage){
    //             nextImage()
    //         }
    //         else{
    //             setCurrentImage(0)
    //         }
    //     },5000)
    //     return ()=> clearInterval(interval)
    // },[currentImage])

    // return(
    //     <div className='container mx-auto px-4 rounded h-screen '>
    //     <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

    //             <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
    //                 <div className=' flex justify-between w-full text-2xl'>
    //                     <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1 flex items-center justify-center'><FaAngleLeft/></button>
    //                     <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
    //                 </div>
    //             </div>

    //             {/**desktop and tablet version */}
    //           <div className='hidden md:flex h-screen w-full overflow-hidden'>
    //             {
    //                     desktopImages.map((imageURl,index)=>{
    //                         return(
    //                         <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
    //                             <img src={imageURl} className='w-full h-full'/>
    //                         </div>
    //                         )
    //                     })
    //             }
    //           </div>

    //           </div>
    //           </div>
  
