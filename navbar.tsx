"use client"

import { Menu, Mountain } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { createContext, type ReactNode } from "react"

// Context for sharing navbar state
interface NavbarContextType {
  navigationItems: Array<{ label: string; href: string }>
  logoText: string
  logoHref: string
  userFullName: string
}

const NavbarContext = createContext<NavbarContextType>({
  navigationItems: [],
  logoText: "AppLogo",
  logoHref: "/",
  userFullName: "",
})

// Main Navbar component
interface NavbarProps {
  children: ReactNode
}

function Navbar({ children }: NavbarProps) {
  // Extract data from children
  const navigationItems: Array<{ label: string; href: string }> = []
  let logoText = "AppLogo"
  let logoHref = "/"
  let userFullName = ""

  // Process children to extract props
  const processChildren = (children: ReactNode): void => {
    if (!children) return

    const childrenArray = Array.isArray(children) ? children : [children]

    childrenArray.forEach((child: any) => {
      if (!child || typeof child !== "object") return

      if (child.type === NavbarItem) {
        navigationItems.push({
          label: child.props.children,
          href: child.props.href,
        })
      } else if (child.type === NavbarLogo) {
        logoText = child.props.children || logoText
        logoHref = child.props.href || logoHref
      } else if (child.type === NavbarUser) {
        userFullName = child.props.children || child.props.name || ""
      }
    })
  }

  processChildren(children)

  const contextValue: NavbarContextType = {
    navigationItems,
    logoText,
    logoHref,
    userFullName,
  }

  return (
    <NavbarContext.Provider value={contextValue}>
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
                {userFullName && (
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">Logged in as:</p>
                    <p className="font-medium">{userFullName}</p>
                  </div>
                )}
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
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Name - Right side */}
          {userFullName && (
            <div className="flex items-center">
              <span className="text-sm font-medium">{userFullName}</span>
            </div>
          )}
        </div>
      </header>
    </NavbarContext.Provider>
  )
}

// Compound components
interface NavbarItemProps {
  href: string
  children: ReactNode
}

function NavbarItem({ href, children }: NavbarItemProps) {
  // This component doesn't render anything directly
  // It's processed by the parent Navbar component
  return null
}

interface NavbarLogoProps {
  href?: string
  children: ReactNode
}

function NavbarLogo({ href = "/", children }: NavbarLogoProps) {
  // This component doesn't render anything directly
  // It's processed by the parent Navbar component
  return null
}

interface NavbarUserProps {
  name?: string
  children?: ReactNode
}

function NavbarUser({ name, children }: NavbarUserProps) {
  // This component doesn't render anything directly
  // It's processed by the parent Navbar component
  return null
}

// Attach compound components to main component
Navbar.Item = NavbarItem
Navbar.Logo = NavbarLogo
Navbar.User = NavbarUser

export default Navbar
