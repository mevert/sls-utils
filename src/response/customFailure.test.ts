import customFailure from './customFailure'

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*'
  }

describe('failure', () => {
  it('validation error', () => {
    const response = customFailure(
      500,
      {
        message: 'Product is being used. Could not delete it.',
        lists: ['list1', 'list2']
      }
    )
    expect(response).toEqual({
      body: '{"message":"Product is being used. Could not delete it.","lists":["list1","list2"]}',
      headers,
      statusCode: 500
    })
  })
})
