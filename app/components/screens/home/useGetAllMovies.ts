import { MovieService } from "@/services/movie.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllMovies = () => {
  const { data: movies, isLoading } = useQuery(['get movies'], () => MovieService.getAll(), {
		
    // по-хорошему это надо делать через сервак, если есть доступ к бэкенду
    select: data => data.slice(0, 10)
	})

  return { movies, isLoading}
}