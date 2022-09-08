import React, { FC } from 'react';
import cn from 'classnames';
import { DividerProps } from './Divider.types';
import styles from './Divider.module.css';

export const Divider: FC<DividerProps> = (props) => {
	const { className, ...restProps } = props;
	return <hr className={cn(className, styles.hr)} {...restProps} />;
};
