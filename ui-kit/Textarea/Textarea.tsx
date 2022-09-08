import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { TextareaProps } from './Textarea.types';
import styles from './Textarea.module.css';

export const Textarea = forwardRef(
	(
		props: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		const { error, className, ...restProps } = props;
		return (
			<div className={cn(styles.textareaWrapper, className)}>
				<textarea
					className={cn(styles.textarea, {
						[styles.error]: error,
					})}
					ref={ref}
					{...restProps}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);
