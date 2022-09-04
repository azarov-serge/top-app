import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { ThirdLevelMenu } from '../ThirdLevelMenu/ThirdLevelMenu';
import { SecondLevelMenuProps } from './SecondLevelMenu.types';

import styles from './SecondLevelMenu.module.css';
import { AppContext } from '../../../context/app.context';

export const SecondLevelMenu: FC<SecondLevelMenuProps> = (
	props
): JSX.Element => {
	const { menu, setMenu } = useContext(AppContext);
	const { menuItem } = props;
	const router = useRouter();
	const currentPage = router.asPath.split('/')[2];

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((item) => {
					if (item._id.secondCategory === secondCategory) {
						item.isOpened = true;
					} else {
						item.isOpened = false;
					}

					return item;
				})
			);
	};

	return (
		<div className={styles.secondBlock}>
			{menu.map((item) => {
				for (let index = 0; index < item.pages.length; index++) {
					const page = item.pages[index];
					if (page.alias === currentPage) {
						item.isOpened = true;

						break;
					}
				}

				return (
					<div key={item._id.secondCategory}>
						<div
							className={styles.secondLevelMenu}
							onClick={() => openSecondLevel(item._id.secondCategory)}
						>
							{item._id.secondCategory}
						</div>
						<div
							className={cn(styles.secondLevelMenuBlock, {
								[styles.secondLevelMenuBlockOpened]: item.isOpened,
							})}
						>
							{<ThirdLevelMenu pages={item.pages} route={menuItem.route} />}
						</div>
					</div>
				);
			})}
		</div>
	);
};
