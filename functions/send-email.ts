const handler = async (_event: any, _context: any, callback: any) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
    }),
  })
}

export default handler
