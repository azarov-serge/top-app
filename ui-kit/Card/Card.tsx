import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { CardProps } from './Card.types';
import styles from './Card.module.css';

export const Card = forwardRef(
	(props: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
		const { color = 'white', children, className, ...restProps } = props;

		return (
			<div
				className={cn(styles.card, className, {
					[styles.blue]: color === 'blue',
				})}
				ref={ref}
				{...restProps}
			>
				{children}
			</div>
		);
	}
);
