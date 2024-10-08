"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
// import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNavItem } from "@/app/types";
import { Icons } from "../shared/icons";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const path = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = () => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", closeMobileMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-urban text-xl font-bold sm:inline-block">
          {"PropertyData"}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  path.includes(item.href)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={toggleMobileMenu}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
