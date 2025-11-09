import React from "react";
import { motion } from "motion/react";

const WEDDING_DATE = new Date("2026-01-17T00:00:00").getTime();

export default function RsvpSection() {
  const [countdown, setCountdown] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const difference = WEDDING_DATE - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
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
          
  );
}
