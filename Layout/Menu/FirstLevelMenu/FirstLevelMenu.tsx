import React, { FC, useContext } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { AppContext } from '../../../context/app.context';
import { SecondLevelMenu } from '../SecondLevelMenu/SecondLevelMenu';
import { firstLevelMenu } from '../../../helpers/helpers';

import styles from './FirstLevelMenu.module.css';

export const FirstLevelMenu: FC = (): JSX.Element => {
	const { firstCategory } = useContext(AppContext);

	return (
		<>
			{firstLevelMenu.map((item) => (
				<div key={item.route}>
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
						<SecondLevelMenu menuItem={item} />
					)}
				</div>
			))}
		</>
	);
};
