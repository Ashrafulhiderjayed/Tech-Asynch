import "./App.css";
import placeholderimg from "../src/assets/placeholderimg.jpg";
// import {placeholderimg} from '../src/assets/placeholderimg.jpg'

function App() {
  return (
    <>
      <section className="lg:ms-10">
        <div>
          <svg
            className="absolute top-0 right-0"
            viewBox="0 120 70 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FA4D56"
              d="M56.8,-27.5C59.4,-10.2,37.8,6,19.1,17.4C0.4,28.9,-15.3,35.7,-27.5,28.9C-39.8,22.1,-48.7,1.7,-43.5,-19C-38.4,-39.8,-19.2,-60.9,3.9,-62.2C27,-63.4,54.1,-44.9,56.8,-27.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-5xl">
          <h1 className="text-primaryOrange text-3xl font-extrabold pt-7 sm:ms-2">
            TechAsync
          </h1>
        </div>

        
        <div className="flex flex-wrap mt-24">
         {/* Second Div (Entire width on small screens, 3 columns on larger screens) */}
          <div className="w-full flex-col items-center lg:w-2/5 sm:w-3/5 p-4 order-last sm:order-first">
            <div className="p-4 mt-16">
              <h1 className="text-slate-500 font-semibold">WEBSITE</h1> <br />
              <h1 className="text-primaryOrange text-2xl font-bold">
                COMING SOON!
              </h1>{" "}
              <br />
              <p className="text-justify">
              Our team of brilliant minds, seasoned experts, and creative visionaries work tirelessly to design and develop software that solves complex problems, enhances productivity, and drives growth. Whether you're a startup with big dreams or an established enterprise seeking to stay ahead of the curve, we've got the technology solutions to propel you forward.

Explore our world of software excellence, where user-friendly interfaces, seamless integration, and robust security are our hallmarks. Join us on a journey to harness the full potential of technology and unlock new possibilities for your success.
              </p>
              <br />
              <button className="btn btn-secondary bg-primaryOrange">
                More info
              </button>
            </div>
          </div>

           {/* First Div (Entire width on small screens, 2 columns on larger screens) */}
  <div className="w-full lg:w-3/5 sm:w-2/5 ps-2 order-first sm:order-last">
            <img src={placeholderimg} alt="placeholder image" />
          </div>
        </div>

        
      </section>
      
    </>
  );
}

export default App;
