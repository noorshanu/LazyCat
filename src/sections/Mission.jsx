import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Mission() {
  return (
    <section className=" container-wrapper">
      <div className=" flex justify-between items-center flex-col-reverse sm:flex-row-reverse">
        <div className="w-full">
          <img src="images/logo.png" alt="" />
        </div>

        <div className=" bg-white border-2   py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3">Join SleepyCat</h1>

          <p className=" text-lg sm:text-xl "> 
          Join SleepyCat on our journey to save the Solana meme world, one meme at a time! Meow
          </p>

          
        <div className=" flex justify-start gap-5 items-center mt-4">
          <a
            href="#"
            className=" text-xl text-white bg-[#000000] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <BsTwitterX />
          </a>

          <a
            href="#"
            target="_blank"
            className=" text-xl text-white hover:scale-125 bg-[#000000] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/GrfA2Xc4ro6gMZ2oeg44TMb3iPGjFqtw4X5r5aq1Gzx4?t=1715430564377"
            target="_blank"
            className=" bg-[#000000] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
          >
            <img src="images/dext.png" alt="" className=" h-[29px] w-auto" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
