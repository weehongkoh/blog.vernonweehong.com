import { HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function Table(props: Readonly<HTMLAttributes<HTMLTableElement> & HTMLAttributes<HTMLElement> & ExtraProps>) {
  const { children, ...rest } = props;

  return (
    <div className="table-wrapper">
      <table className="custom-table" {...rest}>
        {children}
      </table>
    </div>
  );
}