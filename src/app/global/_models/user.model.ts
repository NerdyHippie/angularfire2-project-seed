export interface User {
	email: String
	uid?: String
	$key?: String
	firstName?: String
	lastName?: String
	displayName?: String
	photoURL?: String
	provider?: String
	dateCreated?: String
	admin?: Boolean
	providers?: any
}
