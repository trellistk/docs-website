module.exports.index = async (event, context) => {
  console.log('***** hello world')
  return {
    statusCode: 200,
    headers: {
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'Content-Security-Policy': 'default-src "self"',
      'X-Frame-Options': 'deny',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'origin-when-cross-origin',
      'Cache-Control': 'no-store',
      'Clear-Site-Data': '*'
    },
    body: 'hello'
  }
}
