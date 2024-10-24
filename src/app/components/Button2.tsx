// Props destructured
export default function Button2({
  backgroundColor,
  fontSize,
  children,
}: {
  backgroundColor: string;
  fontSize: number;
  children: JSX.Element; // Only jsx elements (<div> <span> etc..) can be passed. NO strings
}) {
  return <button className="">{children}</button>;
}
