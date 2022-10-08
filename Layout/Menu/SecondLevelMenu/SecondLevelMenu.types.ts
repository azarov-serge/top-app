import { IFirstLevelMenuItem } from '../../../interfaces/menu.interface';
import {FirstLevelMenuProps} from '../FirstLevelMenu/FirstLevelMenu.types';

export interface SecondLevelMenuProps extends FirstLevelMenuProps {
	menuItem: IFirstLevelMenuItem;
	
}
