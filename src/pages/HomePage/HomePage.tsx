import clsx from 'clsx';
import React from 'react';

import { List } from '@/components/List/List';
import { items } from '@/tools/constants';

export type THomePageProps = {
    className?: string;
};

const HomePage: React.FC<THomePageProps> = ({ className }) => {
    const rootClasses = clsx('rfla-home-page', className);

    return (
        <div className={rootClasses}>
            <h1>React Fruit List App</h1>
            <List items={items} />
        </div>
    );
};

export default HomePage;
