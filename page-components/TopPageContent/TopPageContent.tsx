import React, { FC, useEffect, useReducer } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Chip, Title } from '../../ui-kit';
import { Advantages, HhData, Product, Sort } from '../../components';
import { SortEnum } from '../../components/Sort/Sort.types';
import { TopLevelCategory } from '../../interfaces/toppage.interface';
import { TopPageContentProps } from './TopPageContent.types';
import { sortReducer } from './reducers/sort.reducer';
import styles from './TopPageContent.module.css';

export const TopPageContent: FC<TopPageContentProps> = (props) => {
	const { page, products, firstCategory } = props;
	const shouldReduceMotion = useReducedMotion();
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
		sortReducer,
		{ products, sort: SortEnum.Rating }
	);

	useEffect(() => {
		dispathSort({ type: 'reset', initialState: products });
	}, [products]);

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Title level="1">{page.title}</Title>
				{products && (
					<Chip
						color="grey"
						size="m"
						aria-label={products.length + 'элементов'}
					>
						{products.length}
					</Chip>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>

			<div role="list">
				{sortedProducts &&
					sortedProducts.map((product) => (
						<Product
							role="listitem"
							layout={shouldReduceMotion ? false : true}
							key={product._id}
							product={product}
						/>
					))}
			</div>

			{firstCategory === TopLevelCategory.COURCES &&
				page.category &&
				page.category.length && (
					<section className={styles.hhTitle}>
						<Title level="2">Вакансии - {page.category}</Title>
						<Chip color="red" size="m">
							hh.ru
						</Chip>
						<HhData {...page.hh} />
					</section>
				)}

			{page.advantages && page.advantages.length > 0 && (
				<section>
					<Title level="2">Преимущства</Title>
					<Advantages items={page.advantages} />
				</section>
			)}

			{page.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			{page.tags && page.tags.length && (
				<section>
					<Title level="2">Получаемые навыки</Title>
					{page.tags.map((tag) => (
						<Chip key={tag} color="primary">
							{tag}
						</Chip>
					))}
				</section>
			)}
		</div>
	);
};
