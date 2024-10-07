import HomePage from "@/pages/(website)/home/page";
// import IntroducingPage from "@/pages/(website)/introducing/page";
// import IntroducingNewPage from "@/pages/(website)/introducingNew/page";
import Detail from "@/pages/(website)/post/DetailPost";
import ListPost from "@/pages/(website)/post/ListPost";
// import Terms from "@/pages/(website)/terms/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/launch" element={<IntroducingPage />} />
        <Route path="/new" element={<IntroducingNewPage />} />
        <Route path="/terms" element={<Terms />} /> */}
        <Route path="/list/blog" element={<ListPost />} />
        <Route path="/detailblog/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Router;
