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
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3">
            About Us
          </h1>

          <p className=" text-lg sm:text-xl ">
            Meow! Welcome to SleepyCat, where laziness meets high gains! SleepyCat
            embodies the spirit of all things cute, silly, and oh-so-lazy. Our
            founder, SleepyCat herself, is here to revolutionize the meme world
            with her hilarious creations and laid-back approach to making money.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
