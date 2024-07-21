import marioImage from "../assets/authors/mario.webp";
import joshuaImage from "../assets/authors/joshua.webp";
import erikaImage from "../assets/authors/erika.webp";
import emiImage from "../assets/authors/emi.png";

export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "emi",
    slug: "emi",
    image: emiImage,
    bio: "emi is a software developer with a deep passion for finding the best products. ",
  }
];
