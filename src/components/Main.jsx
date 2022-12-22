import React from "react";
import { Accordion } from "./Accordion";

export const Main = () => {
  return (
    <div className='grid grid-cols-8 gap-4'>
      <div className='col-start-3 col-span-4 py-8'>
        <p className='text-[#373737] text-[32px] font-semibold pb-4'>Lorem</p>
        <p className='text-[#745a3e] text-[18px] '>Lorem İpsum Dolor</p>
        <div className='text-[#373737] text-[15px] py-4 pb-8'>
          <p className=''>
            Amet incididunt consectetur laborum nostrud do velit elit
            exercitation. Excepteur ex ipsum elit velit minim irure aliqua
            excepteur Lorem proident ullamco. Elit laboris qui nisi ea et et
            reprehenderit officia cupidatat id. Consequat excepteur velit sunt
            fugiat elit. Fugiat commodo sunt reprehenderit tempor.
          </p>
          <p className='pt-3'>
            Qui incididunt anim incididunt eiusmod ullamco proident irure duis
            nulla occaecat.
          </p>
        </div>

        <Accordion />
      </div>
    </div>
  );
};
