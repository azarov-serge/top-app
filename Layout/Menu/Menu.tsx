import React, { FC, useState } from 'react';
import { FirstLevelMenu } from './FirstLevelMenu/FirstLevelMenu';

export const Menu: FC = (): JSX.Element => {
	const [announce, setAnnounce] = useState<'opened' | 'closed'>();

	return (
		<nav role="navigation">
			{announce && (
				<span role="log" className="visualyHidden">
					{announce === 'opened' ? 'развернуто' : 'свернуто'}
				</span>
			)}
			<FirstLevelMenu setAnnounce={setAnnounce} />
		</nav>
	);
};
