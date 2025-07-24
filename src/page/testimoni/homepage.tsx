import { onMount } from "solid-js";
import "mxgraph";  // if installed via npm
import "./home.css"
import Navbar from "../component/navbar";
import { AiFillStar } from "solid-icons/ai";
import { RiLogosInstagramLine, RiLogosTiktokLine } from "solid-icons/ri";

import DeviderCustom from "../component/devider";
import Footer from "../component/footer";
import Carousel from "../component/carousel";



const Testimoni = () => {
    // return  <div ref={container} style={graphStyles}></div>;
    return (
        <div class="testing" style={{ "background-color": "black" }}>
            <Navbar />
            <div class="hero-testi mt-10 text-white h-[90vh] relative flex justify-center">
                <div class="flex flex-col items-center justify-center" style={{}}>
                    {/* <p> <span class="header text-gold absolute" style={{ bottom: "5%", left: "5%", "z-index": 999 }}>Service</span></p> */}
                    <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                    <div class="grid grid-cols-2 container">
                        <p> <span class="header text-gold absolute" style={{ bottom: "5%", left: "5%" }}>Service</span></p>
                        <p class="hero-text whitespace-normal">"Lebih dari Sekadar Potong Rambut"</p>
                        {/* <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div> */}
                    </div>
                    {/* <p> <span class="header text-gold">FIT</span> <span class="text-white header">Your Style Here</span></p> */}
                    {/* <p class="subheader-2-hero">With New Technology</p> */}
                    {/* <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-xl text-lg px-5 py-2.5 text-center me-2 mb-2 mt-3">Book Now</button> */}
                </div>
            </div>

            <div class="container-fluid my-10">
                <Carousel />
                <div class="container flex items-center justify-center flex-col">
                    <div class="text-center my-10">
                        <span class="header text-gold">Google Review</span>
                    </div>
                    <button type="button" class="text-gray-900 bg-gradient-to-r bg-yellow-400 font-medium rounded-xl text-lg px-5 py-2.5 text-center me-2 mb-2 mt-3">Book Now</button>

                </div>
            </div>

            <DeviderCustom />

            <div class="container py-10 mt-10 mb-10">

            </div>

            <section class="flex flex-col items-center container justify-center text-center  py-10 mt-10 mb-10">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div class="flex flex-col items-center justify-center">
                        <img src="/img/testi-1.png" alt="" />
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <RiLogosTiktokLine color="white" size={"20vh"} />
                    </div>

                    <div class="flex flex-col items-center justify-center text-center">
                        <span class="header text-gold">Tiktok</span>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <img src="/img/testi-1.png" alt="" />

                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <img src="/img/testi-1.png" alt="" />

                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <button class="mt-12 px-8 py-3 bg-yellow-600 text-white font-semibold rounded-[12px] shadow-lg hover:bg-yellow-700 transition duration-300">Lihat Disini</button>
                    </div>
                </div>
            </section>
            <DeviderCustom />
            <section class="flex flex-col items-center container justify-center text-center  py-10 mt-10 mb-10">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div class="flex flex-col items-center justify-center">
                        <RiLogosInstagramLine color="white" size={"20vh"} />
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <img src="/img/testi-4.png" alt="" />
                    </div>

                    <div class="flex flex-col items-center justify-center text-center">
                        <img src="/img/testi-5.png" alt="" />
                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <span class="header text-gold">Instagram</span>

                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <button class="mt-12 px-8 py-3 bg-yellow-600 text-white font-semibold rounded-[12px] shadow-lg hover:bg-yellow-700 transition duration-300">Lihat Disini</button>

                    </div>

                    <div class="flex flex-col items-center justify-center">
                        <img src="/img/testi-6.png" alt="" />
                    </div>
                </div>
            </section>
            <DeviderCustom />

            <Footer />

        </div>
    );
};


export default Testimoni;