import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "@/pages/(website)/post/Data";
import { IPosts } from "@/common/types/IPosts";
import { Logo } from "../Img_Link";

const ListPost = () => {
  const [sortedData, setSortedData] = useState<IPosts[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [postsPerPage] = useState(10); // Số bài viết mỗi trang
  const navigate = useNavigate();

  const [selectedPostId, setSelectedPostId] = useState<number | string | null>(
    null
  );

  // Tính toán các bài viết hiển thị cho trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);

  const handleRowClick = (id: number | string) => {
    navigate(`/detailblog/${id}`);
    setSelectedPostId(id);
  };

  useEffect(() => {
    const updatedData = data.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setSortedData(updatedData);
  }, []);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / postsPerPage); // Tổng số trang

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
            List Blog
          </h2>
          {currentPosts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              style={{ cursor: "pointer" }}
              className={`cursor-pointer ${
                selectedPostId === item.id ? "bg-blue-200" : "bg-white"
              } flex p-3 border-b-2 rounded-b-lg`}
            >
              <div>
                <Link to={`/detailblog/${item.id}`}>
                  <img
                    className="max-w-[130px] w-[auto] max-h-[80px] h-[100%]"
                    src={item.image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="ml-8">
                <h2 className="block text-[1.15em] mb-2">{item.title}</h2>
                <p
                  className={`text-[14px] mb-2 font-sans font-weight text-[#656565] overflow-hidden whitespace-nowrap text-ellipsis ${
                    window.innerWidth < 600 ? "hidden" : ""
                  }`}
                  style={{ maxWidth: "50.455729166666664vw" }}
                >
                  {item.shortContent}
                </p>
                <p className="text-[12px] font-sans font-weight text-[#656565]">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-2 mb-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 mx-1 ${
                  currentPage === index + 1 ? "bg-gray-300" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPost;
