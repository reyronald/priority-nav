import Navbar from "./navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar>
        <Navbar.Logo href="/">MyApp</Navbar.Logo>
        <Navbar.Item href="/about">About</Navbar.Item>
        <Navbar.Item href="/faq">FAQ</Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
        <Navbar.Item href="/services">Services</Navbar.Item>
        <Navbar.User>Jane Smith</Navbar.User>
      </Navbar>

      {/* Demo content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Application!</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Compound Components</h2>
              <p className="text-muted-foreground">
                Now using the Compound Component pattern for better composition and flexibility.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Declarative API</h2>
              <p className="text-muted-foreground">More readable and intuitive way to define navigation structure.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Same Behavior</h2>
              <p className="text-muted-foreground">All the responsive functionality remains exactly the same.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
