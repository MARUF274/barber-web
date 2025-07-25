import { onMount } from "solid-js";



const Navbar = () => {
  // return  <div ref={container} style={graphStyles}></div>;
  return (




    <nav class="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/img/logo-barber.svg" class="h-8" alt="Flowbite Logo" />
        </a>
        {/* <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div> */}
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a href="#" class="block py-2 px-3 text-white rounded-sm md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/profile" class="block py-2 px-3 text-white rounded-sm md:p-0">Profile</a>
            </li>
            <li>
              <a href="/service" class="block py-2 px-3 text-white rounded-sm md:p-0">Service</a>
            </li>
            <li>
              <a href="/testimoni" class="block py-2 px-3 text-white rounded-sm md:p-0">Testimoni</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-white rounded-sm md:p-0">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};


export default Navbar;