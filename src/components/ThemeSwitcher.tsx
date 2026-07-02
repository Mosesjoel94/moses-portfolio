import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {

  const { theme, setTheme } = useTheme();

  const themes = [
    "dark",
    "corporate",
    "futuristic",
  ] as const;

  return (

    <div className="flex gap-2">

      {themes.map(item => (

        <button
          key={item}
          onClick={() => setTheme(item)}
          className={
            theme === item
              ? "rounded-lg border px-3 py-2 font-bold"
              : "rounded-lg border border-slate-700 px-3 py-2"
          }
        >
          {item}
        </button>

      ))}

    </div>

  );
}

export default ThemeSwitcher;
