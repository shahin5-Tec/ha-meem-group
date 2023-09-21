import React from 'react';
import indusrtybg from "../assets/images/services/bg-services-new.jpg";
import denim from "../assets/images/services/denim-icon.png"
import design from "../assets/images/services/design-icon.png"
import channel from "../assets/images/services/channel-icon.png"
import newspaper from "../assets/images/services/newspaper-icon.png"
import sweater from "../assets/images/services/sweater-icon.png"
import ancillary from "../assets/images/services/ancillary-icon.png"
import wash from "../assets/images/services/wash-icon.png"
import jute from "../assets/images/services/jute-mill-icon.png"
import woven from "../assets/images/services/woven-icon.png"


const Indusrty = () => {
    return (
        <div>
             {/* our-industries-part */}
      <div className="pt-10">
        <div
          style={{
            backgroundImage: `url(${indusrtybg})`,
          }}
          className="w-full h-full"
        >
          <div className="text-center">
            <h1 className="md:text-4xl text-2xl font-bold font-serif  text-white">
              Our Industries
            </h1>
            <p className="text-white font-semibold mt-5">
              Ha-Meem Group has ventured into many industries in Bangladesh 
              after it's inception. <br /> It has become one of the fastest growing
              Group of Company in the country.
            </p>
          </div>
         <div className='grid grid-cols-3 gap-1 lg:px-32 '>
         <div className=' mt-5 '>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={woven} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Woven</a>
              </h3>
              <p>Our woven factories are equipped with 300 production lines in six different location.</p>
           </div>
               
             
            </div>
          </div>
          <div className=' mt-5'>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={denim} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Denim Mill</a>
              </h3>
              <p>A dream project of Ha‐Meem group located in a serene surrounding of 100 acres.</p>
           </div>
               
             
            </div>
          </div>
          <div className=' mt-5'>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={wash} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Laundry</a>
              </h3>
              <p>All the washing plants have dry process capability with required equipment..</p>
           </div>
               
             
            </div>
          </div>
          <div className=' mt-5 '>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={sweater} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Sweater</a>
              </h3>
              <p>Two Sweater Units consisting of 400 Jacquard Stall</p>
           </div>
               
             
            </div>
          </div>
          <div className=' mt-5'>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={jute} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Jute Mill</a>
              </h3>
              <p>M.H. Jute Mills Ltd., one of the growing industry of Ha-Meem Group..</p>
           </div>
               
             
            </div>
          </div>
          <div className=' mt-5'>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={design} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Design</a>
              </h3>
              <p>Ha‐Meem has a resourceful design team lead by experienced designers.</p>
           </div>
               
             
            </div>
          </div>
          <div className=' mt-5'>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={newspaper} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Newspaper</a>
              </h3>
              <p>Samakal, a popular & widely circulated national daily newspaper in Bangladesh.</p>
           </div>
               
             
            </div>
          </div>
          <div className=' mt-5'>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={ancillary} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">Ancillary</a>
              </h3>
              <p>Embroidery Factory, Printing Factory, Carton Factory, Poly Bag Industry, Label Factory.</p>
           </div>
               
            </div>
          </div>
          <div className=' mt-5 pb-5'>
            <div className='bg-white flex  p-5 gap-4 w-80 h-38 rounded-md'>
              <span className=''>
              <img src={channel} alt="" className='w-64' />
              </span>
           <div>
           <h3>
                <a className='text-red-700 font-semibold text-xl' href="">News Channel</a>
              </h3>
              <p>Channel-24, a very popular news channel covering news all over Bangladesh.</p>
           </div>
               
            </div>
          </div>
         </div>
        </div>
      </div>
        </div>
    );
};

export default Indusrty;