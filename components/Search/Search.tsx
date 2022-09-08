import React, { useState, KeyboardEvent, FC, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import SearchIcon from '../../assets/icons/magnifying-glass.svg';
import { Button, Input } from '../../ui-kit';
import { SearchProps } from './Search.types';
import styles from './Search.module.css';

export const Search: FC<SearchProps> = (props) => {
	const { className, ...restProps } = props;
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search,
			},
		});
	};

	const handleKeyDown = (evt: KeyboardEvent) => {
		if (evt.key == 'Enter') {
			goToSearch();
		}
	};

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) =>
		setSearch(evt.target.value);

	return (
		<div className={cn(className, styles.search)} {...restProps}>
			<Input
				className={styles.input}
				placeholder="Поиск..."
				value={search}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<Button className={styles.button} onClick={goToSearch}>
				<SearchIcon />
			</Button>
		</div>
	);
};
