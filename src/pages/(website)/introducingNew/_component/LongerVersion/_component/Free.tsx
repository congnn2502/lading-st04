import { ImageFree } from "../../../img";

const Free = () => {
  return (
    <>
      <h3 className="text-[1.17em] my-[1em] font-bold">
        57 new foods and icons in the Nutridex (Free)
      </h3>
      <p className="mt-[1em] mb-[1em] block">
        Nutrify’s FoodVision AI/Nutridex has been upgraded with 57 new foods
        including anchovies, horned cucumber, protein balls, lion's mane
        mushroom, turkey breast and many more.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        For each new food you'll find a brand new custom-designed icon and
        verified nutrition information.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        This brings the total foods Nutrify can recognize to over 470!
      </p>
      <p className="mt-[1em] mb-[1em] block">
        The Visual Food Diary as well as Nutridex continues to be free to use
        for unlimited photos.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        So don’t forget to ask your friends,
      </p>
      <p className="mt-[1em] mb-[0.5em] block">
        <em>What’s your Nutridex at? </em>
      </p>

      <img className="mx-auto max-w-[100%] h-auto" src={ImageFree} alt="" />
      
      <p className="mt-[2px] text-center mb-[5px] block italic">
        The 57 new foods available in Nutrify 1.2, designed by Grace Lee. Let us
        know if we're missing any so we can include them in a future update!
      </p>
    </>
  );
};
export default Free;
