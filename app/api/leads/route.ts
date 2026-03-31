import { NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate payload against our Zod schema
    const validatedData = leadFormSchema.parse(body);

    // TODO: Replace with the actual MyCase CRM Webhook URL
    const MYCASE_WEBHOOK_URL = process.env.MYCASE_WEBHOOK_URL || 'https://api.mycase.com/v1/leads';
    const MYCASE_API_KEY = process.env.MYCASE_API_KEY;

    // Simulate Network Request to CRM for now if there is no env variable
    if (!process.env.MYCASE_WEBHOOK_URL) {
      console.log('Mocking CRM Webhook success for lead:', validatedData);
      return NextResponse.json({ success: true, message: "Lead captured successfully" }, { status: 200 });
    }

    const crmResponse = await fetch(MYCASE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MYCASE_API_KEY}`
      },
      body: JSON.stringify({
        first_name: validatedData.fullName.split(' ')[0] || '',
        last_name: validatedData.fullName.split(' ').slice(1).join(' ') || '',
        email: validatedData.email,
        custom_fields: {
          phone: validatedData.phone,
          service_type: validatedData.serviceType,
          notes: validatedData.message
        }
      })
    });

    if (!crmResponse.ok) {
      throw new Error(`MyCase CRM Error: ${crmResponse.status}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead' }, 
      { status: 400 }
    );
  }
}
