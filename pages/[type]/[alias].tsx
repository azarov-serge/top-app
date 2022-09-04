import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { withLayout } from '../../hocs/withLayout';
import { IMenuItem } from '../../interfaces/menu.interface';
import {
	ITopPageModel,
	TopLevelCategory,
} from '../../interfaces/toppage.interface';
import { IProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';

interface TopPageProps extends Record<string, unknown> {
	firstCategory: TopLevelCategory;
	menu: IMenuItem[];
	page: ITopPageModel;
	products: IProductModel[];
}

const TopPage: FC<TopPageProps> = (props): JSX.Element => {
	const { products } = props;

	return <>{products && products.length}</>;
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
	let paths: string[] = [];
	for (const itemMenu of firstLevelMenu) {
		const { data: menu } = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{
				firstCategory: itemMenu.id,
			}
		);

		paths = paths.concat(
			menu.flatMap((item) =>
				item.pages.map((page) => `/${itemMenu.route}/${page.alias}`)
			)
		);
	}

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async (
	args: GetStaticPropsContext<ParsedUrlQuery>
) => {
	const { params } = args;

	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstCategoryItem = firstLevelMenu.find(
		(item) => item.route === params.type
	);


	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu } = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{
				firstCategory: firstCategoryItem.id,
			}
		);
	
		const { data: page } = await axios.get<ITopPageModel>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
		);
	
		const { data: products } = await axios.post<IProductModel[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
			{
				category: page.category,
				limit: 10,
			}
		);
		
		return {
			props: {
				firstCategory: firstCategoryItem.id,
				menu,
				page,
				products,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
