import React, { FC, useState } from 'react';
import { HeaderProps } from './Header.types';
import cn from 'classnames';
import styles from './Header.module.css';
import Logo from '../../assets/icons/logo.svg';
import { Sidebar } from '../Sidebar/Sidebar';

export const Header: FC<HeaderProps> = (props): JSX.Element => {
	const { className, ...restProps } = props;
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const headerClassName = cn(className, styles.header);


	return (
		<header className={headerClassName} {...restProps}>
			<Logo />
			<button
				onClick={() => setIsOpened(true)}
			>Open</button>
			<div
				className={styles.mobileMenu}
			>
				<Sidebar />
				<button
					className={styles.menuClose}
					onClick={() => setIsOpened(false)}
				>Close</button>
			</div>
		</header>
	);
};
