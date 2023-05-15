import Link from 'next/link'
import React from 'react'




const Logo = () => {
  return (
    
      <Link href="/" whileHover={{ scale: 1.5 }}>
        <img
          src="../logo.png"
          className="w-full xl:max-h-24 max-h-[3rem] cursor-pointer m-2 hover:animate-pulse "
        ></img>
      </Link>
    
  );
}

export default Logo


