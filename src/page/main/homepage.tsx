import { onMount } from "solid-js";
import "mxgraph";  // if installed via npm
import "./home.css"
import Navbar from "../component/navbar";
import { AiFillStar } from "solid-icons/ai";
import DeviderCustom from "../component/devider";
import Footer from "../component/footer";



const Homepage = () => {
    // return  <div ref={container} style={graphStyles}></div>;
    return (
        <div class="testing" style={{ "background-color": "black" }}>
            <Navbar />
            <div class="hero mt-10 text-white h-[90vh] relative">
                <div style={{ position: "absolute", bottom: "5vh", left: "5vh" }}>
                    <p class="header text-gold">Explore New Hairstyle</p>
                    <p class="subheader-hero">With New Technology</p>
                    <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-xl text-lg px-5 py-2.5 text-center me-2 mb-2 mt-3">Book Now</button>
                </div>
            </div>
            <DeviderCustom />
            <div class="container">
                <div class="grid grid-cols-2 grid-rows-2 mt-8 gap-4 text-white">
                    <div class="col-span-2 justify-center items-center flex-wrap flex flex-col">
                        <div>
                            <p class="header whitespace-normal w-[60%]">Gaya Sesuai Ekspektasi, Dimulai dari Sini.</p>
                            <p class="subheader mt-3">Kontrol Penuh Atas Gaya Impianmu.</p>
                        </div>
                    </div>
                    <div class="row-start-2"></div>
                    <div class="row-start-2 ml-10 mt-10">
                        <p class="whitespace-normal w-[100%] subtitle">Temukan potongan rambut dan perawatan terbaik di sini, didukung teknologi multi-angle display dan pratinjau gaya rambut via AI serta 3D modeling. Kami memudahkan Anda untuk booking jadwal, menikmati pengalaman yang nyaman, dan mendapatkan hasil yang akurat serta presisi, persis seperti yang Anda bayangkan!</p>
                    </div>
                </div>
            </div>
            <DeviderCustom />


            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                    <div class="flex items-center">
                        <div class="rounded-full overflow-hidden border-4 border-gray-700 flex items-center justify-center" style={{ height: "50vh", width: "20vw" }}>
                            <img
                                src="/img/main-1.png"
                                alt="Multi Angle Display"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Multi Angle</span> <br /> <span class="text-gold">Display</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Teknologi multi-angle display digunakan untuk melihat proses haircut dari berbagai sisi, memungkinkan barberman dan pelanggan untuk melihat bentuk wajah dan rambut secara komprehensif.
                        </p>
                    </div>
                </div>
            </div>
            <DeviderCustom />
            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                    <div class="flex flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Model Wajah</span> <br /> <span class="text-gold">A.I</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Fitur pemodelan rambut A.I. Modelling dan Hair Visualizer memungkinkan pelanggan untuk melihat bagaimana gaya rambut tertentu akan terlihat sebelum  haircut  dilakukan.  Ini membantu dalam memilih gaya yang paling sesuai dengan bentuk wajah
                        </p>
                    </div>
                    <div class="flex items-center justify-end">
                        <div class="rounded-full overflow-hidden border-4 border-gray-700 flex" style={{ height: "50vh", width: "20vw" }}>
                            <img
                                src="/img/main-2.png"
                                alt="Multi Angle Display"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <DeviderCustom />

            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                    <div class="flex flex-col justify-center">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Inovasi</span> <br /> <span class="text-gold">Layanan</span>
                        </h1>
                        <p class="whitespace-normal w-[70%] text-white">
                            Dengan teknologi digital, Barberfits menawarkan pengalaman potong rambut yang lebih personal dan interaktif. Pelanggan dapat berpartisipasi lebih aktif dalam proses pemilihan gaya rambut.
                        </p>
                    </div>
                    <div class="flex items-center justify-start">
                        <div class="rounded-full overflow-hidden border-4 border-gray-700 flex" style={{ height: "70vh", width: "100%" }}>
                            <img
                                src="/img/main-3.png"
                                alt="Multi Angle Display"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                    <div class="flex items-center justify-end">
                        <div class="rounded-full overflow-hidden border-4 border-gray-700 flex items-center justify-center" style={{ height: "70vh", width: "100%" }}>
                            <img
                                src="/img/main-4.png"
                                alt="Multi Angle Display"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="whitespace-normal w-[70%] text-white">
                            Memberikan pengalaman baru bagi pelanggan, dengan teknologi digital yang memudahkan pelanggan dalam memilih gaya rambut yang cocok dengan bentuk wajah.
                        </p>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};


export default Homepage;
