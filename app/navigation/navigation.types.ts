import { ComponentType } from 'react'

export type TypeRootStackParamList = {
  Auth: undefined
  Home: undefined
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
  Admin: undefined
}

export interface IRoute {
	name: string
	component: ComponentType
	isAdmin?: boolean
} 