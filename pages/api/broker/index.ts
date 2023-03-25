import { Broker, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { create, getBroker, getBrokerByUser } from 'services/broker'

const Broker = async (
  req: NextApiRequest,
  res: NextApiResponse<Broker | Broker[] | null>
) => {
  let broker = null
    if (req.method === 'POST') {
      const broker: Prisma.BrokerCreateInput = { ...req.body }

      const savedBroker = await create(broker)

      return res.send(savedBroker)
    }

    if(req.query.userId) {
      broker = await getBrokerByUser(String(req.query.userId))
    } else {
      broker = await getBroker()
    }


    //@ts-ignore
    return res.send(broker)
}

export default Broker
