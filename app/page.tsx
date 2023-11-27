'use client';
import styles from './page.module.css';

import { useState } from 'react';

import { RootState, useAppDispatch, useAppSelector } from './Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './Redux/slice/couter/couter';
import BasicRadio from './common/ui/form/radio/BasicRadio';
import IconRenderer from './common/ui/Icons/IconRenderer';
import Link from 'next/link';

import Header from './common/components/Header/Header';
import CatalogueItem from './common/components/CatalogueItem/catalogueItem';

export default function Home() {
    return <main className={styles.main}></main>;
}
