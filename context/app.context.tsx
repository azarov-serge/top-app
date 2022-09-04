import React, { createContext, PropsWithChildren, useState } from 'react';
import { IMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/toppage.interface';

export interface IAppContext {
	menu: IMenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (menu: IMenuItem[]) => void;
}

const initialAppContext = {
	menu: [],
	firstCategory: TopLevelCategory.COURCES,
};

export const AppContext = createContext<IAppContext>(initialAppContext);

export const AppContextProvider = (props: PropsWithChildren<IAppContext>): JSX.Element => {
	const { menu, firstCategory, children } = props;
	const [menuState, setMenuState] = useState<IMenuItem[]>(menu);
	const setMenu = (newMenu: IMenuItem[]) => {
		setMenuState(newMenu);
	};

	const value = { menu: menuState, firstCategory, setMenu };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
