import type { WithStyledProps } from "@box-extractor/vanilla-wind";
import type { PropsWithChildren } from "react";
import type { css } from "./theme";

const defaultElement = "div";

export const Box = <TType extends React.ElementType = typeof defaultElement>({
    as,
    _styled,
    children,
    className,
    ...props
}: PolymorphicComponentProps<WithStyledProps<typeof css> & PropsWithChildren & { className?: string }, TType>) => {
    const Component = as ?? defaultElement;
    return (
        <Component {...props} className={[_styled, className].join(" ")}>
            {children}
        </Component>
    );
};

type AsProp<TType extends React.ElementType = React.ElementType> = {
    as?: TType;
};

export type PolymorphicComponentProps<Props, TType extends React.ElementType> = Props &
    AsProp<TType> &
    Omit<React.ComponentProps<TType>, keyof AsProp | keyof Props>;
