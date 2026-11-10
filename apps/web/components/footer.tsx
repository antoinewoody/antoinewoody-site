import Link from "next/link";
import {BookingCta} from "./cta";

export function Footer(){
  return <footer className="footer">
    <div>
      <p className="eyebrow">ANTOINE WOODY</p>
      <h2>See clearly. Move intentionally. Stay rooted.</h2>
      <p className="footerTagline">Private Human Performance Advisory for people who support people.</p>
    </div>
    <BookingCta/>
    <div className="footerLinks">
      <Link href="/about">About</Link>
      <Link href="/advisory">Advisory</Link>
      <Link href="/listen">LISTEN Method</Link>
      <Link href="/sound">Sound</Link>
      <Link href="/insights">Insights</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/privacy">Privacy</Link>
    </div>
    <p className="finePrint">Coaching and advisory services are educational and developmental, not medical care, psychotherapy, or crisis services.</p>
  </footer>;
}