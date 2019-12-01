import { createUpdateExpressions } from './updateExpressions'

describe('Create DynamoDB update expressions for an item', () => {
  test('Create update expression', () => {
    const updatedItem = {
        name: 'test1',
        description: 'asdasd',
        price: 1570
      }
    const updateExpressions = createUpdateExpressions(updatedItem)
    const expected = {
      UpdateExpression: 'SET #name = :name, #description = :description, #price = :price',
      ExpressionAttributeValues: {
        ':name': 'test1',
        ':description': 'asdasd',
        ':price': 1570
      },
      ExpressionAttributeNames: {
        '#name': 'name',
        '#description': 'description',
        '#price': 'price'
      }
    }
    expect(updateExpressions).toEqual(expected)
  })
})