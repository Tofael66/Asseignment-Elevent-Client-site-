
import parner1 from '../../assets/images/About/about-img-1.jpg'
import parner2 from '../../assets/images/About/about-img-2.jpg'
import hand1 from '../../assets/images/About/hand1.jpg'
import hand2 from '../../assets/images/About/hand2 (1).jpg'
import star from '../../assets/images/About/Capture-removebg-preview.png'





const TreastedPartner = () => {


    return (
        <div className="md:flex mt-20 mb-20 items-center justify-center space-y-20 relative md:px-16 ">


            {/* imges */}
       <div className="flex relative space-x-44 flex-1 md:space-x-60">
 
<div className="h-80 md:h-[380px]">
    <img className='rounded-t-full h-full rounded-b-full' src={parner1} alt="" />
</div>
<div className=" h-[300px] absolute mt-20 md:mt-28  ml-[80px]">
<img className='mt-[-100px] ml-[50px] md:ml-[70px] mb-10 md:mb-[50px]' src={star} alt="" />
<img className='rounded-t-full  rounded-b-full h-full' src={parner2} alt="" />
    </div>
       </div>

{/* text */}
       <div className="flex-1 ">
        <p className='text-red-500'>About Us</p>
<h1 className='text-4xl mb-3 font-bold text-white'>Your trusted partner in
reliable car rental</h1>
<p className='text-sm text-gray-300 font-semibold'>Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolo</p>

<div className="flex mt-5 mb-5">
    <img src={hand1} className='mr-4 w-28' alt="" />
  <div className="space-y-3">
  <h3 className='text-white font-bold text-xl'>Easy Booking Process
   </h3>
    <p className='text-gray-100 text-sm '> We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
  </div>
</div>
<div className="flex mt-5 mb-5">
    <img src={hand2} className='mr-4 w-28' alt="" />
  <div className="space-y-3">
  <h3 className='text-white font-bold text-xl'>Convenient Pick-up & Return Process
   </h3>
    <p className='text-gray-100 text-sm'> We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
  </div>
</div>
       </div>
        </div>
    );
};

export default TreastedPartner;