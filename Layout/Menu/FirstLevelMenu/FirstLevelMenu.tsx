import React, { FC, useContext } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { AppContext } from '../../../context/app.context';
import { SecondLevelMenu } from '../SecondLevelMenu/SecondLevelMenu';
import { firstLevelMenu } from '../../../helpers/helpers';
import type { FirstLevelMenuProps } from './FirstLevelMenu.types';

import styles from './FirstLevelMenu.module.css';

export const FirstLevelMenu: FC<FirstLevelMenuProps> = (props): JSX.Element => {
	const { setAnnounce } = props;
	const { firstCategory } = useContext(AppContext);

	return (
		<ul className={styles.firstLevelMenuList}>
			{firstLevelMenu.map((item) => (
				<li key={item.route} aria-expanded={item.id == firstCategory}>
					<Link href={`/${item.route}`}>
						<a>
							<div
								className={cn(styles.firstLevelMenu, {
									[styles.firstLevelMenuActive]: item.id === firstCategory,
								})}
							>
								{item.icon}
								<span>{item.name}</span>
							</div>
						</a>
					</Link>
					{item.id === firstCategory && (
						<SecondLevelMenu menuItem={item} setAnnounce={setAnnounce} />
					)}
				</li>
			))}
		</ul>
	);
};
