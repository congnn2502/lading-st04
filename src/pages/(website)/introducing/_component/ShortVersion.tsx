import { Link } from "react-router-dom";
import { ImageOverview } from "../img";
import { LinkProduct } from "../Link";
import { LinkDownload, LinkVideo, Logo } from "../../Img_Link";

const ShortVersion = () => {
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
        <h1 className="font-black text-[2em] mb-[0.67em] mt-[0.67em] font-helvetica block">
          Introducing Nutrify
        </h1>
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          Short Version
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is an iOS application designed to make learning about whole
          foods fun and in turn, reduce the intake of ultra-processed foods.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          It works on the premise of “take a photo of food and learn about it”.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          As in, it uses computer vision to identify different whole foods (we
          focus on whole foods rather than barcodes) and displays relevant
          nutrition and storage information about them.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is for anyone who wants to learn more about foods as well as
          about their own food habits and trends.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Due to its fun and interactive design, Nutrify can also be an
          education tool for teaching kids or students about food.
        </p>
        <ul className="list-disc my-[1em] pl-10">
          <li>
            <Link to={LinkProduct} className="text-blue-600 underline">
              See the launch on Product Hunt.
            </Link>
          </li>
          <li>
            <Link to={LinkVideo} className="text-blue-600 underline">
              Watch the launch video on YouTube.
            </Link>
          </li>
          <li>
            <Link to={LinkDownload} className="text-blue-600 underline">
              Download Nutrify
            </Link>{" "}
            on the iOS App Store.
          </li>
        </ul>

        <img className="mx-auto max-w-[100%] h-auto" src={ImageOverview} alt="" />
        
        <p className="mt-[2px] text-center mb-[5px] block italic">
          Take a photo of food and learn about it. Download Nutrify today on the
          Apple App Store.
        </p>
      </section>
    </>
  );
};

export default ShortVersion;
