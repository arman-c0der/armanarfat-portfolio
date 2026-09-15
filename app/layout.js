
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MainNav from "./components/portfolio/main-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Front-end web developer portfolio",
};

export default function RootLayout({ children }) {
  const whatsappNumber = "8801625230811";

  const whatsappMessage = encodeURIComponent(
    "Hi Arman, I visited your portfolio and I'd like to discuss a project with you."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}
      >
        <MainNav />

        {children}

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact me on WhatsApp"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="flex items-center gap-3">
            {/* Tooltip */}
            <span className="pointer-events-none rounded-lg bg-black px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2">
              Chat with me
            </span>

            {/* WhatsApp Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <svg
                viewBox="0 0 32 32"
                className="h-8 w-8 fill-white"
                aria-hidden="true"
              >
                <path d="M19.11 17.47c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.42.11-.56.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.57 1.09 2.75.14.18 1.87 2.86 4.53 4.01.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.58-.65 1.8-1.27.22-.62.22-1.16.15-1.27-.07-.11-.24-.18-.51-.31z" />
                <path d="M16.03 3.2c-7.07 0-12.82 5.74-12.82 12.81 0 2.26.59 4.46 1.71 6.4L3.14 28.8l6.55-1.72a12.8 12.8 0 0 0 6.34 1.68h.01c7.06 0 12.8-5.74 12.8-12.81S23.1 3.2 16.03 3.2zm0 23.45h-.01a10.6 10.6 0 0 1-5.4-1.47l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.62 10.62 0 1 1 8.9 4.86z" />
              </svg>
            </div>
          </div>
        </a>
      </body>
    </html>
  );
}

