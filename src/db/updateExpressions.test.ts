import { createUpdateExpressions } from './updateExpressions'

describe('Create DynamoDB update expressions for an item', () => {
  test('Create update expressions with valid values', () => {
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

  test('Create update expressions with some undefined values', () => {
    const updatedItem = {
      name: 'test1',
      description: 'asdasd',
      price: undefined
    }
    const updateExpressions = createUpdateExpressions(updatedItem)
    const expected = {
      UpdateExpression: 'SET #name = :name, #description = :description',
      ExpressionAttributeValues: {
        ':name': 'test1',
        ':description': 'asdasd'
      },
      ExpressionAttributeNames: {
        '#name': 'name',
        '#description': 'description'
      }
    }
    expect(updateExpressions).toEqual(expected)
  })
  /** Expected to include null values in return object, but skip undefined values. */
  test('Create update expressions with undefined and null values', () => {
    const updatedItem = {
      name: 'test1',
      description: null,
      price: undefined
    }

    const updateExpressions = createUpdateExpressions(updatedItem)
    const expected = {
      UpdateExpression: 'SET #name = :name, #description = :description',
      ExpressionAttributeValues: {
        ':name': 'test1',
        ':description': null
      },
      ExpressionAttributeNames: {
        '#name': 'name',
        '#description': 'description'
      }
    }
    expect(updateExpressions).toEqual(expected)
  })
})
