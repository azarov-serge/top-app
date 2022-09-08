import React, { FC } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.types';

import styles from './Paragraph.module.css';

export const Paragraph: FC<ParagraphProps> = (props): JSX.Element => {
	const { size = 'm', children, className, ...restProps } = props;
	const paragraphClassName = cn(styles.paragraph, styles[size], className);

	return (
		<p className={paragraphClassName} {...restProps}>
			{children}
		</p>
	);
};
