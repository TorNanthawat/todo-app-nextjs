import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ToDo App - TorDev ",
    description: "A simple To-Do application built with Next.js and TypeScript",
    icons: {
        icon: "/next-w.svg", // สำหรับไอคอนทั่วไป
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-zinc-900 text-gray-800">
                <header className="bg-zinc-800 text-white p-4 text-center">
                    <h1 className="text-2xl font-bold">My Next.js To-Do App</h1>
                </header>
                <main className="flex-grow p-4">{children}</main>
                <footer className="bg-zinc-800 text-white p-4 text-center">
                    <p>© 2024 Next.js Todo List App by TorDev</p>
                </footer>
            </body>
        </html>
    );
}
