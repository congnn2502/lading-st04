// // import { useState } from "react";
// import Detail from "./DetailPost";
// import ListPost from "./ListPost";
// import { RiMenuSearchLine } from "react-icons/ri";
// import { useState } from "react";
// import { Logo } from "../Img_Link";
// import { Link } from "react-router-dom";

// const Layout = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };

//   return (
//     <>
//       <div className="flex justify-center items-center my-[5px] max-w-[128px] w-[100%] mx-auto">
//         <Link to="/">
//           <img
//             className="max-w-[128px] w-[100%] mx-auto block"
//             src={Logo}
//             alt="Lỗi ảnh"
//           />
//         </Link>
//       </div>

//       <div className="flex flex-col sm:flex-row">
//         {/* ListPost sẽ trở thành menu khi màn hình nhỏ hơn 600px */}
//         <div className="sm:max-w-[35%] w-full mr-10 h-auto sm:block hidden">
//           <div>
//             <ListPost />
//           </div>
//         </div>

//         {/* Menu hiển thị ở màn hình nhỏ hơn 600px */}
//         <div className="sm:hidden block mb-3">
//           {/* Bạn có thể tùy chỉnh để mở menu */}
//           <div className="p-2 w-full">
//             <button className="p-2 bg-gray-500 text-white" onClick={toggleMenu}>
//               <RiMenuSearchLine />
//             </button>

//             {/* Menu sẽ hiển thị khi isMenuOpen = true */}
//             <div className={`${isMenuOpen ? "block" : "hidden"} mt-2`}>
//               <ListPost />
//             </div>
//           </div>
//         </div>

//         {/* Detail sẽ chiếm toàn bộ màn hình khi dưới 600px */}
//         <div className="sm:max-w-[63.5%] w-full h-auto">
//           <Detail />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
