import { buildResponse } from './response'

const customBodyFailure = (statusCode: number, body: any) => (
  buildResponse(statusCode, body)
)

export default customBodyFailure