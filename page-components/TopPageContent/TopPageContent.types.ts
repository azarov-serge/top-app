import {
	TopLevelCategory,
	ITopPageModel,
} from '../../interfaces/toppage.interface';
import { IProductModel } from '../../interfaces/product.interface';

export interface TopPageContentProps {
	firstCategory: TopLevelCategory;
	page: ITopPageModel;
	products: IProductModel[];
}
