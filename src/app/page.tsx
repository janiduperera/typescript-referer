"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import { useEffect, useRef, useState } from "react";
import Button6 from "./components/Button6";
import { Color } from "./lib/common-color-type";
/* import { type Color } from "./lib/common-color-type"; */ // You can write the above like this also to specify this is 'type' import

type User = {
  name: string;
  age: number;
};

type Guest = Omit<User, "age">; // Guest will only have name from User type

type buttonColor = "red" | "green";

// Using Color from common reusable file.
type fromCommonTypes = {
  color: Color;
  borderColor: Color;
};

export default function Home() {
  const handlOnClick = () => {};

  const handleOnClickReturn = (test: string) => {
    return 100;
  };

  const [count, setCount] = useState<number>(0); // This is optional as react will know count is number by default because you put 0

  const [user, setUser] = useState<User | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const buttonOfText = ["test", "hello", "world"] as const; // This is a const array read only

  // Convert to array here you can pass any type like string or number but it my return the same type array. Thats why there is 'T'
  const convertToArrayArroFunction = <T,>(val: T): T[] => {
    return [val];
  };

  // This is same as above covertToArray
  function convertToArrayRegular<T>(val: T): T[] {
    return [val];
  }

  useEffect(() => {
    const previousColor = localStorage.getItem("btnColor") as buttonColor;
  }, []);

  return (
    <div ref={ref}>
      <Button backgroundColor="red" fontSize={20} setCount={setCount} />
      <Button2 backgroundColor="purple" fontSize={30}>
        <div>Click me</div>
      </Button2>
      <Button3
        backgroundColor="red"
        fontSize={10}
        color="yellow"
        borderColor="blue"
        padding={[10, 20]}
        margin={[5, 10]}
        objectStyle={{
          backgroundColor: "red",
          fontSize: 15,
        }}
        reactStyle={{
          backgroundColor: "purple",
          fontSize: 40,
          color: "rebeccapurple",
        }}
        borderRadius={{
          topLeft: 10,
          topRight: 10,
        }}
        onClick={() => handlOnClick()}
        onClickWithRegurn={handleOnClickReturn}
      >
        This is Button 3
      </Button3>

      <Button6
        autoFocus={true}
        type="submit"
        defaultValue={"test"}
        className="button-class"
      />
    </div>
  );
}
