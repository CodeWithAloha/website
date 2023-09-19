import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Logo = () => {
  return (
    
      <Link href="/" whileHover={{ scale: 1.5 }}>
        <Image
          alt='This is a logo of Code with Aloha represented by the name, as well as an orange lightbulb with the torch like yellow flame akin to a sunset scene.'
          src="../logo.png"
          className="xl:max-h-24 max-h-[3rem] cursor-pointer m-2 hover:animate-pulse"
        />
      </Link>
    
  );
}

export default Logo


