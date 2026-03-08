import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public', 'images');

const images = [
    // Doctor images (same source URL, used in Hero, DoctorSection, DoctorPage, International)
    {
        url: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBzdXJnZW9uJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBob3NwaXRhbHxlbnwxfHx8fDE3NzI4ODA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "doctor/dr-harivadan-hero.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBzdXJnZW9uJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBob3NwaXRhbHxlbnwxfHx8fDE3NzI4ODA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "doctor/dr-harivadan-portrait.webp"
    },
    // About section
    {
        url: "https://images.unsplash.com/photo-1715111965684-e2cdde4a1f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZSUyMHBhdGllbnR8ZW58MXx8fHwxNzcyODgwNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "homepage/about-rehabilitation.webp"
    },
    // Therapy images
    {
        url: "https://images.unsplash.com/photo-1758654859927-74a68e4e0bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBlcmJhcmljJTIwb3h5Z2VuJTIwdGhlcmFweSUyMGNoYW1iZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc3Mjg3OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        output: "therapies/hbot.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1620924721217-93fd71e354ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwdGhlcmFweSUyMHdlbGxuZXNzJTIwc3BhfGVufDF8fHx8MTc3Mjg3OTk3MHww&ixlib=rb-4.1.0&q=80&w=1080",
        output: "therapies/cryotherapy.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1772122028843-9139d23af4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ja3dhdmUlMjB0aGVyYXB5JTIwcGh5c2ljYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcyODc5OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "therapies/shockwave.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwb3h5Z2VuJTIwdGhlcmFweSUyMGJyZWF0aGluZ3xlbnwxfHx8fDE3NzI4Nzk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "therapies/hydrogen-inhalation.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1637714409323-d5e6e9731252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhZG1pbGwlMjByZWhhYmlsaXRhdGlvbiUyMGdhaXQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzI4Nzk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "therapies/gait-training.webp"
    },
    // Facility images
    {
        url: "https://images.unsplash.com/photo-1770775776141-6b3ac7ef9dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZmFjaWxpdHklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI4NzU3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "facility/consultation-suite.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1758654859927-74a68e4e0bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBlcmJhcmljJTIwb3h5Z2VuJTIwdGhlcmFweSUyMGNoYW1iZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc3Mjg3OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        output: "facility/hbot-chamber.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1580281657702-257584239a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHJlaGFiaWxpdGF0aW9uJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3Mjg3OTM2NHww&ixlib=rb-4.1.0&q=80&w=1080",
        output: "facility/rehab-equipment.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1715111641688-ea364ec391f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZXxlbnwxfHx8fDE3NzI3NzI5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "facility/cardiac-rehab-area.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1637714409323-d5e6e9731252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhZG1pbGwlMjByZWhhYmlsaXRhdGlvbiUyMHdhbGtpbmclMjB0aGVyYXB5fGVufDF8fHx8MTc3Mjg3OTM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
        output: "facility/gait-training-zone.webp"
    },
    // Program hero images
    {
        url: "https://images.unsplash.com/photo-1747302653826-42c6cd7295f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZSUyMGVsZGVybHl8ZW58MXx8fHwxNzcyOTY4Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "programs/cardiac-hero.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhdGhpbmclMjBleGVyY2lzZSUyMGx1bmclMjB0aGVyYXB5fGVufDF8fHx8MTc3Mjk2ODc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        output: "programs/pulmonary-hero.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJva2UlMjByZWNvdmVyeSUyMHBoeXNpY2FsJTIwdGhlcmFweXxlbnwxfHx8fDE3NzI5Njg3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "programs/neurovascular-hero.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0JTIwc3VyZ2VyeSUyMHJlY292ZXJ5JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcyOTY4Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "programs/post-surgical-hero.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1771151720650-2a71117c5415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZCUyMHJlY292ZXJ5JTIwZmF0aWd1ZSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3Mjk2ODc3OXww&ixlib=rb-4.1.0&q=80&w=1080",
        output: "programs/long-covid-hero.webp"
    },
    {
        url: "https://images.unsplash.com/photo-1605606437828-598340dfaeb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmV2ZW50aXZlJTIwaGVhbHRoJTIwc2NyZWVuaW5nJTIwZml0bmVzc3xlbnwxfHx8fDE3NzI5Njg3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "programs/preventive-hero.webp"
    },
    // International page
    {
        url: "https://images.unsplash.com/photo-1755779622559-b7e4ec6a2c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNha2hhcGF0bmFtJTIwY29hc3RsaW5lJTIwSW5kaWElMjBhZXJpYWx8ZW58MXx8fHwxNzcyODc5OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        output: "international/visakhapatnam.webp"
    },
];

async function downloadAndConvert(item) {
    const outputPath = path.join(publicDir, item.output);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
        console.log(`⏭ Skipping (exists): ${item.output}`);
        return;
    }

    try {
        console.log(`⬇ Downloading: ${item.output}...`);
        const response = await fetch(item.url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = Buffer.from(await response.arrayBuffer());

        await sharp(buffer)
            .webp({ quality: 80 })
            .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        console.log(`✅ Saved: ${item.output} (${(stats.size / 1024).toFixed(0)}KB)`);
    } catch (err) {
        console.error(`❌ Failed: ${item.output} - ${err.message}`);
    }
}

// Also convert the existing logo PNG
async function convertLogo() {
    const logoSrc = path.join(__dirname, '..', 'src', 'assets', '22be3462e89c1c438f1c4a91f09367c1a4683b9a.png');
    const logoDest = path.join(publicDir, 'icons', 'pranavayu-logo.webp');

    if (fs.existsSync(logoDest)) {
        console.log('⏭ Logo already converted');
        return;
    }

    try {
        await sharp(logoSrc)
            .webp({ quality: 90 })
            .toFile(logoDest);
        console.log('✅ Logo converted to webp');
    } catch (err) {
        console.error(`❌ Logo conversion failed: ${err.message}`);
    }
}

async function main() {
    console.log(`\n📦 Downloading ${images.length} images...\n`);

    // Process 3 at a time to avoid overwhelming network
    for (let i = 0; i < images.length; i += 3) {
        const batch = images.slice(i, i + 3);
        await Promise.all(batch.map(downloadAndConvert));
    }

    await convertLogo();

    console.log('\n✅ All done!\n');
}

main();
