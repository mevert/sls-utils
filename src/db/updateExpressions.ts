import { UpdateExpressions } from '../types'

/**
 * Create update expressions for DynamoDB update function parameters.
 * Note: delete primary and sort key from object before using this function. DynamoDB will not allow
 * modifying them.
 * @param item
 */
const createUpdateExpressions = (item: any): UpdateExpressions => {
  const properties = Object.keys(item)
  const ExpressionAttributeValues = 'ExpressionAttributeValues'
  const ExpressionAttributeNames = 'ExpressionAttributeNames'
  const UpdateExpressionArray: string[] = []
  const updateExpressions = properties.reduce(
    (expressions: any, property: string): any => {
      const value = item[property]

      UpdateExpressionArray.push(`#${property} = :${property}`)
      expressions[ExpressionAttributeValues] = {
        ...expressions[ExpressionAttributeValues],
        [`:${property}`]: value
      }
      expressions[ExpressionAttributeNames] = {
        ...expressions[ExpressionAttributeNames],
        [`#${property}`]: property
      }
      return expressions
  },
    {}
  )

  const UpdateExpression = `SET ${UpdateExpressionArray.join(', ')}`
  return {
    ...updateExpressions,
    UpdateExpression
  }
}

export {
  createUpdateExpressions
}