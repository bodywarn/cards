import { actor } from "../types/type";

const actors: actor[] = [
  {
    id: "1",
    name: "Ninja",
    image: "ninja.png",
    description: "This ninja is the last survivor of the planet Olbia.",
  },
  {
    id: "2",
    name: "Black Alien scum",
    image: "black-alien-scum.png",
    description: "Red Scum is the natural born enemy for Ninjas.",
  },
  {
    id: "3",
    name: "Death Smokie",
    image: "death-smokie.png",
    description: "Fucked up ...Not fun to meet at all",
  },
  {
    id: "4",
    name: "Angry Ping",
    image: "angry-ping.png",
    description: "The greatest of all monsters",
  },
];

export const getPosts = () => actors;

export const getById = (id: string) => {
  return actors.find((post) => post.id === id);
};
