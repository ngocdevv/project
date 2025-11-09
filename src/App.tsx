import React from "react";
import { motion } from "motion/react";

const weddingHeroImage =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80";
const saveDateImage =
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80";
const couplePhoto1 =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=960&q=80";
const couplePhoto2 =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=960&q=80";
const couplePhoto3 =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=960&q=80";
const timelineImage =
  "https://images.unsplash.com/photo-1730476513367-16fe58a8a653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNjc4NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function App() {
  const [countdown, setCountdown] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateCountdown = () => {
      const weddingDate = new Date(
        "2026-01-17T00:00:00",
      ).getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(
          difference / (1000 * 60 * 60 * 24),
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor(
          (difference % (1000 * 60)) / 1000,
        );

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-black text-[16px] leading-[normal]"
      style={{
        fontFamily: '"Times New Roman"',
        width: "390px",
        transform: "scale(1)",
        margin: "auto",
      }}
    >
      <div
        className="bg-white text-[12px] leading-[12px]"
        style={{ fontFamily: '"Open Sans", sans-serif' }}
      >
        <div className="ml-auto mr-auto min-h-full overflow-hidden w-[420px]">
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
                    backgroundImage: `url(${weddingHeroImage})`,
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
                        fontFamily:
                          "MUZUViWSVAtQVJDSVRUWUEtQkVHQVRSSSPVEY",
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
          <div className="ml-auto mr-auto relative h-[675.2px]">
            <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
            <div className="h-full ml-auto mr-auto relative">
              <div className="absolute w-[420px] h-[420px] left-0 top-[419.2px]">
                <div
                  className="size-full overflow-hidden absolute brightness-[1.06]"
                  style={{
                    transform:
                      "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
                  }}
                >
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[420px] h-[420px] left-0 top-0">
                <div className="size-full overflow-hidden absolute brightness-[1.06]">
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[480.2px] h-[480.2px] left-0 top-[134px]">
                <div className="size-full overflow-hidden absolute">
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[480.2px] h-[480.2px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdfa713394456f029a42516ee651bb4846ff5bd48.png?generation=1762677300212759&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <motion.div
                className="absolute w-[359px] h-[141px] left-[30.5px] top-[33.5px]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="size-full absolute">
                  <motion.div
                    className="absolute w-[359px] left-0 top-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[26px] tracking-[1px] leading-[36.4px]"
                      style={{
                        fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      QUYẾT ĐỊNH BÊN NHAU &nbsp; TRỌN ĐỜI.
                      &nbsp;
                    </p>
                  </motion.div>
                  <motion.div
                    className="absolute w-[274px] left-[42.5px] top-[83px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[36px] leading-[57.6px]"
                      style={{
                        fontFamily:
                          "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      Save the date
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              <div className="absolute w-[207px] left-[-392.5px] top-[178.5px]">
                <p
                  className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[35px] tracking-[1px] leading-[49px]"
                  style={{
                    fontFamily: "QSTUSQUUSUGQUULUFRElVTSUVEY",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  <br />
                </p>
              </div>
              <motion.div
                className="absolute w-[291px] h-[356.351px] left-[64.5px] top-[252.1px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div
                  className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(0,0,0)_0px_7px_20px_-17px]"
                  style={{
                    backgroundImage: `url(${saveDateImage})`,
                  }}
                ></div>
              </motion.div>
              <div className="absolute w-[207px] left-[106.5px] top-[178.5px]">
                <p
                  className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[35px] tracking-[1px] leading-[49px]"
                  style={{
                    fontFamily: "QSTUSQUUSUGQUULUFRElVTSUVEY",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  <span className="text-center"></span>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto relative h-[1740.2px]">
            <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
            <div className="h-full ml-auto mr-auto relative">
              <div className="absolute w-[420px] h-[301px] left-0 top-[1439.2px]">
                <div
                  className="size-full overflow-hidden absolute brightness-[1.06]"
                  style={{
                    transform:
                      "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
                  }}
                >
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[440px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[420px] h-[323px] left-[1.5px] top-[1193.45px]">
                <div
                  className="size-full overflow-hidden absolute brightness-[1.06]"
                  style={{
                    transform:
                      "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
                  }}
                >
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[440px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[420px] h-[420px] left-0 top-[801px]">
                <div className="size-full overflow-hidden absolute brightness-[1.06]">
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[420px] h-[420px] left-0 top-[381px]">
                <div
                  className="size-full overflow-hidden absolute brightness-[1.06]"
                  style={{
                    transform:
                      "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
                  }}
                >
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <motion.div
                className="absolute w-[280px] h-[280px] left-[164.5px] top-[659.3px]"
                initial={{
                  opacity: 0,
                  rotate: -10,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="size-full absolute">
                  <div className="absolute w-[280px] h-[280px] left-0 top-0">
                    <div className="size-full overflow-hidden absolute">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[280px] h-[280px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F29c9260a657d6407b7cb210f09b749746b1cc7bb.png?generation=1762677300236431&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[175px] h-[200px] left-[55.5px] top-[22px]">
                    <div
                      className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute rotate-9"
                      style={{
                        backgroundImage: `url(${couplePhoto2})`,
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute w-[302.75px] h-[302.75px] left-[-14.25px] top-[691.8px]"
                initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="size-full absolute">
                  <div className="absolute w-[302.75px] h-[302.75px] left-0 top-0">
                    <div className="size-full overflow-hidden absolute">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[302.75px] h-[302.75px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc012b0694d944f30f6f247302978473bc707018e.png?generation=1762677300216354&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[190px] h-[216px] left-[47.25px] top-[23.2px]">
                    <div
                      className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute -rotate-9"
                      style={{
                        backgroundImage: `url(${couplePhoto1})`,
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute w-[420px] h-[381px] left-0 top-0"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
              >
                <div
                  className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute"
                  style={{
                    backgroundImage:
                      'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2e501636fc47fe1d015e307dc31c5aef6122637c.jpg?generation=1762677300249544&alt=media")',
                  }}
                ></div>
              </motion.div>
              <motion.div
                className="absolute w-[383px] left-[18.5px] top-[414.3px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[19px] leading-[28.5px]"
                  style={{
                    fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  Thân mời tới dự lễ cưới thân mật của chúng tôi
                  &nbsp;
                </p>
              </motion.div>
              <motion.div
                className="absolute w-[349px] left-[35.5px] top-[477.3px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[55.74px] tracking-[1px] leading-[83.61px]"
                  style={{
                    fontFamily: "QSTUSQUUSUGQUULUFRElVTSUVEY",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  quốc học
                </p>
              </motion.div>
              <motion.div
                className="absolute w-[349px] left-[37.5px] top-[561.3px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[55.74px] tracking-[1px] leading-[83.61px]"
                  style={{
                    fontFamily: "QSTUSQUUSUGQUULUFRElVTSUVEY",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  ái như
                </p>
              </motion.div>
              <motion.div
                className="absolute w-[170px] left-[138.5px] top-[425.3px]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[172.53px] tracking-[1px] leading-[258.795px] opacity-[0.4]"
                  style={{
                    fontFamily:
                      "MUZUViWSVAtQVJDSVRUWUEtQkVHQVRSSSPVEY",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  &amp;
                </p>
              </motion.div>
              <motion.div
                className="absolute w-[383px] left-[20.5px] top-[1272.3px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[21px] leading-[31.5px]"
                  style={{
                    fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  lễ thành hôn được tổ chức &nbsp; vào lúc 17
                  giờ 30 phút &nbsp;
                </p>
              </motion.div>
              <motion.div
                className="absolute w-[290.5px] h-[123.82px] left-[68.25px] top-[1354.34px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="size-full absolute">
                  <div className="absolute w-[273px] left-[11.75px] top-[96.82px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                      style={{
                        fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      (Tức ngày 29 tháng 11 năm Ất Tỵ) &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[143px] left-[76.75px] top-0">
                    <p
                      className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[20px] tracking-[1px] leading-[32px]"
                      style={{
                        fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      thứ bảy
                    </p>
                  </div>
                  <div className="absolute w-[91px] left-[101.5px] top-[23.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[46.54px] tracking-[1px] leading-[74.464px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      17
                    </p>
                  </div>
                  <div className="absolute w-[117px] h-[53px] left-0 top-[37px]">
                    <div className="size-full absolute">
                      <div className="absolute w-24 left-[9.5px] top-0">
                        <div className="relative w-full pt-2 pr-0 pb-2 pl-0">
                          <div
                            className="border-t size-full"
                            style={{
                              borderTopColor:
                                "rgb(63, 92, 132)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="absolute w-[117px] left-0 top-[13px]">
                        <p
                          className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[20px] tracking-[1px] leading-[28px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          tháng 1 &nbsp;
                        </p>
                      </div>
                      <div className="absolute w-24 left-[9.5px] top-9">
                        <div className="relative w-full pt-2 pr-0 pb-2 pl-0">
                          <div
                            className="border-t size-full"
                            style={{
                              borderTopColor:
                                "rgb(63, 92, 132)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[117px] h-[53px] left-[173.5px] top-[37px]">
                    <div className="size-full absolute">
                      <div className="absolute w-24 left-[9.5px] top-0">
                        <div className="relative w-full pt-2 pr-0 pb-2 pl-0">
                          <div
                            className="border-t size-full"
                            style={{
                              borderTopColor:
                                "rgb(63, 92, 132)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="absolute w-[117px] left-0 top-[13px]">
                        <p
                          className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[20px] tracking-[1px] leading-[28px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          năm 2026 &nbsp;
                        </p>
                      </div>
                      <div className="absolute w-24 left-[9.5px] top-9">
                        <div className="relative w-full pt-2 pr-0 pb-2 pl-0">
                          <div
                            className="border-t size-full"
                            style={{
                              borderTopColor:
                                "rgb(63, 92, 132)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute w-[383px] left-[20.5px] top-[1574.3px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[21px] tracking-[1px] leading-[31.5px]"
                  style={{
                    fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  tại Nhà hàng Golden Lotus &nbsp;
                </p>
              </motion.div>
              <motion.div
                className="absolute w-[356px] left-[35px] top-[1616.16px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                  style={{
                    fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  105B Hà Huy Giáp, Phường Trấn Biên, Đồng Nai
                </p>
              </motion.div>
              <motion.a
                href="https://maps.app.goo.gl/CZVJz82U6Jqn3dNV6"
                className="block absolute w-[159px] h-[29px] left-[134px] top-[1665.3px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="size-full absolute">
                  <div className="absolute w-[139px] left-5 top-0">
                    <p
                      className="bg-center bg-cover inline-block text-center uppercase w-full text-[rgb(63,_92,_132)] text-[19px] tracking-[1px] leading-[28.5px]"
                      style={{
                        fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      chỉ đường &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[24.5px] h-[24.5px] left-0 top-[2.5px]">
                    <div className="size-full overflow-hidden absolute">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[24.5px] h-[24.5px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb0b3d5c97031e4b17a10d69b6401d781c81a5459.png?generation=1762677300260884&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.a>
              <div className="absolute w-[98px] h-[98px] left-[163px] top-[1161.3px]">
                <div className="size-full overflow-hidden absolute">
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[98px] h-[98px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6472ac3ae954788d9cfd3336a34b7ba8b1a3d7e6.png?generation=1762677300362868&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[59.7px] h-[59.7px] left-[183.65px] top-[1498.6px]">
                <div className="size-full overflow-hidden absolute opacity-[0.95]">
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[59.7px] h-[59.7px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd85ee78b9b99e1a1644d7ba14d1691a937b51755.png?generation=1762677300365968&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <motion.div
                className="absolute w-[369px] h-[287.5px] left-[25.5px] top-[45.55px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="size-full absolute">
                  <div className="absolute w-[143px] left-[113px] top-0">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[37.65px] leading-[60.24px]"
                      style={{
                        fontFamily:
                          "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      Tháng 1
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[117.5px] top-[112.7px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      1 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[170.25px] top-[112.7px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      2 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[223px] top-[112.7px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      3 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[275.75px] top-[112.7px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      4 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[328.5px] top-[112.7px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      5 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-3 top-[147.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      6 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[64.75px] top-[147.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      7 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[117.5px] top-[147.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      8 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[170.25px] top-[147.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      9 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[223px] top-[147.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      10 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[275.75px] top-[147.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      11 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[328.5px] top-[147.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      12 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-3 top-[184.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      13 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[64.75px] top-[184.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      14 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[117.5px] top-[184.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      15 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[170.25px] top-[184.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      16 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[223px] top-[261.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      31 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[43.8px] h-[43.8px] left-[215.6px] top-[175.4px]">
                    <div className="size-full overflow-hidden absolute">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[43.8px] h-[43.8px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa8d9d02812f7b64b1ae25976b88e487734ce5c77.png?generation=1762677300374863&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[52px] left-0 top-[70px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      mon &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[52px] left-[52.8333px] top-[70px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      tue &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[52px] left-[105.667px] top-[70px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      wed
                    </p>
                  </div>
                  <div className="absolute w-[52px] left-[158.5px] top-[70px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      thur &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[52px] left-[211.333px] top-[70px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      fri &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[52px] left-[264.167px] top-[70px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      sat &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[52px] left-[317px] top-[70px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      sun &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[223px] top-[221.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      24 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[275.75px] top-[221.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      25 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[328.5px] top-[221.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      26 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-3 top-[261.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      27 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[64.75px] top-[261.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      28 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[117.5px] top-[261.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      29 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[170.25px] top-[261.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      30 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[223px] top-[184.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      17 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[275.75px] top-[184.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      18 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[328.5px] top-[184.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      19 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-3 top-[221.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      20 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[64.75px] top-[221.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      21 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[117.5px] top-[221.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      22 &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[29px] left-[170.25px] top-[221.5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "QSTUSQUUSUGQUULUFRElVTSUVEY",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      23 &nbsp;
                    </p>
                  </div>
                </div>
              </motion.div>
              <div className="absolute w-[420px] h-[381px] left-[-503px] top-0">
                <div className="size-full absolute">
                  <div className="absolute w-[420px] h-[381px] left-0 top-0">
                    <div className="size-full overflow-hidden absolute bg-[rgb(63,_92,_132)]"></div>
                  </div>
                  <div className="absolute w-[369px] h-[266.3px] left-[16.5px] top-[63.15px]">
                    <div className="size-full absolute">
                      <div className="absolute w-[29px] left-[64.75px] top-[231.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-3 top-[231.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[329.25px] top-[194.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[276.5px] top-[194.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[223.75px] top-[194.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[171px] top-[194.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[118.25px] top-[194.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[329.25px] top-[231.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[276.5px] top-[231.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[223.75px] top-[231.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[171px] top-[231.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[118.25px] top-[231.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[52px] left-[317px] top-20">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[52px] left-[264.167px] top-20">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[52px] left-[211.333px] top-20">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[52px] left-[158.5px] top-20">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[52px] left-[105.667px] top-20">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        ></p>
                      </div>
                      <div className="absolute w-[52px] left-[52.8333px] top-20">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[52px] left-0 top-20">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[43.8px] h-[43.8px] left-[270.267px] top-[222.5px]">
                        <div className="size-full overflow-hidden absolute">
                          <div
                            className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[43.8px] h-[43.8px] left-0 top-0"
                            style={{
                              backgroundImage:
                                'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa8d9d02812f7b64b1ae25976b88e487734ce5c77.png?generation=1762677300374863&alt=media")',
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="absolute w-[29px] left-[64.75px] top-[194.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-3 top-[194.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[329.25px] top-[157.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[276.5px] top-[157.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[223.75px] top-[157.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[171px] top-[157.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[118.25px] top-[157.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[64.75px] top-[157.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-3 top-[157.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[329.25px] top-[122.7px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[276.5px] top-[122.7px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[223.75px] top-[122.7px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[171px] top-[122.7px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[118.25px] top-[122.7px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-[64.75px] top-[122.7px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[29px] left-3 top-[122.7px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[16px] leading-[25.6px]"
                          style={{
                            fontFamily:
                              "QSTUSQUUSUGQUULUFRElVTSUVEY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        >
                          <br />
                        </p>
                      </div>
                      <div className="absolute w-[143px] left-[113px] top-0">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-white text-[37.65px] leading-[60.24px]"
                          style={{
                            fontFamily:
                              "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                            textDecoration:
                              "rgb(255, 255, 255)",
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[110px] left-[201px] top-[1027.8px]">
                <div className="h-full relative pt-0 pr-2 pb-0 pl-2">
                  <div
                    className="size-full border-l-[2px]"
                    style={{
                      borderLeftColor: "rgb(63, 92, 132)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[170px] h-[106.2px] left-[229.5px] top-[1029.7px]">
                <div className="size-full absolute">
                  <div className="absolute w-[106px] left-8 top-0">
                    <p
                      className="bg-center bg-cover inline-block font-bold text-center uppercase w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                      style={{
                        fontFamily:
                          "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      nhà gái &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[170px] left-0 top-[29.2px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      Ông Huỳnh Ái Quốc
                      <br />
                      Bà Nguyễn Tân Trà
                      <br />
                      TP. Đồng Nai
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute w-[170px] h-[106.2px] left-[20.5px] top-[1029.7px]">
                <div className="size-full absolute">
                  <div className="absolute w-[106px] left-8 top-0">
                    <p
                      className="bg-center bg-cover inline-block font-bold text-center uppercase w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                      style={{
                        fontFamily:
                          "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      nhà trai &nbsp;
                    </p>
                  </div>
                  <div className="absolute w-[170px] left-0 top-[29.2px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[16px] leading-[25.6px]"
                      style={{
                        fontFamily:
                          "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      Ông Trần Văn Cường
                      <br />
                      Bà Trần Thị Hiền
                      <br />
                      TP. Lâm Đồng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto relative h-[1171.2px]">
            <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
            <div className="h-full ml-auto mr-auto relative">
              <div className="absolute w-[420px] h-[410px] left-0 top-0">
                <div
                  className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute"
                  style={{
                    backgroundImage: `url("${couplePhoto3}")`,
                  }}
                ></div>
              </div>
              <div className="absolute w-[420px] h-[121px] left-0 top-[289px]">
                <div
                  className="size-full overflow-hidden absolute"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(253, 251, 251, 0), rgba(1, 1, 1, 0.3))",
                  }}
                ></div>
              </div>
              <div className="absolute w-[306px] left-[57px] top-[324px]">
                <p
                  className="bg-center bg-cover inline-block text-center w-full text-white text-[54px] leading-[86.4px]"
                  style={{
                    fontFamily:
                      "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                    textDecoration: "rgb(255, 255, 255)",
                  }}
                >
                  Timeline
                </p>
              </div>
              <div className="absolute w-[421.049px] h-[768.2px] left-0 top-[410px]">
                <div className="size-full absolute">
                  <div className="absolute w-[420px] h-[420px] left-0 top-0">
                    <div
                      className="size-full overflow-hidden absolute brightness-[1.06]"
                      style={{
                        transform:
                          "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
                      }}
                    >
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[420px] h-[420px] left-0 top-[348.2px]">
                    <div
                      className="size-full overflow-hidden absolute brightness-[1.06]"
                      style={{
                        transform:
                          "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
                      }}
                    >
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[372px] h-[372px] left-12 top-0">
                    <div className="size-full overflow-hidden absolute opacity-[0.61]">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[372px] h-[372px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F76d52a33b6252e5621bd4012d66c97abab3eee4f.png?generation=1762677300394416&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[420px] h-[394px] left-[1.04895px] top-[275.6px]">
                    <div className="size-full overflow-hidden absolute">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8d7048ee841312307c3439d37a87c7133b63c19d.png?generation=1762677300427384&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[306px] h-[125.7px] left-12 top-[589px]">
                    <div className="size-full absolute">
                      <div className="absolute w-[306px] left-0 top-0">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-[#062650] text-[54px] leading-[86.4px]"
                          style={{
                            fontFamily:
                              "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                            textDecoration: "#062650",
                          }}
                        >
                          Dresscode
                        </p>
                      </div>
                      <div className="absolute w-[121px] h-[39.7px] left-[92.5px] top-[86px]">
                        <div className="size-full absolute">
                          <div className="absolute w-[39.7px] h-[39.7px] left-0 top-0">
                            <div className="size-full overflow-hidden absolute bg-[#062650] shadow-[rgb(0,0,0)_0px_15px_20px_-15px] rounded-[62.5rem]"></div>
                          </div>
                          <div className="absolute w-[39.7px] h-[39.7px] left-[40.6px] top-0">
                            <div className="size-full overflow-hidden absolute bg-[#E6AEA7] shadow-[rgb(0,0,0)_0px_15px_20px_-15px] rounded-[62.5rem]"></div>
                          </div>
                          <div className="absolute w-[39.7px] h-[39.7px] left-[81.3px] top-0">
                            <div className="size-full overflow-hidden absolute bg-[#EBD3D0] shadow-[rgb(0,0,0)_0px_15px_20px_-15px] rounded-[62.5rem]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[353.088px] h-[311px] left-[34.5049px] top-[457.6px]">
                <div className="size-full absolute">
                  <div className="absolute w-[353.088px] h-[83px] left-0 top-0">
                    <div className="size-full absolute">
                      <div className="absolute w-[76px] left-[54.088px] top-[23.5px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[19px] tracking-[1px] leading-[30.4px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          17:00
                        </p>
                      </div>
                      <div className="absolute w-[217px] left-[136.088px] top-[29px]">
                        <p
                          className="bg-center bg-cover inline-block text-left w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          Checkin với photobooth và gửi lời chúc
                          phúc đến CDCR
                        </p>
                      </div>
                      <div className="absolute w-[141px] left-[136.088px] top-0">
                        <p
                          className="bg-center bg-cover inline-block text-left w-full text-[rgb(63,_92,_132)] text-[17px] tracking-[1px] leading-[27.2px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          ĐÓN KHÁCH
                        </p>
                      </div>
                      <div className="absolute w-[58.088px] h-[57.627px] left-0 top-[8.686px]">
                        <div className="size-full overflow-hidden absolute">
                          <div
                            className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[58.088px] h-[57.627px] left-0 top-0"
                            style={{
                              backgroundImage:
                                'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9495b544ec8394f4a756d6629449e8d55a497453.png?generation=1762677300397232&alt=media")',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[346.167px] h-[82px] left-[6.921px] top-[113px]">
                    <div className="size-full absolute">
                      <div className="absolute w-[76px] left-[47.167px] top-[21.167px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[19px] tracking-[1px] leading-[30.4px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          18:00
                        </p>
                      </div>
                      <div className="absolute w-[217px] left-[129.167px] top-7">
                        <p
                          className="bg-center bg-cover inline-block text-left w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          Cùng nhau chứng kiến khoảnh khắc
                          thiêng liêng cùng CDCR
                        </p>
                      </div>
                      <div className="absolute w-48 left-[129.167px] top-0">
                        <p
                          className="bg-center bg-cover inline-block text-left uppercase w-full text-[rgb(63,_92,_132)] text-[17px] tracking-[1px] leading-[27.2px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          LÀM LỄ
                        </p>
                      </div>
                      <div className="absolute w-[51.167px] h-[51.167px] left-0 top-[10.583px]">
                        <div className="size-full overflow-hidden absolute">
                          <div
                            className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[51.167px] h-[51.167px] left-0 top-0"
                            style={{
                              backgroundImage:
                                'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F66d219ed747fba5c4bf9abaf2ff5d2bdff6b8f6c.png?generation=1762677300419704&alt=media")',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[349.544px] h-[84px] left-[3.544px] top-[227px]">
                    <div className="size-full absolute">
                      <div className="absolute w-[76px] left-[50.544px] top-[23.833px]">
                        <p
                          className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[19px] tracking-[1px] leading-[30.4px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          18:30
                        </p>
                      </div>
                      <div className="absolute w-[217px] left-[132.544px] top-[30px]">
                        <p
                          className="bg-center bg-cover inline-block text-left w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          Cùng nhau ăn tiệc và nâng ly chúc mừng
                          CDCR
                        </p>
                      </div>
                      <div className="absolute w-[130px] left-[132.544px] top-0">
                        <p
                          className="bg-center bg-cover inline-block text-left uppercase w-full text-[rgb(63,_92,_132)] text-[17px] tracking-[1px] leading-[27.2px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          KHAI TIỆC
                        </p>
                      </div>
                      <div className="absolute w-[58.377px] h-[58.377px] left-0 top-[12.333px]">
                        <div className="size-full overflow-hidden absolute">
                          <div
                            className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[58.377px] h-[58.377px] left-0 top-0"
                            style={{
                              backgroundImage:
                                'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc23bf8432d2750f3faa0c48c933e5ce4f0cb7b62.png?generation=1762677300438043&alt=media")',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto relative h-[1500.2px]">
            <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
            <div className="h-full ml-auto mr-auto relative">
              <div className="absolute w-[420px] h-[1500.2px] left-0 top-0">
                <div className="size-full overflow-hidden absolute bg-[rgb(63,_92,_132)]"></div>
              </div>
              <div className="absolute w-[306px] left-[-8px] top-[28.6px]">
                <p
                  className="bg-center bg-cover inline-block text-center w-full text-white text-[54px] leading-[86.4px]"
                  style={{
                    fontFamily:
                      "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                    textDecoration: "rgb(255, 255, 255)",
                  }}
                >
                  Our memories
                </p>
              </div>
              <div className="absolute w-[129px] left-[273px] top-[73.6px]">
                <div className="relative w-full pt-2 pr-0 pb-2 pl-0">
                  <div
                    className="size-full border-t-[2px]"
                    style={{
                      borderTopColor: "rgb(255, 255, 255)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[379px] left-[20.5px] top-[114.6px]">
                <p
                  className="bg-center bg-cover inline-block text-justify w-full text-white text-[14px] leading-[22.4px]"
                  style={{
                    fontFamily: "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                    textDecoration: "rgb(255, 255, 255)",
                  }}
                >
                  This album captures the most beautiful moments
                  of our special day— filled with love, joy, and
                  unforgettable memories. From our heartfelt
                  vows to the first dance, every photo tells a
                  story of our journey together. Surrounded by
                  family and friends, we celebrated a love that
                  will last a lifetime.
                </p>
              </div>
              <div className="absolute w-[379px] h-[261px] left-[20.5px] top-[258.2px]">
                <div
                  className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687464/TA_06733_woezrn.jpg")',
                  }}
                ></div>
              </div>
              <div className="absolute w-[229px] h-[389px] left-[20.5px] top-[526.2px]">
                <div
                  className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687272/TA_05002_dyocdq.jpg")',
                  }}
                ></div>
              </div>
              <div className="absolute w-36 h-48 left-[255.5px] top-[526.2px]">
                <div
                  className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687271/TA_05313_b02jso.jpg")',
                  }}
                ></div>
              </div>
              <div className="absolute w-36 h-48 left-[255.5px] top-[723.2px]">
                <div
                  className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687271/TA_06285_hjilve.jpg")',
                  }}
                ></div>
              </div>
              <div className="absolute w-[379px] h-[517px] left-[20.5px] top-[920.2px]">
                <div className="size-full absolute">
                  <div className="absolute w-[187px] h-64 left-0 top-[261px]">
                    <div
                      className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                      style={{
                        backgroundImage:
                          'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687271/TA_06285_hjilve.jpg")',
                      }}
                    ></div>
                  </div>
                  <div className="absolute w-[187px] h-64 left-48 top-[261px]">
                    <div
                      className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                      style={{
                        backgroundImage:
                          'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687271/TA_06285_hjilve.jpg")',
                      }}
                    ></div>
                  </div>
                  <div className="absolute w-[379px] h-64 left-0 top-0">
                    <div className="size-full absolute">
                      <div className="absolute w-[187px] h-64 left-48 top-0">
                        <div
                          className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                          style={{
                            backgroundImage:
                              'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687271/TA_06285_hjilve.jpg")',
                          }}
                        ></div>
                      </div>
                      <div className="absolute w-[187px] h-64 left-0 top-0">
                        <div
                          className="bg-origin-content bg-top bg-cover size-full overflow-hidden absolute shadow-[rgb(31,33,36)_0px_13px_20px_-17px]"
                          style={{
                            backgroundImage:
                              'url("https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687271/TA_06285_hjilve.jpg")',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto relative h-[728.2px]">
            <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
            <div className="h-full ml-auto mr-auto relative">
              <div className="absolute w-[420px] h-[444px] left-[0.539px] top-[299.4px]">
                <div
                  className="size-full overflow-hidden absolute brightness-[1.06]"
                  style={{
                    transform:
                      "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
                  }}
                >
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[444px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[420px] h-[420px] left-0 top-0">
                <div className="size-full overflow-hidden absolute brightness-[1.06]">
                  <div
                    className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[420px] h-[420px] left-0 top-0"
                    style={{
                      backgroundImage:
                        'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F69bd786bf315efdd2c45ecd069647303eac5805c.jpg?generation=1762677300202151&alt=media")',
                    }}
                  ></div>
                </div>
              </div>
              <div className="absolute w-[517px] h-[644px] left-[-41px] top-0">
                <div className="size-full absolute">
                  <div className="absolute w-[461px] h-[461px] left-0 top-[183px]">
                    <div className="size-full overflow-hidden absolute opacity-[0.84]">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[461px] h-[461px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3fbb125eb133dd5345758f9d24f40ce1aa3fb3ca.png?generation=1762677300608336&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="absolute w-[476px] h-[476px] left-[41px] top-0">
                    <div className="size-full overflow-hidden absolute opacity-[0.9]">
                      <div
                        className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[476px] h-[476px] left-0 top-0"
                        style={{
                          backgroundImage:
                            'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2ab94395ed06e0c83f8794db2b9bd0fc67eacc55.png?generation=1762677300588875&alt=media")',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[306px] left-[57.539px] top-[547.4px]">
                <p
                  className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[54px] leading-[86.4px]"
                  style={{
                    fontFamily:
                      "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  Countdown
                </p>
              </div>
              <div className="absolute w-[297.544px] h-[61px] left-[62.306px] top-[633.4px]">
                <div className="size-full absolute">
                  <div className="absolute w-[297.544px] h-[53px] left-0 top-2">
                    <div
                      className="flex size-full absolute text-center text-[rgb(63,_92,_132)] text-[46px] tracking-[1px] leading-[46px]"
                      style={{
                        fontFamily: "MUZUViWSVAtSEFTVEVHSSPVEY",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      <div className="h-full relative text-center w-[calc(25%-2.25px)] mr-[3px]">
                        <div className="table size-full pointer-events-none absolute text-center left-0 top-0"></div>
                        <div className="table size-full pointer-events-none absolute text-center">
                          <span className="table-cell pointer-events-none text-center align-middle">
                            {countdown.days}
                          </span>
                        </div>
                      </div>
                      <div className="h-full relative text-center w-[calc(25%-2.25px)] mr-[3px]">
                        <div className="table size-full pointer-events-none absolute text-center left-0 top-0"></div>
                        <div className="table size-full pointer-events-none absolute text-center">
                          <span className="table-cell pointer-events-none text-center align-middle">
                            {String(countdown.hours).padStart(
                              2,
                              "0",
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="h-full relative text-center w-[calc(25%-2.25px)] mr-[3px]">
                        <div className="table size-full pointer-events-none absolute text-center left-0 top-0"></div>
                        <div className="table size-full pointer-events-none absolute text-center">
                          <span className="table-cell pointer-events-none text-center align-middle">
                            {String(countdown.minutes).padStart(
                              2,
                              "0",
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="h-full relative text-center w-[calc(25%-2.25px)]">
                        <div className="table size-full pointer-events-none absolute text-center left-0 top-0"></div>
                        <div className="table size-full pointer-events-none absolute text-center">
                          <span className="table-cell pointer-events-none text-center align-middle">
                            {String(countdown.seconds).padStart(
                              2,
                              "0",
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[41px] left-[53.2715px] top-0">
                    <h3
                      className="bg-center bg-cover inline-block font-bold text-center w-full text-[rgb(63,_92,_132)] text-[29.87px] leading-[47.792px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsIEZvcnQgRmbmRyeSBSaWZIFJlZVsYXIudHRm",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      : &nbsp;
                    </h3>
                  </div>
                  <div className="absolute w-[41px] left-[128.272px] top-0">
                    <h3
                      className="bg-center bg-cover inline-block font-bold text-center w-full text-[rgb(63,_92,_132)] text-[29.87px] leading-[47.792px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsIEZvcnQgRmbmRyeSBSaWZIFJlZVsYXIudHRm",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      : &nbsp;
                    </h3>
                  </div>
                  <div className="absolute w-[41px] left-[203.272px] top-0">
                    <h3
                      className="bg-center bg-cover inline-block font-bold text-center w-full text-[rgb(63,_92,_132)] text-[29.87px] leading-[47.792px]"
                      style={{
                        fontFamily:
                          "IzlTbGlkZTAzIEljaWVsIEZvcnQgRmbmRyeSBSaWZIFJlZVsYXIudHRm",
                        textDecoration: "rgb(63, 92, 132)",
                      }}
                    >
                      : &nbsp;
                    </h3>
                  </div>
                </div>
              </div>
              <div className="absolute w-[382.078px] h-10 left-[18.961px] top-[476px]">
                <div className="size-full absolute">
                  <div className="absolute w-[382.078px] h-10 left-0 top-0">
                    <div className="size-full overflow-hidden absolute bg-[rgb(63,_92,_132)] rounded-3xl"></div>
                  </div>
                  <div className="absolute w-[200px] left-[91.039px] top-[5px]">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[19px] tracking-[1px] leading-[30.4px]"
                      style={{
                        fontFamily: "RUJHYXJhbWuZCNZWRpdWudHRm",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      MỪNG CƯỚI &nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute w-[381px] left-[19.5px] top-[43px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                  style={{
                    fontFamily: "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  Hãy xác nhận sự có mặt của bạn để chúng mình
                  chuẩn bị đón tiếp một cách chu đáo nhất. Trân
                  trọng!&nbsp;
                </p>
              </motion.div>
              <motion.div
                className="absolute w-[382.078px] h-[338px] left-[19.5px] top-[124.8px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <form
                  className="size-full absolute text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                  style={{
                    fontFamily: "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                    textDecoration: "rgb(63, 92, 132)",
                  }}
                >
                  <div className="absolute w-[382.078px] h-10 left-0 top-[298px]">
                    <div className="border size-full overflow-hidden absolute border-[rgb(63,_92,_132)] rounded-[1.75rem]">
                      <div className="size-full pointer-events-none"></div>
                      <div className="table size-full absolute left-0 top-0 text-black text-[16px] leading-[normal]">
                        <p
                          className="bg-center bg-cover table-cell text-center align-middle w-full text-[rgb(63,_92,_132)] text-[19px] leading-[30.4px]"
                          style={{
                            fontFamily:
                              "RUJHYXJhbWuZCNZWRpdWudHRm",
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        >
                          GỬI LỜI NHẮN
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[382.078px] h-9 left-0 top-0">
                    <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                      <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                      <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                        <input
                          type="text"
                          placeholder="Tên của bạn"
                          className="inline-block size-full max-h-full max-w-full min-h-full min-w-full overflow-clip bg-black/0 pt-0 pr-[5px] pb-0 pl-[5px] focus:outline-none"
                          style={{
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[382.078px] h-[100px] left-0 top-[50px]">
                    <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                      <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                      <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                        <textarea
                          rows={2}
                          placeholder="Gửi lời nhắn đến cô dâu chú rể"
                          className="inline-block size-full max-h-full max-w-full min-h-full min-w-full overflow-auto resize-none whitespace-pre-wrap bg-black/0 p-[5px] focus:outline-none"
                          style={{
                            textDecoration: "rgb(63, 92, 132)",
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[382.078px] h-[35px] left-0 top-40">
                    <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                      <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                      <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                        <select className="items-center bg-no-repeat inline-block size-full max-h-full max-w-full min-h-full min-w-full whitespace-pre bg-black/0 bg-[position:right_8px_50%] bg-size-[9px_6px] pt-0 pr-6 pb-0 pl-[5px] focus:outline-none">
                          <option value="">
                            Bạn sẽ đến chứ?
                          </option>
                          <option value="yes">
                            Mình chắc chắn sẽ đến
                          </option>
                          <option value="no">
                            Xin lỗi mình bận rồi
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[382.078px] h-[35px] left-0 top-[205px]">
                    <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                      <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                      <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                        <select className="items-center bg-no-repeat inline-block size-full max-h-full max-w-full min-h-full min-w-full whitespace-pre bg-black/0 bg-[position:right_8px_50%] bg-size-[9px_6px] pt-0 pr-6 pb-0 pl-[5px] focus:outline-none">
                          <option value="">
                            Bạn tham dự cùng ai?
                          </option>
                          <option value="1">
                            1 người
                          </option>
                          <option value="2">
                            2 người
                          </option>
                          <option value="3">
                            3 người
                          </option>
                          <option value="4">
                            4 người
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[382.078px] h-[35px] left-0 top-[250px]">
                    <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                      <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                      <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                        <select className="items-center bg-no-repeat inline-block size-full max-h-full max-w-full min-h-full min-w-full whitespace-pre bg-black/0 bg-[position:right_8px_50%] bg-size-[9px_6px] pt-0 pr-6 pb-0 pl-[5px] focus:outline-none">
                          <option value="">
                            Bạn là khách mời của ai?
                          </option>
                          <option value="bride">
                            Khách mời cô dâu
                          </option>
                          <option value="groom">
                            Khách mời chú rể
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
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
              </div>
              <div className="absolute w-[361px] h-[267.4px] left-[29.5px] top-[33.8px]">
                <div className="size-full absolute">
                  <div className="absolute w-[361px] left-0 top-0">
                    <p
                      className="bg-center bg-cover inline-block text-center w-full text-white text-[15px] leading-[25.5px]"
                      style={{
                        fontFamily:
                          "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                        textDecoration: "rgb(255, 255, 255)",
                      }}
                    >
                      Cảm ơn bạn đã dành tình cảm cho chúng
                      mình! Sự hiện diện của bạn chính là món
                      quà ý nghĩa nhất, và chúng mình vô cùng
                      trân quý khi được cùng bạn chia sẻ niềm
                      hạnh phúc trong ngày trọng đại này.
                    </p>
                  </div>
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
          <div className="ml-auto mr-auto relative h-0">
            <div className="h-full ml-auto mr-auto relative z-[90000070]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
