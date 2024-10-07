import { ImageGoals } from "../../../img";

const TargetPremium = () => {
  return (
    <>
      <h3 className="text-[1.17em] my-[1em] font-bold">
        Custom Calorie and Macronutrient Goals (Premium)
      </h3>
      <p className="mt-[1em] mb-[1em] block">
        Nutrify Premium members can now define calorie and macronutrient intake
        goals and Nutrify will automatically track your progress over time.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        When starting a goal, you can define your own calorie and macronutrient
        values or you can use Nutrify to help establish a baseline goal.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        Nutrify comes with 3 built-in goals:
      </p>
      <ul className="list-disc my-[1em] pl-10">
        <li>Calorie deficit (for weight loss).</li>
        <li>Maintenance (for maintaining current weight).</li>
        <li>Calorie surplus (for gaining weight).</li>
      </ul>
      <p className="mt-[1em] mb-[1em] block">
        Each of these is calculated based on your body characteristics (height,
        weight, age, gender) as well as your activity level.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        You’ll also see an informative page describing the what and why behind
        each calculation and amount (disclaimer: these amounts are estimates and
        should be adjusted over time when necessary).
      </p>

      <img className="mx-auto max-w-[100%] h-auto" src={ImageGoals} alt="" />
      
      <p className="mt-[2px] text-center mb-[5px] block italic">
        Left: The new Summary tab which includes a calorie and macronutrient
        breakdown for the day. Middle: Setting a custom calorie goal. Right:
        Example macronutrient nutrient breakdown for the past month.
      </p>
      <p className="mt-[1em] mb-[1em] block">
        Setting a calorie or macronutrient goal is a great way to understand how
        your current food intake matches up with your ideal intake.
      </p>
    </>
  );
};
export default TargetPremium;
