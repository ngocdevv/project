type HouseholdCard = {
  label: string;
  father: string;
  mother: string;
  address: string;
};

type CeremonyDetails = {
  headline: string;
  timeLabel: string;
  addressLine: string;
  dayOfWeek: string;
  day: string;
  month: string;
  year: string;
  lunarDate: string;
};

type ReceptionDetails = {
  headingLines: [string, string];
  address: string;
  mapLink: string;
};

type ScheduleItem = {
  time: string;
  label: string;
  description: string;
};

type AnnouncementContent = {
  gratitude: string;
  messageLead: string;
  eventLabel: string;
  namesLine: string;
};

type HeroContent = {
  label: string;
  date: string;
  names: [string, string];
};

type InvitationCopy = {
  inviteLead: string;
  groomName: string;
  brideName: string;
  ceremony: CeremonyDetails;
  reception: ReceptionDetails;
  households: {
    left: HouseholdCard;
    right: HouseholdCard;
  };
};

export type WeddingVariant = "groom" | "bride";

export type WeddingContent = {
  slug: WeddingVariant;
  hero: HeroContent;
  announcement: AnnouncementContent;
  invitation: InvitationCopy;
  schedule: ScheduleItem[];
  countdownDate: string;
};

export const weddingContent: Record<WeddingVariant, WeddingContent> = {
  groom: {
    slug: "groom",
    hero: {
      label: "WEDDING INVITATION",
      date: "24 . 01 . 2026",
      names: ["HỌC", "NHƯ"],
    },
    announcement: {
      gratitude:
        "QUYẾT ĐỊNH BÊN NHAU  \n TRỌN ĐỜI. ",
      messageLead: "",
      eventLabel: "Save the date",
      namesLine: "",
    },
    invitation: {
      inviteLead: "Trân trọng kính mời Quý vị đến chung vui cùng gia đình chúng tôi",
      groomName: "quốc học",
      brideName: "ái như",
      ceremony: {
        headline: "hôn lễ được tổ chức",
        timeLabel: "vào lúc 10 giờ 30 phút",
        addressLine: "",
        dayOfWeek: "thứ bảy",
        day: "24",
        month: "tháng 1",
        year: "năm 2026",
        lunarDate: "Nhằm ngày 06 tháng 12 năm Ất Tỵ",
      },
      reception: {
        headingLines: ["tại nhà hàng Sen Hồng", ""],
        address: "Số 01, Võ Văn Kiệt, Xã Krông Nô, Tỉnh Lâm Đồng",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Nh%C3%A0+h%C3%A0ng+Sen+H%E1%BB%93ng+V%C3%B5+V%C4%83n+Ki%E1%BB%87t+Kr%C3%B4ng+N%C3%B4",
      },
      households: {
        left: {
          label: "nhà trai",
          father: "Ông Trần Văn Cường",
          mother: "Bà Trần Thị Hiền",
          address: "Tỉnh Lâm Đồng",
        },
        right: {
          label: "nhà gái",
          father: "Ông Huỳnh Ái Quốc",
          mother: "Bà Nguyễn Tân Trà",
          address: "Tỉnh Đồng Nai",
        },
      },
    },
    schedule: [
      {
        time: "10:30",
        label: "ĐÓN KHÁCH",
        description: "Gửi lời chúc phúc và lưu giữ những khoảnh khắc đầu tiên cùng cô dâu & chú rể",
      },
      {
        time: "11:00",
        label: "LÀM LỄ",
        description: "Cùng nhau chứng kiến nghi thức thiêng liêng trong không gian ấm cúng tại tư gia",
      },
      {
        time: "11:20",
        label: "KHAI TIỆC",
        description: "Cùng nâng ly, thưởng thức bữa tiệc thân mật và chia sẻ niềm vui với gia đình",
      },
    ],
    countdownDate: "2026-01-24T09:30:00+07:00",
  },
  bride: {
    slug: "bride",
    hero: {
      label: "WEDDING INVITATION",
      date: "17 . 01 . 2026",
      names: ["NHƯ", "HỌC"],
    },
    announcement: {
      gratitude:
        "QUYẾT ĐỊNH BÊN NHAU \n  TRỌN ĐỜI. ",
      messageLead: "",
      eventLabel: "Save the date",
      namesLine: "",
    },
    invitation: {
      inviteLead: "Trân trọng kính mời Quý vị đến chung vui cùng gia đình chúng tôi",
      groomName: "quốc học",
      brideName: "ái như",
      ceremony: {
        headline: "hôn lễ được tổ chức",
        timeLabel: "vào lúc 17 giờ",
        addressLine: "",
        dayOfWeek: "thứ bảy",
        day: "17",
        month: "tháng 1",
        year: "năm 2026",
        lunarDate: "Nhằm ngày 29 tháng 11 năm Ất Tỵ",
      },
      reception: {
        headingLines: ["tại sảnh trệt PENSEÉ", "Nhà hàng Golden Lotus"],
        address: "105B Hà Huy Giáp, Phường Trấn Biên, Đồng Nai",
        mapLink: "https://maps.app.goo.gl/CZVJz82U6Jqn3dNV6",
      },
      households: {
        left: {
          label: "nhà gái",
          father: "Ông Huỳnh Ái Quốc",
          mother: "Bà Nguyễn Tân Trà",
          address: "Tỉnh Đồng Nai",
        },
        right: {
          label: "nhà trai",
          father: "Ông Trần Văn Cường",
          mother: "Bà Trần Thị Hiền",
          address: "Tỉnh Lâm Đồng",
        },
      },
    },
    schedule: [
      {
        time: "17:00",
        label: "ĐÓN KHÁCH",
        description: "Gửi lời chúc phúc và lưu lại những khoảnh khắc cùng cô dâu & chú rể",
      },
      {
        time: "18:00",
        label: "LÀM LỄ",
        description: "Cùng nhau chứng kiến khoảnh khắc thiêng liêng của đôi uyên ương",
      },
      {
        time: "18:30",
        label: "KHAI TIỆC",
        description: "Cùng nâng ly, thưởng thức bữa tiệc và chia sẻ niềm vui với gia đình",
      },
    ],
    countdownDate: "2026-01-17T17:00:00+07:00",
  },
};

export const defaultWeddingVariant: WeddingVariant = "bride";

export const isWeddingVariant = (value: string): value is WeddingVariant => {
  return (value as WeddingVariant) in weddingContent;
};

export const getWeddingContent = (variant: WeddingVariant) => weddingContent[variant];
