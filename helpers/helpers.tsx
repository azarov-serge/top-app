import { IFirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/toppage.interface';
import CoursesIcon from '../assets/icons/graduation-hat.svg';
import ServicesIcon from '../assets/icons/cloud-computing.svg';
import BooksIcon from '../assets/icons/open-book.svg';
import ProductsIcon from '../assets/icons/box.svg';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon />,
		id: TopLevelCategory.COURCES,
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.SERVICES,
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: TopLevelCategory.BOOKS,
	},
	{
		route: 'products',
		name: 'Продукты',
		icon: <ProductsIcon />,
		id: TopLevelCategory.PRODUCTS,
	},
];

export const priceRu = (price: number): string =>
	price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' ₽');

export const declOfNum = (
	number: number,
	titles: [string, string, string]
): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
};
