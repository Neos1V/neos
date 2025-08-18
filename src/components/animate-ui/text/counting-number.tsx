"use client";

import {
  type SpringOptions,
  type UseInViewOptions,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";
import * as React from "react";

type CountingNumberProps = Omit<React.ComponentProps<"span">, "ref"> & {
  number: number;
  fromNumber?: number;
  padStart?: boolean;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
  decimalSeparator?: string;
  thousandsSeparator?: string;
  transition?: SpringOptions;
  decimalPlaces?: number;
} & {
  ref?: React.Ref<HTMLSpanElement>;
};

const CountingNumber = React.forwardRef<
  HTMLSpanElement,
  Omit<CountingNumberProps, "ref">
>(
  (
    {
      number,
      fromNumber = 0,
      padStart = false,
      inView = false,
      inViewMargin = "0px",
      inViewOnce = true,
      decimalSeparator = ".",
      thousandsSeparator = ".",
      transition = { stiffness: 90, damping: 50 },
      decimalPlaces = 0,
      className = "",
      style = {},
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLSpanElement>(null);

    React.useImperativeHandle(ref, () => localRef.current!);

    const numberStr = number.toString();
    const decimals =
      typeof decimalPlaces === "number"
        ? decimalPlaces
        : numberStr.includes(".")
          ? (numberStr.split(".")[1]?.length ?? 0)
          : 0;

    const motionVal = useMotionValue(fromNumber);
    const springVal = useSpring(motionVal, transition);
    const inViewResult = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });
    const isInView = !inView || inViewResult;

    const formatNumber = React.useCallback(
      (value: number): string => {
        let formatted =
          decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

        // Remplacer le point par le séparateur décimal personnalisé
        if (decimals > 0 && decimalSeparator !== ".") {
          formatted = formatted.replace(".", decimalSeparator);
        }

        // Ajouter le séparateur de milliers seulement si différent de ""
        if (thousandsSeparator !== "") {
          const [intPart, fracPart] = formatted.split(decimalSeparator);
          const formattedInt =
            intPart?.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator) ?? "";
          formatted = fracPart
            ? `${formattedInt}${decimalSeparator}${fracPart}`
            : formattedInt;
        }

        if (padStart) {
          const finalIntLength = Math.floor(Math.abs(number)).toString().length;
          const [paddedIntPart, paddedFracPart] =
            formatted.split(decimalSeparator);
          const paddedInt = paddedIntPart?.padStart(finalIntLength, "0") ?? "";
          formatted = paddedFracPart
            ? `${paddedInt}${decimalSeparator}${paddedFracPart}`
            : paddedInt;
        }

        return `+${formatted}`;
      },
      [decimals, decimalSeparator, thousandsSeparator, padStart, number]
    );

    React.useEffect(() => {
      if (isInView) motionVal.set(number);
    }, [isInView, number, motionVal]);

    React.useEffect(() => {
      const unsubscribe = springVal.on("change", (latest: number) => {
        if (localRef.current) {
          const formatted = formatNumber(latest);
          localRef.current.textContent = formatted;
        }
      });
      return () => unsubscribe();
    }, [springVal, formatNumber]);

    const finalIntLength = Math.floor(Math.abs(number)).toString().length;
    const initialText = padStart
      ? "+0".padStart(finalIntLength + 1, "0") +
        (decimals > 0 ? decimalSeparator + "0".repeat(decimals) : "")
      : "+0" + (decimals > 0 ? decimalSeparator + "0".repeat(decimals) : "");

    const finalFormattedText = formatNumber(number);

    // Styles améliorés pour réduire l'espacement
    const fixedStyles: React.CSSProperties = {
      fontFamily: "monospace",
      fontStyle: "italic",
      display: "inline-block",
      minWidth: `${finalFormattedText.length * 0.6}ch`, // Réduit la largeur minimale
      textAlign: "right",
      letterSpacing: "-0.05em", // Réduit l'espacement entre les caractères
      ...style,
    };

    return (
      <span ref={localRef} className={className} style={fixedStyles} {...props}>
        {initialText}
      </span>
    );
  }
);

CountingNumber.displayName = "CountingNumber";

export { CountingNumber, type CountingNumberProps };
