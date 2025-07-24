import { AiFillStar } from "solid-icons/ai";
import { createSignal, For, JSX, onCleanup, onMount } from "solid-js";
import { VsCircleLargeFilled } from "solid-icons/vs"



const Carousel = () => {
  // return  <div ref={container} style={graphStyles}></div>;
  const reviews = [
    {
      id: 1,
      author: 'Vigy Muhamad',
      rating: 5,
      time: '2 bulan lalu',
      content: 'Experience disini cukup menyenangkan. Durasi potong terbilang singkat dan ada sesi before after jadi mikir kesini lagi udah ada referensi potongannya mau...',
      avatar: 'https://placehold.co/40x40/FF6347/FFFFFF?text=VM'
    },
    {
      id: 2,
      author: 'Naufal Hakim',
      rating: 4,
      time: '2 minggu lalu',
      content: 'barbernya keren, menyediakan untuk gaya cukuran mau seperti Al. Untuk harga affordable dengan...',
      avatar: 'https://placehold.co/40x40/3CB371/FFFFFF?text=NH'
    },
    {
      id: 3,
      author: 'Budi Santoso',
      rating: 5,
      time: '1 bulan lalu',
      content: 'Pelayanan sangat puas, kualitas, tempatnya nyaman bikin pusa. Su...',
      avatar: 'https://placehold.co/40x40/4682B4/FFFFFF?text=BS'
    },
    {
      id: 4,
      author: 'Siti Aminah',
      rating: 4,
      time: '3 minggu lalu',
      content: 'Potongan rapi, tempat bersih, dan harga terjangkau. Sangat direkomendasikan untuk yang mencari...',
      avatar: 'https://placehold.co/40x40/DAA520/FFFFFF?text=SA'
    },
    {
      id: 5,
      author: 'Joko Susilo',
      rating: 5,
      time: '1 minggu lalu',
      content: 'Barbershop favorit! Selalu puas dengan hasilnya. Tukang cukurnya ramah dan profesional...',
      avatar: 'https://placehold.co/40x40/8A2BE2/FFFFFF?text=JS'
    },
  ];

  // State to manage the current active slide index
  const [currentIndex, setCurrentIndex] = createSignal(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev: number) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev: number) => (prev === reviews.length - 3 ? 0 : prev + 1));
  };

  onMount(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 5 seconds

    // Clean up the interval when the component unmounts
    onCleanup(() => clearInterval(interval));
  });



  return (
    <div class="flex items-center justify-center font-inter p-4">
      <div class="relative w-full max-w-[90vw] overflow-hidden">
        {/* Carousel Container */}
        <div
          class="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex() * (100 / 3)}%)` }} // Adjust for 3 visible cards
        >
          <For each={reviews}>
            {(review: { avatar: string | undefined; author: string | number | boolean | Node | JSX.ArrayElement | null | undefined; rating: any; time: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; content: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) => (
              <div class="flex-shrink-0 w-1/3 p-2"> {/* Each card takes 1/3 width */}
                {/* Review Card */}
                <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                      <img
                        src={review.avatar}
                        // alt={review.author}
                        class="w-10 h-10 rounded-full mr-3"
                      // onerror="this.onerror=null;this.src='https://placehold.co/40x40/CCCCCC/000000?text=NA';" // Fallback image
                      />
                      <div>
                        <p class="font-semibold text-gray-900">{review.author}</p>
                        <p class="text-sm text-gray-500">6 Ulasan</p> {/* Assuming static for now */}
                      </div>
                    </div>
                    {/* Three dots icon (More options) */}
                    <svg class="w-5 h-5 text-gray-400 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 100-4 2 2 0 000 4zM10 12a2 2 0 100-4 2 2 0 000 4zM10 18a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </div>

                  {/* Rating and Time */}
                  <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400 mr-2">
                      {/* Render stars based on rating */}
                      <For each={Array(review.rating).fill(0)}>
                        {() => (
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72a1 1 0 01.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                          </svg>
                        )}
                      </For>
                    </div>
                    <p class="text-sm text-gray-500">{review.time}</p>
                  </div>

                  {/* Review Content */}
                  <p class="text-gray-700 whitespace-normal text-sm leading-relaxed flex-grow">{review.content} <span class="text-blue-600 cursor-pointer">Lainnya</span></p>
                </div>
              </div>
            )}
          </For>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-md hover:bg-opacity-75 focus:outline-none z-10 ml-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-md hover:bg-opacity-75 focus:outline-none z-10 mr-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};


export default Carousel;