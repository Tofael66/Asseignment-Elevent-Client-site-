import BannerAbout from "./BannerAbout";
import RentelService from "./RentelService/RentelService";
import TrastedBrand from "./TrastedBrand";
import TreastedPartner from "./TreastedPartner";




const About = () => {


    return (
        <div>
               <BannerAbout></BannerAbout>
           <div className="max-w-6xl mx-auto px-4">
        <TreastedPartner></TreastedPartner>
        <TrastedBrand></TrastedBrand>
        <RentelService></RentelService>
           </div>
             
        </div>
    );
};

export default About;