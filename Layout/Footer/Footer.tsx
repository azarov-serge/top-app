import { FooterProps } from './Footer.types';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	const footerClassName = cn(className, styles.footer);

	return (
		<footer className={footerClassName} {...props}>
			<div>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};
