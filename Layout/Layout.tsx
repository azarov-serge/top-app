import React, { FC, useState, KeyboardEvent, useRef } from 'react';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.css';

export const Layout: FC<LayoutProps> = (props): JSX.Element => {
	const { children } = props;

	return (
		<div className={styles.wrapper}>
			<a>Сразу к содержанию</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body} tabIndex={0} role='main'>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};
