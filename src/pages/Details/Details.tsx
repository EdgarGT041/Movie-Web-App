import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import { type MovieDetailType } from "../../utils/constant";
import { imagepath } from "../../utils/constant";
import Trailers from "../../components/MovieDetails/Trailers";
function Details() {
  const params = useParams();
  console.log(params);
  const [details, setDetails] = useState<MovieDetailType>();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await baseApi.get(
          `/3/movie/${params.id}?language=en-US`,
        );
        setDetails(response.data);
      } catch (error) {
        console.log("Fetch Details error", error);
      }
    };

    fetchDetails();
  }, [params]);
  return (
    <div>
      {details && (
        <div className="relative h-fit w-full ">
          <div className="relative ">
            <img
              src={imagepath + details.backdrop_path}
              className="opacity-40 w-full aspect-[7/4] object-center"
              alt="background"
            />
            <div className="absolute bottom-0 h-full w-full _carouselGradient"></div>
          </div>
          <div className="absolute top-0 pb-[100px] w-full">
            <div className="mt-[500px] w-[90%] mx-auto">
              <div className="flex gap-8">
                <img
                  src={imagepath + details.poster_path}
                  className="w-[350px] h-fit"
                  alt=""
                />
                <div className="">
                  <h1 className="text-5xl font-semibold">
                    {details?.original_title}
                    <span className="mx-3 text-4xl">
                      ({details?.release_date?.substring(0, 4)})
                    </span>
                  </h1>
                  <div className="text-xl text-slate-300 mt-2">
                    <h2>{details?.tagline}</h2>
                    <h2 className="mt-2">{details?.overview}</h2>
                    <div className="flex flex-col gap-3 mt-4 text-zinc-300">
                      <h2>
                        Genres:{" "}
                        {details?.genres?.map((genre) => genre.name).join(", ")}
                      </h2>
                      <h2>
                        Rating: {String(details?.vote_average).substring(0, 3)}
                      </h2>
                      <h2>Original Language: {details?.original_language}</h2>
                      <h2>Release Date: {details?.release_date}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <Trailers movieId={params.id!} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
