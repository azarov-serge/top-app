import React, { FC } from 'react';
import { FirstLevelMenu } from './FirstLevelMenu/FirstLevelMenu';

export const Menu: FC = (): JSX.Element => {
	return (
		<nav role="navigation">
			<FirstLevelMenu />
		</nav>
	);
};
