import React, { FC } from 'react';
import Error from 'next/error';
import { withLayout } from '../hocs/withLayout';

const Error500: FC = (): JSX.Element => {
	return <Error statusCode={500} />;
};

export default withLayout(Error500);
