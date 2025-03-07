import React from "react";
import bottomLogo from "../../assets/images/br-logo-new.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { VscRocket } from "react-icons/vsc"; // Import VscRocket icon


export default function IndiFooter() {
  return (
    <section className="text-white relative text-center h-auto  w-full mt-10">
      {/* <div className=" absolute top-0 left-0 h-auto w-full " /> */}
      <div className="  h-full  bg-custom-gradient-tb   px-10 pt-5  sm:px-20">
        <div className=" flex flex-wrap lg:flex-nowrap text-start px-4 md:px-10 mt-28 gap-20 mb-20">
          <div className=" flex flex-col gap-16 ">
            <div>
              <h1 className=" text-2xl md:text-5xl font-medium leading-normal mb-3">
                Get in Touch with
              </h1>
              <p className=" text-lg tracking-wide mt-6">
                Discover a symphony of online music classes tailored to your
                rhythm with us.
              </p>
            </div>
            <div className=" flex gap-3 md:gap-16">
              <div>
                <h2 className="  font-medium mb-3">Course</h2>
                <h1 className=" font-thin mb-2">Instruments</h1>
                <h1 className=" font-thin mb-2">Instruments</h1>
                <h1 className=" font-thin mb-2">Instruments</h1>
              </div>
              <div>
                <h2 className=" mb-3 font-medium">Blogs</h2>
                <h1 className=" font-thin mb-2">Post</h1>
                <h1 className=" font-thin mb-2">Tips and Tricks</h1>
              </div>
              <div>
                <h2 className=" mb-3 font-medium">Support</h2>
                <h1 className=" font-thin mb-2">Contact Us</h1>
                <h1 className=" font-thin mb-2">FAQs</h1>
              </div>
              <div>
                <h2 className=" mb-3 font-medium">Legal</h2>
                <h1 className=" font-thin mb-2">Privacy</h1>
                <h1 className=" font-thin mb-2">Policy</h1>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/3">
            <form className=" flex flex-col w-full h-full gap-7">
              <input
                placeholder="Name"
                className=" w-full p-5 rounded-full bg-[#4D3B5E]"
              />
              <input
                placeholder="Contact"
                className=" w-full p-5 rounded-full bg-[#4D3B5E]"
              />
              <textarea
                placeholder="Query"
                className=" w-full min-h-52 p-5 rounded-[35px] bg-[#4D3B5E]"
              />
            </form>
            <button
              type="submit"
                className="ml-2 bg-purple-600 p-3 rounded-full hover:bg-purple-500"
                        >
                          <VscRocket className="text-white text-lg" />
             </button>
          </div>
        </div>
        <hr className=" h-1 w-full " />
        <div className=" py-10 px-5 flex items-center justify-between">
          <Link className=" bg-white p-1 rounded-md" to={"/"}>
            <img className=" h-7 sm:h-auto z-10 relative" src={bottomLogo} />
          </Link>
          <div className=" text-white text-2xl flex gap-2 sm:gap-7 z-10">
            <FaTwitter className=" hover:text-purple-400 cursor-pointer" />
            <a
              target="blank"
              href="https://www.linkedin.com/company/beyondriffs/"
            >
              <FaLinkedinIn className=" hover:text-purple-400 cursor-pointer" />
            </a>
            <IoLogoTiktok className=" hover:text-purple-400 cursor-pointer" />
            <FaYoutube className=" hover:text-purple-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
