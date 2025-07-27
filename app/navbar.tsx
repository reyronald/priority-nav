"use client"

import { Menu, Mountain } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavigationItem {
  label: string
  href: string
}

interface NavbarProps {
  userFullName?: string
  navigationItems?: NavigationItem[]
  logoText?: string
  logoHref?: string
}

export default function Navbar({
  userFullName = "John Doe",
  navigationItems = [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
  logoText = "AppLogo",
  logoHref = "/",
}: NavbarProps) {
  return (
    <header className="flex h-16 w-full items-center border-b bg-background px-4 md:px-6">
      {/* Mobile/Tablet Layout - Hidden on desktop (lg and up) */}
      <div className="flex w-full items-center justify-between lg:hidden">
        {/* Hamburger Menu - Left side */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 pt-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Logged in as:</p>
                <p className="font-medium">{userFullName}</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Centered Logo */}
        <Link href={logoHref} className="flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="font-bold">{logoText}</span>
        </Link>

        {/* Empty div for spacing */}
        <div className="w-10" />
      </div>

      {/* Desktop Layout - Hidden on mobile/tablet (below lg) */}
      <div className="hidden w-full items-center justify-between lg:flex">
        {/* Logo - Left side */}
        <Link href={logoHref} className="flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="font-bold text-lg">{logoText}</span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User Name - Right side */}
        <div className="flex items-center">
          <span className="text-sm font-medium">{userFullName}</span>
        </div>
      </div>
    </header>
  )
}
