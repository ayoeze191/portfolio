"use client";
import { useTheme } from "next-themes";

export function ThemeDebug() {
  const { theme, systemTheme } = useTheme();
  return (
    <div className="fixed bottom-4 right-4 p-2 bg-yellow-100 dark:bg-yellow-900 text-xs">
      Active theme: {theme}
      <br />
      System preference: {systemTheme}
    </div>
  );
}
export function ThemeDebugger() {
  const { theme, resolvedTheme } = useTheme();
  return (
    <div className="fixed bottom-4 right-4 p-2 bg-blue-100 dark:bg-blue-900">
      <p>Theme: {theme}</p>
      <p>Resolved: {resolvedTheme}</p>
      <p>HTML class: {document.documentElement.className}</p>
    </div>
  );
}
