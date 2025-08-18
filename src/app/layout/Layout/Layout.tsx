import styles from './Layout.module.css';
import { Outlet } from 'react-router';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['left-panel']}>aside</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}