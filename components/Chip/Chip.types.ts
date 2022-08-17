import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ChipProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	size?: 's' | 'm';
	href?: string;
	color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
}
