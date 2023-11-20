import { clsx } from 'clsx';
import Link from 'next/link';
import { Breadcrumb } from '../../types/types';

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        <nav aria-label='Breadcrumb' className=''>
            <ul className=''>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={breadcrumb.href}
                        aria-current={breadcrumb.active}
                        className={clsx(breadcrumb.active ? 'text-gray-900' : 'text-gray-500')}>
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                        {index < breadcrumbs.length - 1 ? <span className=''>/</span> : null}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
