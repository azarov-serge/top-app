import { IPageItem } from '../../../interfaces/menu.interface';

export interface ThirdLevelMenuProps {
	pages: IPageItem[];
	route: string;
	menuIsOpened: boolean;
}
