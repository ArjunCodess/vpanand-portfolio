import { getHeadline } from "@/lib/sanity"
import HeadlineClient from "./client"

// Define type for headline data that matches Sanity schema
export type HeadlineData = {
  title: string;
  contactLink: string;
  contactText: string;
  workLink: string;
  workText: string;
}

// Server component that fetches data and passes it to the client component
export default async function HeadlineSection() {
  const headline = await getHeadline();
  
  return <HeadlineClient headline={headline} />;
} 