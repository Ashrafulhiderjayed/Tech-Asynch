import "./App.css";
import placeholderimg from '../src/assets/placeholderimg.jpg'
// import {placeholderimg} from '../src/assets/placeholderimg.jpg'

function App() {
  return (
    <>
      <section className="ms-10">
        <div className="">
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

        <div className="max-w-7xl border">
          <h1 className="text-primaryOrange text-3xl font-extrabold pt-7">TechAsync</h1>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-24">
          {/* <!-- First Div (Takes 2 columns) --> */}
          <div className="flex items-center col-span-2 p-4">
            <div>
            <h1 className="text-slate-500 font-semibold">WEBSITE</h1> <br />
            <h1 className="text-primaryOrange font-bold">COMING SOON!</h1> <br />
            <p className="text-justify">Explore our world of software excellence, where user-friendly interfaces, seamless integration, and robust security are our hallmarks. Join us on a journey to harness the full potential of technology and unlock new possibilities for your success.</p> <br />
            <button className="btn btn-secondary bg-primaryOrange">More info</button>
            </div>
          </div>
          
          {/* <!-- Second Div (Takes 3 columns) --> */}
          <div className="col-span-3">
            <img src={placeholderimg} alt="placeholder image" />
          </div>
        </div>
      
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FA4D56" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,229.3C384,256,480,288,576,282.7C672,277,768,235,864,181.3C960,128,1056,64,1152,74.7C1248,85,1344,171,1392,213.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    </>
  );
}

export default App;
