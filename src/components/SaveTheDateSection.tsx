import { motion } from "motion/react";

type SaveTheDateSectionProps = {
  image: string;
  announcement: {
    gratitude: string;
    messageLead: string;
    eventLabel: string;
    namesLine: string;
  };
};

export default function SaveTheDateSection({
  image,
  announcement,
}: SaveTheDateSectionProps) {
  return (
    <div className="ml-auto mr-auto relative h-[675.2px]">
      <div className="size-full overflow-hidden pointer-events-none absolute left-0 top-0"></div>
      <div className="h-full ml-auto mr-auto relative">
        <div className="absolute w-[420px] h-[420px] left-0 top-[419.2px]">
          <div
            className="size-full overflow-hidden absolute brightness-[1.06]"
            style={{
              transform: "perspective(1000px) rotate3d(1, 0, 0, 180deg)",
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
                  whiteSpace: "pre-line",
                }}
              >
                {announcement.gratitude}
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
                  fontFamily: "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
                  textDecoration: "rgb(63, 92, 132)",
                }}
              >
                {announcement.eventLabel}
              </p>
            </motion.div>
          </div>
        </motion.div>
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
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </motion.div>
        <div className="absolute w-[260px] left-[80px] top-[178.5px]">
          <p
            className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[18px] tracking-[1px] leading-[28px]"
            style={{
              fontFamily: "QSTUSQUUSUGQUULUFRElVTSUVEY",
              textDecoration: "rgb(63, 92, 132)",
            }}
          >
            {announcement.messageLead}
          </p>
          <p
            className="bg-center bg-cover inline-block text-center w-full text-[rgb(63,_92,_132)] text-[32px] leading-[48px]"
            style={{
              fontFamily:
                "MUZUViWSVAtTWuclldXItTGEtRGbGFpcUtUmVndWxhcivdGY",
              textDecoration: "rgb(63, 92, 132)",
            }}
          >
            {announcement.namesLine}
          </p>
        </div>
      </div>
    </div>
  );
}
