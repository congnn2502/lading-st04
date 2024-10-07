import { ImageAi } from "../img";
import {ImageDiary} from "../img";
import { ImageDiscover1 } from "../img";
import {ImageDiscover2} from "../img";
import { ImageStats } from "../img";

const Features = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          Key features and benefits
        </h2>
        <h3 className="text-[1.17em] my-[1em] font-bold">
          📸-🍍 FoodVision AI
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is powered by a computer vision model capable of identifying
          420 foods (for now, more coming soon).
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Simply point your phone at food and take a photo, Nutrify will do its
          best to identify what’s in it and show relevant information.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          All image processing happens on-device using the Neural Engine, so
          predictions happen really fast and work offline.
        </p>

        <img className="mx-auto max-w-[100%] h-auto" src={ImageAi} alt="" />

        <p className="mt-[2px] text-center mb-[5px] block italic">
          Nutrify's computer vision models run on-device and leverage the Neural
          Engine (Apple's chip for machine learning) so they happen fast and
          work without an internet connection (even on the top of a mountain).
          The video is a live screen recording of a lasagne lunch hike break on
          top of Mt. Tamborine, Queensland, Australia.
        </p>

        {/* ---------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          📔 Create a Visual Food Diary
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          When you take a photo with Nutrify, you have the option to save or
          delete it.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Saving it stores it in your Visual Food Diary, an excellent way to
          reflect on what you’ve eaten.
        </p>

        <img className="mx-auto max-w-[100%] h-auto" src={ImageDiary} alt="" />
        
        <p className="mt-[2px] text-center mb-[5px] block italic">
          Don't count calories. Look at what you've eaten instead. Nutrify
          enables an easy way to keep a visual log of what you've eaten.
          Something to reflect on or show a healthcare practitioner.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          In my experience with keeping food diaries, I’ve found that numbers on
          a page (calorie counting) are too specific for me.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Instead, I much prefer seeing what I’ve eaten (ideally, a wide range
          of whole foods).
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You could use this to show a nutrition coach or wellness practitioner
          what you’ve eaten and get their insights.
        </p>

        {/* -------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          🔍 Discover new foods and complete the Nutridex
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          I loved playing Pokémon as a kid.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          I used to think the Pokédex was magic.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          So my brother and I made a big effort to make Nutrify feel the same.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          For version 1.0, the Nutridex contains information 420 different foods
          across 22 different categories.
        </p>
        
        <img
          className="mx-auto max-w-[100%] h-auto"
          src={ImageDiscover1}
          alt=""
        />
        
        <p className="mt-[2px] text-center mb-[5px] block italic">
          Nutrify contains information for 420 foods from 22 different
          categories including fruit, vegetables, nuts and seeds, legumes, meat,
          fungi and many more.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Each comes with a beautifully designed custom food icon crafted by our
          skilful designer (thank you Grace!).
        </p>
        <p className="mt-[1em] mb-[1em] block">
          And the first time you take a photo of a food you haven’t seen before,
          a delightful unlock sound will play and it’ll be added to your
          Nutridex (see the launch video for what this looks like). A small
          incentive to continually try new foods.
        </p>
        
        <img
          className="mx-auto max-w-[100%] h-auto"
          src={ImageDiscover2}
          alt=""
        />
        
        <p className="mt-[2px] text-center mb-[5px] block italic">
          The Nutridex contains information about different foods and displays
          which foods you've discovered/haven't discovered with the camera.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          The Nutridex will be constantly growing over time.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          So completing it may actually be a continually moving target.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          As of writing, my Nutridex is at 357/420.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          If you find that your favourite food isn’t in the Nutridex, let us
          know so we can expand it!
        </p>

        {/* --------------------------------------------------------------------------------- */}

        <h3 className="text-[1.17em] my-[1em] font-bold">
          📊 Get stats and trends of your food habits over time
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          After you’ve used Nutrify for a while, stats and trends will
          automatically populate the Summary tab based on your Visual Food
          Diary.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          This includes most eaten foods, most eaten categories, most common
          breakfast, lunch and dinner foods and more.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          You can use these statistics and trends to gain insights on your food
          habits and adjust if necessary.
        </p>
        
        <img className="mx-auto max-w-[100%] h-auto" src={ImageStats} alt="" />
        
        <p className="mt-[2px] text-center mb-[5px] block italic">
          As you take photos with Nutrify, the Summary tab (paid feature) will
          populate automatically with stats and trends. You'll also be able to
          see how different foods affect your heart rate as well as set goals
          for consuming/avoiding certain foods/categories.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We’ll be adding more analytics and insights over time as well so feel
          free to suggest something you’d like to see.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          <b>New:</b> You can now also use the Summary tab to see how different
          foods affect your heart rate (requires heart rate data in Apple
          Health) and set goals for consuming or avoiding different
          foods/categories.
        </p>
      </section>
    </>
  );
};

export default Features;
