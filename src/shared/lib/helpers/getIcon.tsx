import AvatarIcon from '@/shared/assets/icons/avatar.svg';
import Transmission from '@/shared/assets/icons/car.svg';
import GasStation from '@/shared/assets/icons/gas-station.svg';
import LikeIconBlack from '@/shared/assets/icons/like-black.svg';
import LikeIcon from '@/shared/assets/icons/like.svg';
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg';
import Capacity from '@/shared/assets/icons/profile-2user.svg';
import SearchIcon from '@/shared/assets/icons/search-icon.svg';
import SettingsIcon from '@/shared/assets/icons/settings-icon.svg';
import CloseIcon from '@/shared/assets/icons/close.svg';
import { ICONS } from '@/shared/lib/constants';

export const getIcon = (iconSymbol?: string) => {
	switch (iconSymbol) {
		case ICONS.GAS:
			return <GasStation />;

		case ICONS.TRANSMISSION:
			return <Transmission />;

		case ICONS.CAPACITY:
			return <Capacity />;

		case ICONS.SEARCH:
			return <SearchIcon />;

		case ICONS.LIKE:
			return <LikeIcon />;

		case ICONS.LIKE_BLACK:
			return <LikeIconBlack />;

		case ICONS.SETTINGS:
			return <SettingsIcon />;

		case ICONS.NOTIFICATION:
			return <NotificationIcon />;

		case ICONS.AVATAR:
			return <AvatarIcon />;
		case ICONS.CLOSE:
			return <CloseIcon />;

		default:
			return null;
	}
};
