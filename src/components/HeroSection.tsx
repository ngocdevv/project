import { motion } from "motion/react";

type HeroSectionProps = {
  image: string;
};

export default function HeroSection({ image }: HeroSectionProps) {
  return (
    <div className="ml-auto mr-auto relative h-[630px]">
      <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
      <div className="h-full ml-auto mr-auto relative">
        <motion.div
          className="absolute w-[420px] h-[630px] left-0 top-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div
            className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </motion.div>
        <div className="absolute w-[420px] h-[347px] left-0 top-[283px]">
          <div
            className="size-full overflow-hidden absolute"
            style={{
              backgroundImage:
                "linear-gradient(rgba(253, 251, 251, 0), rgba(2, 2, 2, 0.7))",
            }}
          ></div>
        </div>
        <motion.div
          className="absolute w-[418px] h-[315px] left-[17px] top-[363.5px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="size-full absolute">
            <motion.div
              className="absolute w-[272px] left-0 top-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3
                className="bg-center bg-cover inline-block text-left w-full text-white text-[129px] leading-[206.4px]"
                style={{
                  fontFamily: "MUZUViWSVAtSEFTVEVHSSPVEY",
                  textDecoration: "rgb(255, 255, 255)",
                }}
              >
                HỌC &nbsp;
              </h3>
            </motion.div>
            <motion.div
              className="absolute w-[352px] left-[66px] top-[109px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <h3
                className="bg-center bg-cover inline-block text-left w-full text-white text-[129px] leading-[206.4px]"
                style={{
                  fontFamily: "MUZUViWSVAtSEFTVEVHSSPVEY",
                  textDecoration: "rgb(255, 255, 255)",
                }}
              >
                NHƯ &nbsp;
              </h3>
            </motion.div>
            <motion.div
              className="absolute w-[77px] left-0 top-[70px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <h3
                className="bg-center bg-cover inline-block text-left w-full text-white text-[120px] leading-[192px]"
                style={{
                  fontFamily: "MUZUViWSVAtQVJDSVRUWUEtQkVHQVRSSSPVEY",
                  textDecoration: "rgb(255, 255, 255)",
                }}
              >
                &amp; &nbsp;
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
