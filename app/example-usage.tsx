import Navbar from "./navbar"

// Examples of different ways to use the compound component pattern
export function ExampleUsage() {
  return (
    <div>
      {/* Basic usage */}
      <Navbar>
        <Navbar.Logo>AppLogo</Navbar.Logo>
        <Navbar.Item href="/about">About</Navbar.Item>
        <Navbar.Item href="/faq">FAQ</Navbar.Item>
        <Navbar.User>John Doe</Navbar.User>
      </Navbar>

      {/* E-commerce app example */}
      <Navbar>
        <Navbar.Logo href="/shop">ShopApp</Navbar.Logo>
        <Navbar.Item href="/products">Products</Navbar.Item>
        <Navbar.Item href="/categories">Categories</Navbar.Item>
        <Navbar.Item href="/deals">Deals</Navbar.Item>
        <Navbar.Item href="/support">Support</Navbar.Item>
        <Navbar.User>Alice Johnson</Navbar.User>
      </Navbar>

      {/* Dashboard app example */}
      <Navbar>
        <Navbar.Logo href="/dashboard">DashApp</Navbar.Logo>
        <Navbar.Item href="/analytics">Analytics</Navbar.Item>
        <Navbar.Item href="/reports">Reports</Navbar.Item>
        <Navbar.Item href="/settings">Settings</Navbar.Item>
        <Navbar.User>Bob Wilson</Navbar.User>
      </Navbar>

      {/* Minimal example */}
      <Navbar>
        <Navbar.Logo>MinimalApp</Navbar.Logo>
        <Navbar.Item href="/home">Home</Navbar.Item>
        <Navbar.User>Guest User</Navbar.User>
      </Navbar>
    </div>
  )
}
