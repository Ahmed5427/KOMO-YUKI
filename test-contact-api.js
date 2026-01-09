/**
 * Test script for the /api/contact endpoint
 * This verifies that our API route is working correctly
 * Run with: node test-contact-api.js
 */

const testData = {
  name: "Test User",
  email: "test@example.com",
  company: "Test Company Ltd",
  message: "This is a test submission from the API test script",
  enquiryType: "Landlord & Property Enquiries"
}

async function testContactAPI() {
  console.log('🧪 Testing /api/contact endpoint...\n')
  console.log('Test Data:', JSON.stringify(testData, null, 2))
  console.log('\n---\n')

  try {
    // Test with localhost - adjust URL for production
    const apiUrl = process.env.TEST_URL || 'http://localhost:3000'
    const endpoint = `${apiUrl}/api/contact`

    console.log(`📡 Sending POST request to: ${endpoint}\n`)

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })

    console.log(`📊 Response Status: ${response.status} ${response.statusText}`)

    const result = await response.json()
    console.log('📦 Response Body:', JSON.stringify(result, null, 2))

    if (response.ok && result.success) {
      console.log('\n✅ Test PASSED: API route is working correctly')
      console.log('   The issue is likely with N8N webhook configuration')
    } else {
      console.log('\n❌ Test FAILED: API returned an error')
      console.log('   Check the response details above for more information')
    }
  } catch (error) {
    console.error('\n❌ Test FAILED with exception:', error.message)
    console.error('   Make sure the development server is running (npm run dev)')
  }
}

// Check if running in Node.js environment
if (typeof fetch === 'undefined') {
  console.log('⚠️  This script requires Node.js 18+ or you need to install node-fetch')
  console.log('   Alternatively, test via browser console or use curl\n')

  // Provide curl alternative
  console.log('🔧 Use this curl command instead:\n')
  console.log(`curl -X POST http://localhost:3000/api/contact \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(testData)}'`)
} else {
  testContactAPI()
}
