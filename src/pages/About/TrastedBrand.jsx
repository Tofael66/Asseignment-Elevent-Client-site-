import brand1 from '../../assets/images/About/brand1-removebg-preview.png'
import brand2 from '../../assets/images/About/brand2-removebg-preview.png'
import brand3 from '../../assets/images/About/brand3-removebg-preview.png'
import brand4 from '../../assets/images/About/brand4-removebg-preview.png'



const TrastedBrand = () => {

    return (

        <div className="bg-[#191919] py-20 md:px-16">
<div className="text-center space-y-3 pb-12 rounded-xl ">
    <p className='text-red-600'>Vision Mission</p>
    <h2 className='text-4xl  text-white font-bold'>Trusted by leading brands</h2>
</div>
<div className="grid  md:grid-cols-4 grid-cols-2  gap-6 md:gap-10">
                
<div className="bg-[#000000] flex items-center md:px-8 py-4 rounded-xl">
    <img src={brand1} alt="" />
<h3>LoguPurpose</h3>
</div>
<div className="bg-[#000000] flex items-center   md:px-8 py-4 rounded-xl">
    <img src={brand2} alt="" />
<h3>LoguPurpose</h3>
</div>
<div className="bg-[#000000] flex items-center  md:px-8 py-4 rounded-xl">
    <img src={brand3} alt="" />
<h3>LoguPurpose</h3>
</div>
<div className="bg-[#000000] flex items-center  md:px-8 py-4 rounded-xl">
    <img src={brand4} alt="" />
<h3>LoguPurpose</h3>
</div>
</div>
<div className="grid mt-4   md:grid-cols-4 grid-cols-2  gap-6">
                
<div className="bg-[#000000] flex items-center md:px-8 py-4 rounded-xl">
    <img src={brand1} alt="" />
<h3>LoguPurpose</h3>
</div>
<div className="bg-[#000000] flex items-center md:px-8 py-4 rounded-xl">
    <img src={brand2} alt="" />
<h3>LoguPurpose</h3>
</div>
<div className="bg-[#000000] flex items-center md:px-8 py-4 rounded-xl">
    <img src={brand3} alt="" />
<h3>LoguPurpose</h3>
</div>
<div className="bg-[#000000] flex items-center md:px-8 py-4 rounded-xl">
    <img src={brand4} alt="" />
<h3>LoguPurpose</h3>
</div>
</div>
            
        </div>
    );
};

export default TrastedBrand;