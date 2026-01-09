# N8N Webhook Configuration Guide

## Current Status ✅

All code changes on the website are complete and working:
- ✅ Server-side API route created at `/app/api/contact/route.js`
- ✅ Contact form updated to use the API route
- ✅ Environment variable support added for webhook URL
- ✅ Detailed error logging implemented
- ✅ All changes committed and pushed to branch

## Issue 🔍

The N8N webhook is returning a 404 error:
```
{"code":404,"message":"This webhook is not registered for POST requests. Did you mean to make a GET request?"}
```

## Root Cause

The webhook hasn't been re-registered after changing the HTTP Method from GET to POST. Additionally, the Response Headers are incorrectly configured.

## Fix Required in N8N ⚙️

### Step 1: Fix Response Headers

In your N8N webhook node, update the Response Headers:

**Current (INCORRECT):**
```
Header 1:
  Name: Access-Control-Allow-Origin
  Value: *

Header 2:
  Name: Access-Control-Allow-Headers
  Value: Content-Type
```

**Should be (CORRECT):**
```
Header 1:
  Name: Access-Control-Allow-Origin
  Value: *

Header 2:
  Name: Access-Control-Allow-Methods
  Value: POST, OPTIONS
```

### Step 2: Re-register the Webhook

1. Click **Save** in the N8N workflow editor
2. Toggle the workflow **OFF**
3. Wait 2-3 seconds
4. Toggle the workflow back **ON**
5. Wait for the "Workflow activated" confirmation

This forces N8N to re-register the webhook with the new HTTP Method (POST) and Response Headers.

### Step 3: Verify the Fix

Test with curl:
```bash
curl -X POST https://afxv17.app.n8n.cloud/webhook/b81d43aa-baca-4047-8608-d1241068c5b2 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "Test message",
    "enquiryType": "Landlord & Property Enquiries"
  }'
```

**Expected response:** Should return HTTP 200 with success response (not 404)

### Step 4: Test from Website

Once the curl test passes:
1. Go to your website: https://www.komoyuki.com
2. Scroll to the contact form
3. Fill out the form fields
4. Submit the form
5. Check that you receive a success message

## Monitoring Logs

### View Vercel Logs

To see what's being sent to N8N:
```bash
vercel logs --follow
```

Look for these log entries from `/api/contact`:
- `Sending to webhook: [url]`
- `Data: [form data]`
- `N8N Response Status: [status code]`
- `N8N Response: [response body]`

### View N8N Execution Logs

In N8N:
1. Click on "Executions" tab
2. Look for recent webhook executions
3. Check for any errors or data reception

## Environment Variables

The webhook URL is configured in Vercel:

**Variable Name:** `NEXT_PUBLIC_WEBHOOK_URL`
**Current Value:** `https://afxv17.app.n8n.cloud/webhook/b81d43aa-baca-4047-8608-d1241068c5b2`

To change:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit `NEXT_PUBLIC_WEBHOOK_URL`
3. Redeploy the site

## Troubleshooting

### Issue: Still getting 404 after fixing headers

**Solution:** Make sure you toggled the workflow OFF and ON to re-register the webhook. The webhook URL only registers the HTTP method when the workflow is activated.

### Issue: CORS errors in browser

**Solution:** This should not happen anymore since we're using a server-side API route. If you see CORS errors, verify the contact form is calling `/api/contact` and not the N8N URL directly.

### Issue: Form submits but no data in N8N

**Solution:**
1. Check Vercel logs to see if the request is reaching the API route
2. Check N8N execution logs to see if the webhook received data
3. Verify the webhook node is connected to downstream nodes (Slack, etc.)

## Expected Data Format

The form sends this data structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Ltd",
  "phone": "+44 20 1234 5678",
  "location": "London",
  "message": "Interested in retail space",
  "enquiryType": "Landlord & Property Enquiries"
}
```

Make sure your N8N workflow can handle this structure.

## Quick Reference

| Component | Status | Notes |
|-----------|--------|-------|
| Website Code | ✅ Complete | All changes committed |
| Vercel Deployment | ✅ Live | komoyuki.com |
| API Route | ✅ Working | /api/contact |
| N8N Webhook | ⚠️ Needs Fix | Requires re-registration |
| Form Integration | ⏳ Pending | Waiting for N8N fix |

---

**Next Action:** Fix the N8N Response Headers and re-activate the workflow, then test the form submission.
