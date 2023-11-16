import { getUsersUrl } from "@/config/api.config"
import { request } from "./api/request.api"
import { IUser } from "@/shared/types/user.interface"
import { IAuthFormData } from "@/shared/types/auth.interface"

export const UserService = {
  async getAll(searchTerm?: string) {
		return request<IUser[]>({
			url: getUsersUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

  async getProfile() {
		return request<IUser>({
			url: getUsersUrl('/profile'),
			method: 'GET',
		})
	},

  // async getFavorites() {
	// 	return request<IMovie[]>({
	// 		url: getUsersUrl('/profile/favorites'),
	// 		method: 'GET',
	// 	})
	// },

  /*Toggle favourites*/

  async getById(_id: string) {
		return request<IUser>({
			url: getUsersUrl(`/${_id}`),
			method: 'GET',
	  })
  },

  async updateProfile(data: IAuthFormData) {
		return request<IUser>({
			url: getUsersUrl('/profile'),
			method: 'PUT',
      data
	  })
  },

  async update(_id: string, data: IAuthFormData) {
		return request<string>({
			url: getUsersUrl(`/${_id}`),
			method: 'PUT',
      data
	  })
  },

  async deleteUser(_id: string) {
		return request<string>({
			url: getUsersUrl(`/${_id}`),
			method: 'DELETE',
	  })
  },
}