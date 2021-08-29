import * as React from "react";
import Button from "../components/Button";

// markup
const NotFoundPage = () => {
  return (
    <main className="mx-document mt-flowline sm:pl-36 lg:pl-60">
      <title>Not found</title>
      <h1 className="text-display">Page not found</h1>
      <p className="mt-4">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
          </>
        ) : null}
        <br />
      </p>
      <div className="mt-24">
        <Button secondary href="/" className="block">
          Back to home
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
