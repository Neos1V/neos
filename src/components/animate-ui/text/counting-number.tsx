"use client";

import {
	type UseInViewOptions,
	useInView,
	useMotionValue,
	animate,
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
	duration?: number; // Durée en secondes au lieu des paramètres spring
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
			inView = true,
			inViewMargin = "0px",
			inViewOnce = true,
			decimalSeparator = ".",
			thousandsSeparator = ".",
			duration = 2, // Durée fixe de 2 secondes par défaut
			decimalPlaces = 0,
			className = "",
			style = {},
			...props
		},
		ref,
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
			[decimals, decimalSeparator, thousandsSeparator, padStart, number],
		);

		React.useEffect(() => {
			if (isInView) {
				// Animation linéaire avec durée fixe
				const controls = animate(motionVal, number, {
					duration: duration,
					ease: "linear", // Animation complètement linéaire
				});

				return () => controls.stop();
			}
		}, [isInView, number, motionVal, duration]);

		React.useEffect(() => {
			const unsubscribe = motionVal.on("change", (latest: number) => {
				if (localRef.current) {
					const formatted = formatNumber(latest);
					localRef.current.textContent = formatted;
				}
			});
			return () => unsubscribe();
		}, [motionVal, formatNumber]);

		const finalIntLength = Math.floor(Math.abs(number)).toString().length;
		const initialText = padStart
			? "+0".padStart(finalIntLength + 1, "0") +
			(decimals > 0 ? decimalSeparator + "0".repeat(decimals) : "")
			: "+0" + (decimals > 0 ? decimalSeparator + "0".repeat(decimals) : "");

		const finalFormattedText = formatNumber(number);

		// Styles améliorés pour éviter le texte coupé
		const fixedStyles: React.CSSProperties = {
			fontFamily: "var(--font-manrope)",
			fontStyle: "italic",
			// Largeur plus conservative pour éviter l'overflow mobile
			textAlign: "center",
			letterSpacing: "-0.05em",
			// Padding minimal pour éviter l'overflow
			padding: "0 0.2ch",
			whiteSpace: "nowrap", // Empêche le retour à la ligne
			boxSizing: "border-box", // Inclut le padding dans la largeur
			...style,
		};

		return (
			<span ref={localRef} className={className} style={fixedStyles} {...props}>
        {initialText}
      </span>
		);
	},
);

CountingNumber.displayName = "CountingNumber";

export { CountingNumber, type CountingNumberProps };