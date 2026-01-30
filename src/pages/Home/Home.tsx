import { useEffect, useState } from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import { baseApi } from '../../api/axiosInstance'
import type { MovieCardType } from '../../utils/constant'
import MovieList from '../../components/Home/MovieList'
function Home() {
const [movies, setmovies] = useState<MovieCardType[]>([])

useEffect(() => {
  const fetchMovies = async () => {
    try {
      const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=1`)
      // console.log(response.data.results)
      setmovies(response.data.results)
    } catch (err) {
      console.log("Fetch Error in homepage Top rated movies", err)
    }
  }
  
  fetchMovies()
}, [])

  return (
    <div className='w-[90%] mx-auto'>
      <HomeSlider></HomeSlider>
      <MovieList movies={movies}></MovieList>
      </div>
  )
}

export default Home