import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

// Types for Sanity data
interface VideoData {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
  views: string;
  platform: string;
}

// Fetch navigation items
export async function getNavItems() {
  return client.fetch(
    groq`*[_type == "navItem"] | order(_createdAt asc) {
      name,
      id
    }`
  );
}

// Fetch profile data
export async function getProfile() {
  const profile = await client.fetch(
    groq`*[_type == "profile"][0] {
      name,
      title,
      fullTitle,
      email,
      "imageUrl": image.asset->url,
      socialLinks[] {
        platform,
        url,
        icon
      }
    }`
  );
  
  // Fix the image URL structure if needed
  return {
    ...profile,
    image: profile.imageUrl || '/image.png',
  };
}

// Fetch hero image
export async function getHeroImage() {
  const heroImage = await client.fetch(
    groq`*[_type == "heroImage"][0] {
      "src": src.asset->url,
      alt,
      width,
      height
    }`
  );
  
  return heroImage || {
    src: "/hero.jpeg",
    alt: "Dr. Vijay Prakash Anand - Hero Image",
    width: 1584,
    height: 396,
  };
}

// Fetch headline data
export async function getHeadline() {
  return client.fetch(
    groq`*[_type == "headline"][0] {
      title,
      contactLink,
      contactText,
      workLink,
      workText
    }`
  );
}

// Fetch about data
export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"][0] {
      shortDescription,
      longDescription
    }`
  );
}

// Fetch courses data
export async function getCourses() {
  return client.fetch(
    groq`*[_type == "course"] | order(_createdAt asc) {
      title,
      institution,
      location,
      icon,
      color
    }`
  );
}

// Fetch featured videos
export async function getFeaturedVideos() {
  const videos = await client.fetch(
    groq`*[_type == "featuredVideo"] | order(_createdAt asc) {
      title,
      description,
      link,
      "imageUrl": image.asset->url,
      views,
      platform
    }`
  );
  
  return videos.map((video: VideoData) => ({
    ...video,
    image: video.imageUrl || '/video1.avif',
  }));
}

// Fetch publications
export async function getPublications() {
  return client.fetch(
    groq`*[_type == "publication"] | order(_createdAt asc) {
      title,
      publisher,
      url,
      date,
      icon,
      iconColor
    }`
  );
}

// Fetch education data
export async function getEducation() {
  return client.fetch(
    groq`*[_type == "education"] | order(_createdAt asc) {
      degree,
      institution,
      description,
      period,
      color
    }`
  );
}

// Fetch skill categories
export async function getSkillCategories() {
  return client.fetch(
    groq`*[_type == "skillCategory"] | order(_createdAt asc) {
      title,
      skills
    }`
  );
}

// Fetch experience data
export async function getExperience() {
  return client.fetch(
    groq`*[_type == "experience"] | order(_createdAt asc) {
      title,
      company,
      period,
      color
    }`
  );
}

// Fetch site settings
export async function getSiteSettings() {
  return client.fetch(
    groq`*[_type == "siteSettings"][0] {
      "navigation": navigation[]->{ name, id },
      "footerLinks": footerLinks[]->{ name, id },
      copyrightText
    }`
  );
}

// Helper function to get the footer copyright text
export async function getCopyright() {
  const settings = await getSiteSettings();
  return settings?.copyrightText || `© ${new Date().getFullYear()} Dr. Vijay Prakash Anand. All rights reserved.`;
}

// Helper function to get footer links
export async function getFooterLinks() {
  const settings = await getSiteSettings();
  return settings?.footerLinks || [];
} 