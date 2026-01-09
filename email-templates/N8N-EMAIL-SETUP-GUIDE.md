# N8N Email Template Setup Guide

## Overview

You now have **4 professional email templates** ready to use in your N8N workflow:

### Internal Notification Emails (sent to your team)
1. **landlord-enquiry.html** - For Landlord & Property enquiries
2. **supplier-enquiry.html** - For Supplier enquiries

### Customer Confirmation Emails (sent to form submitters)
3. **landlord-confirmation.html** - Thank you email for landlords
4. **supplier-confirmation.html** - Thank you email for suppliers

## Template Variables

### Landlord Enquiry Template Variables

Replace these placeholders in `landlord-enquiry.html`:

| Variable | N8N Expression | Description |
|----------|----------------|-------------|
| `{{date}}` | `{{$now.format('DD MMM YYYY, HH:mm')}}` | Current date/time |
| `{{name}}` | `{{$json.name}}` | Contact name |
| `{{email}}` | `{{$json.email}}` | Email address |
| `{{propertyLocation}}` | `{{$json.propertyLocation}}` | Property location |
| `{{unitSize}}` | `{{$json.unitSize}}` | Unit size |
| `{{message}}` | `{{$json.message}}` | Enquiry message |

### Supplier Enquiry Template Variables

Replace these placeholders in `supplier-enquiry.html`:

| Variable | N8N Expression | Description |
|----------|----------------|-------------|
| `{{date}}` | `{{$now.format('DD MMM YYYY, HH:mm')}}` | Current date/time |
| `{{companyName}}` | `{{$json.companyName}}` | Company name |
| `{{contactName}}` | `{{$json.contactName}}` | Contact person |
| `{{email}}` | `{{$json.email}}` | Email address |
| `{{productCategory}}` | `{{$json.productCategory}}` | Product category |
| `{{message}}` | `{{$json.message}}` | Enquiry message |

### Landlord Confirmation Email Variables

Replace these placeholders in `landlord-confirmation.html`:

| Variable | N8N Expression | Description |
|----------|----------------|-------------|
| `{{name}}` | `{{$json.name}}` | Contact name |
| `{{propertyLocation}}` | `{{$json.propertyLocation || 'Not specified'}}` | Property location |
| `{{unitSize}}` | `{{$json.unitSize || 'Not specified'}}` | Unit size |
| `{{reference}}` | `{{$execution.id}}` | Unique reference number |

### Supplier Confirmation Email Variables

Replace these placeholders in `supplier-confirmation.html`:

| Variable | N8N Expression | Description |
|----------|----------------|-------------|
| `{{contactName}}` | `{{$json.contactName}}` | Contact person |
| `{{companyName}}` | `{{$json.companyName}}` | Company name |
| `{{productCategory}}` | `{{$json.productCategory || 'Not specified'}}` | Product category |
| `{{reference}}` | `{{$execution.id}}` | Unique reference number |

## N8N Workflow Setup

### Step 1: Add IF Node to Split Enquiry Types

After your webhook node, add an **IF** node to determine which template to use:

**Condition:**
```
{{$json.enquiryType}} equals "Landlord & Property Enquiries"
```

### Step 2: Add HTML Nodes

Add two separate branches after the IF node:

#### Branch 1: Landlord Enquiry (True)
1. Add an **HTML** node or **Code** node
2. Copy the entire content from `landlord-enquiry.html`
3. Use N8N expressions to replace variables:

**Example using Code Node:**
```javascript
const html = `[paste landlord-enquiry.html here]`;

const emailHtml = html
  .replace('{{date}}', new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }))
  .replace('{{name}}', $input.item.json.name || 'N/A')
  .replace('{{email}}', $input.item.json.email || 'N/A')
  .replace('{{propertyLocation}}', $input.item.json.propertyLocation || 'Not specified')
  .replace('{{unitSize}}', $input.item.json.unitSize || 'Not specified')
  .replace('{{message}}', $input.item.json.message || 'No message provided');

return { html: emailHtml };
```

#### Branch 2: Supplier Enquiry (False)
1. Add an **HTML** node or **Code** node
2. Copy the entire content from `supplier-enquiry.html`
3. Use N8N expressions to replace variables:

**Example using Code Node:**
```javascript
const html = `[paste supplier-enquiry.html here]`;

const emailHtml = html
  .replace('{{date}}', new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }))
  .replace('{{companyName}}', $input.item.json.companyName || 'N/A')
  .replace('{{contactName}}', $input.item.json.contactName || 'N/A')
  .replace('{{email}}', $input.item.json.email || 'N/A')
  .replace('{{productCategory}}', $input.item.json.productCategory || 'Not specified')
  .replace('{{message}}', $input.item.json.message || 'No message provided');

return { html: emailHtml };
```

### Step 3: Send Email or Post to Slack

After each HTML node, you can:

#### Option A: Send via Email (Gmail/SMTP)
Add a **Gmail** or **Send Email** node:
- **To:** Your email (e.g., duncan@komoyuki.com)
- **Subject:**
  - Landlord: `New Landlord Enquiry from {{$json.name}}`
  - Supplier: `New Supplier Enquiry from {{$json.companyName}}`
- **Email Type:** HTML
- **Message:** `{{$json.html}}` (from the Code node output)

#### Option B: Send to Slack with HTML Preview
Add a **Slack** node:
- **Resource:** Message
- **Operation:** Post
- **Channel:** Your channel
- **Message:** Create a formatted Slack message

**Example Slack Message (Landlord):**
```
🏢 *New Landlord Enquiry*

*Name:* {{$json.name}}
*Email:* {{$json.email}}
*Location:* {{$json.propertyLocation}}
*Unit Size:* {{$json.unitSize}}

*Message:*
{{$json.message}}

---
_Received: {{$now.format('DD/MM/YYYY HH:mm')}}_
```

### Step 4: Send Confirmation Email to Customer

After sending the internal notification, add another Code node and Gmail node to send a confirmation email back to the customer:

#### Landlord Confirmation
Add a **Code** node after the landlord notification:
```javascript
const html = `[paste landlord-confirmation.html here]`;

const confirmationHtml = html
  .replace('{{name}}', $input.item.json.name || 'N/A')
  .replace('{{propertyLocation}}', $input.item.json.propertyLocation || 'Not specified')
  .replace('{{unitSize}}', $input.item.json.unitSize || 'Not specified')
  .replace('{{reference}}', $execution.id);

return {
  html: confirmationHtml,
  email: $input.item.json.email
};
```

Then add a **Gmail/SMTP** node:
- **To:** `{{$json.email}}` (from the Code node output)
- **Subject:** `Thank you for your enquiry - KOMO-YUKI`
- **Email Type:** HTML
- **Message:** `{{$json.html}}`

#### Supplier Confirmation
Add a **Code** node after the supplier notification:
```javascript
const html = `[paste supplier-confirmation.html here]`;

const confirmationHtml = html
  .replace('{{contactName}}', $input.item.json.contactName || 'N/A')
  .replace('{{companyName}}', $input.item.json.companyName || 'N/A')
  .replace('{{productCategory}}', $input.item.json.productCategory || 'Not specified')
  .replace('{{reference}}', $execution.id);

return {
  html: confirmationHtml,
  email: $input.item.json.email
};
```

Then add a **Gmail/SMTP** node:
- **To:** `{{$json.email}}`
- **Subject:** `Thank you for your supplier enquiry - KOMO-YUKI`
- **Email Type:** HTML
- **Message:** `{{$json.html}}`

### Step 5: Test the Workflow

1. Save your workflow
2. Make sure it's activated
3. Submit a test form from your website
4. Check that:
   - You receive the internal notification (Slack/Email to your team)
   - The customer receives a confirmation email

## Workflow Diagram

### Complete Workflow with Confirmations

```
Webhook (POST)
    ↓
IF Node (Check enquiryType)
    ↓
├── True (Landlord)
│   ↓
│   Code Node (Format landlord-enquiry.html)
│   ↓
│   Gmail/Slack Node (Send to team)
│   ↓
│   Code Node (Format landlord-confirmation.html)
│   ↓
│   Gmail Node (Send to customer)
│
└── False (Supplier)
    ↓
    Code Node (Format supplier-enquiry.html)
    ↓
    Gmail/Slack Node (Send to team)
    ↓
    Code Node (Format supplier-confirmation.html)
    ↓
    Gmail Node (Send to customer)
```

## Advanced: Using HTML Node Instead of Code Node

If you prefer to use N8N's built-in HTML node:

1. Add **Set** node to prepare variables
2. Add **HTML** node
3. Paste the HTML template
4. N8N will automatically detect `{{variable}}` syntax
5. Connect to your email sender node

## Email Template Features

### Internal Notification Emails (landlord-enquiry.html & supplier-enquiry.html)
✅ **Professional layout** - Clean card design optimized for quick scanning
✅ **Complete form data** - All submitted information clearly displayed
✅ **Quick action buttons** - Reply via email button for immediate response
✅ **Enquiry type badge** - Clear identification of landlord vs supplier
✅ **Timestamp** - Shows when the enquiry was received
✅ **Email client compatible** - Works across all major email clients

### Customer Confirmation Emails (landlord-confirmation.html & supplier-confirmation.html)
✅ **Success indicator** - Green checkmark to confirm receipt
✅ **Personalized greeting** - Addresses customer by name
✅ **Enquiry summary** - Shows what was submitted with unique reference number
✅ **Clear next steps** - 3-step process showing what happens next
✅ **Brand messaging** - Explains KOMO-YUKI value proposition
✅ **Contact information** - Easy way to reach you directly
✅ **Professional footer** - Links to website and relevant pages

### All Templates Include:
✅ **Responsive design** - Works perfectly on mobile and desktop
✅ **KOMO-YUKI branding** - Blush pink (#F6BCC8) gradient and charcoal colors
✅ **Table-based layout** - Maximum compatibility with email clients
✅ **Inline CSS** - Ensures styling works in Gmail, Outlook, Apple Mail
✅ **Brand consistency** - Matches website design and feel

## Troubleshooting

### Variables not replacing
- Make sure you're using the correct N8N expression syntax
- Check that the webhook is receiving the data correctly
- Use Code node for more control over variable replacement

### Email looks broken
- Some email clients strip certain CSS
- The templates use inline styles for maximum compatibility
- Test with Gmail, Outlook, and Apple Mail

### Missing data shows as empty
- Use fallback values: `{{$json.field || 'Not specified'}}`
- Add null checks in your Code node

### Customer not receiving confirmation email
- Check the email address is correct in the webhook data
- Verify Gmail/SMTP credentials are configured in N8N
- Check spam folder
- Test by sending to your own email first
- Look at N8N execution logs for error messages

### Confirmation email sent to wrong address
- Make sure you're using `{{$json.email}}` in the "To" field
- Check that the Code node is returning the email field correctly
- Verify the email field name matches your form (landlord uses "email", supplier uses "email")

## Example Webhook Data

### Landlord Enquiry:
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "propertyLocation": "London, King's Cross",
  "unitSize": "1,500 sq ft",
  "message": "Interested in discussing retail space at our new development",
  "enquiryType": "Landlord & Property Enquiries"
}
```

### Supplier Enquiry:
```json
{
  "companyName": "Tokyo Toys Ltd",
  "contactName": "Sarah Johnson",
  "email": "sarah@tokyotoys.com",
  "productCategory": "Anime Figures",
  "message": "We have a new line of trending anime merchandise",
  "enquiryType": "Supplier Enquiries"
}
```

---

**Need Help?**
Check the N8N documentation for more details on using HTML in workflows:
https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html/
