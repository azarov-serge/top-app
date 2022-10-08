import React from 'react';
import cn from 'classnames';
import { ButtonIconProps, icons } from './ButtonIcon.types';
import styles from './ButtonIcon.module.css';

export const ButtonIcon = (props: ButtonIconProps): JSX.Element => {
	const { kind, icon, className, ...restProps } = props;
	const IconComp = icons[icon];
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: kind === 'primary',
				[styles.white]: kind === 'white',
			})}
			{...restProps}
		>
			<IconComp />
		</button>
	);
};
