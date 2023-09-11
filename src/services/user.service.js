import { httpService } from './http.service'
// import Cookies from 'js-cookie';

export async function signup(userCred) {
    try {
        const { token } = await httpService.post('auth/signup', userCred)
        return Promise.resolve(token)
    } catch (error) {
        console.log('error:', error)
        throw error
    }
}

export async function signin(userCred) {
    try {
        const { token } = await httpService.post('auth/signin', userCred)
        return Promise.resolve(token)
    } catch (error) {
        throw error
    }
}

