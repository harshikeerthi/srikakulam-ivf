// Google Sheets Integration Utility
// Direct endpoint URL for logging form leads

export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwh2kgaOBuzQO6pziuXQ-CO1MrHtPXoTqw8k2J0ntmdntmvdPhT2z5n0cnD4iml3-F50Q/exec';

export interface FormSubmissionData {
  name: string;
  phone: string;
  slot: string;
  date: string;
  age?: string;
  formSource?: string;
}

/**
 * Sends form submission data to Google Sheets via Google Apps Script Web App URL
 */
export async function sendToGoogleSheet(data: FormSubmissionData): Promise<boolean> {
  const scriptUrl = GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.log('Google Script URL is not configured yet. Form submission data:', data);
    return false;
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: data.name,
      phone: data.phone,
      age: data.age || 'N/A',
      date: data.date,
      slot: data.slot,
      formSource: data.formSource || 'General Consultation Registration'
    };

    // Send payload using text/plain in no-cors mode to bypass CORS preflight restrictions
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return true;
  } catch (error) {
    console.error('Error submitting form data to Google Sheets:', error);
    return false;
  }
}
