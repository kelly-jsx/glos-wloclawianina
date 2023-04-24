import Image from "next/image";
import { MainArticle } from "./MainArticle";
import { Carousel } from "./Carousel/Carousel";

export const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      imgUrl: "https://source.unsplash.com/random/900×700/?fruit",
      categories: ["Category 1", "Category 2"],
    },
    {
      id: 2,
      title: "Article 2",
      imgUrl: "https://source.unsplash.com/random/900×700/?fruit",
      categories: ["Category 1", "Category 2"],
    },
    {
      id: 3,
      title: "Article 3",
      imgUrl: "https://source.unsplash.com/random/900×700/?fruit",
      categories: ["Category 1", "Category 2"],
    },
    {
      id: 4,
      title: "Article 4",
      imgUrl: "https://source.unsplash.com/random/900×700/?fruit",
      categories: ["Category 1", "Category 2"],
    },
    {
      id: 5,
      title: "Article 5",
      imgUrl: "https://source.unsplash.com/random/900×700/?fruit",
      categories: ["Category 1", "Category 2"],
    },
  ];

  return (
    <div className="flex flex-col w-screen gap-3 py-4 bg-base-200">
      <MainArticle />
      <Carousel articles={articles} />
      <button className="mx-auto btn btn-primary">Zobacz więcej tekstów</button>
    </div>
  );
};
