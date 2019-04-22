
interface IJSON {
  [key: string]: any
}

interface HTTPFailure {
  statusCode?: number
  message: string
  name?: string
}

export {
  IJSON,
  HTTPFailure
}