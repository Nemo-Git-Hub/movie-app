import useCredits from "../hooks/useCredits";

export default function Credits() {
  const credits = useCredits();
  console.log(credits);

  return <>Text Credits info</>;
}
