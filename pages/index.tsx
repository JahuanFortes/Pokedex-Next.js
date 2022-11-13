import { NextApiRequest, NextApiResponse } from "next";

const pokemon = {
  count: 1154,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
    {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon/10/",
    },
    {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon/11/",
    },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/12/",
    },
    {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon/13/",
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/14/",
    },
    {
      name: "beedrill",
      url: "https://pokeapi.co/api/v2/pokemon/15/",
    },
    {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon/16/",
    },
    {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon/17/",
    },
    {
      name: "pidgeot",
      url: "https://pokeapi.co/api/v2/pokemon/18/",
    },
    {
      name: "rattata",
      url: "https://pokeapi.co/api/v2/pokemon/19/",
    },
    {
      name: "raticate",
      url: "https://pokeapi.co/api/v2/pokemon/20/",
    },
  ],
};

export default function Home() {
  return (
    <>
      <main className=" bg-red-600 ">
        <div className=" m-auto text-center">
          <h1 className=" font-semibold  text-lg text-slate-100 bg-zinc-800">
            Pokédex
          </h1>

          <section className=" my-10 max-w-xs flex mx-40 bg-gray-400 rounded-md p-5">
            <div className=" mx-auto w-40 h-40 bg-slate-100"></div>
          </section>

          <section className=" my-10 max-w-xs flex flex-row mx-auto bg-gray-400 rounded-md p-5">
            <ul className="  w-2/5 mx-auto overflow-y-scroll bg-slate-100">
              {pokemon.results.map((value) => (
                <li className=" hover:bg-slate-200" key={value.name}>
                  <img src="" alt=""></img>
                  <div className=" w-6  h-6 ">{value.name}</div>
                </li>
              ))}
              <li></li>
            </ul>
          </section>
        </div>
      </main>

      <footer className=" bg-zinc-800 text-center text-slate-100 ">
        <h2>@Jahuan Fortes 2022</h2>
      </footer>
    </>
  );
}
