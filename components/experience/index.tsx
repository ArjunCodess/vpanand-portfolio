import { getExperience } from "@/lib/sanity"
import ExperienceClient from "./client"

// Define type for experience data that matches Sanity schema
export type ExperienceData = {
  title: string;
  company: string;
  period: string;
  color: string;
}

// Server component that fetches data and passes it to the client component
export default async function ExperienceSection() {
  const experiences = await getExperience();
  
  return <ExperienceClient experiences={experiences} />;
} 