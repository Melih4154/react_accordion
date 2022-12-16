import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

function App() {
  const accordion = [
    { title: "GALERİ", img: ["1.jpg", "2.jpg", "3.jpg"], isOpen: false },
    {
      title: "ÖLÇÜ VE ÖZELLİKLERİ",
      img: ["1.jpg", "2.jpg", "3.jpg"],
      isOpen: false,
    },
    {
      title: "RENK KARTELASI",
      img: ["1.jpg", "2.jpg", "3.jpg"],
      isOpen: true,
    },
  ];

  const [data, setData] = useState(accordion);

  const handleChange = (index) => {
    setData((prev) => {
      prev[index].isOpen = !prev[index].isOpen;
      console.log(prev);
      return [...prev];
    });
  };

  return (
    <div>
      <div className='w-full'>
        <div className='flex flex-wrap px-64 bg-white border-b-[5px] solid border-[#745a3e] h-[90px] items-center'>
          <div className='w-full flex'>
            <div className='text-2xl font-bold justify-start'>TEVERPAN</div>
            <div className='flex text-sm font-semibold w-full justify-end items-center'>
              <div className='mr-7'>
                <span>KURUMSAL</span>
              </div>
              <div className='mr-7'>
                <span>ÜRÜNLER</span>
              </div>
              <div className='mr-7'>
                <span>SATIŞ NOKTALARI</span>
              </div>
              <div className='mr-7'>
                <span>İLETİŞİM</span>
              </div>
              <div className='mr-7'>
                <span>KVKK(MDF)</span>
              </div>
              <div className='mr-7'>
                <span>KVKK(DIŞ)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto'>
          <img src='banner-1.jpg' alt='' />
        </div>
        <div className='grid grid-cols-8 gap-4'>
          <div className='col-start-3 col-span-4 py-8'>
            <p className='text-[#373737] text-[32px] font-semibold pb-4'>
              Mdflam
            </p>
            <p className='text-[#745a3e] text-[18px] '>Melamin Kaplı MDF</p>
            <div className='text-[#373737] text-[15px] py-4 pb-8'>
              <p className=''>
                MDFLAM (Melamin Kaplı MDF) ürünümüz, kaliteli olmasının yanı
                sıra, modayı yansıtan dekorları ve dekorlardaki doğal sıcaklığı
                bakımından her türlü mobilya imalatı ve mekanların iç
                dekorasyonunda zengin alternatifler sunar.
              </p>
              <p className='pt-3'>
                Melamin Kaplı MDF' lerimiz kaliteli olduğundan; kesme, delme,
                frezeleme, kenar bantlama, masif sıkma, vidalama işlemlerinde
                mükemmel sonuç verir.
              </p>
            </div>

            {accordion.map((a, i) => (
              <div className='pb-2' key={i}>
                <i onClick={() => handleChange(i)}>
                  <div className='bg-[#e2e2e2] text-black hover:text-white text-base font-medium w-full h-12 hover:bg-[#745a3e]'>
                    <div className='items-center h-full mx-8 justify-between flex'>
                      <div className=''>{a.title}</div>
                      {data[i].isOpen ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                  </div>
                </i>
                {data[i].isOpen && (
                  <div className='grid grid-cols-3 gap-2 bg-white py-3'>
                    {a.img.map((img, i) => (
                      <img src={img} alt='' key={i} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
