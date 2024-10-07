import { Link } from "react-router-dom";
import { LinkDownload } from "../../Img_Link";

const Faq = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          FAQ
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          <b>What is Nutrify?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is an iOS app that uses computer vision to identify whole
          foods from photos and provides relevant nutrition and storage
          information. It aims to make learning about food fun and informative.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>How does Nutrify work?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          By simply taking a photo of whole food, Nutrify uses a computer vision
          model to identify the food and then displays relevant nutrition
          information. The app focuses on whole foods rather than barcodes or
          foods in packaging.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b> Who can benefit from using Nutrify?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Anyone interested in learning more about food, tracking their food
          habits, discovering new foods, or using it as an educational tool to
          learn about food and nutrition.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b> What features does Nutrify offer?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify's main features include FoodVision AI for identifying foods, a
          Visual Food Diary for tracking what you eat, the Nutridex for
          discovering new foods, and stats and trends analysis over time.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b> Does Nutrify require an internet connection to work?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          No, all image processing happens on-device using the Neural Engine,
          allowing for fast predictions and offline functionality.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>How many foods can Nutrify identify?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Currently, Nutrify is capable of identifying 420 different whole
          foods.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>Is Nutrify free to use?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify can be used to identify and learn about foods for free for up
          to 20 images without an account, and unlimited images with an account.
          Personalized food stats and trends are a paid feature for
          $3.99USD/month or $24.99/year.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>How accurate is Nutrify’s food identification?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          While Nutrify can identify many foods very well, our computer vision
          models aren’t perfect. They will make mistakes. Good news is, you can
          easily correct errors by selecting another option or adding a custom
          food.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>Can Nutrify identify multiple foods in one photo?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Currently, Nutrify focuses on identifying one food item per photo, but
          future updates aim to improve its capability to handle multiple foods
          and complex meals better.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>What sets Nutrify apart from other food tracking apps?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify emphasizes food discovery and learning over calorie counting,
          offering a fun and interactive way to explore nutrition information
          for whole foods.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>How can I download Nutrify? </b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is available for download on the{" "}
          <Link to={LinkDownload} className="text-blue-600 underline">
            {" "}
            iOS App Store.
          </Link>{" "}
          You can find it by searching for "Nutrify".
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b> What are the future plans for Nutrify?</b>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We’d love to continue to expand the food database, improve our
          computer vision models for better accuracy, and exploring additional
          features such as demographic-specific food information and tracking
          for specific needs like “foods my baby has eaten” or specific dietary
          preferences.
        </p>
      </section>
    </>
  );
};

export default Faq;
