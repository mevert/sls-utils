import { buildResponse } from './response'
import { IJSON } from '../types'

const success = (body: IJSON) => buildResponse(200, body)

export default success