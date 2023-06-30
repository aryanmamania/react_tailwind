import React from "react";
import Laptop from "../assests/laptop.jpg";

export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-col-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/"></img>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold"> Data Analytics Dashboard </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            consequuntur voluptates ullam voluptatibus pariatur? Autem, repellat
            modi, eum corrupti eius voluptatem expedita veniam eaque, eligendi
            atque accusantium harum dolore maiores?
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
