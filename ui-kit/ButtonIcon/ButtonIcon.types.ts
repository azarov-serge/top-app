import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from '../../assets/icons/up.svg';
import close from '../../assets/icons/close.svg';
import menu from '../../assets/icons/menu.svg';

export const icons = {
	up,
	close,
	menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: IconName;
	kind: 'primary' | 'white';
}
