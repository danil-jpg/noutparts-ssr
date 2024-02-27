import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleCategoryClick = (router: AppRouterInstance, filter: string) => {
    const url = `/catalogue/filter-page/${filter}`;
    router.push(url);
};
