"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const PaletteContext = createContext();

export default function PaletteContextProvider({ children, value }) {
  const searchParams = useSearchParams();
  const colors = searchParams.get("colors");

  const [palette, setPalette] = useState([
    { name: "--primary", value: "#007bff", darkValue: "#007bff" },
    { name: "--secondary", value: "#6c757d", darkValue: "#6c757d" },
    { name: "--accent", value: "#6c757d", darkValue: "#6c757d" },
    { name: "--success", value: "#28a745", darkValue: "#28a745" },
    { name: "--info", value: "#17a2b8", darkValue: "#17a2b8" },
    { name: "--warning", value: "#ffc107", darkValue: "#ffc107" },
    { name: "--danger", value: "#dc3545", darkValue: "#dc3545" },
    { name: "--text", value: "#212529", darkValue: "#ffffff" },
    { name: "--background", value: "#ffffff", darkValue: "#000000" },
  ]);

  let paletteString = "";
  palette.forEach((color, index) => {
    paletteString += String(color.value).split("#")[1];
    paletteString += index !== palette.length - 1 ? "-" : "";
  });

  useEffect(() => {
    if (colors !== null && colors !== paletteString) {
      // If the colors query parameter is present, but not the same as the current palette, update the palette from the colors query parameter
      setPalette((prev) => {
        const newPalette = [...prev];
        const paletteStringArray = colors.split("-");
        newPalette.forEach((color, index) => {
          newPalette[index].value = "#" + paletteStringArray[index];
        });
        return newPalette;
      });
    }
  }, []);

  return (
    <PaletteContext.Provider value={{ palette, setPalette, ...value }}>
      {children}
    </PaletteContext.Provider>
  );
}
