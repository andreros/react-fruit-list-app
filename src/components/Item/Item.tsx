import clsx from 'clsx';
import React, { useState } from 'react';

import { TItem } from '@/tools/constants';

export type TItemProps = {
    className?: string;
    item: TItem;
    onSelect: (item: TItem, isSelected: boolean) => void;
};

export const Item: React.FC<TItemProps> = ({ className, item, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false);

    // left intentionally for debugging purposes
    console.info('Item isSelected: ', item.name, isSelected);

    // 4. Currently selected items should be visually highlighted.
    const rootClasses = clsx('rfla-item', `rfla-item--${item.color}`, { 'rfla-is-selected': isSelected }, className);

    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        // 1. Clicking an item selects/unselects it.
        const nextSelected = !isSelected;
        setIsSelected(nextSelected);
        // 2. Multiple items can be selected at a time.
        onSelect(item, nextSelected);
    };

    return (
        <li className={rootClasses} onClick={handleClick}>
            {item.name}
        </li>
    );
};
