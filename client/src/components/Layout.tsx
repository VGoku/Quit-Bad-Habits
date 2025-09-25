import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">🚫 BadHabits Tracker</h1>
      </header>

      {/* Main */}
      <main className="flex-1 p-6 container mx-auto">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-4">
        <p>© {new Date().getFullYear()} BadHabits Inc.</p>
      </footer>
    </div>
  );
}