import type { CarouselMovie } from '../../utils/constant';
import { imagepath } from '../../utils/constant';
import { FiThumbsUp } from 'react-icons/fi';

interface HomeCarouselListProps {
    next: number[];
    carouselMovies: CarouselMovie[];
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {

  return (
    <div>
        <h1 className='font-bold, text-xl text-yellow-500'>Upcoming Movies</h1>
        {
            next.map((item,index)=>(
                <div  key={index} className='flex'>
                    <img src={imagepath+carouselMovies[item]?.poster_path} alt='' className='w-[100px]'/>
                    <div className='flex flex-col justify-between ml-2 py-2'>

                    <div className='leading-5'>
                        <h1 >{carouselMovies[item]?.title}</h1>
                        <h1 className='text-zinc-300 text-md line-clamp-3'>{carouselMovies[item]?.overview}</h1>
                    </div>
                    <div className='gap-1 flex items-center text-center'> <FiThumbsUp/>
                        <h2>{carouselMovies[item]?.vote_count}</h2>
                    </div>

                    </div>
                </div>
            ))
        }
    </div>
  )
}
 
export default HomeCarouselList