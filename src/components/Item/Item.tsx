import clsx from 'clsx';
import React from 'react';

import { TItem } from '@/tools/constants';

export type TItemProps = {
    className?: string;
    item: TItem;
};

export const Item: React.FC<TItemProps> = ({ className, item }) => {
    const rootClasses = clsx('rfla-item', `rfla-item--${item.color}`, className);

    return <li className={rootClasses}>{item.name}</li>;
};
