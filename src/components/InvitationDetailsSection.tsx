import { motion } from "motion/react";
import type { WeddingContent } from "../lib/weddingContent";

type CalendarCoordinates = { left: number; top: number };

// Coordinates for the hand-crafted calendar artwork so we can align overlays.
const calendarDayPositions: Record<number, CalendarCoordinates> = {
  17: { left: 223, top: 184.5 },
  24: { left: 223, top: 221.5 },
};

const DEFAULT_CALENDAR_DAY = 17;
const baseHeartPosition: CalendarCoordinates = { left: 215.6, top: 175.4 };
const referenceDay = calendarDayPositions[DEFAULT_CALENDAR_DAY];
const heartAnchorOffset: CalendarCoordinates = referenceDay
  ? {
      left: baseHeartPosition.left - referenceDay.left,
      top: baseHeartPosition.top - referenceDay.top,
    }
  : { left: 0, top: 0 };

const getHeartPositionForDay = (day?: number): CalendarCoordinates => {
  if (!day) {
    return baseHeartPosition;
  }

  const coordinates = calendarDayPositions[day];
  if (!coordinates) {
    return baseHeartPosition;
  }

  return {
    left: coordinates.left + heartAnchorOffset.left,
    top: coordinates.top + heartAnchorOffset.top,
  };
};

type InvitationDetailsSectionProps = {
  couplePhoto1: string;
  couplePhoto2: string;
  content: WeddingContent["invitation"];
};

export default function InvitationDetailsSection({
  couplePhoto1,
  couplePhoto2,
  content,
}: InvitationDetailsSectionProps) {
  const { inviteLead, groomName, brideName, ceremony, reception, households } =
    content;
  const highlightDay = Number.parseInt(ceremony.day, 10);
  const heartPosition = getHeartPositionForDay(
    Number.isNaN(highlightDay) ? undefined : highlightDay,
  );

  return (
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
            {inviteLead}
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
            {groomName}
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
            {brideName}
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
            {ceremony.headline}
            <br />
            {ceremony.timeLabel} 
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
                {/* {ceremony.addressLine} */}
                {/* <br /> */}
                {ceremony.lunarDate}
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
                {ceremony.dayOfWeek}
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
                {ceremony.day}
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
                    {ceremony.month}
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
                    {ceremony.year}
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
            {reception.headingLines[0]}
            <br /> {reception.headingLines[1]}
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
            <br />
            {reception.address}
          </p>
        </motion.div>
        <motion.a
          href={reception.mapLink}
          className="block absolute w-[159px] h-[29px] left-[134px] top-[1675px]"
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
                    "IzlTbGlkZTAzIEljaWVsTmZWNlbnRvcFucyObJtYWwudHRm",
                  textDecoration: "rgb(255, 255, 255)",
                }}
              >
                january
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
            <div
              className="absolute w-[42px] h-[42px]"
              style={heartPosition}
            >
              <div className="size-full overflow-hidden absolute">
                <div
                  className="bg-origin-content bg-no-repeat bg-cover ml-auto mr-auto pointer-events-none absolute w-[42px] h-[42px] -left-0.5 top-0"
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
                {households.right.label}
                &nbsp;
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
                {households.right.father}
                <br />
                {households.right.mother}
                <br />
                {households.right.address}
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
                {households.left.label}
                &nbsp;
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
                {households.left.father}
                <br />
                {households.left.mother}
                <br />
                {households.left.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
