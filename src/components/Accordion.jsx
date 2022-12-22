import { useState } from "react";

import { list } from "../data/data";
import { BsChevronDown } from "react-icons/bs";

export const Accordion = () => {
  const [data, setData] = useState(list);

  const handleChange = (index) => {
    setData((prev) => {
      prev.filter((e) => {
        e !== prev[index] && (e.isOpen = false);
        return [e];
      });

      prev[index].isOpen = !prev[index].isOpen;
      return [...prev];
    });
  };

  return (
    <>
      {list.map((a, i) => (
        <div className='pb-2' key={i}>
          <i onClick={() => handleChange(i)}>
            <div className='bg-[#e2e2e2] text-black hover:text-white text-base font-medium w-full h-12 hover:bg-[#745a3e]'>
              <div className='items-center h-full mx-8 justify-between flex'>
                <div className=''>{a.title}</div>
                <div
                  className={`${
                    data[i].isOpen
                      ? "rotate-180 duration-1000"
                      : "duration-1000"
                  }`}
                >
                  {/* </div> {data[i].isOpen ? */}
                  {/* <BsChevronUp /> :  */}
                  <BsChevronDown />
                </div>
              </div>
            </div>
          </i>
          {data[i].isOpen && (
            <div className={`grid grid-cols-3 gap-2 bg-white py-3 `}>
              {a.img.map((img, i) => (
                <img src={img} alt='' key={i} />
              ))}
            </div>
          )}
        </div>
      ))}
      ;
    </>
  );
};
