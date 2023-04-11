import photoNull from "../assets/photoNull.png";

export default function CardPersonMini({ profilePath, name, participation }) {
  const urlFotoPerson = !profilePath
    ? photoNull
    : `https://image.tmdb.org/t/p/w66_and_h66_face/${profilePath}`;
  return (
    <div className="flex py-1">
      <img src={urlFotoPerson} className="rounded-md w-[66px] max-h-[66px]" />
      <div className="px-5 flex-col justify-center">
        <div className="font-bold">{name}</div>
        <div className="text-sm">{participation}</div>
      </div>
    </div>
  );
}
