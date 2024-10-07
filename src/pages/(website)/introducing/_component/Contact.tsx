import { Link } from "react-router-dom";
import { LinkDownload, LinkInstagram, LinkSupport, LinkTikTok, LinkX } from "../../Img_Link";

const Contact = () => {
  return (
    <>
      <section className="mb-[1em]">
        <h2 className="font-black text-[1.5em] mb-[4px] font-helvetica block">
          Contact and learn more
        </h2>
        <p className="mt-[1em] mb-[1em] block">
          If you have any ideas or foods you’d like to see in Nutrify, feel free
          to let us know! We are pleased to cooperate.
        </p>
        <p className="mt-[1em] mb-[1em] block">
          Our contact email is{" "}
          <Link to={LinkSupport} className="text-blue-600 underline">
            support@karyalokal-studio.com.
          </Link>
        </p>
        <p className="mt-[1em] mb-[1em] block">
          And you can find us elsewhere:
        </p>
        <ul className="list-disc my-[1em] pl-10">
          <li>
            <Link to="/" className="text-blue-600 underline">
              Website
            </Link>
          </li>
          <li>
            <Link to={LinkDownload} className="text-blue-600 underline">
              Download on the App Store
            </Link>
          </li>
          <li>
            <Link to={LinkInstagram} className="text-blue-600 underline">
              Instagram{" "}
            </Link>
          </li>
          <li>
            <Link to={LinkTikTok} className="text-blue-600 underline">
              Tik tok{" "}
            </Link>
          </li>
          <li>
            <Link to={LinkX} className="text-blue-600 underline">
              X
            </Link>
          </li>
        </ul>
        <p className="mt-[1em] mb-[1em] block">
          In the meantime, have fun learning about food!
        </p>
        <p className="mt-[1em] mb-[1em] block">– Daniel and Josh</p>
      </section>
    </>
  );
};

export default Contact;
