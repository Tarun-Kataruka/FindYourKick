import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-28 mx-40'>
        <div className='flex '>
            <div className='flex items-center justify-center text-base font-semibold w-44 h-16 border border-solid border-slate-200'>Description</div>
            <div className='flex items-center justify-center bg-slate-200 text-neutral-700 w-44'>Reviews (122)</div>
        </div>
        <div className='flex flex-col gap-6 border border-solid border-slate-200 p-12 pb-20'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed totam deserunt commodi, expedita aspernatur necessitatibus placeat quae quo accusantium voluptatibus. Quo, veritatis ut odio quibusdam nihil sapiente non neque?</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum praesentium itaque ipsam suscipit? Aliquid voluptate, iusto vel inventore dolor laborum facilis minus ratione illum? Facere quo tenetur sit dolorum.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox