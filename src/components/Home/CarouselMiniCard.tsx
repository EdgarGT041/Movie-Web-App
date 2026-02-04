import { FiThumbsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { imagepath } from '../../utils/constant';
import { useState } from 'react';
import { type CarouselMovieType } from '../../utils/constant';

interface CarouselMiniCardProps {
  carouselMovies: CarouselMovieType[];
  item: number;
  ind: number;
}

function CarouselMiniCard({ carouselMovies, item, ind }: CarouselMiniCardProps) {
      const [hover, setHover] = useState<null | number>(null);

  return (
        <Link to={"/details/" + carouselMovies[item]?.id}>
          <div
            key={ind}
            className="flex gap-2"
            onMouseEnter={() => setHover(ind)}
            onMouseLeave={() => setHover(null)}
          >
            <img
              src={imagepath + carouselMovies[item]?.poster_path}
              alt=""
              className="w-[100px]"
            />
            <div className="flex flex-col justify-between ml-2 py-2">
              <div className="leading-5">
                <h1 className={`${hover === ind ? "text-yellow-500" : ""}`}>
                  {carouselMovies[item]?.title}
                </h1>
                <h1 className="text-zinc-300 text-md line-clamp-3">
                  {carouselMovies[item]?.overview}
                </h1>
              </div>
              <div className="gap-1 flex items-center text-center">
                {" "}
                <FiThumbsUp />
                <h2>{carouselMovies[item]?.vote_count}</h2>
              </div>
            </div>
          </div>
        </Link>  )
}

export default CarouselMiniCard