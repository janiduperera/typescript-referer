import { Dispatch, SetStateAction } from "react";

let url: string = "https://www.google.com";

// Function with return type string.
function convertCurrencyRegular(amount: number, currency: string): string {
  return "s";
}

const convertCurrencyArrow = (amount: number, currency: string): string => {
  return "Currency";
};

export default function Button(props: {
  backgroundColor: string;
  fontSize: number;
  setCount: Dispatch<SetStateAction<number>>;
}) {
  return <button className="">Click Me</button>;
}
