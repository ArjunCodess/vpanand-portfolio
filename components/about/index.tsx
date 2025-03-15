import { getAbout } from "@/lib/sanity"
import AboutClient from "./client"

// Define type for about data that matches Sanity schema
export type AboutData = {
  shortDescription: string;
  longDescription: string[];
}

// Server component that fetches data and passes it to the client component
export default async function AboutSection() {
  const about = await getAbout();
  
  return <AboutClient about={about} />;
} 