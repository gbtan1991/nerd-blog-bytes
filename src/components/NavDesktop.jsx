import { routes } from "../routes";

const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-base">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={title}>
            <a href={href} className="flex items-center gap-1 text-dutch_white-800 hover:text-dutch_white-400">
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
