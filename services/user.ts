import {User, Prisma} from '@prisma/client'
import prisma from '../lib/prisma'

export const getUser = async() => {
    const user = prisma.user.findMany()

    return user
}

export const getUserById = async(id: string) => {
    const user = prisma.user.findFirst({
        where: {
            id
        }
    })

    return user
}

export const create = async(userData: Prisma.UserCreateInput):Promise<User | null> => {
    const savedUser = await prisma.user.create({
        data: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password
        }
    })

    if (savedUser)
        return savedUser

    return null
}