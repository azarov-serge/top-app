import React, { ElementType, FC } from 'react';
import cn from 'classnames';
import { TitleProps } from './Title.types';

import styles from './Title.module.css';


export const Title: FC<TitleProps> = (props): JSX.Element => {
	const { level, children, className, ...restProps } = props;
	const Tag: ElementType = `h${level}`;
	const tagClassName = cn(styles[Tag], className);

	return (
		<Tag className={tagClassName} {...restProps}>
			{children}
		</Tag>
	);
};
