import type { CarouselMovieType } from "../../utils/constant";
import CarouselMiniCard from "./CarouselMiniCard";
interface HomeCarouselListProps {
  carouselMovies: CarouselMovieType[];
  next: number[];
}   


function HomeCarouselList({ carouselMovies, next }: HomeCarouselListProps) {

  return (
    <div>
      <h1 className="font-bold text-xl text-yellow-500">Upcoming Movies</h1>
      {
      next.map((item, ind) => (
        <CarouselMiniCard key={item} carouselMovies={carouselMovies} item={item} ind={ind}></CarouselMiniCard>

      ))
      }
    </div>
  );
}

export default HomeCarouselList;
