import React, { FC, KeyboardEvent, useContext } from 'react';
import { useRouter } from 'next/router';
import { motion, useReducedMotion } from 'framer-motion';
import cn from 'classnames';
import { ThirdLevelMenu } from '../ThirdLevelMenu/ThirdLevelMenu';
import { SecondLevelMenuProps } from './SecondLevelMenu.types';

import styles from './SecondLevelMenu.module.css';
import { AppContext } from '../../../context/app.context';

export const SecondLevelMenu: FC<SecondLevelMenuProps> = (
	props
): JSX.Element => {
	const { menu, setMenu } = useContext(AppContext);
	const { menuItem, setAnnounce } = props;
	const router = useRouter();
	const currentPage = router.asPath.split('/')[2];
	const shouldReduceMotion = useReducedMotion();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: shouldReduceMotion
				? {}
				: {
						when: 'beforeChildren',
						staggerChildren: 0.1,
				},
		},
		hidden: { marginBottom: 0 },
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((item) => {
					if (item._id.secondCategory === secondCategory) {
						setAnnounce(item.isOpened ? 'closed' : 'opened');
						item.isOpened = !item.isOpened;
					}

					return item;
				})
			);
	};

	const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			openSecondLevel(secondCategory);
		}
	};

	return (
		<ul className={styles.secondBlock}>
			{menu.map((item) => {
				for (let index = 0; index < item.pages.length; index++) {
					const page = item.pages[index];
					if (page.alias === currentPage) {
						item.isOpened = true;

						break;
					}
				}

				return (
					<li key={item._id.secondCategory}>
						<button
							className={styles.secondLevelMenu}
							onKeyDown={(key: KeyboardEvent) =>
								openSecondLevelKey(key, item._id.secondCategory)
							}
							onClick={() => openSecondLevel(item._id.secondCategory)}
							aria-expanded={item.isOpened}
						>
							{item._id.secondCategory}
						</button>
						<motion.div
							layout={shouldReduceMotion ? false : true} 
							variants={variants}
							initial={item.isOpened ? 'visible' : 'hidden'}
							animate={item.isOpened ? 'visible' : 'hidden'}
							className={cn(styles.secondLevelMenuBlock, {
								[styles.secondLevelMenuBlockOpened]: item.isOpened,
							})}
						>
							{
								<ThirdLevelMenu
									pages={item.pages}
									route={menuItem.route}
									menuIsOpened={item.isOpened ?? false}
								/>
							}
						</motion.div>
					</li>
				);
			})}
		</ul>
	);
};
