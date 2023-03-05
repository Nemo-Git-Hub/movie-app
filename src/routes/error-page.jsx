import { useRouteError } from "react-router-dom";

export default function ErrorePage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>ERROR</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
