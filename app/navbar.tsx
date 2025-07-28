"use client"

import { Mountain } from "lucide-react"
import Link from "next/link"
import { PropsWithChildren, Children, ComponentProps } from "react"

function Navbar({ children }: PropsWithChildren) {
  const { logoText, logoHref, navigationItems, userFullName } = getNavigationItems(children)

  return (
    <header className="flex h-16 w-full items-center border-b bg-background px-4 md:px-6">
      <div className="hidden w-full items-center gap-8 lg:flex">
        <Link href={logoHref} className="flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="font-bold text-lg">{logoText}</span>
        </Link>

        <nav className="flex items-center  flex-grow space-x-8">
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

        {userFullName && (
          <div className="flex items-center">
            <span className="text-sm font-medium">{userFullName}</span>
          </div>
        )}
      </div>
    </header>
  )
}

function NavbarLogo(_: PropsWithChildren<{ href: string }>) {
  // This component doesn't render anything directly
  // It's processed by the parent Navbar component
  return null
}

function NavbarItem(_: PropsWithChildren<{ href: string }>) {
  // This component doesn't render anything directly
  // It's processed by the parent Navbar component
  return null
}

function NavbarUser(_: PropsWithChildren) {
  // This component doesn't render anything directly
  // It's processed by the parent Navbar component
  return null
}

Navbar.Logo = NavbarLogo
Navbar.Item = NavbarItem
Navbar.User = NavbarUser

export { Navbar }

function getNavigationItems(children: React.ReactNode) {
  const navigationItems: Array<{ label: string; href: string }> = []

  let logoText = "AppLogo"
  let logoHref = "/"
  let userFullName = ""

  if (children) {
    for (const child of Children.toArray(children)) {
      if (!child || typeof child !== "object" || !("type" in child)) continue

      if (child.type === NavbarItem) {
        const c = child as React.ReactElement<ComponentProps<typeof NavbarItem>, typeof NavbarItem>
        navigationItems.push({
          label: c.props.children as string,
          href: c.props.href,
        })
      } else if (child.type === NavbarLogo) {
        const c = child as React.ReactElement<ComponentProps<typeof NavbarLogo>, typeof NavbarLogo>
        logoText = (c.props.children as string) || logoText
        logoHref = c.props.href || logoHref
      } else if (child.type === NavbarUser) {
        const c = child as React.ReactElement<ComponentProps<typeof NavbarUser>, typeof NavbarUser>
        userFullName = (c.props.children as string) || ""
      }
    }
  }

  return {
    logoText,
    logoHref,
    navigationItems,
    userFullName,
  }
}
