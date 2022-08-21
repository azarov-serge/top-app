import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { withLayout } from '../../hoks/withLayout';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel } from '../../interfaces/toppage.interface';
import { IProductModel } from '../../interfaces/product.interface';

const firstCategory = 0;

interface CourceProps extends Record<string, unknown> {
	firstCategory: number;
	menu: IMenuItem[];
	page: ITopPageModel;
	products: IProductModel[];
}

const Course: FC<CourceProps> = (props): JSX.Element => {
	const { menu, page, products } = props;

	return <>{products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
	const { data: menu } = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	);
	return {
		paths: menu.flatMap((item) =>
			item.pages.map((page) => '/courses/' + page.alias)
		),
		fallback: true,
	};
};
export const getStaticProps: GetStaticProps<CourceProps> = async (
	args: GetStaticPropsContext<ParsedUrlQuery>
) => {
    const { params } = args;
    
	if (!params) {
        return {
            notFound: true,
		};
	}
    
	const { data: menu } = await axios.post<IMenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
            firstCategory,
		}
        );
        console.log('++++ params', menu)

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
			firstCategory,
			menu,
			page,
			products,
		},
	};
};
