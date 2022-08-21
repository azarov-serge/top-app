import React, { FC } from 'react';
import { Layout } from '../Layout';

export const withLayout = <T extends Record<string, unknown>>(
	Component: FC<T>
) => {
	const WithLayoutComponent = (props: T): JSX.Element => {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};

	return WithLayoutComponent;
};
