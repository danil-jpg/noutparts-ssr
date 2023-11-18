"use client";
import styles from "./page.module.css";

import { useState } from "react";

import { RootState, useAppDispatch, useAppSelector } from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./Redux/slice/couter/couter";
import BasicRadio from "./common/ui/form/radio/BasicRadio";
import IconRenderer from "./common/ui/Icons/IconRenderer";
import Link from "next/link";

import Header from "./common/components/Header/Header";

export default function Home() {
	const countSelector = useAppSelector((state) => state.counterReducer.value);
	const dispatch = useAppDispatch();

	const texts = ["Option 1", "Option 2", "Option 3"];
	const descriptions = ["Description 1", "Description 2", "Description 3"];
	const [chosenRadio, setChosenRadio] = useState<string | null>(null);

	return (
		<main className={styles.main}>
			

			<button className={styles.button} onClick={() => dispatch(increment())}>
				inc
			</button>
			<button className={styles.button} onClick={() => dispatch(decrement())}>
				dec
			</button>
			<button className={styles.button} onClick={() => dispatch(incrementByAmount(2))}>
				incr by amount 2
			</button>
			<span className={styles.span}>{countSelector}</span>
			<Link href={"/testFolder"}>link</Link>

			<BasicRadio texts={texts} descriptions={descriptions} type="col" setChosenRadio={setChosenRadio} heading="Куда отправляем?"></BasicRadio>

			<IconRenderer id="validated-sign"></IconRenderer>
		</main>
	);
}
