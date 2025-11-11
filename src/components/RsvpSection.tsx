import React from "react";
import { motion } from "motion/react";
import Modal from "react-modal";

const WEDDING_DATE = new Date("2026-01-17T00:00:00").getTime();
const RSVP_MODAL_STYLES: Modal.Styles = {
  overlay: {
    backgroundColor: "rgba(17, 24, 39, 0.72)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  content: {
    inset: "unset",
    border: "none",
    background: "transparent",
    padding: 0,
    overflow: "visible",
  },
};

const RSVP_MODAL_IMAGE =
  "https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687273/TA_06853_qrfnim.jpg";

const RSVP_MODAL_PATTERN =
  "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3fbb125eb133dd5345758f9d24f40ce1aa3fb3ca.png?generation=1762677300608336&alt=media";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug logging - remove in production
console.log('Supabase URL:', SUPABASE_URL);
console.log('Supabase Key exists:', !!SUPABASE_ANON_KEY);
console.log('Supabase Key length:', SUPABASE_ANON_KEY?.length || 0);

export default function RsvpSection() {
  const [countdown, setCountdown] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    message: '',
    rsvpStatus: '',
    guestCount: '',
    guestOf: '',
    transportation: '',
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

  React.useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate environment variables
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('Missing Supabase configuration:', { SUPABASE_URL: !!SUPABASE_URL, SUPABASE_ANON_KEY: !!SUPABASE_ANON_KEY });
      alert('Lỗi cấu hình: Vui lòng liên hệ quản trị viên');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/rsvp_responses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name,
          message: formData.message,
          rsvp_status: formData.rsvpStatus,
          guest_count: parseInt(formData.guestCount),
          guest_of: formData.guestOf,
          transportation: formData.transportation,
        }),
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({
          name: '',
          message: '',
          rsvpStatus: '',
          guestCount: '',
          guestOf: '',
          transportation: '',
        });
      } else {
        console.error('Error submitting RSVP:', await response.text()); 
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = React.useCallback(() => setIsModalOpen(true), []);
  const closeModal = React.useCallback(() => setIsModalOpen(false), []);

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
        {/* <div className="absolute w-[382.078px] h-10 left-[18.961px] top-[476px]">
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
                  </div> */}
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
          className="absolute w-[382.078px] h-[390px] left-[19.5px] top-[124.8px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="size-full absolute text-[rgb(63,_92,_132)] text-[17px] leading-[27.2px]"
            style={{
              fontFamily: "RUJHYXJhbWuZCSZWdbGFyLnRZg",
              textDecoration: "rgb(63, 92, 132)",
            }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Gửi lời nhắn"
              className="absolute block w-[382.078px] h-10 left-0 top-[345px] cursor-pointer focus:outline-none disabled:opacity-50"
              style={{ border: "none", background: "transparent", padding: 0 }}
            >
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
                    {isSubmitting ? 'ĐANG GỬI...' : 'GỬI LỜI NHẮN'}
                  </p>
                </div>
              </div>
            </button>
            <div className="absolute w-[382.078px] h-9 left-0 top-0">
              <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tên của bạn"
                    className="inline-block size-full max-h-full max-w-full min-h-full min-w-full overflow-clip bg-black/0 pt-0 pr-[5px] pb-0 pl-[5px] focus:outline-none"
                    style={{
                      textDecoration: "rgb(63, 92, 132)",
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="absolute w-[382.078px] h-[100px] left-0 top-[50px]">
              <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
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
                  <select
                    name="rsvpStatus"
                    value={formData.rsvpStatus}
                    onChange={handleInputChange}
                    className="items-center bg-no-repeat inline-block size-full max-h-full max-w-full min-h-full min-w-full whitespace-pre bg-black/0 bg-[position:right_8px_50%] bg-size-[9px_6px] pt-0 pr-6 pb-0 pl-[5px] focus:outline-none"
                    required
                  >
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
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="items-center bg-no-repeat inline-block size-full max-h-full max-w-full min-h-full min-w-full whitespace-pre bg-black/0 bg-[position:right_8px_50%] bg-size-[9px_6px] pt-0 pr-6 pb-0 pl-[5px] focus:outline-none"
                    required
                  >
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
                  <select
                    name="guestOf"
                    value={formData.guestOf}
                    onChange={handleInputChange}
                    className="items-center bg-no-repeat inline-block size-full max-h-full max-w-full min-h-full min-w-full whitespace-pre bg-black/0 bg-[position:right_8px_50%] bg-size-[9px_6px] pt-0 pr-6 pb-0 pl-[5px] focus:outline-none"
                    required
                  >
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
            <div className="absolute w-[382.078px] h-[35px] left-0 top-[295px]">
              <div className="border size-full absolute border-[rgb(63,_92,_132)] rounded-[1.25rem]">
                <div className="size-full pointer-events-none absolute left-0 top-0 rounded-[1.1875rem]"></div>
                <div className="size-full absolute pt-0 pr-[5px] pb-0 pl-[5px]">
                  <select
                    name="transportation"
                    value={formData.transportation}
                    onChange={handleInputChange}
                    className="items-center bg-no-repeat inline-block size-full max-h-full max-w-full min-h-full min-w-full whitespace-pre bg-black/0 bg-[position:right_8px_50%] bg-size-[9px_6px] pt-0 pr-6 pb-0 pl-[5px] focus:outline-none"
                    required
                  >
                    <option value="">
                      Phương tiện di chuyển
                    </option>
                    <option value="Tự di chuyển">
                      Tự di chuyển
                    </option>
                    <option value="Xe đưa rước Q7 15h30">
                      Xe đưa rước Q7 15h30
                    </option>
                    <option value="Xe đưa rước Công viên Lê Văn Tám 15h30">
                      Xe đưa rước Công viên Lê Văn Tám 15h30
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={RSVP_MODAL_STYLES}
        contentLabel="Thiệp lời chúc"
      >
        <div className="relative w-[390px] max-w-[90vw]">
          <div
            className="absolute inset-0 rounded-[32px] opacity-25"
            style={{
              backgroundImage: `url("${RSVP_MODAL_PATTERN}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative z-10 rounded-[32px] bg-white/95 px-6 pt-6 pb-8 text-[rgb(63,_92,_132)] shadow-[0_25px_70px_rgba(15,23,42,0.35)]">
            <div className="flex items-start justify-between text-[11px] font-semibold tracking-[0.4em] text-[#3a4c6f]">
              <span className="text-right leading-4">
                BEST <br />
                DAY <br />
                EVER
              </span>
              <button
                type="button"
                aria-label="Đóng modal"
                onClick={closeModal}
                className="text-[22px] leading-none text-[#1d2a44] transition hover:scale-105"
                style={{ border: "none", background: "transparent", padding: 0 }}
              >
                ×
              </button>
            </div>
            <p
              className="mt-4 text-[28px] leading-[34px] text-[#1f3254]"
              style={{ fontFamily: '"Times New Roman", serif', fontStyle: "italic" }}
            >
              Thank you!
            </p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[#dfe4f0]">
              <img
                src={RSVP_MODAL_IMAGE}
                alt="Thiệp cảm ơn"
                className="h-[190px] w-full object-cover"
              />
            </div>
            <p className="mt-5 text-center text-[14px] leading-6 text-[#4a5875]">
              Những lời chúc này sẽ là động lực rất lớn giúp chúng mình bước vào một cánh
              cửa hôn nhân đầy mới mẻ.
            </p>
            <p className="mt-3 text-center text-[13px] font-semibold tracking-[0.6em] text-[#2b3f63]">
              09.03.2025
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={closeModal}
                className="w-full rounded-full border border-[#3f5c84] py-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-[#3f5c84] transition hover:bg-[#3f5c84] hover:text-white"
                style={{ background: "transparent" }}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>

  );
}
