import { Catalog } from '@/widgets/course';
import { UserInfo } from '@/widgets/user';

export function HomePage() {
	return (
		<div>
			<span>Главная</span>
			<UserInfo />
			<Catalog />
		</div>
		
	);
}
