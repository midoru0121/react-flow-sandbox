import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string, message?: string};
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
        { <i>{error.statusText}</i> }
        { <i>{error.message}</i> }
    </div>
  );
}