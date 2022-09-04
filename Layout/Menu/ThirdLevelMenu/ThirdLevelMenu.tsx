import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { ThirdLevelMenuProps } from './ThirdLevelMenu.types';

import styles from './ThirdLevelMenu.module.css';
import {useRouter} from 'next/router';

export const ThirdLevelMenu: FC<ThirdLevelMenuProps> = (props): JSX.Element => {
	const { pages, route } = props;
	const router = useRouter();

	return (
		<>
			{pages.map((page) => (
				<Link
					key={`third-level-${page._id}}`}
					href={`/${route}/${page.alias}`}
				>
					<span
						className={cn(styles.thirdLevelMenu, {
							[styles.thirdLevelMenuActive]: `/${route}/${page.alias}` === router.asPath,
						})}
					>
						{page.category}
					</span>
				</Link>
			))}
		</>
	);
};
