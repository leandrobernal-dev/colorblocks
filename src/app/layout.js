import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/layout/Nav";
import { ThemeProvider } from "@/theme/ThemeProvider";
import ToolBox from "@/components/ToolBox";
import PaletteContextProvider from "@/context/PaletteContextProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "ColorBlocks",
  description: "Generate color palettes real time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`} suppressHydrationWarning>
        <PaletteContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <ToolBox />
            {children}
          </ThemeProvider>
        </PaletteContextProvider>
      </body>
    </html>
  );
}
