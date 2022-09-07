import React, { FC } from 'react';
import cn from 'classnames';
import SortIcon from '../../assets/icons/sort.svg';
import { SortEnum, SortProps } from './Sort.types';
import styles from './Sort.module.css';

export const Sort: FC<SortProps> = (props) => {
	const { sort, setSort, className, ...restProps } = props;

	return (
		<div className={cn(styles.sort, className)} {...restProps}>
			<div className={styles.sortName} id="sort">
				Сортировка
			</div>
			<button
				id="rating"
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort === SortEnum.Rating,
				})}
				aria-selected={sort === SortEnum.Rating}
				aria-labelledby="sort rating"
			>
				<SortIcon className={styles.sortIcon} />
				По рейтингу
			</button>
			<button
				id="price"
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort === SortEnum.Price,
				})}
				aria-selected={sort === SortEnum.Price}
				aria-labelledby="sort price"
			>
				<SortIcon className={styles.sortIcon} />
				По цене
			</button>
		</div>
	);
};
