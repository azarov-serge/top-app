import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

import { withLayout } from '../../hocs/withLayout';
import { IMenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/toppage.interface';
import { firstLevelMenu } from '../../helpers/helpers';

interface TypePageProps extends Record<string, unknown> {
	firstCategory: TopLevelCategory;
	menu: IMenuItem[];
}

const TypePage: FC<TypePageProps> = (props): JSX.Element => {
	const { firstCategory } = props;

	return <>{TopLevelCategory[firstCategory]}</>;
};

export default withLayout(TypePage);

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
	return {
		paths: firstLevelMenu.map((item) => '/' + item.route),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TypePageProps> = async (
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

		return {
			props: {
				firstCategory: firstCategoryItem.id,
				menu,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
