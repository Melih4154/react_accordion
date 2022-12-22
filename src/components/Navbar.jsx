import React from "react";

export const Navbar = () => {
  return (
    <div className='flex flex-wrap px-64 bg-white border-b-[5px] solid border-[#745a3e] h-[90px] items-center'>
      <div className='w-full flex'>
        <div className='text-2xl font-bold justify-start'>LOREM</div>
        <div className='flex text-sm font-semibold w-full justify-end items-center'>
          <div className='mr-7'>
            <span>Lorem</span>
          </div>
          <div className='mr-7'>
            <span>Lorem</span>
          </div>
          <div className='mr-7'>
            <span>Lorem İpsum</span>
          </div>
          <div className='mr-7'>
            <span>Lorem</span>
          </div>
          <div className='mr-7'>
            <span>Lorem</span>
          </div>
          <div className='mr-7'>
            <span>Lorem</span>
          </div>
        </div>
      </div>
    </div>
  );
};
