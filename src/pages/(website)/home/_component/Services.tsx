// import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
// import { LinkSupport } from "../../Img_Link";
import { useEffect, useState } from "react";
import { data } from "@/pages/(website)/post/Data";
import { IPosts } from "@/common/types/IPosts";

const Services = () => {
  const [sortedData, setSortedData] = useState<IPosts[]>([]);
  //  const navigate = useNavigate();

  useEffect(() => {
    const updatedData = data
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 1);

    setSortedData(updatedData);
  }, []);

  const handleSupportClick = () => {
    window.open("mailto:support@karyalokal-studio.com");
  };

  //  const handleRowClick = (id: number | string) => {
  //    navigate(`/detailblog/${id}`);
  //  };
  return (
    <>
      <section className="services">
        <div className="my-[1em]">
          <h2 className="font-black text-[1.17em] font-helvetica">Blog</h2>
          {sortedData.map((item) => (
            // <div className="rounded-b-lg border-b-2">
            <span
              key={item.id}
              // onClick={() => handleRowClick(item.id)}
              className=""
              // style={{ cursor: "pointer" }}
            >
              {/* <p className="p-2">{item.title}</p> */}
              <p>Coming soon...!</p>
              {/* <td>{new Date(item.createdAt).toLocaleDateString()}</td> */}
            </span>
            // </div>
          ))}
          {/* <Link to="/list/blog">
            <button className="btn btn-secondary justify-center items-center mt-2">
              More
            </button>
          </Link> */}
        </div>
        <div>
          <h2 className="font-black text-[1.17em] font-helvetica">Pricing</h2>
          <p>FREE FOREVER</p>
        </div>
        <div className="my-[1em]">
          <h2 className="font-black text-[1.17em] font-helvetica">Contact</h2>
          {/* <p className="text-blue-600 underline">
            support@karyalokal-studio.com
          </p> */}
          <button
            onClick={handleSupportClick}
            className="text-blue-600 underline"
          >
            support@karyalokal-studio.com
          </button>
        </div>
        <div>
          <h2 className="font-black text-[1.17em] font-helvetica">Legal</h2>
          <p>
            <Link
              to="/"
              className="text-blue-600 underline"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Terms of Use
            </Link>{" "}
            &{" "}
            <Link
              to="/"
              className="text-blue-600 underline"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
