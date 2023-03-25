import { Broker, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getBrokerById, remove, update } from 'services/broker'

type BrokerData = {
  id?: string
  data?: Broker | null
  success: boolean
}

const Broker = async (
  req: NextApiRequest,
  res: NextApiResponse<Broker | BrokerData | null>
) => {
  const brokerId = String(req.query.brokerId)
  if (req.method === 'PATCH') {
    const brokerData: Prisma.BrokerUpdateInput = { ...req.body }

    const brokerItem = await getBrokerById(brokerId)

    if (brokerItem) {
      const savedBroker = await update(brokerId, brokerData)

      return res.send({ data: savedBroker, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const brokerItem = await getBrokerById(brokerId)

    if (brokerItem) {
      await remove(brokerId)

      return res.send({ id: brokerId, success: true })
    }
    return res.send({ success: false })
  }

  const broker = await getBrokerById(brokerId)

  //@ts-ignore
  return res.send(broker)
}

export default Broker
