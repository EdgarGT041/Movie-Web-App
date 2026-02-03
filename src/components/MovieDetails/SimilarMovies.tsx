import React, { useEffect, useState } from 'react'
import { baseApi } from '../../api/axiosInstance'
import { type MovieCardType } from '../../utils/constant'
import MovieList from '../Home/MovieList'
import LoadMoreButton from '../Button/LoadMoreButton'

function SimilarMovies({ movieId }: { movieId: string }) {
    const [movies, setMovies] = useState<MovieCardType[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchSimilarMovies = async () => {
            try {
                const response = await baseApi.get(`/3/movie/${movieId}/similar?language=en-US&page=${page}`)
                setMovies(prev => [...prev, ...response.data.results])
            } catch (error) {
                console.log("fetch similar movies err", error)
            }
        }

        fetchSimilarMovies()
    }, [page, movieId])

    const handleLoadMore = () => {
        setPage(prev => prev + 1)
    }

    return (
        <div>
            <MovieList movies={movies} title='Similar Movies' />
            <div onClick={handleLoadMore}>
                <LoadMoreButton />
            </div>
        </div>
    )
}

export default SimilarMovies