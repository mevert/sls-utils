
const createUpdateExpressions = (item: any) => {
  const properties = Object.keys(item)
  const ExpressionAttributeValues = 'ExpressionAttributeValues'
  const ExpressionAttributeNames = 'ExpressionAttributeNames'
  const UpdateExpressionArray: string[] = []
  const updateExpressions = properties.reduce(
    (expressions: any, property: any): any => {
      const value: string | number = item[property]

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