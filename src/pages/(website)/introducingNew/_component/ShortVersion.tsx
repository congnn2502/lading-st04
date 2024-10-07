const ShortVersion = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          Short Version
        </h2>
        <p className="mt-[1em] mb-[1em] block">Premium updates:</p>
        <ul className="list-disc my-[1em] pl-10">
          <li>
            Set custom calorie and macronutrient goals alongside food-specific
            and category-specific goals in the Summary tab.
          </li>
          <li>
            Get a breakdown of calorie and macronutrient intake per
            food/category in the Calories and Macros views.
          </li>
          <li>
            Simple calorie/macronutrient estimation defaults to 1 serving per
            food photo (this can be changed in the food view).
          </li>
        </ul>
        <p className="mt-[1em] mb-[1em] block">Free updates:</p>
        <ul className="list-disc my-[1em] pl-10">
          <li>57 new foods in the FoodVision AI model/Nutridex.</li>
        </ul>
      </section>
    </>
  );
};

export default ShortVersion;
