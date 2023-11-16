"use client";
import styles from "./page.module.css";

import { RootState, useAppDispatch, useAppSelector } from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./Redux/slice/couter/couter";
import PrimaryInput from "./common/ui/buttons/primary/PrimaryInput";
import IconRenderer from "./common/ui/Icons/IconRenderer";
import Link from "next/link";

export default function Home() {
	const countSelector = useAppSelector((state) => state.counterReducer.value);
	const dispatch = useAppDispatch();

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

			<PrimaryInput placeholder="test input" label="enter test input" type ="email"></PrimaryInput>

			<IconRenderer id="validated-sign"></IconRenderer>
		</main>
	);
}
