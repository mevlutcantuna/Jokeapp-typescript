import React from "react";
import "./styles/App.scss";
import SearchBar from "./components/SearchBar";
import SingleJokeCard from "./components/SingleJokeCard";
import TwoPartJokeCard from "./components/TwoPartJokeCard";
import { Joke } from "./types";

const App: React.FC = () => {
  const [jokes, setJokes] = React.useState<Joke[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  console.log(jokes);

  return (
    <div className="app">
      <SearchBar setJokes={setJokes} setIsLoading={setIsLoading} />
      {isLoading ? (
        <div>
          <img  alt='loading-gif' src={'https://i1.wp.com/loading.io/mod/spinner/spin/lg.gif'} />
        </div>
      ) : (
        <div>
          {jokes[0] !== undefined ? (
            <div>
              {jokes.map((joke: Joke) => {
                return joke.type === "single" ? (
                  <SingleJokeCard joke={joke} key={joke.id} />
                ) : (
                  <TwoPartJokeCard joke={joke} key={joke.id} />
                );
              })}
            </div>
          ) : (
            <div>bulunamadı</div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
