import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image
          src="/SeedFusion_logo.png"
          alt="SeedFusion"
          width={280}
          height={80}
        />
      </div>

      <div className="navLinks">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
