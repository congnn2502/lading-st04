import { ImagePremium } from "../../../img";

const AnalysisPremium = () => {
  return (
    <>
      <h3 className="text-[1.17em] my-[1em] font-bold">
        Calorie and Macronutrient Breakdowns (Premium)
      </h3>
      <p className="mt-[1em] mb-[1em] block">
        Nutrify Premium members can also now get a breakdown of your calorie and
        macronutrient intake per food in the new Calories and Macros views.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        This is a great way to see what foods contribute to what macronutrient
        levels.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        And similarly, how many calories are in a given serving of food.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        When you identify a food with the Nutrify camera, its default weight is
        set to 1 serving of that food.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        For example, the default weight for a red apple is 182g.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        And the default weight for a rice cake is 9g (one rice cake).
      </p>
      <p className="mt-[1em] mb-[1em] block">
        These can be easily adjusted in the food view.
      </p>

      <img className="mx-auto max-w-[100%] h-auto" src={ImagePremium} alt="" />
      
      <p className="mt-[2px] text-center mb-[5px] block italic">
        Left: Calorie breakdown per food for a given day. Middle: Calorie
        breakdown for various food categories across the past week. Right:
        Example weight field for a food view, this defaults to the average
        weight for one serving of a food but is easily adjustable
      </p>
    </>
  );
};
export default AnalysisPremium;
