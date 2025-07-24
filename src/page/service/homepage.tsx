import { onMount } from "solid-js";
import "mxgraph";  // if installed via npm
import "./home.css"
import Navbar from "../component/navbar";
import { AiFillStar } from "solid-icons/ai";
import DeviderCustom from "../component/devider";
import Footer from "../component/footer";
import Carousel from "../component/carousel";



const Service = () => {
    // return  <div ref={container} style={graphStyles}></div>;
    return (
        <div class="testing" style={{ "background-color": "black" }}>
            <Navbar />
            <div class="hero-step mt-10 text-white h-[90vh] relative">
                <div class="flex flex-col items-center justify-center" style={{}}>
                    <p> <span class="header text-gold absolute" style={{ bottom: "5%", left: "5%", "z-index": 999 }}>Service</span></p>
                    <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                    {/* <p> <span class="header text-gold">FIT</span> <span class="text-white header">Your Style Here</span></p> */}
                    {/* <p class="subheader-2-hero">With New Technology</p> */}
                    {/* <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-xl text-lg px-5 py-2.5 text-center me-2 mb-2 mt-3">Book Now</button> */}
                </div>
            </div>

            <DeviderCustom />

            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-12 grid-rows-1 gap-4">
                    <div class="flex col-span-4 flex-col justify-around">
                        <p class="text-white" style={{ "font-size": "50vh" }}>
                            1 <span style={{ "margin-left": "-10vw" }}>&#x2774;</span>
                        </p>
                    </div>
                    <div class="flex col-span-3 flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Model Wajah</span> <br /> <span class="text-gold">A.I</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Fitur pemodelan rambut A.I. Modelling dan Hair Visualizer memungkinkan pelanggan untuk melihat bagaimana gaya rambut tertentu akan terlihat sebelum  haircut  dilakukan.  Ini membantu dalam memilih gaya yang paling sesuai dengan bentuk wajah
                        </p>
                    </div>
                    <div class="flex col-span-5 items-center justify-end">
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
                <div class="grid grid-cols-12 grid-rows-1 gap-4">

                    <div class="flex col-span-5 items-center">
                        <div class="rounded-full overflow-hidden border-4 border-gray-700 flex" style={{ height: "50vh", width: "20vw" }}>
                            <img
                                src="/img/main-2.png"
                                alt="Multi Angle Display"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div class="flex col-span-4 flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Model Wajah</span> <br /> <span class="text-gold">A.I</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Fitur pemodelan rambut A.I. Modelling dan Hair Visualizer memungkinkan pelanggan untuk melihat bagaimana gaya rambut tertentu akan terlihat sebelum  haircut  dilakukan.  Ini membantu dalam memilih gaya yang paling sesuai dengan bentuk wajah
                        </p>
                    </div>

                    <div class="flex col-span-3 flex-col justify-end">
                        <p class="text-white" style={{ "font-size": "50vh" }}>
                            &#x2775; <span style={{ "margin-left": "-10vw" }}>2</span>
                        </p>
                    </div>

                </div>
            </div>
            <DeviderCustom />
            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-12 grid-rows-1 gap-4">
                    <div class="flex col-span-4 flex-col justify-around">
                        <p class="text-white" style={{ "font-size": "50vh" }}>
                            3 <span style={{ "margin-left": "-10vw" }}>&#x2774;</span>
                        </p>
                    </div>
                    <div class="flex col-span-3 flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Konsultasi</span> <br /> <span class="text-gold">Gaya Rambut</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Lihat wajah Anda di layar dengan berbagai pratinjau gaya rambut yang direkomendasikan oleh AI. Anda bisa mencoba puluhan gaya secara virtual. Konsultasikan pilihan terbaik bersama barber profesional kami untuk menemukan gaya yang paling sesuai dengan bentuk wajah dan karakter Anda.
                        </p>
                    </div>
                    <div class="flex col-span-5 items-center justify-end">
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
                <div class="grid grid-cols-12 grid-rows-1 gap-4">

                    <div class="flex col-span-5 items-center">
                        <div class="rounded-full overflow-hidden border-4 border-gray-700 flex" style={{ height: "50vh", width: "20vw" }}>
                            <img
                                src="/img/main-2.png"
                                alt="Multi Angle Display"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div class="flex col-span-4 flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Eksekusi Potongan</span> <br /> <span class="text-gold">Yang Presisi</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Dengan guidance dari konsultasi awal dan preview gaya, stylist kami akan memulai proses pemotongan. Mereka menggunakan teknik terkini dan peralatan terbaik untuk memastikan setiap helai rambut dipotong dengan presisi tinggi, sesuai dengan gaya yang telah disepakati.
                        </p>
                    </div>

                    <div class="flex col-span-3 flex-col justify-end">
                        <p class="text-white" style={{ "font-size": "50vh" }}>
                            &#x2775; <span style={{ "margin-left": "-6vw" }}>4</span>
                        </p>
                    </div>

                </div>
            </div>
            <DeviderCustom />
            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-12 grid-rows-1 gap-4">
                    <div class="flex col-span-4 flex-col justify-around">
                        <p class="text-white" style={{ "font-size": "50vh" }}>
                            5 <span style={{ "margin-left": "-8vw" }}>&#x2774;</span>
                        </p>
                    </div>
                    <div class="flex col-span-3 flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Perawatan Cuci</span> <br /> <span class="text-gold">Dan Relaksasi</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Mencuci rambut Anda hingga bersih di washbak kami yang nyaman setelah pemotongan, dilanjutkan dengan perawatan handuk hangat di area wajah dan mata untuk meredakan ketegangan dan membuat Anda merasa segar kembali.
                        </p>
                    </div>
                    <div class="flex col-span-5 items-center justify-end">
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
                <div class="grid grid-cols-12 grid-rows-1 gap-4">

                    <div class="flex col-span-5 items-center">
                        <div class="rounded-full overflow-hidden border-4 border-gray-700 flex" style={{ height: "50vh", width: "20vw" }}>
                            <img
                                src="/img/main-2.png"
                                alt="Multi Angle Display"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div class="flex col-span-4 flex-col justify-around">
                        <h1 class="title-text font-bold mb-4">
                            <span class="text-white">Pengeringan dan</span> <br /> <span class="text-gold">Penataan Professional</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Rambut Anda akan dikeringkan dan ditata secara profesional oleh barber kami. Kami juga menawarkan opsi penggunaan hair tonic untuk kesehatan kulit kepala dan hair powder untuk volume ekstra, sesuai preferensi Anda.
                        </p>
                    </div>

                    <div class="flex col-span-3 flex-col justify-end" style={{ "margin-top": "10vh" }}>
                        <p class="text-white" style={{ "font-size": "50vh" }}>
                            &#x2775; <span style={{ "margin-left": "-8vw" }}>6</span>
                        </p>
                    </div>

                </div>
            </div>
            <DeviderCustom />
            <div class="container py-10 mt-10 mb-10">
                <div class="grid grid-cols-12 grid-rows-1 gap-4">
                    <div class="flex col-span-4 flex-col justify-around">
                        <p class="text-white" style={{ "font-size": "50vh" }}>
                            7 <span style={{ "margin-left": "-10vw" }}>&#x2774;</span>
                        </p>
                    </div>
                    <div class="flex col-span-3 flex-col justify-around">
                        <h1 class="title-text font-bold mb-5">
                            <span class="text-white">Sentuhan Akhir</span> <br /> <span class="text-gold">Dan Pembayaran</span>
                        </h1>
                        <p class="whitespace-normal w-[100%] text-white">
                            Setelah Anda puas dengan penampilan baru Anda, kami akan memastikan semuanya sempurna. Proses selanjutnya adalah pembayaran yang mudah dan cepat melalui berbagai metode yang tersedia.
                        </p>
                    </div>
                    <div class="flex col-span-5 items-center justify-end">
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

            <div class="container py-10 flex justify-center">
                <button type="button" class="text-gray-900 bg-gradient-to-r bg-yellow-400 font-medium rounded-xl text-lg px-5 py-2.5 text-center me-2 mb-2 mt-3">Book Now</button>
            </div>






            <Footer />

        </div>
    );
};


export default Service;