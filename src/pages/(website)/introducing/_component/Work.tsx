import { Link } from "react-router-dom";
import { ImageWork } from "../img";
import { LinkData } from "../Link";
import { LinkModulsTimm } from "../Link";
import { LinkModulsHuggingFace } from "../Link";
import { LinkWeightsBiases } from "../Link";
import { LinkFDC } from "../Link";
import { LinkFSANZ } from "../Link";
import { LinkSupabase } from "../Link";
import { LinkVideo } from "../../Img_Link";

const Work = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          How does it work?
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          Nutrify is a combination of machine learning, iOS, a database and
          design.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          It's bootstrapped in a converted lounge room office in Brisbane,
          Australia by myself and my brother Josh working together part-time.
        </p>

        <img className="mx-auto max-w-[100%] h-auto" src={ImageWork} alt="" />
        
        <p className="mt-[2px] text-center mb-[5px] block italic">
          A brief overview of how Nutrify works. One missing piece is the
          feedback loop that happens when Nutrify gets something wrong. We use
          this information to improve future models. Like a{" "}
          <Link to={LinkData}>
            data flywheel.
          </Link>
        </p>
        <h3 className="text-[1.17em] my-[1em] font-bold">
          Machine Learning (Daniel)
        </h3>
        <p className="mt-[1em] mb-[1em] block">
          Computer vision models are fine-tuned versions of{" "}
          <Link to={LinkModulsTimm}
            className="text-blue-600 underline"
          >
            timm
          </Link>{" "}
          (PyTorch Image Models) models from
          <Link to={LinkModulsHuggingFace}
            className="text-blue-600 underline"
          >
            {" "}
            Hugging Face
          </Link>
          (thank you to Ross Wightman for the incredible work) on a custom
          dataset.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          All training happens locally on a single GPU (one GPU, one dream).
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Experiment and artifact tracking happens all with{" "}
          <Link to={LinkWeightsBiases} className="text-blue-600 underline">
            Weights and Biases.
          </Link>
        </p>
        <p>
          We're currently at 1000+ models trained as well as 100+ versions of
          datasets/labels.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Food images are collected from open-source datasets as well as
          manually collected (we've manually taken 50,000+ images of food/not
          food - never underestimate the power of manual data collection).
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We use an iterative training loop similar to Tesla’s data flywheel but
          for food images. You can{" "}
          <Link to={LinkVideo}
            className="text-blue-600 underline"
          >
            {" "}
            see this setup explained on YouTube.
          </Link>
        </p>
        <h3 className="text-[1.17em] my-[1em] font-bold">iOS (Josh)</h3>
        <p className="mt-[1em] mb-[1em] block">
          All of Nutrify is built in SwiftUI so it runs and feels like a native
          iOS app.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          All machine learning models run on-device using Core ML and perform
          inference in under 10ms (no internet connection required + very
          fast!).
        </p>
        <p className="mt-[1em] mb-[1em] block">
          We leverage several of Apple's in-built APIs to ensure Nutrify runs as
          clean as possible (this is why it requires iOS 16+).
        </p>
        <h3 className="text-[1.17em] my-[1em] font-bold">Database</h3>
        <p className="mt-[1em] mb-[1em] block">
          Our nutrition data comes from open-source nutrition databases (
          <Link to={LinkFDC}>FDC</Link> and{" "}
          <Link to={LinkFSANZ}>
            FSANZ
          </Link>
          ).
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Metadata, object storage and authentication (sign-in with Apple etc)
          happens via <Link to={LinkSupabase}>Supabase.</Link>
        </p>
        <h3 className="text-[1.17em] my-[1em] font-bold">Food Icons (Grace)</h3>
        <p className="mt-[1em] mb-[1em] block">
          All food icons are custom-designed specifically for Nutrify.
        </p>
      </section>
    </>
  );
};

export default Work;
