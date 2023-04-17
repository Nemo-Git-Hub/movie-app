import clsx from "clsx";
import { useState } from "react";

export default function ExpandedText({ text }) {
  const [isCollapseBio, setIsCollapseBio] = useState(false);

  const toggleIsCollapseBio = () =>
    setIsCollapseBio((isCollapseBio) => !isCollapseBio);

  return (
    <>
      <div
        className={clsx("default-className", {
          "h-auto": isCollapseBio,
          "h-12 overflow-hidden": !isCollapseBio,
        })}
      >
        {text.split("\n").map((itemParagraph, index) => {
          if (itemParagraph) {
            return (
              <p className="pb-6" key={`expanded-text-${index}`}>
                {itemParagraph}
              </p>
            );
          }
          return null;
        })}
      </div>
      <button className="text-blue-700 font-bold" onClick={toggleIsCollapseBio}>
        {isCollapseBio ? "Less info ↑" : "More info ↓"}
      </button>
    </>
  );
}
