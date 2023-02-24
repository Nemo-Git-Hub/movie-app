function Slide({ list }) {
  console.log(list[0]);
  return (
    <>
      <div className="">
        <a href="#" className="">
          <img
            src="https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
            title="imageSlide"
            className="imageSlide rounded-3xl max-h-56"
          />
        </a>

        <div className="titleSlide text-2xl font-bold pt-6 px-2">
          <a href="#" className="" title="{list[0].title}">
            Slide
          </a>
        </div>
      </div>
    </>
  );
}

export default Slide;
