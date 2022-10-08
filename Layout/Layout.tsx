import React, { FC, useState, KeyboardEvent, useRef } from 'react';
import cn from 'classnames';
import { UpButton } from '../ui-kit/UpButton/UpButton';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.css';

export const Layout: FC<LayoutProps> = (props): JSX.Element => {
	const { children } = props;
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
		useState<boolean>(false);
	const bodyRef = useRef<HTMLDivElement>(null);

	const skipContentAction = (key: KeyboardEvent) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			bodyRef.current?.focus();
		}
		setIsSkipLinkDisplayed(false);
	};

	return (
		<div className={styles.wrapper}>
			<a
				onFocus={() => setIsSkipLinkDisplayed(true)}
				tabIndex={1}
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplayed,
				})}
				onKeyDown={skipContentAction}
			>
				Сразу к содержанию
			</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main ref={bodyRef} className={styles.body} tabIndex={0} role="main">
				{children}
			</main>
			<Footer className={styles.footer} />
			<UpButton />
		</div>
	);
};
