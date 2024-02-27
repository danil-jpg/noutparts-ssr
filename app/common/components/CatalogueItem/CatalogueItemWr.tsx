'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ICatalogueItemRes } from '../../types/types';
import CatalogueItem from './CatalogueItem';
import { getCatalogueItemData } from '@/app/lib/data';
import Loading from '../Loading/Loading';

let matricesR: any, batteriesR, hddsR, keyboardsR, ramsR, powersR;

const CatalogueItemWr: NextPage = () => {
    const [loaded, setIsLoaded] = useState<boolean>(false);
    const [matrices, setMatrices] = useState<ICatalogueItemRes>();
    const [batteries, setBatteries] = useState<ICatalogueItemRes>();
    const [hdds, setHdds] = useState<ICatalogueItemRes>();
    const [keyboard, setKeyboard] = useState<ICatalogueItemRes>();
    const [rams, setRams] = useState<ICatalogueItemRes>();
    const [power, setPower] = useState<ICatalogueItemRes>();

    useEffect(() => {
        const getData = async () => {
            const matricesPr = await getCatalogueItemData('matrices?fields[0]=brand');
            const batteriesPr = getCatalogueItemData('batteries?fields[0]=brand');
            const hddsPr = getCatalogueItemData('hdds?fields[0]=brand');
            const keyboardsPr = getCatalogueItemData('keyboards?fields[0]=brand');
            const ramsPr = getCatalogueItemData('rams?fields[0]=brand');
            const powerPr = getCatalogueItemData('power-Supplies?fields[0]=brand');

            [matricesR, batteriesR, hddsR, keyboardsR, ramsR, powersR] = await Promise.all([matricesPr, batteriesPr, hddsPr, keyboardsPr, ramsPr, powerPr]);

            setMatrices(matricesR);
            setBatteries(batteriesR);
            setHdds(hddsR);
            setKeyboard(keyboardsR);
            setRams(ramsR);
            setPower(powersR);

            setIsLoaded(true);
        };

        getData();
    }, []);

    if (!loaded) {
        return <Loading />;
    }
    return (
        <>
            <CatalogueItem res={matrices} text='Матрицы' image='/img/catalogue/matrix.webp' query='matrices?fields[0]=brand' />
            <CatalogueItem res={batteries} text='Аккумуляторы' image='/img/catalogue/battery.webp' query='batteries?fields[0]=brand' />
            <CatalogueItem res={hdds} text='Жесткие диски' image='/img/catalogue/hdd.webp' query='hdds?fields[0]=brand' />
            <CatalogueItem res={keyboard} text='Клавиатуры' image='/img/catalogue/keyboard.webp' query='keyboards?fields[0]=brand' />
            <CatalogueItem res={rams} text='Оперативная память' image='/img/catalogue/ram.webp' query='rams?fields[0]=brand' />
            <CatalogueItem res={power} text='Блок питания' image='/img/catalogue/power.webp' query='power-Supplies?fields[0]=brand' />
        </>
    );
};

export default CatalogueItemWr;
