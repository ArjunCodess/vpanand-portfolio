import { getNavItems } from "@/lib/sanity"
import NavigationClient from "./client"

// Type for navigation items
export type NavItem = {
  name: string;
  id: string;
}

// Server component that fetches data and passes it to the client component
export default async function Navigation() {
  const navItems = await getNavItems();
  
  return <NavigationClient navItems={navItems} />;
} 