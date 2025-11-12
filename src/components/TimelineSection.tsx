import type { WeddingContent } from "../lib/weddingContent";

type TimelineSectionProps = {
  couplePhoto3: string;
  schedule: WeddingContent["schedule"];
};

const SCHEDULE_ICONS = [
  "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9495b544ec8394f4a756d6629449e8d55a497453.png?generation=1762677300397232&alt=media",
  "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F66d219ed747fba5c4bf9abaf2ff5d2bdff6b8f6c.png?generation=1762677300419704&alt=media",
  "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc23bf8432d2750f3faa0c48c933e5ce4f0cb7b62.png?generation=1762677300438043&alt=media",
];

export default function TimelineSection({
  couplePhoto3,
  schedule,
}: TimelineSectionProps) {
  return (
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
                      {/* <div className="absolute w-[306px] h-[125.7px] left-12 top-[589px]">
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
                      </div> */}
                    </div>
                  </div>
                  <div className="absolute w-[353.088px] left-[34.5049px] top-[457.6px]">
                    <div className="flex flex-col gap-8">
                      {schedule.map((item, index) => {
                        const icon =
                          SCHEDULE_ICONS[index] ??
                          SCHEDULE_ICONS[SCHEDULE_ICONS.length - 1];

                        return (
                          <div
                            key={`${item.time}-${item.label}`}
                            className="flex items-start gap-4"
                          >
                            <div className="w-[58px] h-[58px] relative">
                              <div className="size-full overflow-hidden absolute">
                                <div
                                  className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-full h-full left-0 top-0"
                                  style={{
                                    backgroundImage: `url("${icon}")`,
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <p
                                className="bg-center bg-cover inline-block text-left uppercase w-full text-[rgb(63,_92,_132)] text-[17px] tracking-[1px] leading-[27.2px]"
                                style={{
                                  fontFamily:
                                    "RUJHYXJhbWuZCNZWRpdWudHRm",
                                  textDecoration: "rgb(63, 92, 132)",
                                }}
                              >
                                {item.label}
                              </p>
                              <p
                                className="bg-center bg-cover inline-block text-left w-full text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
                                style={{
                                  fontFamily:
                                    "RUJHYXJhbWuZCSZWdbGFyLnRZg",
                                  textDecoration: "rgb(63, 92, 132)",
                                }}
                              >
                                {item.description}
                              </p>
                            </div>
                            <p
                              className="bg-center bg-cover inline-block text-right w-[70px] text-[rgb(63,_92,_132)] text-[19px] tracking-[1px] leading-[30.4px]"
                              style={{
                                fontFamily:
                                  "RUJHYXJhbWuZCNZWRpdWudHRm",
                                textDecoration: "rgb(63, 92, 132)",
                              }}
                            >
                              {item.time}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
          
  );
}
