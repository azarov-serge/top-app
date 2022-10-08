import React, { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { ThirdLevelMenuProps } from './ThirdLevelMenu.types';

import styles from './ThirdLevelMenu.module.css';
import { useRouter } from 'next/router';

export const ThirdLevelMenu: FC<ThirdLevelMenuProps> = (props): JSX.Element => {
	const { pages, route, menuIsOpened } = props;
	const router = useRouter();
	const variants = {
		visible: {
			opacity: 1,
			height: 'auto',
		},
		hidden: {
			opacity: 0,
			height: 0,
		},
	};

	return (
		<>
			{pages.map((page) => (
				<motion.ul key={`third-level-${page._id}}`} variants={variants}>
					<Link href={`/${route}/${page.alias}`}>
						<a
							tabIndex={menuIsOpened ? 0 : -1}
							className={cn(styles.thirdLevelMenu, {
								[styles.thirdLevelMenuActive]:
									`/${route}/${page.alias}` === router.asPath,
							})}
							aria-current={
								`/${route}/${page.alias}` == router.asPath ? 'page' : false
							}
						>
							{page.category}
						</a>
					</Link>
				</motion.ul>
			))}
		</>
	);
};
