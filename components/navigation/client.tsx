'use client'

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "../ui/sheet";
import { NavItem } from ".";

// Client component that handles interactions
export default function NavigationClient({ navItems }: { navItems: NavItem[] }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  // Mobile navigation items (to be rendered inside Sheet)
  const NavItems = () => (
    <ul className="flex flex-col">
      {navItems.map((item) => (
        <li key={item.name} className="w-full">
          <Link 
            href={`#${item.id}`}
            onClick={() => setIsSheetOpen(false)}
            className="block py-2 px-4 group relative hover:bg-neutral-50 rounded-lg transition-all"
          >
            <div className="flex items-center">
              <span className="text-lg">
                {item.name}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  // Only return the mobile navigation with Sheet
  return (
    <div className="md:hidden fixed top-4 right-4 z-40">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <button 
            aria-label="Open navigation menu" 
            className="p-2 rounded-full bg-white shadow-md hover:bg-neutral-50 transition-colors"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="p-0"
          title=""
        >
          <div className="px-4 py-10">
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 