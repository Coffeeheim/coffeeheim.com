async function processReq() {
  await new Promise((r) => setTimeout(r, 2000))

  try {
    await fetch('https://api.coffeeheim.com/permittedlist', {
      method: 'POST',
      body: JSON.stringify({ streamid64: 'example' }),
    })
  } catch (err) {
    console.error('Error fetching data:', err)
  }
}

export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  processReq()

  return new Response(JSON.stringify({}), { status: 202 })
}
