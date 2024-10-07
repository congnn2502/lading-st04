const Pricing = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          Pricing
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is free to use for up to 20 images without an account and
          unlimited images with an account.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          This means you could complete the Nutridex for free by signing up for
          an account and taking photos of food.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Personalised food stats, summaries and trends are a paid feature.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Our pricing is monthly with a discount for yearly.
        </p>
        <ul className="list-disc my-[1em] pl-10">
          <li>$3.99USD/month ($47.90USD/year)</li>
          <li>$24.99USD/year (47% cheaper than monthly)</li>
        </ul>
        <p className="mt-[1em] mb-[1em] block">
          Please note these are base prices and actual prices may differ in the
          Apple App Store depending on the region. This is at Apple’s discretion
          and out of our control.
        </p>
      </section>
    </>
  );
};

export default Pricing;
