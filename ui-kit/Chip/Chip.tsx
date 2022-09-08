import React, { FC } from 'react';
import cn from 'classnames';
import { ChipProps } from './Chip.types';

import styles from './Chip.module.css';

export const Chip: FC<ChipProps> = (props): JSX.Element => {
	const {
		size = 's',
		children,
		className,
		color = 'ghost',
		href,
		...restProps
	} = props;

	const chipClassName = cn(styles.chip, styles[size], styles[color], className);

	return (
		<div className={chipClassName} {...restProps}>
			{href ? <a href={href}></a> : <>{children}</>}
		</div>
	);
};
