import Link from "next/link";

const NavItem = ({ name, url, icon }) => {
  return <Link className="flex items-center gap-1 text-zinc-50 text-lg hover:text-primary-accent-purple hover:transition-transform hover:rotate-6 origin-center hover:ease-out" href={url}>{icon}{name}</Link>;
};

export default NavItem;
