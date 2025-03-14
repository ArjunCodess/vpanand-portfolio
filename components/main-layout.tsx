import ProfileSection from "./profile-section"
import HeadlineSection from "./headline-section"
import AboutSection from "./about-section"
import FeaturedVideos from "./featured-videos"
import ExperienceSection from "./experience-section"
import EducationSection from "./education-section"
import SkillsSection from "./skills-section"
import PublicationsSection from "./publications-section"
import CoursesSection from "./courses-section"
import Separator from "./separator"

export default function MainLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16 relative">
      {/* Left Column - Profile Section Only */}
      <div className="col-span-2">
        <ProfileSection />
      </div>
      
      {/* Vertical Divider - Only visible on md screens and up */}
      <div className="hidden md:block absolute left-[40%] top-0 bottom-0 w-px bg-gray-200"></div>

      {/* Right Column - All Other Content */}
      <div className="col-span-3 space-y-16">
        {/* Headline Section */}
        <HeadlineSection />

        {/* Separator */}
        <Separator />

        {/* About Section */}
        <AboutSection />

        {/* Separator */}
        <Separator />

        {/* Featured Videos */}
        <FeaturedVideos />

        {/* Separator */}
        <Separator />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Separator */}
        <Separator />

        {/* Education Section */}
        <EducationSection />

        {/* Separator */}
        <Separator />

        {/* Skills Section */}
        <SkillsSection />

        {/* Separator */}
        <Separator />

        {/* Publications Section */}
        <PublicationsSection />

        {/* Separator */}
        <Separator />

        {/* Courses Section */}
        <CoursesSection />
      </div>
    </div>
  )
} 