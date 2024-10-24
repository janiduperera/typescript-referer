//This component is a GenericTypeComponent.
//That means, the props passes should be same type, If countValue is a number, then countValueHistory also should be a
//number array. If the countValue is string, then countValueHistory should also be a string

type ButtonProps<T> = {
  countValue: T;
  countValueHistory: T[];
};

export default function GenericTypeComponent<T>({
  countValue,
  countValueHistory,
}: ButtonProps<T>) {
  return <button>Click !</button>;
}

// You can also define this component like below with inline type props
/* export default function GenericTypeComponent<T>({
  countValue,
  countValueHistory,
}: {
  countValue: T;
  countValueHistory: T[];
}) {
  return <button>Click !</button>;
} */
