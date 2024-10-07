import { Link, useParams } from "react-router-dom";
import {data} from "@/pages/(website)/post/Data"
import { Logo } from "../Img_Link";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  
  const post = data.find((item) => item.id.toString() === id);

  if (!post) {
    return (
      <h2 className="font-black text-[1.17em] font-helvetica text-center">
        Post not found.
      </h2>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center my-[5px] max-w-[128px] w-[100%] mx-auto">
        <Link to="/">
          <img
            className="max-w-[128px] w-[100%] mx-auto block"
            src={Logo}
            alt="Lỗi ảnh"
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1000px] w-[100%] h-auto">
          <h2 className="font-black text-[1.3em] mb-3 font-helvetica text-center">
            Detail Blog
          </h2>
          <h3 className="font-extrabold text-[1.2em] mb-2 font-helvetica text-center">
            {post.title}
          </h3>
          <div className="ax-w-[300px] w-[100%] mb-2 h-auto flex justify-center">
            <img
              className="max-w-[300px] w-[100%] h-auto my-2"
              src={post.image}
              alt=""
            />
          </div>
          <h3 className="font-bold text-[1em] font-helvetica">Short Content</h3>
          <div className="ml-[1.3em] mb-[0.6em]">{post.shortContent}</div>

          <h3 className="font-bold text-[1em] mt-3 font-helvetica">
            Long Content
          </h3>
          {post.longContent.map((item, index) => (
            <div key={index} className="ml-[1.3em] mb-[0.6em]">
              {item}
            </div>
          ))}
          <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;