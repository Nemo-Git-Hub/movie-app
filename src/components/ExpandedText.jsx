export default function ExpandedText({ briefFullText, person }) {
  return (
    <div className={briefFullText}>
      {person.biography.split("\n").map((itemParagraph) => {
        if (itemParagraph) {
          return <p className="pb-6">{itemParagraph}</p>;
        }
      })}
    </div>
  );
}
