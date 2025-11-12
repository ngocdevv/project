import { Navigate, Route, Routes, useParams } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import InvitationDetailsSection from "./components/InvitationDetailsSection";
import MemoriesSection from "./components/MemoriesSection";
import RsvpSection from "./components/RsvpSection";
import SaveTheDateSection from "./components/SaveTheDateSection";
import ThankYouSection from "./components/ThankYouSection";
import TimelineSection from "./components/TimelineSection";
import {
  defaultWeddingVariant,
  getWeddingContent,
  isWeddingVariant,
  type WeddingVariant,
} from "./lib/weddingContent";

const weddingHeroImage =
  "https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687272/TA_05002_dyocdq.jpg";
const saveDateImage =
  "https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687274/TA_04895_xwifth.jpg";
const couplePhoto2 =
  "https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687276/TA_06367_rj00ra.jpg";
const couplePhoto1 =
  "https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687272/TA_06400_n7fm8g.jpg";
const couplePhoto3 =
  "https://res.cloudinary.com/dgjkfed2m/image/upload/v1762687273/TA_06853_qrfnim.jpg";

function WeddingPage({ variant }: { variant: WeddingVariant }) {
  const content = getWeddingContent(variant);
  const [primaryCouplePhoto, secondaryCouplePhoto] =
    variant === "groom"
      ? [couplePhoto1, couplePhoto2]
      : [couplePhoto2, couplePhoto1];

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
          <HeroSection
            image={weddingHeroImage}
            heroLabel={content.hero.label}
            heroDate={content.hero.date}
            names={content.hero.names}
          />
          <SaveTheDateSection
            image={saveDateImage}
            announcement={content.announcement}
          />
          <InvitationDetailsSection
            couplePhoto1={primaryCouplePhoto}
            couplePhoto2={secondaryCouplePhoto}
            content={content.invitation}
          />
          <TimelineSection
            couplePhoto3={couplePhoto3}
            schedule={content.schedule}
          />
          <MemoriesSection />
          <RsvpSection countdownDate={content.countdownDate} />
          <ThankYouSection />
          <div className="ml-auto mr-auto relative h-0">
            <div className="h-full ml-auto mr-auto relative z-[90000070]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VariantRoute() {
  const params = useParams<{ variant?: string }>();
  const variantParam = params.variant ?? defaultWeddingVariant;

  if (!isWeddingVariant(variantParam)) {
    return <Navigate to={`/${defaultWeddingVariant}`} replace />;
  }

  return <WeddingPage variant={variantParam} />;
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${defaultWeddingVariant}`} replace />}
      />
      <Route path="/:variant" element={<VariantRoute />} />
      <Route
        path="*"
        element={<Navigate to={`/${defaultWeddingVariant}`} replace />}
      />
    </Routes>
  );
}
