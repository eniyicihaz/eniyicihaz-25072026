/* 01 — Login two-factor verification (eniyicihaz.com) */

export const loginOtp = {
    title: "Doğrulama kodunu girin",
    sub: "hasta@eniyicihaz.com adresine 6 haneli bir kod gönderdik",
    length: 6,
    value: "42",
    countdown: "00:48"
};

/* 02 — Banking transfer confirmation, dark */

export const bankOtp = {
    title: "Confirm transfer",
    sub: "Enter the 6-digit code sent to your registered device",
    amount: "€2,400.00",
    to: "J. Alderweireld · NL91 ABNA…",
    length: 6,
    value: ""
};

/* 03 — SIM / phone number verification */

export const simOtp = {
    title: "Verify your number",
    sub: "We texted a 4-digit code to +90 5•• ••• 12 34",
    length: 4,
    value: "0",
    resendIn: "0:27"
};

/* 04 — Support ticket access code, invalid state */

export const supportOtp = {
    title: "Enter access code",
    sub: "Your support agent gave you a one-time 6-digit code",
    length: 6,
    value: "913",
    error: "That code has expired — ask your agent for a new one"
};

/* 05 — Payment terminal PIN entry, disabled/read-only kiosk */

export const kioskOtp = {
    title: "Kart PIN'inizi girin",
    sub: "İşlem tamamlanana kadar bekleyin",
    length: 4,
    value: "••",
    disabled: true
};
