"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineOpenInNew } from "react-icons/md";

export function Header() {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-center bg-primary py-4">
      <ul className="flex gap-4 my-2">
        <li>
          <Link
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
            href="/"
          >
            Página Inicial
          </Link>
        </li>
        <li>
          <Link
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
            href="/cursos"
          >
            Cursos
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1"
            href="https://blog.codarse.com"
            target="_blank"
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
