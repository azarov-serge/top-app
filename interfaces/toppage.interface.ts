export enum TopLevelCategory {
    COURCES,
    SERVICES,
    BOOKS,
    PRODUCTS,
}

export interface ITopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface IHhData {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface ITopPageModel {
	_id: string;
	tags: string[];
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages?: ITopPageAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	hh: IHhData;
}

