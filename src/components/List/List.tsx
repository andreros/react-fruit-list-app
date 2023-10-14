import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

import { Item } from '@/components/Item/Item';
import { TItem } from '@/tools/constants';

export type TListProps = {
    className?: string;
    items: TItem[];
};

export const List: React.FC<TListProps> = ({ className, items }) => {
    const [selected, setSelected] = useState('');
    const selectedItems: string[] = [];

    const rootClasses = clsx('rfla-list', className);

    // 2. Multiple items can be selected at a time.
    const onItemSelected = (item: TItem, isSelected: boolean) => {
        if (isSelected) {
            selectedItems.push(item.name);
            // left intentionally for debugging purposes
            console.info('Selected items: ', selectedItems);
        } else {
            // left intentionally for debugging purposes
            console.info('Selected items: ', selectedItems);
        }
        // 5. Currently selected items' names should be shown at the top of the page.
        let selected = '';
        selectedItems.forEach((selectedItem) => (selected += `${selectedItem}, `));
        setSelected(selected.substring(0, selected.length - 2));
    };

    const getItem = (item: TItem): JSX.Element => {
        // 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
        return useMemo(() => <Item key={item.name} item={item} onSelect={onItemSelected} />, [item]);
    };

    return (
        <div className={rootClasses}>
            {/** 5. Currently selected items' names should be shown at the top of the page. */}
            <h2 className="rfla-list__selected-items">{selected}</h2>
            <ul className="rfla-list__list-container">{items.map((item) => getItem(item))}</ul>
        </div>
    );
};
