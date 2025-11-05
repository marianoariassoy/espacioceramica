import { FieldError } from "react-hook-form";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return (
    <div className="text-sm font-medium text-red-500">{error.message} 👆🏻</div>
  );
};

export default Error;
