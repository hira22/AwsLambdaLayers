import https from 'https'
const SLACK_HOST_NAME: string = 'hooks.slack.com'

export const notifySlack = (path: string, message: string) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      hostname: SLACK_HOST_NAME,
      path,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const request = https.request(options, (response) => resolve(response.statusCode))
    request.on('error', (error) => reject(error.message))

    request.write(JSON.stringify({ text: message }))
    request.end()
  })
}
