import { JsonBody } from '../types'
import { buildResponse } from './response'

const accepted = (body: JsonBody) => buildResponse(202, body)

export default accepted
