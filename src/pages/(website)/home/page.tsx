import Footer from "./_component/Footer";
import Information from "./_component/Information";
import Services from "./_component/Services";

const HomePage = () => {
  return (
    <div className="text-center p-5 flex flex-col justify-center items-center h-auto">
        <Information />
        <Services />
        <Footer />
    </div>
  );
};

export default HomePage;
