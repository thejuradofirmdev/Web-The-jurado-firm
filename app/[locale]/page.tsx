import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AttorneySection } from "@/components/sections/AttorneySection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";

import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { CommitmentSection } from "@/components/sections/CommitmentSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="flex flex-col min-h-screen w-full select-none antialiased">
      <Hero locale={locale} />
      <TrustBar locale={locale} />
      <AttorneySection locale={locale} />
      <ServicesGrid locale={locale} />
      <ProcessSection locale={locale} />

      <GoogleReviews locale={locale} />
      <CommitmentSection locale={locale} />
      <TeamSection locale={locale} />
      <TrustBadges locale={locale} />
      <FinalCTA locale={locale} />
    </div>
  );
}
