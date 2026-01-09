export async function POST(request) {
  try {
    const data = await request.json()

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'https://afxv17.app.n8n.cloud/webhook/b81d43aa-baca-4047-8608-d1241068c5b2'

    console.log('Sending to webhook:', webhookUrl)
    console.log('Data:', data)

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseText = await response.text()
    console.log('N8N Response Status:', response.status)
    console.log('N8N Response:', responseText)

    if (response.ok) {
      return Response.json({ success: true })
    } else {
      return Response.json({
        success: false,
        error: 'Webhook failed',
        status: response.status,
        details: responseText
      }, { status: 500 })
    }
  } catch (error) {
    console.error('API route error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
