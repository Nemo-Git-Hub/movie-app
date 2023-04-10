export default function CardPersonMini({ profile_path, name, participation }) {
  const urlTmlp = "";
  const urlFotoPerson = !profile_path
    ? "../src/assets/img/photo-null.png"
    : `https://image.tmdb.org/t/p/w500/${profile_path}`;
  return (
    <div className="flex py-1">
      {/* <img src={urlFotoPerson} className="rounded-md w-[66px] max-h-[66px]" /> */}
      <img
        src={urlFotoPerson}
        className="object-fill object-top rounded-md w-[66px] "
      />
      <div className="px-5 flex-col justify-center">
        <div className="font-bold">{name}</div>
        <div className="text-sm">{participation}</div>
      </div>
    </div>
  );
}
