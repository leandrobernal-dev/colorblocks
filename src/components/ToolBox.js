"use client";

import { PaletteContext } from "@/context/PaletteContextProvider";
import useHSLValue from "@/hooks/useHsl";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function ToolBox() {
  const router = useRouter();
  const { palette, setPalette } = useContext(PaletteContext);

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-50 flex h-14 items-center gap-2 rounded bg-zinc-500 p-2 shadow-sm">
      {/* {palette.map((color, index) => {
        return (
          <div className="flex flex-col" key={index + color.name}>
            <input
              type="color"
              name=""
              id=""
              defaultValue={color.value}
              onInput={(e) => {
                // router.replace(
                //   "/?colors=" + String(e.target.value).split("#")[1],
                // );
                setPalette((prev) => {
                  const newPalette = [...prev];
                  newPalette[index].value = e.target.value;
                  return newPalette;
                });
              }}
            />
            <span>{String(color.name).split("--")[1].toUpperCase()}</span>
          </div>
        );
      })} */}
      <input
        type="color"
        name=""
        id=""
        onInput={(e) => {
          document.documentElement.style.setProperty(
            "--card",
            useHSLValue(e.target.value),
          );
          console.log(e.target.value);
        }}
      />
    </aside>
  );
}
