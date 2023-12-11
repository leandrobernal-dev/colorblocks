import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PaletteContext } from "@/context/PaletteContextProvider";

export function usePalette() {
  const { palette, setPalette } = useContext(PaletteContext);

  const router = useRouter();
  const searchParams = useSearchParams();
  const colors = searchParams.get("colors");

  // Push the colors query parameter to the URL when the page loads
  useEffect(() => {
    let paletteString = "";
    palette.forEach((color, index) => {
      paletteString += String(color.value).split("#")[1];
      paletteString += index !== palette.length - 1 ? "-" : "";
    });

    // If colors query parameter is not present, add it to the URL
    if (colors === null) {
      router.replace("/?colors=" + paletteString);
      return;
    }

    router.replace("/?colors=" + paletteString);
  }, [palette]);

  // Update the theme colors when the colors query parameter changes
  useEffect(() => {
    if (colors === null) return;

    const paletteStringArray = colors.split("-");
    palette.forEach((color, index) => {
      document.documentElement.style.setProperty(
        color.name,
        "#" + paletteStringArray[index],
      );
    });
  }, [colors]);

  return { palette, setPalette };
}
