import { AiFillStar } from "solid-icons/ai";
import { onMount } from "solid-js";



const DeviderCustom = () => {
  // return  <div ref={container} style={graphStyles}></div>;
  return (

    <div class="flex items-center mt-4 w-full p-4">
      <div class="flex-grow h-px solid-line rounded-full"></div>
      <div class="px-4 text-white text-lg">
        <AiFillStar />
      </div>
      <div class="flex-grow h-px solid-line rounded-full"></div>
    </div>
  );
};


export default DeviderCustom;