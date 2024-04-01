import React from "react";

function Mission() {
  return (
    <section className=" container-wrapper">
      <div className=" flex justify-between items-center flex-col-reverse sm:flex-row-reverse">
        <div className="w-full">
          <img src="images/logo.png" alt="" />
        </div>

        <div className=" bg-white border-2   py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3">$MCAT Mission</h1>

          <p className=" text-lg sm:text-xl "> 
          At MEOWCAT, we're not just about making a quick scratch; we're in it for the long haul! Our roadmap is as clear as a crystal litter box, filled with exciting content, launch, partnership, exchange listing and plans to propel our journey forward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
