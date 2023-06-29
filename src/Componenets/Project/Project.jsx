import React from "react";
import classic from "../../assets/classic.jpg";
import interior3 from "../../assets/interior3.jpg";
import interior2 from "../../assets/interior2.jpg";
import Form from "../Form";
import Footer from "../Footer";

const Project = () => {
  return (
    // BIg div
    <div className="">
      <div className="w-full h-[65vh] ">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `url(${classic})`, // BG Image
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl  font-bold  font-serif mb-4">Architecture</h1>
              <p className="text-lg">Home / Project Details</p>
            </div>
          </div>
        </div>
      </div>
      {/* margin div  */}
      {/* <div className="mx-auto sm:mx-full md:mx-10 lg:mx-16 mb-24">

        <div className=" mt-8 grid grid-cols-2"> */}
        <div className="mx-auto sm:mx-full md:mx-10 lg:mx-16 mb-24">
           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2">
          {/* Left side Content */}
          <div className="flex flex-col">
            <h3 className="font-bold text-orange-800 text-2xl text-left p-1">
              CLEVER DESIGN
            </h3>
            <h2 className="block p-1 text-4xl  text-left">AMAZING LOCATION</h2>
            <p className="block text-left  text-lg  p-3">
              Carefully planning the project scope, budget, and timeline.
              Conduct a thorough analysis of potential sites, collaborate with
              architects to design the duplex, and ensure the structural
              integrity through engineering expertise
              <span className="block text-lg   py-4 ">
                Carefully planning the project scope, budget, and timeline.
                Conduct a thorough analysis of potential sites, collaborate with
                architects to design the duplex, and ensure the structural
                integrity through engineering expertise. Obtain the necessary
                permits and approvals, hire a reputable construction team, and
                select high-quality materials. Install separate utility
                connections for each unit, focus on interior and exterior
                finishes, and conduct regular inspections to maintain quality
                and compliance. Finally, complete the project with a thorough
                walkthrough and handover process, while consistently seeking
                guidance from professionals.
              </span>
            </p>
          </div>
          {/* Right side Project Details sidebar */}
          {/* <div className="w-max ml-20 mt-[-75px]"> */}
          <div className="w-full sm:w-max ml-0 sm:ml-20 mt-[-75px]  ">
            <div className="bg-white font-sans shadow-md rounded-lg p-6">

              {/* item */}
              <div className="flex items-center mb-4">
                <h2 className="text-lg font-thin mr-2">Location: </h2>
                <p className="font-thin">7 Lake Street, London</p>
              </div>

              <div className="flex items-center mb-4">
                <h2 className="text-lg font-thin mr-4">Client: </h2>
                <p className="font-thin ">wpOceans</p>
              </div>

              <div className="flex items-center mb-4">
                <h2 className="text-lg font-thin mr-4">Architect: </h2>
                <p className="font-thin">Harry Johnson</p>
              </div>

              <div className="flex items-center mb-4">
                <h2 className="text-lg font-thin mr-4">Project Type: </h2>
                <p className="font-thin">Interior</p>
              </div>

              <div className="flex items-center mb-4">
                <h2 className="text-lg font-thin mr-4">Duration: </h2>
                <p className="font-thin">6 Months</p>
              </div>

              <div className="flex items-center mb-4">
                <h2 className="text-lg font-thin mr-4">Completion: </h2>
                <p className="font-thin">July 2026</p>
              </div>

              <div className="flex items-center mb-4">
                <h2 className="text-lg font-thin mr-4">Category: </h2>
                <p className="font-thin">Architectural, Business</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* COntent image continues */}
        <div className="grid grid-cols-1 justify-start">
          <img src={classic} className="w-[600px]" />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h2 className="font-bold text-left text-xl">Our Strategies </h2>
            <p className="text-left justify-between ">
              Constructing a building requires thoughtful strategies to create a
              harmonious and functional living environment. Careful space
              planning is essential, maximizing the efficient utilization of
              available space and ensuring proper room allocation in both units.
              The architectural design should promote a balanced aesthetic while
              maintaining individuality for each unit.
            </p>
            <div className="block text-left text-lg  p-3">
              <ul class="list-none pl-4">
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Efficient Space Planning
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Soundproofing
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Separate Utilities
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Safety and Security
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Energy Efficiency
                </li>
              </ul>
            </div>
          </div>

          <div className="w-3/4  bg-orange-100 p-4 border rounded-lg border-gray-400">
            <p className="text-lg  font-mono p-2 ">
              Obtain the necessary permits and approvals, hire a reputable
              construction team, and select high-quality materials. Install
              separate utility connections for each unit, focus on interior and
              exterior finishes, and conduct regular inspections to maintain
              quality and compliance.
            </p>
          </div>
        </div>
        <h2 className="font-bold text-left mt-8">Our Approach</h2>
        <p className="text-left">
          Carefully planning the project scope, budget, and timeline. Conduct a
          thorough analysis of potential sites, collaborate with architects to
          design the duplex, and ensure the structural integrity through
          engineering expertise. Obtain the necessary permits and approvals,
          hire a reputable construction team, and select high-quality materials.
          Install separate utility connections for each unit, focus on interior
          and exterior finishes, and conduct regular inspections to maintain
          quality and compliance. Finally, complete the project with a thorough
          walkthrough and handover process, while consistently seeking guidance
          from professionals.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-12">
          <div>
            <img src={interior3} className="w-66" />
            <div className="block  text-left text-lg mt-4  p-3">
              <ul class="list-none pl-4">
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Efficient Space Planning
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Soundproofing
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Separate Utilities
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Safety and Security
                </li>
                <li class="flex items-center">
                  <span class="text-orange-700 font-bold mr-2">&#10003;</span>
                  Energy Efficiency
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={interior2} className="w-66" />
            <p className="text-left mt-4">
              Carefully planning the project scope, budget, and timeline.
              Conduct a thorough analysis of potential sites, collaborate with
              architects to design the duplex, and ensure the structural
              integrity through engineering expertise. Obtain the necessary
              permits and approvals, hire a reputable construction team, and
              select high-quality materials. Install separate utility
              connections for each unit, focus on interior and exterior
              finishes, and conduct regular inspections to maintain quality and
              compliance.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
