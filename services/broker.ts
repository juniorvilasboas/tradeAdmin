import {Broker, Prisma} from '@prisma/client'
import prisma from '../lib/prisma'

export const getBroker = async() => {
    const broker = prisma.broker.findMany()

    return broker
}

export const getBrokerById = async(id: string) => {
    const broker = prisma.broker.findFirst({
        where: {
            id
        }
    })

    return broker
}

export const getBrokerByUser = async(userId: string) => {
    const broker = prisma.broker.findMany({
        where: {
            userId
        }
    })

    return broker
}

export const create = async (brokerData: Prisma.BrokerCreateInput):Promise<Broker> => {
    const savedBroker = await prisma.broker.create({
        data: {
            account: brokerData.account,
            name: brokerData.name,
            initialCapital: brokerData.initialCapital,
            currentCapital: brokerData.currentCapital,
            user: {
              //@ts-ignore
              connect: brokerData.user
            }
        }
    })

    return savedBroker

}

export const update = async (
    id: string,
    BrokerData: Prisma.BrokerUpdateInput
  ): Promise<Broker | null> => {
    const savedBroker = await prisma.broker.update({
      data: BrokerData,
      where: {
        id
      }
    })
  
    if (savedBroker) {
      return savedBroker
    }
    return null
  }
  
  export const remove = async (id: string): Promise<Broker | null> => {
    const savedBroker = await prisma.broker.delete({
      where: {
        id
      }
    })
    if (savedBroker) {
      return savedBroker
    }
    return null
  }