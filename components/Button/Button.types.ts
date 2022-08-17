import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	kind?: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
}
