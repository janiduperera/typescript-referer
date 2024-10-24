import React from "react";

type CommonColor = "yellow" | "green" | "blue";

type Button3Props = {
  backgroundColor: string;
  fontSize: number;
  pillShape?: boolean; // Question mark make it optional

  // individual constraints to the types.
  color: "yellow" | "green" | "blue"; // Color could have only these colors
  borderColor: "yellow" | "green" | "blue";

  // Commomn constrains to similar types
  // color: CommonColor;
  // borderColor: CommonColor;

  padding: number[];
  margin: [number, number]; // More specific array with only two values

  // Object types
  objectStyle: {
    backgroundColor: string;
    fontSize: number;
  };

  // React type prop
  reactStyle: React.CSSProperties;

  // Key value pairs that considers Key as well
  borderRadius: Record<string, number>;

  // Function that does not return anything
  onClick: () => void;

  // Function that return number as well as passing a parameter
  onClickWithRegurn: (test: string) => number;

  // children
  children: React.ReactNode;
};

// Props destructured
export default function Button3({
  backgroundColor,
  fontSize,
  pillShape,
  color,
  borderColor,
  padding,
  margin,
  objectStyle,
  reactStyle,
  onClick,
  onClickWithRegurn,
  children,
}: Button3Props) {
  return (
    <div>
      <button
        style={{
          backgroundColor: backgroundColor,
          padding: `${padding[0]}px ${padding[1]}px`,
        }}
      >
        Click me
      </button>
      <button>{children}</button>
    </div>
  );
}
