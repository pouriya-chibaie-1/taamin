import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArticleCard from "../components/articleCard/ArticleCard";
import ArticleMostRead from "../components/ArticleMostRead/ArticleMostRead";
import Gradient from "../components/gradient/Gradient";

const data = [
  {
    name: "علت خاموش شدن ماشین در ۸ حالت مختلف",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    imageUrl: "https://via.placeholder.com/200x140.png",
  },
  {
    name: "علت خاموش شدن ماشین در ۸ حالت مختلف",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    imageUrl: "https://via.placeholder.com/200x140.png",
  },
  {
    name: "علت خاموش شدن ماشین در ۸ حالت مختلف",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    imageUrl: "https://via.placeholder.com/200x140.png",
  },
  {
    name: "علت خاموش شدن ماشین در ۸ حالت مختلف",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    imageUrl: "https://via.placeholder.com/200x140.png",
  },
  {
    name: "علت خاموش شدن ماشین در ۸ حالت مختلف",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    imageUrl: "https://via.placeholder.com/200x140.png",
  },
];

export default function Articles() {
  return (
    <div className="w-full max-w-[1200px] mx-auto rounded bg-gray-100">
      {/* <Header /> */}
      <Gradient
        header="مقالات"
        pathString={`فروشگاه آنلاین مستر یدکی > مقالات`}
      />
      <div className="flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start lg:justify-start w-full md:w-11/12 sm:h-min mx-auto py-6 px-10 md:px-0 ">
        {/* <div className="w-5/6 grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] gap-y-6 md:gap-x-3 lg:gap-x-3"> */}
        <div className="w-full flex flex-wrap justify-start gap-4 mb-10 md:mb-10 lg:mb-0">
          {data?.map((element, index) => {
            return (
              <ArticleCard
                key={index}
                name={element.name}
                imageUrl={element.imageUrl}
                content={element.content}
              />
            );
          })}
          {/* <ArticleCard
            name="علت خاموش شدن ماشین در ۸ حالت مختلف"
            imageUrl="https://via.placeholder.com/200x140.png"
            content={`خودرو به چه دلیلی بعد از استارت خوردن خاموش میشود؟ دلیل خاموش شدن ماشین در حال حرکت چیست؟ در این مقاله از مستریدکی، درباره دلایل خاموش شدن `}
          /> */}
          {/* <ArticleCard
            name="علت خاموش شدن ماشین در ۸ حالت مختلف"
            imageUrl="https://via.placeholder.com/200x140.png"
            content={`درو به چه دلیلی بعد از استارت خوردن `}
          />
          <ArticleCard
            name="علت خاموش شدن ماشین در ۸ حالت مختلف"
            imageUrl="https://via.placeholder.com/200x140.png"
            content={`درو به چه دلیلی بعد از استارت خوردن `}
          />
          <ArticleCard
            name="علت خاموش شدن ماشین در ۸ حالت مختلف"
            imageUrl="https://via.placeholder.com/200x140.png"
            content={`درو به چه دلیلی بعد از استارت خوردن `}
          /> */}
        </div>
        <div className="flex flex-col h-full space-y-4 sm:w-full md:w-full lg:w-auto items-center border">
          <ArticleMostRead />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
