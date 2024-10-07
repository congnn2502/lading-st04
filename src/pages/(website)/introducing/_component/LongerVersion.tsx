import { Link } from "react-router-dom";
import {ImageGoals} from "../img";
import { ImageSAD } from "../img";
import { LinkAi } from "../Link";
import { LinkDiet } from "../Link";

const LongerVersion = () => {
  return (
    <>
      <section className="">
        <h2 className="font-black text-[1.5em] mb-[0.67em] mt-[0.67em] font-helvetica block">
          Longer Version
        </h2>
        <p className="mt-[1em] mb-[1em] block">It’s here!</p>
        <p className="mt-[1em] mb-[1em] block">
          The app my brother and I have been dreaming about for years.
        </p>
        <p className="mt-[1em] mb-[1em] block">And we’ve built it.</p>
        <p className="mt-[1em] mb-[1em] block">
          In 2017,{" "}
          <Link to={LinkAi} className="text-blue-600 underline">
            I started learning machine learning/AI
          </Link>{" "}
          with the explicit goal of “Combine AI with my knowledge of fitness and
          nutrition to help the world move more and eat better.”
        </p>

        <img className="mx-auto max-w-[100%] h-auto" src={ImageGoals} alt="" />

        <p className="mt-[2px] text-center mb-[5px] block italic">
          The initial goals I wrote in 2017 when I started learning AI and
          machine learning with my self-created AI Masters Degree.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is the nutrition part of that goal.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          It’s designed to be an easy and fun way to learn about whole foods.
        </p>
        <p className="mt-[1em] mb-[1em] block">I say whole foods on purpose.</p>
        <p className="mt-[1em] mb-[1em] block">
          Because Nutrify focuses on foods you could forage for or farm or make
          in your kitchen.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          As in, foods without barcodes or packaging.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If Nutrify has one central dogma, it’s that.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We believe whole foods are healthier than ultra-processed foods.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          When I studied nutrition and food science at university, that was the
          central point.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Basically any diet other than the{" "}
          <Link to={LinkDiet} className="text-blue-600 underline">
            {" "}
            Standard American Diet
          </Link>{" "}
          (SAD for short, funny), a diet full of ultra-processed foods, is a
          good alternative (AKA diets full of whole foods).
        </p>

        <img className="mx-auto max-w-[100%] h-auto" src={ImageSAD} alt="" />

        <p className="mt-[2px] text-center mb-[5px] block italic">
          The Standard American Diet (SAD for short). If I learned anything in a
          nutrition and food science degree it's that nutrition can be summed up
          by avoiding foods like this. And that most of food science is
          dedicated to making foods like this.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          There were also many fun and interesting things I’d learn about food
          but seem to forget whenever I actually wanted to remember them.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          In other words, I’d remember the information for passing exams but not
          when I was looking at food or eating it.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          When I learned about computer vision I had the idea of bringing this
          knowledge to the food.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          As in, use the camera as the intelligence layer.
        </p>
        <p className="mt-[1em] mb-[1em] block">This is of course, not new.</p>
        <p className="mt-[1em] mb-[1em] block">
          Computer vision has been used for many different use cases. Even for
          identifying foods in other apps.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify’s differentiating factor is that it focuses on food categories
          and discovery rather than counting calories.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Because if you’re eating whole foods, moving often and sleeping well,
          you don’t need to count calories.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          To keep it simple, I love food and I love machine learning.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is the love child of these two passions.
        </p>
      </section>
    </>
  );
};

export default LongerVersion;
