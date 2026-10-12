<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load .env
if (file_exists(__DIR__ . '/../.env')) {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/..');
    $dotenv->safeLoad();
}

// Read JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload.']);
    exit;
}

$type = $data['type'] ?? 'contact'; // 'contact' or 'appointment'
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');
$subject = trim($data['subject'] ?? '');
$serviceType = trim($data['service_type'] ?? '');
$date = trim($data['preferred_date'] ?? $data['date'] ?? '');

$recipient = $_ENV['RECIPIENT_EMAIL'] ?? 'johnthedon1673@gmail.com';
$smtpHost = $_ENV['SMTP_HOST'] ?? $_ENV['MAIL_HOST'] ?? 'smtp.gmail.com';
$smtpPort = (int)($_ENV['SMTP_PORT'] ?? $_ENV['MAIL_PORT'] ?? 587);
$smtpUser = $_ENV['GMAIL_USER'] ?? $_ENV['MAIL_USERNAME'] ?? '';
$smtpPass = $_ENV['GMAIL_PASS'] ?? $_ENV['MAIL_PASSWORD'] ?? '';
$fromEmail = $_ENV['FROM_EMAIL'] ?? $_ENV['MAIL_FROM_ADDRESS'] ?? $smtpUser;
$fromName = $_ENV['FROM_NAME'] ?? $_ENV['MAIL_FROM_NAME'] ?? 'Mihai Motors Concierge';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = ($smtpPort === 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtpPort;

    // Sender & Recipient
    $mail->setFrom($fromEmail, $fromName);
    if (!empty($email)) {
        $mail->addReplyTo($email, $name ?: 'Client');
    }
    $mail->addAddress($recipient);

    $mail->isHTML(true);

    if ($type === 'appointment') {
        $mail->Subject = "New Appointment Booking: " . strtoupper($serviceType ?: 'SERVICE') . " - " . ($name ?: 'Client');
        $mail->Body = "
        <div style='background-color: #0b0b0b; padding: 36px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; color: #f5f5f5; max-width: 600px; margin: 0 auto; border: 1px solid #222;'>
            <div style='border-bottom: 2px solid #c0392b; padding-bottom: 16px; margin-bottom: 24px;'>
                <h1 style='margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; color: #ffffff;'>MIHAI MOTORS</h1>
                <p style='margin: 4px 0 0; font-size: 12px; color: #c0392b; letter-spacing: 1px; text-transform: uppercase;'>Appointment Request Dispatched</p>
            </div>
            <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
                <tr><td style='padding: 10px 0; color: #888; width: 140px;'>Client Name:</td><td style='padding: 10px 0; color: #fff; font-weight: bold;'>" . htmlspecialchars($name) . "</td></tr>
                <tr><td style='padding: 10px 0; color: #888;'>Email:</td><td style='padding: 10px 0;'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #c0392b;'>" . htmlspecialchars($email) . "</a></td></tr>
                <tr><td style='padding: 10px 0; color: #888;'>Phone:</td><td style='padding: 10px 0; color: #fff;'>" . htmlspecialchars($phone) . "</td></tr>
                <tr><td style='padding: 10px 0; color: #888;'>Service Type:</td><td style='padding: 10px 0; color: #fff; font-weight: bold; text-transform: uppercase;'>" . htmlspecialchars($serviceType) . "</td></tr>
                <tr><td style='padding: 10px 0; color: #888;'>Preferred Date:</td><td style='padding: 10px 0; color: #fff;'>" . htmlspecialchars($date ?: 'Not specified') . "</td></tr>
                <tr><td style='padding: 10px 0; color: #888; vertical-align: top;'>Notes / Details:</td><td style='padding: 10px 0; color: #ccc; line-height: 1.5;'>" . nl2br(htmlspecialchars($message ?: 'None')) . "</td></tr>
            </table>
            <div style='margin-top: 32px; padding-top: 16px; border-top: 1px solid #222; font-size: 11px; color: #666; text-align: center;'>
                Mihai Motors Concierge System &bull; Received on " . date('Y-m-d H:i:s') . "
            </div>
        </div>";
        $mail->AltBody = "New Appointment Booking\nClient: $name\nEmail: $email\nPhone: $phone\nService: $serviceType\nDate: $date\nNotes: $message";
    } else {
        $mail->Subject = "New Contact Inquiry: " . ($subject ?: 'General Inquiry') . " - " . ($name ?: 'Client');
        $mail->Body = "
        <div style='background-color: #0b0b0b; padding: 36px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; color: #f5f5f5; max-width: 600px; margin: 0 auto; border: 1px solid #222;'>
            <div style='border-bottom: 2px solid #c0392b; padding-bottom: 16px; margin-bottom: 24px;'>
                <h1 style='margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; color: #ffffff;'>MIHAI MOTORS</h1>
                <p style='margin: 4px 0 0; font-size: 12px; color: #c0392b; letter-spacing: 1px; text-transform: uppercase;'>Inquiry Received</p>
            </div>
            <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
                <tr><td style='padding: 10px 0; color: #888; width: 140px;'>Sender:</td><td style='padding: 10px 0; color: #fff; font-weight: bold;'>" . htmlspecialchars($name) . "</td></tr>
                <tr><td style='padding: 10px 0; color: #888;'>Email:</td><td style='padding: 10px 0;'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #c0392b;'>" . htmlspecialchars($email) . "</a></td></tr>
                <tr><td style='padding: 10px 0; color: #888;'>Interest / Subject:</td><td style='padding: 10px 0; color: #fff; font-weight: bold;'>" . htmlspecialchars($subject) . "</td></tr>
                <tr><td style='padding: 10px 0; color: #888; vertical-align: top;'>Message:</td><td style='padding: 10px 0; color: #ccc; line-height: 1.5;'>" . nl2br(htmlspecialchars($message)) . "</td></tr>
            </table>
            <div style='margin-top: 32px; padding-top: 16px; border-top: 1px solid #222; font-size: 11px; color: #666; text-align: center;'>
                Mihai Motors Concierge System &bull; Received on " . date('Y-m-d H:i:s') . "
            </div>
        </div>";
        $mail->AltBody = "New Inquiry\nName: $name\nEmail: $email\nSubject: $subject\nMessage: $message";
    }

    $mail->send();

    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Email sent successfully.']);
} catch (Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo ?: $e->getMessage()]);
}
