export async function POST(request) {
  try {
    const data = await request.json()

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'https://afxv17.app.n8n.cloud/webhook/b81d43aa-baca-4047-8608-d1241068c5b2'

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      return Response.json({ success: true })
    } else {
      return Response.json({ success: false, error: 'Webhook failed' }, { status: 500 })
    }
  } catch (error) {
    console.error('API route error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
