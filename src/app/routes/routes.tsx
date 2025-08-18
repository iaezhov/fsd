import { createBrowserRouter } from 'react-router';
import { HomePage } from '../../pages';
import { Layout } from '../layout/Layout/Layout';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				Component: HomePage
			}
		]
	}
]);