import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Theme, useTheme } from "./contexts/theme-provider";
import {
  navItems,
  mainPagecontent,
  socialMediaIcons,
  themeIcons,
} from "./constants/landing-page";
import { ArrowRightToLineIcon } from "lucide-react";

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative w-full min-h-screen">
      <header className="sticky top-0">
        <nav className="px-10 md:px-40 py-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-8">
            <h1 className="font-bold text-3xl">SRI.G.V.M.H.S</h1>
            <ul className="self-end flex gap-1">
              {navItems.map(({ title, ref }, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-2 py-1 rounded-sm hover:bg-accent delay-200 opacity-75 hover:opacity-100 `}
                >
                  <a href={`#${ref}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
          <Button className="flex items-center gap-2">
            <span>Alumini Connect</span>
            <ArrowRightToLineIcon />
          </Button>
        </nav>
        <Separator className="mb-8" />
      </header>

      <main>
        {mainPagecontent.map(({ id, section }, index) => (
          <section key={index} id={id} className="min-h-[50dvh] px-20 py-40 flex flex-col">
            {section}
          </section>
        ))}
      </main>

      <footer>
        <Separator className="mt-8" />
        <div className="p-6">
          <div className="mx-40 flex items-center justify-between gap-4">
            <div>
              <span className="opacity-50">
                &copy; {new Date().getFullYear()}
              </span>
              <span className="ml-2">G.V.M ALUMNI</span>
            </div>
            <div>
              {themeIcons.map(({ title, icon }, index) => (
                <Button
                  variant="ghost"
                  size="icon"
                  key={index}
                  value={title}
                  onClick={(e) => setTheme(e.currentTarget.value as Theme)}
                  className={`rounded-full ${
                    theme === title ? "bg-secondary" : ""
                  }`}
                >
                  {icon}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4 mx-40 flex items-center gap-2">
            {socialMediaIcons.map(({ icon, link }, index) => (
              <a
                href={link}
                target="_blank"
                key={index}
                className="cursor-pointer opacity-50 hover:opacity-100"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

