import { Link } from "react-router-dom";
import { ImageIntro } from "../img";
import { LinkDownload, Logo } from "../../Img_Link";


const Intro = () => {
  return (
    <>
      <section className="mb-[1em]">
        <Link to="/">
          <img
            className="max-w-[200px] w-[100%] mx-auto block"
            src={Logo}
            alt=""
          />
        </Link>
        <h1 className="font-black text-[2em] mt-[0.67em] font-helvetica block">
          Introducing Nutrify 1.2: Calorie and Macronutrient Goals, Breakdowns
          and 57 New Foods
        </h1>
        <p className="mt-[2px] text-left mb-[1em] block italic">29 May 2024</p>
        
        <img className="mx-auto max-w-[100%] h-auto" src={ImageIntro} alt="" />
        
        <p className="mt-[1em] mb-[1em] block">
          <Link to={LinkDownload} className="text-blue-600 underline">
            Nutrify 1.2
          </Link>{" "}
          is here!
        </p>
        <p className="mt-[1em] mb-[1em] block">What is Nutrify?</p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is a food tracking and education app focused on whole foods.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          This update brings several helpful features for those who’d like to
          know what their calorie and macronutrient intakes are per whole food.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          It also adds a bunch of new whole foods/drinks to the Nutridex!
        </p>
      </section>
    </>
  );
};

export default Intro;
