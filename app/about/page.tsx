import { Metadata } from "next";

// export const dynamic = 'force-static'; // just for demonstration

export const metadata: Metadata = {
  title: "About Us",
  description: "About Next.js",
};

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <p>
        This is the about page for the <strong>Next.js</strong> App Router
        project.
      </p>
    </div>
  );
}
