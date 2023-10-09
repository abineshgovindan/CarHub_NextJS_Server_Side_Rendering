"use client";
import Image from "next/image"
import { CustomButtons } from "."

const Hero = () => {

  const handleScroll =  ()=>{

  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experiences with 
          our effortless booking process.
        </p>
         <CustomButtons
            title="Explore Cars"
            containerStyle = "bg-primary-blue text-white rounded-full mt-10"
            handleClick = {handleScroll}/>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
           <Image src="/hero.png"
           alt="heroTag"
           fill className="object-contain"
           />
           </div>
           <div className="hero__image-overlay">
           
        </div>
      </div>
    </div>
  )
}

export default Hero