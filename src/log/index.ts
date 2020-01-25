/* eslint-disable no-console */

const log = (level: string, message: string) => {
  if (process.env.LOGGING === 'true') {
    switch (level) {
      case 'info':
        console.info(message)
        break
      case 'error':
        console.error(message)
        break
      case 'warn':
        console.warn(message)
        break
      default:
        console.log(message)
        break
    }
  }
}

export default log
