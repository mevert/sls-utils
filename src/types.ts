export interface JsonBody {
  [key: string]: any
}

export interface HTTPFailure {
  statusCode?: number
  message: string
  name?: string
}

export interface UpdateExpressions {
  UpdateExpression: string
  ExpressionAttributeValues: ExpressionAttributeValuesInterface
  ExpressionAttributeNames: ExpressionAttributeNamesInterface
}

/**
 * Map containing values of properties e.g { ':name': name } where name is the value.
 */
export interface ExpressionAttributeValuesInterface {
  [key: string]: any
}
/**
 * Mappings of attribute names. e.g { '#name': 'name' }
 */
export interface ExpressionAttributeNamesInterface {
  [key: string]: string
}

export interface PathParameters {
  [key: string]: string
}

export interface CreateEventMock {
  pathParameters?: PathParameters
  body?: JsonBody
  sub?: string
}
