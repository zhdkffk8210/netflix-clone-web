import { fetchMovies } from "@/lib/tmdb";
import { requests } from "@/lib/requests";
import Banner from "@/components/Banner";
import Row from "@/components/Row";
import Header from "@/components/Header";

export default async function Home() {
  const popular = await fetchMovies(requests.fetchPopular);
  const topRated = await fetchMovies(requests.fetchTopRated);
  const action = await fetchMovies(requests.fetchAction);
  const comedy = await fetchMovies(requests.fetchComedy);

  return (
    <div className="bg-black min-h-screen">
      <Header />

      <Banner
        movie={
          popular.results[Math.floor(Math.random() * popular.results.length)]
        }
      />

      <Row title="Popular" movies={popular.results} />
      <Row title="Top Rated" movies={topRated.results} />
      <Row title="Action" movies={action.results} />
      <Row title="Comedy" movies={comedy.results} />
    </div>
  );
}
