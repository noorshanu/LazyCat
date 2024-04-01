import React from "react";
// import { FaTelegram } from "react-icons/fa";

function AboutUs() {
  return (
    <section className=" container-wrapper">
    <div className=" flex justify-between items-center flex-col-reverse sm:flex-row">
      <div className="w-full">
        <img src="images/newt.png" alt="" />
      </div>

      <div className=" bg-white border-2   py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
        <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3">About Us</h1>

        <p className=" text-lg sm:text-xl "> 
        In MEOWCAT meme world the  memes are fresh, the trading's sleek, and the rewards are as shiny as a catnip-filled toy! It is not just another coin; we're the purr-fect blend of charm, wit, and feline finesse in the Solana universe!
        </p>
      </div>
    </div>
  </section>
  );
}

export default AboutUs;
