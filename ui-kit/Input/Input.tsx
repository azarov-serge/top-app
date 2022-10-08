import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { InputProps } from './Input.types';
import styles from './Input.module.css';

export const Input = forwardRef(
	(props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
		const { error, className, ...restProps } = props;
		return (
			<div className={cn(className, styles.inputWrapper)}>
				<input
					className={cn(styles.input, {
						[styles.error]: error,
					})}
					ref={ref}
					{...restProps}
				/>
				{error && (
					<span role="alert" className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
