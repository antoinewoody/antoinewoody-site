import Link from "next/link";
import {BookingCta} from "./cta";

export function Header(){
  return <header className="siteHeader">
    <Link href="/" className="brand"><span>ANTOINE</span><span>WOODY</span></Link>
    <nav className="nav" aria-label="Primary navigation">
      <Link href="/about">About</Link>
      <Link href="/advisory">Advisory</Link>
      <Link href="/sound">Sound</Link>
      <Link href="/insights">Insights</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    <BookingCta className="button small primary" label="Book"/>
  </header>;
}