import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/api/auth/signin");
  }

  return (
    <main>
      <h1>Next.js 13 and the App Router</h1>
    </main>
  );
}
