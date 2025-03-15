import { getProfile } from "@/lib/sanity"
import ProfileClient from "./client"

// Define type for profile data that matches Sanity schema
export type ProfileData = {
  name: string;
  title: string;
  fullTitle: string;
  email: string;
  image: string;
}

// Server component that fetches data and passes it to the client component
export default async function ProfileSection() {
  const profile = await getProfile();
  
  return <ProfileClient profile={profile} />;
} 