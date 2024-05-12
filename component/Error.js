import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h3>Someting went wrong...</h3>
    </div>
  );
};

export default Error;
