import React from 'react'
import { FiThumbsUp } from "react-icons/fi";

function HomeCarousel() {
  return (
    <div className='relative'>
      <div className="relative w-[900px]">
        <div className="block bg-red-300 aspect-[7/4]"></div>
        <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
      </div>
      <div className="absolute bottom-0 flex items-end gap-4 px-4">
        <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div>
        <div className="flex flex-col gap-1">
          <h1 className='text-4xl text-white'>Harry Potter</h1>
          <h2 className='w-[500px] text-xl line-clamp-3 text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, torquent diam malesuada gravida himenaeos dignissim mollis laoreet ad, morbi velit litora at placerat nam taciti. Iaculis dignissim nostra elementum lacus semper mus at tempor tortor curabitur aliquam, mauris proin egestas curae cras litora fermentum tempus penatibus dictum, ultrices varius netus mattis taciti aliquet fusce sapien fames dapibus. Tempus ad habitasse nam aenean platea augue venenatis pretium justo, habitant erat tristique aptent at id rutrum ligula, sem ullamcorper hac vulputate non mauris imperdiet fusce.</h2>
          <div className="flex items-center gap-1 text-zinc-400 text-xl">
            <FiThumbsUp />
            <h3 className='text-lg'>457</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel