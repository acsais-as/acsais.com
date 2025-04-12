import Image from "next/image";
import HeroImg from "@/public/images/hero/hero_img.png";

const HeroImage = () => {
  return (
    <div>
      <Image src={HeroImg} width={550} height={550} alt="" priority />
    </div>
  );
};

export default HeroImage;
