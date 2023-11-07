import Home from "@/components/screens/home/Home";
import { IRoute } from "./navigation.types";
import Auth from "@/components/screens/auth/Auth";
import { adminRoutes } from "./admin.routes";
import Favorites from "@/components/screens/favorites/Favorites";
import Profile from "@/components/screens/profile/Profile";
import Trending from "@/components/screens/trending/Trending";
import Search from "@/components/screens/search/Search";

export const userRoutes: IRoute[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Auth',
    component: Auth,
  },
  {
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Trending',
		component: Trending
	},
	{
		name: 'Search',
		component: Search
  }
]

export const routes = [
  ...userRoutes,
  ...adminRoutes
]