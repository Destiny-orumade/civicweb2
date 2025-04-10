import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LearnMoreFederalOfficials from "../components/learnMoreOfficials";
import LearnMoreStateOfficials from "../components/learnMoreStateOfficials";
import LearnMoreLocalOfficials from "../components/learnMoreLocalOfficials";

function LearnMore() {
  return (
    <section className="bg-white font-[Open Sans]">
      <header className="bg-home text-white h-[80px] flex items-center justify-center">
        <div className="w-[80%] flex justify-between items-center">
          <h1 className="text-[2rem] font-[700]">
            <span className="text-green-300">Civic</span>Link
          </h1>
          <nav className="lg:flex hidden justify-between gap-[40px] items-center">
            <ul className="flex gap-[40px] font-[700] ">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Officials</Link>
              </li>
              <li>
                <Link to="#">Complaints</Link>
              </li>
            </ul>
            <div className=" w-[220px] flex justify-center border-[1px] border-search rounded-[6px] p-[8px] items-center">
              <div>
                <input
                  className="border-0 outline-0"
                  placeholder="search in site"
                  type="text"
                  name=""
                />
              </div>
              <div className="">
                <FaSearch />
              </div>
            </div>
          </nav>
        </div>
        <div className="lg:hidden text-4xl absolute right-10">
          <FaBars />
        </div>
      </header>

      <section className="h-[369]">
        <div className="flex flex-col items-center justify-center gap-4 pt-15">
          <h1 className="text-[2rem] font-bold">Learn More</h1>
          <p className="text-center leading-[150%] pb-10">
            Explore the hierarchical structure and officials responsible <br />
            for various services.
          </p>
          <button className="h-[54px] w-[240px] bg-home rounded-[8px] text-white">
            Sign-in
          </button>
        </div>
      </section>

      <section className="md:w-[76%] w-full mx-auto">
        <div className="h-[642px]">
          <input
            className=" mt-24 mb-10 border-[1.9px] border-gray-300 rounded-[6px] px-4 py-2"
            type="text"
            placeholder="Search for official"
            id=""
          />
          <img src="/public/learn-more-map.png" alt="Image of a map" />
        </div>
      </section>

      <section className="w-[80%] mx-auto">
        <div className="h-[1508px] flex flex-col gap-[60px]">
          <h1 className="text-[2rem] font-bold text-center">
            Federal Officials
          </h1>
          <div className="flex flex-col">
            <LearnMoreFederalOfficials
              title="President"
              office="Head of state and government"
              tag="Federal Level"
              power="Nigeria Constitution"
            />
          </div>
          <div className="flex flex-col">
            <LearnMoreFederalOfficials
              title="Vice President"
              office="Assists the President in governing the country"
              tag="Federal Level"
              power="Nigeria Constitution"
            />
          </div>
          <div className="flex flex-col">
            <LearnMoreFederalOfficials
              title="Ministers"
              office="Appointed Officials responsible for specific government"
              tag="Federal Level"
              power="Nigeria Constitution"
            />
          </div>
          <div className="flex flex-col">
            <LearnMoreFederalOfficials
              title="Senators"
              office="Representatives from each state that make up the National Assembly"
              tag="Federal Level"
              power="Nigeria Constitution"
            />
          </div>
          <div className="flex flex-col">
            <LearnMoreFederalOfficials
              title="House of Reps"
              office="Represents the people in the National Assembly"
              tag="Federal Level"
              power="Nigeria Constitution"
            />
          </div>
        </div>
      </section>

      <section className="w-[80%] mx-auto">
        <h1 className="text-[2rem] font-bold text-center">State Officials</h1>
        <div className="flex flex-col mt-10">
          <LearnMoreStateOfficials
            title="Governor"
            office="Chief executive of the state government"
            tag="State Level"
            power="Nigeria Constitution"
          />
        </div>
        <div className="flex flex-col mt-10">
          <LearnMoreStateOfficials
            title="Deputy Governor"
            office="Assists the Governor in state governance"
            tag="State Level"
            power="Nigeria Constitution"
          />
        </div>

        <div className="flex flex-col mt-10">
          <LearnMoreStateOfficials
            title="Commissioners"
            office="Appointed Officials in charge of different state ministries"
            tag="State Level"
            power="Nigeria Constitution"
          />
        </div>
        <div className="flex flex-col mt-10">
          <LearnMoreStateOfficials
            title="State Assembly Members"
            office="Representatives at the state legislative level"
            tag="State Level"
            power="Nigeria Constitution"
          />
        </div>
      </section>

      <section className="w-[80%] mx-auto">
        <h1 className="text-[2rem] font-bold text-center my-20">
          Local Officials
        </h1>

        <div className="flex flex-col mt-10 ">
          <LearnMoreLocalOfficials
            title="Councillors"
            office="Elected representatives at the local government level"
            tag="Local Level"
            power="Local Government Autonomy Law"
          />
        </div>
        <div className="flex flex-col mt-10">
          <LearnMoreLocalOfficials
            title="LGA Chairman"
            office="Head of the Local GOvernment Council"
            tag="Local Level"
            power="Local Government Autonomy Law"
          />
        </div>
      </section>

      <section className="mt-30 pb-10">
        <div className="flex flex-col md:flex-row mx-auto w-1/3 items-center justify-between gap-[60px] md:gap-0">
          <p>Privacy Policy</p>
          <p>Feedback</p>
          <p>Terms of Service</p>
        </div>
      </section>
    </section>
  );
}

export default LearnMore;
