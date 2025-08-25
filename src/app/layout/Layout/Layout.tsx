import styles from './Layout.module.css';
import { Outlet } from 'react-router';
import { Chat } from '@/widgets/ai/chat/ui/Chat';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['left-panel']}>aside</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
			<Chat />
		</div>
	);
}