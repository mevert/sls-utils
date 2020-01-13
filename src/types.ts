
interface IJSON {
  [key: string]: any
}

interface HTTPFailure {
  statusCode?: number
  message: string
  name?: string
}

interface UpdateExpressions {
  UpdateExpression: string
  ExpressionAttributeValues: ExpressionAttributeValuesInterface
  ExpressionAttributeNames: ExpressionAttributeNamesInterface
}

/**
 * Map containing values of properties e.g { ':name': name } where name is the value.
 */
interface ExpressionAttributeValuesInterface {
  [key: string]: any
}
/**
 * Mappings of attribute names. e.g { '#name': 'name' }
 */
interface ExpressionAttributeNamesInterface {
 [key: string]: string
}

export {
  IJSON,
  HTTPFailure,
  UpdateExpressions
}