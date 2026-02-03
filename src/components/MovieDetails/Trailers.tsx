import { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import YouTube from "react-youtube";
function Trailers({ movieId }: { movieId: string}) {
  const [trailers, setTrailers] = useState<{ key: string; name: string }[]>([]);
  useEffect(() => {
    const fetctchTrailers = async () => {
      try {
        const response = await baseApi.get(
          `/3/movie/${movieId}/videos?language=en-US`,
        );
        const trailerObj = response.data.results.filter(
          (data: { type: string }) => data.type === "Trailer",
        );
        setTrailers(trailerObj);
      } catch (error) {
        console.error(error);
      }
    };
    fetctchTrailers();
  }, [movieId]);
  const opts = {
    height: "280",
    width: "380",
  };
  return (
    <div className="">
      {trailers.length > 0 && 
        <div className="mt-16">
          <h1 className="text-3xl text-yellow-500 font-bold">Watch Trailers</h1>
          <div className="flex flex-wrap">
            {trailers.map((link, ind) => (
              <div key={ind} className="flex flex-col gap-2 m-4">
                <YouTube videoId={link.key} opts={opts} />
                <h1 className="text-xl w-[380px]">{link.name}</h1>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default Trailers;
