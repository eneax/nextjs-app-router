import Link from "next/link";
import Image from "next/image";

import { SignInButton, SignOutButton } from "@/components/buttons";
import AuthCheck from "@/components/AuthCheck";

export default function NavMenu() {
  return (
    <nav className="bg-sky-600 text-white flex items-center justify-between h-20 px-4">
      <Link href="/">
        <Image src="/logo.svg" alt="NextSpace Logo" width={216} height={30} />
      </Link>

      <ul className="list-none flex">
        <li className="flex items-center h-20 p-1">
          <Link href="/about">About</Link>
        </li>
        <li className="flex items-center h-20 p-1">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="flex items-center h-20 p-1">
          <Link href="/users">Users</Link>
        </li>
        <li className="flex items-center h-20 p-1">
          <SignInButton />
        </li>

        <AuthCheck>
          <li className="flex items-center h-20 p-1">
            <SignOutButton />
          </li>
        </AuthCheck>
      </ul>
    </nav>
  );
}
