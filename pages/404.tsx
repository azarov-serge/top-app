import React, { FC } from 'react';
import Error from 'next/error';
import { withLayout } from '../hocs/withLayout';

const Error404: FC = (): JSX.Element => {
	return <Error statusCode={404} />;
};

export default withLayout(Error404);
