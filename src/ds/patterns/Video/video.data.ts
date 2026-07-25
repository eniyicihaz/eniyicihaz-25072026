/**
 * Poster frames use the same self-contained gradient SVG data URI
 * technique as the Image patterns — no local video assets exist,
 * so each `src` below points to a long-standing public sample
 * video (Google's GTV sample bucket), the same resources widely
 * used across web development demos and documentation.
 */
function plate(from: string, to: string, w = 960, h = 540): string {
    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
        `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
        `<stop offset="0" stop-color="${from}"/>` +
        `<stop offset="1" stop-color="${to}"/>` +
        `</linearGradient></defs>` +
        `<rect width="${w}" height="${h}" fill="url(#g)"/>` +
        `</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const SAMPLE_BUCKET = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample";

/* 01 — Patient education video (eniyicihaz.com) */

export const tutorialVideo = {
    src: `${SAMPLE_BUCKET}/ForBiggerBlazes.mp4`,
    poster: plate("#8aa8a3", "#0f766e"),
    caption: "İşitme cihazınızı doğru takma ve çıkarma adımları — 2 dakika"
};

/* 02 — Course platform lesson player, dark */

export const lessonVideo = {
    src: `${SAMPLE_BUCKET}/ElephantsDream.mp4`,
    poster: plate("#1f2937", "#0b1220"),
    title: "Lesson 4: Managing State",
    duration: "12:04",
    show: "Advanced React Patterns"
};

/* 03 — Marketing hero background, muted autoplay loop */

export const heroVideo = {
    src: `${SAMPLE_BUCKET}/BigBuckBunny.mp4`,
    poster: plate("#0b3d3a", "#052e2b"),
    kicker: "Yeni nesil işitme teknolojisi",
    title: "Sesi yeniden keşfedin"
};

/* 04 — Support testimonial embed, attribution */

export const testimonialVideo = {
    src: `${SAMPLE_BUCKET}/ForBiggerJoyrides.mp4`,
    poster: plate("#a3937a", "#7a6b52"),
    quote: "6 aydır kullanıyorum, hayatım değişti.",
    name: "Fatma Kurt",
    role: "eniyicihaz.com müşterisi"
};

/* 05 — Device demo, compact, rounded */

export const deviceDemoVideo = {
    src: `${SAMPLE_BUCKET}/SubaruOutbackOnStreetAndDirt.mp4`,
    poster: plate("#374151", "#111827"),
    caption: "Aria Pro 2 — Bluetooth eşleştirme demosu"
};
