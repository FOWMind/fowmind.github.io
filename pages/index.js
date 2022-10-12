import Head from "next/head";
import { About, Contact, Introduction, Work } from "../components";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
