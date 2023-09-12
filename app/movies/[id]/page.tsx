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
    <div>
      <Image
        src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt=""
        width={1198}
        height={449}
      />
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="text-[#9CA3AF] font-bold">{movie.release_date}</p>
        <p className="text-[#9CA3AF] font-bold">{movie.runtime}</p>
      </div>
      <div>
        {movie.genres.map((genre: any) => (
          <span className="font-bold text-[#9CA3AF]" key={genre.id}>
            {genre.name}{" "}
          </span>
        ))}
        <div className="flex items-center gap-2.5 text-[#111827]">
          <Image src="/Star.png" alt="Imdb logo" width={35} height={17} />
          {`${movie.vote_average} | ${movie.vote_count}`}
        </div>
      </div>
      <p className="text-[#9CA3AF] font-bold">{movie.overview}</p>
    </div>
  );
}
