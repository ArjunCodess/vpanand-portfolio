import Image from "next/image";
import ProfileSection from "./profile-section";
import HeadlineSection from "./headline-section";
import AboutSection from "./about-section";
import FeaturedVideos from "./featured-videos";
import ExperienceSection from "./experience-section";
import EducationSection from "./education-section";
import SkillsSection from "./skills-section";
import PublicationsSection from "./publications-section";
import CoursesSection from "./courses-section";
import Separator from "./separator";
import Navigation from "./navigation";
import { ScrollProgress } from "./ui/scroll-progress";

export default function MainLayout() {
  return (
    <div className="relative">
      {/* Mobile and Tablet Layout - Stack everything vertically */}
      <div className="md:hidden">
        <div className="mb-12">
          <ProfileSection />
        </div>
        <div className="space-y-16">
          <HeadlineSection />
          <Separator />
          <AboutSection />
          <Separator />
          <FeaturedVideos />
          <Separator />
          <ExperienceSection />
          <Separator />
          <EducationSection />
          <Separator />
          <SkillsSection />
          <Separator />
          <PublicationsSection />
          <Separator />
          <CoursesSection />
        </div>
        <Navigation />
      </div>

      {/* Desktop Layout - Two columns */}
      <div className="hidden md:block">
        {/* Hero Image - Only visible on desktop/laptop */}
        <div className="w-full mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/hero.jpeg"
            alt="Dr. Vijay Prakash Anand - Hero Image"
            width={1584}
            height={396}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-5 gap-16 relative">
          {/* Left Column - Profile Section and Navigation */}
          <div className="col-span-2 pr-6">
            <div className="md:sticky md:top-24 overflow-hidden">
              <ProfileSection />
            </div>
          </div>

          {/* Vertical Scroll Progress - Only visible on md screens and up */}
          <div
            className="hidden md:block absolute left-[37.5%] top-0 bottom-0 bg-neutral-200"
            style={{ width: "1px" }}
          >
            <ScrollProgress
              orientation="vertical"
              className="h-full bg-neutral-400 rounded-full"
            />
          </div>

          {/* Right Column - All Other Content */}
          <div className="col-span-3 space-y-16">
            {/* Headline Section */}
            <HeadlineSection />
            <Separator />
            <AboutSection />
            <Separator />
            <FeaturedVideos />
            <Separator />
            <ExperienceSection />
            <Separator />
            <EducationSection />
            <Separator />
            <SkillsSection />
            <Separator />
            <PublicationsSection />
            <Separator />
            <CoursesSection />
          </div>
        </div>
      </div>
    </div>
  );
}
