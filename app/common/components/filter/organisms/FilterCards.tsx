import { useAppSelector } from '@/app/Redux/store';
import { NextPage } from 'next';

interface Props {}

const FilterCards: NextPage<Props> = ({}) => {
    const selector = useAppSelector((state) => state.queryReducer.data.data);

    console.log(selector);

    return <div>hey it filter cards wr</div>;
};

export default FilterCards;
