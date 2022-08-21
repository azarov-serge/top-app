import React, { FC } from 'react';
import cn from 'classnames';
import Logo from '../../assets/icons/logo.svg';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.types';
import styles from './Sidebar.module.css';

export const Sidebar: FC<SidebarProps> = (props): JSX.Element => {
	const { className, ...restProps } = props;
	return (
		<div className={cn(className, styles.sidebar)} {...restProps}>
			<Logo className={styles.logo} />
			<Menu />
		</div>
	);
};
