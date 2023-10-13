import clsx from 'clsx';
import React from 'react';

import { Item } from '@/components/Item/Item';
import { TItem } from '@/tools/constants';

export type TListProps = {
    className?: string;
    items: TItem[];
};

export const List: React.FC<TListProps> = ({ className, items }) => {
    const rootClasses = clsx('rfla-list', className);

    return (
        <ul className={rootClasses}>
            {items.map((item) => (
                <Item key={item.name} item={item} />
            ))}
        </ul>
    );
};
