import { ButtonSize, IButton } from "@modules/Button";
import { FC } from "react";
import Image from "next/image";
import { ButtonLoading } from "./ButtonLoading";

const Button: FC<IButton> = (props: IButton) => {
  return (
    <button
      onClick={props.handleClick ? props.handleClick : undefined}
      className={`${
        props.size === ButtonSize.large ? "button--large label" : "label--small"
      } 
    button flex gap-2 items-center w-max`}
      disabled={props.loading}
    >
      {props.loading ? (
        <ButtonLoading />
      ) : (
        <>
          {props.icon && (
            <Image
              src={props.icon}
              alt={props.label ?? ""}
              width={25}
              height={25}
            />
          )}

          {props.label}
        </>
      )}
    </button>
  );
};

export default Button;
