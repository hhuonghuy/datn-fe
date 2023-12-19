import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import React from 'react';

export const LayoutDefault = ({ children }) => {
	return (
		<div className="">
			<HeaderComponent />
			{children}
			<FooterComponent />
		</div>
	);
};
