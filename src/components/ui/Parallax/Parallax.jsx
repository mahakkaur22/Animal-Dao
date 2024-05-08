import { ParallaxBanner } from "react-scroll-parallax";
import backImage from "../../../assets/images/jungle.png";

const Parallax = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: { backImage }, speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1]"
    />
  );
};

export default Parallax;
