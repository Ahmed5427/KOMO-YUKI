# N8N Email Template Setup Guide

## Overview

You now have two professional email templates ready to use in your N8N workflow:

1. **landlord-enquiry.html** - For Landlord & Property enquiries
2. **supplier-enquiry.html** - For Supplier enquiries

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

### Step 4: Test the Workflow

1. Save your workflow
2. Make sure it's activated
3. Submit a test form from your website
4. Check that you receive the formatted email or Slack message

## Workflow Diagram

```
Webhook (POST)
    ↓
IF Node (Check enquiryType)
    ↓
├── True (Landlord)
│   ↓
│   Code Node (Format landlord-enquiry.html)
│   ↓
│   Gmail/Slack Node (Send)
│
└── False (Supplier)
    ↓
    Code Node (Format supplier-enquiry.html)
    ↓
    Gmail/Slack Node (Send)
```

## Advanced: Using HTML Node Instead of Code Node

If you prefer to use N8N's built-in HTML node:

1. Add **Set** node to prepare variables
2. Add **HTML** node
3. Paste the HTML template
4. N8N will automatically detect `{{variable}}` syntax
5. Connect to your email sender node

## Styling Features

Both templates include:

✅ **Responsive design** - Works on mobile and desktop
✅ **KOMO-YUKI branding** - Blush pink (#F6BCC8) and charcoal colors
✅ **Professional layout** - Clean, modern card design
✅ **Easy to read** - Clear labels and hierarchy
✅ **Email client compatible** - Uses table-based layout for maximum compatibility
✅ **Quick action buttons** - Reply via email button
✅ **Brand footer** - Company information

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
