'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href)
  return (
    <Link
      href={href}
      className={
        isActive
        ? ` ${classes.link} ${classes.active}`
        : `${classes.link}`
      }
      >  {children}
    </Link>
  );
};

export default NavLink;
