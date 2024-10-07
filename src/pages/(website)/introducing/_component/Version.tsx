const Version = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          Where it’s going
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify version 1.0 just launched but we’re already thinking about the
          future.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Some things we’re thinking about:
        </p>
        <ul className="list-disc my-[1em] pl-10">
          <li>
            <b>Nutrify is built in Australia -</b> There is a focus on whole
            foods available to us but we’ll expand this over time. However, many
            of the existing 420 foods are common globally. We’d like to take
            this to 1000+ by the end of the year.
          </li>
          <li>
            <b>Our computer vision models aren’t perfect -</b> Nutrify will make
            mistakes. But that’s half the fun! The good news is, it’s easy to
            correct by tapping another option in the swap bar or by tapping the
            pencil to add a custom food (the custom foods will also let us know
            which foods to add to the Nutridex).
          </li>
          <li>
            <b>$Multiple foods, dishes and complex meals -</b> For now, Nutrify
            focuses on the premise of one photo, one food. But as we upgrade the
            computer vision models, they’ll be able to handle multiple foods and
            dishes better. Our advice is to take photos of food when you’re
            making it and enjoy it when it’s made.
          </li>
          <li>
            <b>Other potential ideas -</b> Food information for specific
            demographics, for example, children, newborn baby food tracking
            (e.g. “what foods has my baby tried?”), parents looking to conceive
            and more. We’ve tried to stay away from specifically recommending
            certain foods (other than whole foods) so this is an area which may
            require a bit more research.
          </li>
        </ul>
      </section>
    </>
  );
};

export default Version;
