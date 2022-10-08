import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
export interface ButtonProps
	extends Omit<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
	> {
	kind?: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
}
