import { getYearFromDate } from "@/utils";
import Image from "next/image";

type Props = { params: { id: string } };

async function fetchMovieDetails(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const token = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({ params: { id } }: Props) {
  const movie = await fetchMovieDetails(id);

  return (
    <div className="min-h-screen lg:min-w-[65%]">
      <Image
        className="rounded-lg mx-8 my-8"
        src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="movie poster"
        width={1100}
        height={449}
      />

      <div className="flex justify-between px-12 mb-8">
        <div className="flex justify-between items-center gap-6 text-[#404040] font-semibold text-2xl">
          <h3>{movie.title}</h3>
          <p>{getYearFromDate(movie.release_date)}</p>
          <p>{movie.runtime} minutes</p>
          {movie.genres.map((genre: any) => (
            <span
              className="p-1 font-medium text-base text-[#B91C1C] border rounded-lg border-[#F8E7EB]"
              key={genre.id}
            >
              {genre.name}{" "}
            </span>
          ))}
        </div>
        <div>
          <div className="flex items-center gap-2.5 text-[#111827]">
            <Image src="/Star.png" alt="Imdb logo" width={35} height={17} />
            {`${movie.vote_average} | ${movie.vote_count}`}
          </div>
        </div>
      </div>
      <div className="px-12 mb-10 flex gap-6">
        <div className="font-normal text-xl">
          <p className="text-[#333333] mb-8">{movie.overview}</p>
          <p className="mb-8">
            Director: <span className="text-[#BE123C]">Joseph Kosinski</span>
          </p>
          <p className="mb-8">
            Writers:{" "}
            <span className="text-[#BE123C]">
              Jim Cash, Jack Epps Jr, Peter Craig
            </span>
          </p>
          <p className="mb-8">
            Stars:{" "}
            <span className="text-[#BE123C]">
              Tom Cruise, Jennifer Connelly, Miles Teller
            </span>
          </p>
          <div className="flex items-center gap-5">
            <div className="rounded-lg bg-[#BE123C] text-white px-5 py-3">
              Top rated movie #65
            </div>
            <div>Awards 9 nominations</div>
          </div>
        </div>
        <div className=" space-y-6">
          <div className="flex justify-center items-center gap-2 bg-[#BE123C] w-[360px] h-14 rounded-lg">
            <Image src="/TwoTickets.png" alt="ticket" width={25} height={25} />
            <p className="font-medium text-xl text-white">See ShowTimes</p>
          </div>
          <div className="flex justify-center items-center gap-2 bg-[#BE123C]/10 w-[360px] h-14 rounded-lg">
            <Image src="/ListB.png" alt="ticket" width={25} height={25} />
            <p className="font-medium text-xl">More watch options</p>
          </div>
          <div className="relative rounded-lg">
            <Image src="/ad.png" alt="advertisement" width={360} height={55} />

            <div className="p-2 w-full flex justify-between items-center gap-2 bg-[#12121280]/50 backdrop-blur-sm absolute bottom-0 rounded-lg">
              <Image src="/List.png" alt="ticket" width={25} height={25} />
              <p className="font-medium text-sm text-white">
                The Best Movies and Shows in September
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
