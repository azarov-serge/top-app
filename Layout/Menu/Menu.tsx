import React, { FC } from 'react';
import { MenuProps } from './Menu.types';
import styles from './Menu.module.css';

export const Menu: FC<MenuProps> = (): JSX.Element => {
	return (
		<nav className={styles.menu} role="navigation">
			Menu
		</nav>
	);
};
