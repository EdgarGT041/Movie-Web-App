import { useEffect, useState } from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import { baseApi } from '../../api/axiosInstance'
import type { MovieCardType } from '../../utils/constant'
import MovieList from '../../components/Home/MovieList'
import LoadMoreButton from '../../components/Button/LoadMoreButton'
function Home() {
const [movies, setmovies] = useState<MovieCardType[]>([])
const [page, setPage] = useState<number>(1)

useEffect(() => {
  const fetchMovies = async (page: number) => {
    try {
      const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=${page}`)
      // console.log(response.data.results)
      setmovies(prev => [...prev, ...response.data.results])
    } catch (err) {
      console.log("Fetch Error in homepage Top rated movies", err)
    }
  }
  
  fetchMovies(page)
}, [page])

const handlePageUpdate = () => {
  setPage(prev => prev + 1)
}

  return (
    <div className='w-[90%] mx-auto mb-44'>
      <HomeSlider></HomeSlider>
      <MovieList movies={movies} title="Top Rated Movies"></MovieList>
      <div onClick={handlePageUpdate}>
      <LoadMoreButton></LoadMoreButton>

      </div>
      </div>
  )
}

export default Home