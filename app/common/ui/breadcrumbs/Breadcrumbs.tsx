import { clsx } from 'clsx';
import Link from 'next/link';
import { Breadcrumb } from '../../types/types';
import { v1 } from 'uuid';
import IconRenderer from '../Icons/IconRenderer';
import './Breadcrumbs.scss';

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        <nav aria-label='Breadcrumb' className=''>
            <ul className='breadcrumbs__ul'>
                <li key={v1()} className='breadcrumbs__li'>
                    <Link href={'/'}>
                        <IconRenderer id='home-icon' />
                        <span className='breadcrumbs__separator'>/</span>
                    </Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={breadcrumb.href}
                        aria-current={breadcrumb.active}
                        className={clsx(
                            'breadcrumbs__li',
                            breadcrumb.active ? 'breadcrumbs__li_active' : ''
                        )}>
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                        {index < breadcrumbs.length - 1 ? (
                            <span className='breadcrumbs__separator'>/</span>
                        ) : null}
                    </li>
                ))}
            </ul>
        </nav>
    );
}