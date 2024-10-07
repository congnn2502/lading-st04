import { Link } from "react-router-dom";
import { LinkDownload, Logo, LogoDownload } from "../../Img_Link";
import ProductInformation from "./ProductInformation";

const Information = () => {
  return (
    <>
      <section className="max-w-[1000px] w-[100%]">
        <div className="text-center">
          <div className="">
            <img
              className="max-w-[128px] w-[100%] mx-auto block"
              src={Logo}
              alt="Lỗi ảnh"
            />
          </div>
          <div className="">
            <h2 className="text-[1.8em] font-helvetica font-black">
              Food Tracker - Calorie Scanner
            </h2>
            <div className="text-center my-[0.83em]">
              <p>
                Diet Food Recipe Counter for Fitness.
                <br />
                Health Fasting Meal Planning & Water Diary
              </p>
            </div>
            <div className="flex justify-center items-center h-[54px] my-[0.83em]">
              <div className="max-w-[200px] w-[auto] h-[54px] my-[0.83em]">
                <Link to={LinkDownload} className="">
                  <img
                    className="max-w-[200px] w-[auto] mx-auto block h-[54px]"
                    src={LogoDownload}
                    alt="Ảnh lỗi"
                  />
                </Link>
              </div>
            </div>
            <ProductInformation />
            <div className="my-[1em] block">
              <div className="text-left my-[0.83em]">
                <h2 className="text-[1.3em] font-helvetica text-center font-black my-[0.83em]">
                  Why's it useful
                </h2>
                <p>
                  <b>5+ Key Features of Food Tracker - Calorie Scanner:</b>
                </p>
                <p>
                  ✅ Personalized plans tailored to your objectives and optimal
                  weight.
                </p>
                <p>
                  ✅ Instant food scanning for precise nutrition and calorie
                  insights.
                </p>
                <p>
                  ✅ Effortlessly monitor calories, food intake and vital
                  statistics with alerts for excessive consumption.
                </p>
                <p>
                  ✅ Stay hydrated with water intake tracking and timely
                  reminders.
                </p>
                <p>
                  ✅ Track weight fluctuations, maintain a detailed diary and
                  access motivating statistics.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  🎯 <b>Set Personal Goals with Precision</b>
                </p>
                <p>
                  This app creates personalized plans tailored to your needs and
                  objectives, supporting you in achieving your ideal weight or
                  muscle-building goals.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  🥦 <b>Nutritional Empowerment at Your Fingertips</b>
                </p>
                <p>
                  Unlock the power of food scanning for detailed calorie and
                  nutrition breakdowns. Fulfill your daily requirements with
                  ease and precision.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  📊 <b>Track Calories, Food Diary and Statistics</b>
                </p>
                <p>
                  Document your calorie journey, food preferences and visual
                  records. Receive timely alerts for exceeding daily limits,
                  propelling you towards success.
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  💧 <b>Monitor Water Intake</b>
                </p>
                <p>
                  Maintain optimal hydration levels effortlessly. Track your
                  water intake, receive reminders and revel in the freshness
                  that comes with meeting your hydration goals
                </p>
              </div>
              {/* -------------------------------------- */}
              <div className="text-left my-[0.83em]">
                <p>
                  🏋🏻‍♂️ <b>Track Weight, Weight Diary and Statistics</b>
                </p>
                <p>
                  Record weight changes, maintain a dedicated diary and delve
                  into insightful statistics. Let our app be your constant
                  companion in achieving and sustaining your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
