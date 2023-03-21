function Slide({ list, title, moviePosterImg }) {
  return (
    <>
      <div className="">
        <a href="#" className="">
          <img
            src={`https://image.tmdb.org/t/p/w500/${moviePosterImg}`}
            title={title}
            className="imageSlide rounded-3xl max-h-56"
          />
        </a>

        <div className="titleSlide text-base font-bold pt-6 px-2">
          <a href="#" className="" title={title}>
            {title}
          </a>
        </div>
      </div>
    </>
  );
}

export default Slide;
