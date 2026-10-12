import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_coz1zts';
const EMAILJS_PUBLIC_KEY = 'IlDSeLG8CdU6rZ3Kk';

/**
 * Send email using PHP backend with PHPMailer (primary),
 * with fallback to EmailJS if PHP server is offline.
 */
export async function sendMail(payload) {
    try {
        const response = await fetch('/api/send-mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            if (response.ok && data.success) {
                return { success: true, method: 'php' };
            }
            throw new Error(data.error || 'Server rejected email delivery');
        } else {
            throw new Error('PHP server offline or endpoint not reachable');
        }
    } catch (phpError) {
        console.warn('PHP backend email failed, attempting EmailJS fallback...', phpError.message);

        // Fallback to EmailJS
        const templateId = payload.type === 'appointment' ? 'template_4qwzgc8' : 'template_axacugr';
        const templateParams = {
            from_name: payload.name,
            from_email: payload.email,
            from_phone: payload.phone || '',
            subject: payload.subject,
            service_type: payload.service_type || '',
            preferred_date: payload.preferred_date || '',
            message: payload.message || '',
            recipient_email: 'johnthedon1673@gmail.com'
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams, EMAILJS_PUBLIC_KEY);
            return { success: true, method: 'emailjs' };
        } catch (emailjsError) {
            console.error('EmailJS also failed:', emailjsError);
            throw new Error(phpError.message || 'Failed to dispatch email');
        }
    }
}
