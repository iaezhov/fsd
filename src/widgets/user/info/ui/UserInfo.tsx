import { Activity, Avatar, Stat } from '@/entities/user';

export const UserInfo = () => (
	<div>
		<span>UserInfo</span>
		<div>
			<Avatar />
		</div>
		<div>
			<Activity />
		</div>
		<div>
			<Stat />
		</div>
	</div>
);