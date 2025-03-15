import Image from "next/image";
import ProfileSection from "./profile";
import HeadlineSection from "./headline";
import AboutSection from "./about";
import FeaturedVideos from "./featured-videos";
import ExperienceSection from "./experience";
import EducationSection from "./education";
import SkillsSection from "./skills";
import PublicationsSection from "./publications";
import CoursesSection from "./courses";
import Separator from "./ui/separator";
import Navigation from "./navigation";
import { ScrollProgress } from "./ui/scroll-progress";
import { getHeroImage } from "@/lib/sanity";
import { BlurFade } from "./ui/blur-fade";

// Server component that fetches data and renders the layout
export default async function MainLayout() {
  const heroImage = await getHeroImage();

  return (
    <div className="relative">
      {/* Mobile and Tablet Layout - Stack everything vertically */}
      <div className="md:hidden">
        <BlurFade delay={0.1} inView>
          <div className="mb-12">
            <ProfileSection />
          </div>
        </BlurFade>
        <div className="space-y-16">
          <BlurFade delay={0.2} inView>
            <HeadlineSection />
          </BlurFade>
          <Separator />
          <BlurFade delay={0.3} inView>
            <AboutSection />
          </BlurFade>
          <Separator />
          <BlurFade delay={0.4} inView>
            <FeaturedVideos />
          </BlurFade>
          <Separator />
          <BlurFade delay={0.5} inView>
            <ExperienceSection />
          </BlurFade>
          <Separator />
          <BlurFade delay={0.6} inView>
            <EducationSection />
          </BlurFade>
          <Separator />
          <BlurFade delay={0.7} inView>
            <SkillsSection />
          </BlurFade>
          <Separator />
          <BlurFade delay={0.8} inView>
            <PublicationsSection />
          </BlurFade>
          <Separator />
          <BlurFade delay={0.9} inView>
            <CoursesSection />
          </BlurFade>
        </div>
        <Navigation />
      </div>

      {/* Desktop Layout - Two columns */}
      <div className="hidden md:block">
        {/* Hero Image - Only visible on desktop/laptop */}
        <BlurFade delay={0.1} inView>
          <div className="w-full mb-12 rounded-2xl overflow-hidden border border-neutral-300">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </BlurFade>

        <div className="grid grid-cols-5 gap-16 relative">
          {/* Left Column - Profile Section and Navigation */}
          <div className="col-span-2 pr-6">
            <div className="md:sticky md:top-24 overflow-hidden">
              <BlurFade delay={0.2} inView>
                <ProfileSection />
              </BlurFade>
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
            <BlurFade delay={0.3} inView>
              <HeadlineSection />
            </BlurFade>
            <Separator />
            <BlurFade delay={0.4} inView>
              <AboutSection />
            </BlurFade>
            <Separator />
            <BlurFade delay={0.5} inView>
              <FeaturedVideos />
            </BlurFade>
            <Separator />
            <BlurFade delay={0.6} inView>
              <ExperienceSection />
            </BlurFade>
            <Separator />
            <BlurFade delay={0.7} inView>
              <EducationSection />
            </BlurFade>
            <Separator />
            <BlurFade delay={0.8} inView>
              <SkillsSection />
            </BlurFade>
            <Separator />
            <BlurFade delay={0.9} inView>
              <PublicationsSection />
            </BlurFade>
            <Separator />
            <BlurFade delay={1.0} inView>
              <CoursesSection />
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
