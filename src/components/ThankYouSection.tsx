import { motion } from "motion/react";

export default function ThankYouSection() {
  return (
    <div className="ml-auto mr-auto relative h-[388.2px]">
      <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
      <div className="h-full ml-auto mr-auto relative">
        <motion.div
          className="fixed w-[149.25px] h-[39.25px] right-[10px] bottom-[15px] mr-[calc(50% - 210px)] z-[90000050]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="size-full absolute">
            <div className="absolute w-[134px] h-[32.5px] left-0 top-[3.375px]">
              <div className="size-full overflow-hidden absolute bg-[rgb(63,_92,_132)] rounded-[6.25rem]"></div>
            </div>
            <div className="absolute w-[94px] left-[10px] top-[8.625px]">
              <p
                className="bg-center bg-cover inline-block text-center uppercase w-full text-white text-[14.41px] leading-[21.615px]"
                style={{
                  fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                  textDecoration: "rgb(255, 255, 255)",
                }}
              >
                click music &nbsp;
              </p>
            </div>
            <div className="absolute w-[39.25px] h-[39.25px] left-[110px] top-0">
              <div className="size-full overflow-hidden absolute">
                <div
                  className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[39.25px] h-[39.25px] left-0 top-0"
                  style={{
                    backgroundImage:
                      'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F529cb815230594a7f238b6fbf94ad1e4a12f9c93.gif?generation=1762677300648018&alt=media")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute w-[149.25px] h-[39.25px] left-[-298px] top-[-137.2px]">
          <div className="size-full absolute">
            <div className="absolute w-[134px] h-[32.5px] left-0 top-[3.375px]">
              <div className="size-full overflow-hidden absolute bg-[rgb(63,_92,_132)] rounded-[6.25rem]"></div>
            </div>
            <div className="absolute w-[94px] left-[10px] top-[8.625px]">
              <p
                className="bg-center bg-cover inline-block text-center uppercase w-full text-white text-[14.41px] leading-[21.615px]"
                style={{
                  fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                  textDecoration: "rgb(255, 255, 255)",
                }}
              >
                <br />
              </p>
            </div>
            <div className="absolute w-[39.25px] h-[39.25px] left-[110px] top-0">
              <div className="size-full overflow-hidden absolute">
                <div
                  className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[39.25px] h-[39.25px] left-0 top-0"
                  style={{
                    backgroundImage:
                      'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F529cb815230594a7f238b6fbf94ad1e4a12f9c93.gif?generation=1762677300648018&alt=media")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[420px] h-[331px] left-0 top-0">
          <div
            className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687464/TA_06733_woezrn.jpg")',
            }}
          ></div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="absolute w-[361px] h-[267.4px] left-[29.5px] top-[33.8px]">
          <div className="size-full absolute">
            <div className="absolute w-[146px] left-[107.5px] top-[217.4px]">
              <p
                className="bg-center bg-cover inline-block text-center w-full text-white text-[31.4px] leading-[50.24px]"
                style={{
                  fontFamily:
                    "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                  textDecoration: "rgb(255, 255, 255)",
                }}
              >
                Thank you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
