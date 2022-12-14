import React, { FC } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import ArrowIcon from '../../assets/icons/arrow.svg';
import { ButtonProps } from './Button.types';

import styles from './Button.module.css';

export const Button: FC<ButtonProps> = (props): JSX.Element => {
	const {
		kind = 'primary',
		arrow = 'none',
		children,
		className,
		...restProps
	} = props;

	const buttonClassName = cn(styles.button, styles[kind], className);
	const arrowClassName = cn(styles.arrow, { [styles.down]: arrow === 'down' });

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			className={buttonClassName}
			{...restProps}
		>
			{children}
			{arrow != 'none' && (
				<span className={arrowClassName}>
					<ArrowIcon />
				</span>
			)}
		</motion.button>
	);
};
