import { useEffect, useState, useCallback } from 'react'
import { category, type MovieCardType } from '../../utils/constant'
import { baseApi } from '../../api/axiosInstance'
import MovieList from '../../components/Home/MovieList';
import LoadMoreButton from '../../components/Button/LoadMoreButton';

interface pageType {
  [key: string]: number
}

function Movies() {
  const [filter, setFilter] = useState(category[0].name);
  const [nowplaying, setNowPlaying] = useState<MovieCardType[]>([]);
  const [popular, setPopular] = useState<MovieCardType[]>([]);
  const [topRated, setTopRated] = useState<MovieCardType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieCardType[]>([]);
  
  const [pages, setPages] = useState<pageType>({ 'now_playing': 1, 'popular': 1, 'top_rated': 1, 'upcoming': 1 });

  const toggleSelection = (name: string) => {
    setFilter(name)
  }

  const fetchMoviesByCategory = useCallback(async (path: string, page: number) => {
    try {
      const response = await baseApi.get(`/3/movie/${path}?language=en-US&page=${page}`);
      const newResults = response.data.results;

      const updateState = (setter: React.Dispatch<React.SetStateAction<MovieCardType[]>>) => {
        if (page === 1) {
          setter(newResults);
        } else {
          setter(prev => [...prev, ...newResults]);
        }
      };

      switch (path) {
        case "now_playing":
          updateState(setNowPlaying);
          break;
        case "popular":
          updateState(setPopular);
          break;
        case "top_rated":
          updateState(setTopRated);
          break;
        case "upcoming":
          updateState(setUpcoming);
          break;
        default:
          break;
      }

    } catch (err) {
      console.log("fetch movies by category error", err);
    }
  }, []);

  const handleLoadMore = () => {
    const currentCategory = category.find(item => item.name == filter);
    if (currentCategory) {
      const path = currentCategory.path;
      const nextPage = pages[path] + 1;

      setPages(prev => ({
        ...prev,
        [path]: nextPage
      }));
      
      fetchMoviesByCategory(path, nextPage);
    }
  }
  useEffect(() => {
    const current = category.find((item) => item.name == filter);
    if (current) {
        fetchMoviesByCategory(current.path, 1);
    }
    
  }, [filter, fetchMoviesByCategory]);

  return (
    <div className='w-[90%] mx-auto mt-4'>
      <h1 className='text-3xl font-bold text-yellow-500'>Explore Movies</h1>
      <div className="flex mt-2">
        {
          category.map((item, ind) => (
            <div key={ind} className="">
              <button className='md:text-base sm:text-sm text-xs font-semibold lg:w-44 md:w-40 sm:w-36 p-2 h-10 hover:bg-[#121212]'
                onClick={() => toggleSelection(item.name)}
              >{item.name}
              </button>
              <div className={'h-0.5 bg-yellow-500 mx-auto ' + (filter == String(item.name) ? 'w-full' : 'w-0 duration-200')}></div>
            </div>
          ))
        }
      </div>
      
      {filter == "Now Playing" && <MovieList movies={nowplaying} />}
      {filter == "Popular" && <MovieList movies={popular} />}
      {filter == "Top Rated" && <MovieList movies={topRated} />}
      {filter == "Upcoming" && <MovieList movies={upcoming} />}
      
      <div onClick={handleLoadMore}>
        <LoadMoreButton />
      </div>

    </div>
  )
}

export default Movies