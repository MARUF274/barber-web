import { onMount } from "solid-js";
import "mxgraph";  // if installed via npm
import "./home.css"
import Navbar from "../component/navbar";
import { AiFillStar } from "solid-icons/ai";
import DeviderCustom from "../component/devider";
import Footer from "../component/footer";
import Carousel from "../component/carousel";



const Profile = () => {
    // return  <div ref={container} style={graphStyles}></div>;
    return (
        <div class="testing" style={{ "background-color": "black" }}>
            <Navbar />
            <div class="hero-profile mt-10 text-white h-[90vh] relative">
                <div class="flex flex-col items-center justify-center" style={{}}>
                    <p> <span class="header text-gold absolute" style={{ bottom: "5%", left: "5%", "z-index": 999 }}>Profile</span></p>
                    <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                    {/* <p class="subheader-2-hero">With New Technology</p> */}
                    {/* <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-xl text-lg px-5 py-2.5 text-center me-2 mb-2 mt-3">Book Now</button> */}
                </div>
            </div>

            <DeviderCustom />
            <div class="container">

                <div class="grid grid-cols-12 grid-rows-6 gap-4 text-white">
                    <div class="col-span-5 row-span-6 flex flex-col justify-between">
                        <div>
                            <h1 class="title-text font-bold mb-4">
                                <span class="text-gold header">Liputan</span> <br /> <span class="text-white subheader-2">Media</span>
                            </h1>
                        </div>
                        <p class="whitespace-normal">
                            Popularitas Barberfits semakin meluas setelah diliput oleh berbagai media, termasuk Detik Jabar, Detik.com, Humas Bandung, CNN, dan YouTuber terkenal dari Bali, Yudist Ardhana, serta para customer barberfits dan content creator lain seperti; Stefan Yeremia, Nizar Amrullah, Jawad hilman, Hendri Aditya, Mamet, Heru, Alfians, Pipin pku, dan masih banyak lainnya
                        </p>
                    </div>
                    <div class="col-span-2 row-span-5 col-start-7">
                        <img src="/img/liputan-1.png" alt="" />
                    </div>
                    <div class="col-span-2 row-span-5 col-start-9 row-start-2">
                        <img src="/img/liputan-2.png" alt="" />
                    </div>
                    <div class="col-span-2 row-span-5 col-start-11 row-start-1">
                        <img src="/img/liputan-3.png" alt="" />

                    </div>
                </div>

            </div>
            <DeviderCustom />

            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-12 grid-rows-1 gap-4">
                    <div class="col-span-6 flex items-center justify-end">

                        <img
                            src="/img/sejarah.png"
                            alt="Multi Angle Display"
                            class="w-full h-full object-cover"
                        />

                    </div>
                    <div class="col-span-6 flex flex-col justify-between">
                        <div>
                            <h1 class="title-text font-bold mb-4">
                                <span class="text-gold header">Sejarah</span> <br /> <span class="text-white subheader-2">Barberfits</span>
                            </h1>
                        </div>
                        <p class="whitespace-normal text-white">
                            Popularitas Barberfits semakin meluas setelah diliput oleh berbagai media, termasuk Detik Jabar, Detik.com, Humas Bandung, CNN, dan YouTuber terkenal dari Bali, Yudist Ardhana, serta para customer barberfits dan content creator lain seperti; Stefan Yeremia, Nizar Amrullah, Jawad hilman, Hendri Aditya, Mamet, Heru, Alfians, Pipin pku, dan masih banyak lainnya
                        </p>
                    </div>
                </div>
            </div>
            <DeviderCustom />
            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-12 grid-rows-1 gap-4 flex items-center">
                    <div class="col-span-6 flex flex-col items-center gap-4 justify-end">
                        <div class="grid grid-cols-12 flex items-center">
                            <div class="col-span-3">
                                <img src="/img/star-gray.svg" alt="" />
                            </div>
                            <div class="col-span-7">
                                <p class="whitespace-normal text-white">
                                    Popularitas Barberfits semakin meluas setelah diliput oleh berbagai media, termasuk Detik Jabar, Detik.com, Humas Bandung, CNN, dan YouTuber terkenal dari Bali, Yudist Ardhana, serta para customer barberfits dan content creator lain seperti; Stefan Yeremia, Nizar Amrullah, Jawad hilman, Hendri Aditya, Mamet, Heru, Alfians, Pipin pku, dan masih banyak lainnya
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 flex items-center">
                            <div class="col-span-3">
                                <img src="/img/star-gray.svg" alt="" />
                            </div>
                            <div class="col-span-7">
                                <p class="whitespace-normal text-white">
                                    Popularitas Barberfits semakin meluas setelah diliput oleh berbagai media, termasuk Detik Jabar, Detik.com, Humas Bandung, CNN, dan YouTuber terkenal dari Bali, Yudist Ardhana, serta para customer barberfits dan content creator lain seperti; Stefan Yeremia, Nizar Amrullah, Jawad hilman, Hendri Aditya, Mamet, Heru, Alfians, Pipin pku, dan masih banyak lainnya
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 flex items-center">
                            <div class="col-span-3">
                                <img src="/img/star-gray.svg" alt="" />
                            </div>
                            <div class="col-span-7">
                                <p class="whitespace-normal text-white">
                                    Popularitas Barberfits semakin meluas setelah diliput oleh berbagai media, termasuk Detik Jabar, Detik.com, Humas Bandung, CNN, dan YouTuber terkenal dari Bali, Yudist Ardhana, serta para customer barberfits dan content creator lain seperti; Stefan Yeremia, Nizar Amrullah, Jawad hilman, Hendri Aditya, Mamet, Heru, Alfians, Pipin pku, dan masih banyak lainnya
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-4 flex flex-col justify-between text-white">
                        <div class="grid grid-cols-12 flex items-center gap-4">
                            <div class="col-span-12">
                                <p class="whitespace-normal">Barberfits terus berinovasi dengan mengembangkan sistem-sistem baru, antara lain:</p>
                            </div>
                            <div class="col-span-12">
                                <li>Hair Guide</li>
                                <li>A.I. Modelling</li>
                                <li>Haircut Summary</li>
                                <li>Face Profiler</li>
                                <li>Hair Analisis Visualizer</li>
                            </div>
                            <div class="col-span-12">
                                <p class="whitespace-normal text-white">
                                    Pengembangan sistem-sistem ini bertujuan untuk meningkatkan pengalaman pelanggan dan memberikan layanan potong rambut yang lebih personal dan canggih.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DeviderCustom />
            <div class="container py-10 mt-10 mb-10">
                <img class="w-full" src="/img/bg-sejarah.png" alt="" />
            </div>
            <DeviderCustom />

            {/* <Carousel /> */}



            <Footer />

        </div>
    );
};


export default Profile;