import Car from '../assets/icons/car.svg';
import GasStation from '../assets/icons/gas-station.svg';
import LikeIconBlack from '../assets/icons/like-black.svg';
import LikeIcon from '../assets/icons/like.svg';
import NotificationIcon from '../assets/icons/notification-icon.svg';
import ProfileIcon from '../assets/icons/profile-2user.svg';
import SearchIcon from '../assets/icons/search-icon.svg';
import SettingsIcon from '../assets/icons/settings-icon.svg';
import { ICONS } from './constants';

export const getIcon = (iconSymbol?: string) => {
	switch (iconSymbol) {
		case ICONS.GAS:
			return <GasStation />;

		case ICONS.CAR:
			return <Car />;

		case ICONS.PROFILE:
			return <ProfileIcon />;

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

		default:
			return null;
	}
};
