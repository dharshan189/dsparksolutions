const fs = require('fs');

// ==== CSS Modifications ====
let css = fs.readFileSync('style.css', 'utf8');

// Replace bright greens
css = css.replace(/rgba\(0, 255, 135, /g, 'rgba(14, 165, 233, '); 
css = css.replace(/rgba\(0, 184, 148, /g, 'rgba(2, 132, 199, ');

// Replace bright cyans/blues
css = css.replace(/rgba\(0, 191, 255, /g, 'rgba(2, 132, 199, ');

// Replace purples
css = css.replace(/rgba\(138, 43, 226, /g, 'rgba(37, 99, 235, ');

// Fix service card hover border
css = css.replace(/border-color: rgba\(138, 43, 226, 0\.3\);/g, 'border-color: rgba(37, 99, 235, 0.3);');

// Replace stat card hover border
css = css.replace(/border-color: var\(--accent-green\);/g, 'border-color: var(--accent-blue);');

// Replace service card hover box shadow
css = css.replace(/box-shadow: 0 20px 40px rgba\(0, 0, 0, 0\.4\);/g, 'box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);');

// Change modal box shadow
css = css.replace(/box-shadow: 0 25px 50px -12px rgba\(0, 0, 0, 0\.5\);/g, 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);');

// Slideshow frame shadow
css = css.replace(/box-shadow: 0 20px 40px -12px rgba\(0, 0, 0, 0\.8\);/g, 'box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);');

// Slideshow dots
css = css.replace(/\.dot \{\n\s*width: 10px;\n\s*height: 10px;\n\s*border-radius: 50%;\n\s*background: rgba\(255, 255, 255, 0\.2\);/g, '.dot {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.2);');

// Contact card border
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.05\);/g, 'border: 1px solid rgba(0, 0, 0, 0.1);');

// Enterprise Colors
css = css.replace(/--bg-dark: #ffffff;/g, '--bg-dark: #ffffff;');
css = css.replace(/--bg-card: #f8f9fa;/g, '--bg-card: #f8fafc;');
css = css.replace(/--text-primary: #0f172a;/g, '--text-primary: #1e293b;');
css = css.replace(/--text-secondary: #475569;/g, '--text-secondary: #64748b;');

// Enterprise Blue Palette
css = css.replace(/--accent-purple: #2563eb;/g, '--accent-purple: #1e40af;'); // darker blue
css = css.replace(/--accent-blue: #0284c7;/g, '--accent-blue: #2563eb;'); // primary blue
css = css.replace(/--accent-green: #0ea5e9;/g, '--accent-green: #3b82f6;'); // lighter blue
css = css.replace(/--accent-green-dark: #0284c7;/g, '--accent-green-dark: #1d4ed8;'); // dark blue

// Make gradients solid or subtle
css = css.replace(/--gradient-1: linear-gradient\(.*?\);/g, '--gradient-1: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);');
css = css.replace(/--gradient-2: linear-gradient\(.*?\);/g, '--gradient-2: linear-gradient(135deg, #2563eb 0%, #60a5fa 100%);');

// Buttons: remove pill shape and glowing shadows, make them enterprise
css = css.replace(/border-radius: 50px;/g, 'border-radius: 8px;');
css = css.replace(/box-shadow: 0 4px 15px rgba\(2, 132, 199, 0\.3\);/g, 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);');
css = css.replace(/box-shadow: 0 10px 20px rgba\(2, 132, 199, 0\.4\);/g, 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);');

// Remove pulse animation from start button (too playful for enterprise)
css = css.replace(/animation: btnPulse 2s infinite ease-in-out;/g, '/* animation removed for professional look */');

// Remove specific glowing shadows from the pulse animation
css = css.replace(/box-shadow: 0 0 15px rgba\(2, 132, 199, 0\.3\);/g, 'box-shadow: none;');
css = css.replace(/box-shadow: 0 0 35px rgba\(2, 132, 199, 0\.5\);/g, 'box-shadow: none;');
css = css.replace(/box-shadow: 0 0 20px rgba\(2, 132, 199, 0\.4\);/g, 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);');

// Service cards & Stat cards: make borders lighter and shadows softer
css = css.replace(/border: 1px solid rgba\(0, 0, 0, 0\.05\);/g, 'border: 1px solid #e2e8f0;');
css = css.replace(/border: 1px solid rgba\(0, 0, 0, 0\.1\);/g, 'border: 1px solid #cbd5e1;');
css = css.replace(/background: rgba\(0, 0, 0, 0\.02\);/g, 'background: #f8fafc;');
css = css.replace(/background: rgba\(0, 0, 0, 0\.05\);/g, 'background: #f1f5f9;');

css = css.replace(/box-shadow: 0 20px 40px rgba\(0, 0, 0, 0\.1\);/g, 'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);');

// Form inputs
css = css.replace(/border-radius: 16px;/g, 'border-radius: 8px;');
css = css.replace(/background: rgba\(0, 0, 0, 0\.03\);/g, 'background: #ffffff;');
css = css.replace(/border: 1px solid rgba\(0, 0, 0, 0\.1\);/g, 'border: 1px solid #cbd5e1;');

// Contact Card and Modals
css = css.replace(/border-radius: 32px;/g, 'border-radius: 12px;');
css = css.replace(/border-radius: 24px;/g, 'border-radius: 12px;');

// Icon boxes
css = css.replace(/border-radius: 18px;/g, 'border-radius: 8px;');

// Header/Nav
css = css.replace(/background: rgba\(255, 255, 255, 0\.9\);/g, 'background: rgba(255, 255, 255, 0.95);');

// Blobs (reduce opacity to make them very subtle)
css = css.replace(/opacity: 0\.15;/g, 'opacity: 0.05;');

// Typography adjustments
css = css.replace(/letter-spacing: 4px;/g, 'letter-spacing: 2px;');
css = css.replace(/letter-spacing: 2px;/g, 'letter-spacing: 1px;');

// .btn-secondary colors
css = css.replace(/border: 1px solid rgba\(0, 0, 0, 0\.15\);/g, 'border: 1px solid #94a3b8;');
css = css.replace(/border-color: var\(--text-primary\);/g, 'border-color: var(--accent-blue); color: var(--accent-blue);');

// Badges
css = css.replace(/background: rgba\(255, 255, 255, 0\.05\);/g, 'background: #f1f5f9;');
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.1\);/g, 'border: 1px solid #cbd5e1;');
css = css.replace(/\.badge \{\n\s*display: inline-block;\n\s*padding: 0\.5rem 1rem;\n\s*background: rgba\(0, 0, 0, 0\.05\);/g, '.badge {\n    display: inline-block;\n    padding: 0.5rem 1rem;\n    background: #e0e7ff; color: #3730a3;');

// Just in case we missed any rgba(255,255,255,...)
css = css.replace(/rgba\(255, 255, 255, 0\.05\)/g, 'rgba(0, 0, 0, 0.05)');
css = css.replace(/rgba\(255, 255, 255, 0\.1\)/g, 'rgba(0, 0, 0, 0.1)');

// Check .badge border-radius
css = css.replace(/border-radius: 20px;/g, 'border-radius: 6px;'); // Professional badge

// Footer social links border radius
css = css.replace(/\.social-links a \{\n\s*width: 40px;\n\s*height: 40px;\n\s*border-radius: 50%;/g, '.social-links a {\n    width: 40px;\n    height: 40px;\n    border-radius: 6px;');

// Button text color needs to be explicitly white for primary
css = css.replace(/\.btn-primary \{\n\s*display: inline-block;\n\s*padding: 0\.8rem 1\.8rem;\n\s*background: var\(--accent-green-dark\);\n\s*\/\* Solid fallback \*\/\n\s*background: var\(--gradient-1\);\n\s*color: #ffffff !important;/g, '.btn-primary {\n    display: inline-block;\n    padding: 0.8rem 1.8rem;\n    background: var(--accent-blue);\n    color: #ffffff !important;');

// Change font family
css = css.replace(/font-family: 'Outfit', sans-serif;/g, "font-family: 'Inter', sans-serif;");

// Update text colors for higher contrast and more professional look
css = css.replace(/--text-primary: #[0-9a-fA-F]{6};/g, '--text-primary: #111827;'); // gray-900
css = css.replace(/--text-secondary: #[0-9a-fA-F]{6};/g, '--text-secondary: #4b5563;'); // gray-600

// Make h1 and h2 a bit tighter, as Inter looks better with tighter tracking on headings
css = css.replace(/h1 \{\n\s*font-size: clamp\([^)]+\);\n\s*\/\* More aggressive scaling \*\/\n\s*font-weight: 800;\n\s*line-height: 1\.1;\n\s*margin-bottom: 1\.5rem;/g, 'h1 {\n    font-size: clamp(2.2rem, 10vw, 4.5rem);\n    font-weight: 800;\n    line-height: 1.1;\n    letter-spacing: -0.02em;\n    margin-bottom: 1.5rem;');
css = css.replace(/h2 \{\n\s*font-size: clamp\([^)]+\);\n\s*\/\* More aggressive scaling \*\/\n\s*font-weight: 700;\n\s*margin-bottom: 1rem;/g, 'h2 {\n    font-size: clamp(1.8rem, 8vw, 3rem);\n    font-weight: 700;\n    letter-spacing: -0.01em;\n    margin-bottom: 1rem;');

// Just in case the replace didn't match perfectly, let's do a fallback replace for letter-spacing
if (!css.includes('letter-spacing: -0.02em;')) {
    css = css.replace(/h1 \{/g, 'h1 {\n    letter-spacing: -0.02em;');
}
if (!css.includes('letter-spacing: -0.01em;')) {
    css = css.replace(/h2 \{/g, 'h2 {\n    letter-spacing: -0.01em;');
}

// Replace root variables
css = css.replace(/--bg-dark: #050505;/g, '--bg-dark: #ffffff;');
css = css.replace(/--bg-card: #0f0f12;/g, '--bg-card: #f8f9fa;');
css = css.replace(/--text-primary: #ffffff;/g, '--text-primary: #0f172a;');
css = css.replace(/--text-secondary: #a1a1aa;/g, '--text-secondary: #475569;');

// Corporate IT colors (blues, teals, professional tones)
css = css.replace(/--accent-purple: #8a2be2;/g, '--accent-purple: #2563eb;');
css = css.replace(/--accent-blue: #00bfff;/g, '--accent-blue: #0284c7;');
css = css.replace(/--accent-green: #00ff87;/g, '--accent-green: #0ea5e9;');
css = css.replace(/--accent-green-dark: #00b894;/g, '--accent-green-dark: #0284c7;');
css = css.replace(/--gradient-1: linear-gradient\(135deg, #00b894 0%, #00ff87 100%\);/g, '--gradient-1: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);');
css = css.replace(/--gradient-2: linear-gradient\(135deg, #00d2ff 0%, #3a7bd5 100%\);/g, '--gradient-2: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);');
css = css.replace(/--gradient-surface: linear-gradient\(180deg, rgba\(255, 255, 255, 0.05\) 0%, rgba\(255, 255, 255, 0\) 100%\);/g, '--gradient-surface: linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0) 100%);');

// Specific targeted replacements for backgrounds and borders
css = css.replace(/rgba\(255, 255, 255, 0\.05\)/g, 'rgba(0, 0, 0, 0.05)');
css = css.replace(/rgba\(255, 255, 255, 0\.1\)/g, 'rgba(0, 0, 0, 0.1)');
css = css.replace(/rgba\(255, 255, 255, 0\.2\)/g, 'rgba(0, 0, 0, 0.15)');
css = css.replace(/rgba\(255, 255, 255, 0\.02\)/g, 'rgba(0, 0, 0, 0.02)');
css = css.replace(/rgba\(255, 255, 255, 0\.04\)/g, 'rgba(0, 0, 0, 0.04)');
css = css.replace(/rgba\(255, 255, 255, 0\.08\)/g, 'rgba(0, 0, 0, 0.08)');

// Header scrolled
css = css.replace(/background: rgba\(5, 5, 5, 0\.8\);/g, 'background: rgba(255, 255, 255, 0.9);');

// Body background dark fallback
css = css.replace(/background: var\(--bg-dark\);/g, 'background: var(--bg-dark);');

// Shadows (dark mode shadows to light mode shadows)
css = css.replace(/box-shadow: 0 4px 15px rgba\(0, 184, 148, 0\.2\);/g, 'box-shadow: 0 4px 15px rgba(2, 132, 199, 0.3);');
css = css.replace(/box-shadow: 0 10px 20px rgba\(0, 184, 148, 0\.3\);/g, 'box-shadow: 0 10px 20px rgba(2, 132, 199, 0.4);');
css = css.replace(/box-shadow: 0 0 20px rgba\(0, 184, 148, 0\.5\);/g, 'box-shadow: 0 0 20px rgba(2, 132, 199, 0.4);');
css = css.replace(/box-shadow: 0 0 15px rgba\(0, 184, 148, 0\.3\);/g, 'box-shadow: 0 0 15px rgba(2, 132, 199, 0.3);');
css = css.replace(/box-shadow: 0 0 35px rgba\(0, 184, 148, 0\.6\);/g, 'box-shadow: 0 0 35px rgba(2, 132, 199, 0.5);');

// Some secondary buttons that were white text and transparent bg
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.2\);/g, 'border: 1px solid rgba(0, 0, 0, 0.2);');
css = css.replace(/color: white;/g, 'color: var(--text-primary);'); 

css = css.replace(/background: rgba\(255, 255, 255, 0\.05\);/g, 'background: rgba(0, 0, 0, 0.05);');

// Nav links hover
css = css.replace(/\.nav-links a:hover \{\n\s*color: white;\n\}/g, '.nav-links a:hover {\n    color: var(--accent-blue);\n}');

// Preloader logo bg
css = css.replace(/\.preloader-logo \{\n\s*background: #ffffff;/g, '.preloader-logo {\n    background: #f8f9fa;');
css = css.replace(/\.logo-icon \{\n\s*background: #ffffff;/g, '.logo-icon {\n    background: #f8f9fa;');

// Work slider active background
css = css.replace(/background: #000;/g, 'background: #f8f9fa;');

// Footer
css = css.replace(/footer \{\n\s*padding: 80px 0 40px;\n\s*background: #000;/g, 'footer {\n    padding: 80px 0 40px;\n    background: #f1f5f9;');

// Social links hover
css = css.replace(/\.social-links a:hover \{\n\s*background: var\(--gradient-1\);\n\s*color: white;/g, '.social-links a:hover {\n    background: var(--gradient-1);\n    color: #ffffff;');

// Fix nav links on mobile
css = css.replace(/background: rgba\(5, 5, 5, 0\.98\);/g, 'background: rgba(255, 255, 255, 0.98);');
css = css.replace(/\.mobile-menu-btn span \{\n\s*width: 25px;\n\s*height: 2px;\n\s*background: white;/g, '.mobile-menu-btn span {\n    width: 25px;\n    height: 2px;\n    background: var(--text-primary);');

// Fix contact inputs
css = css.replace(/\.contact-form input,\n\.contact-form textarea \{\n(.*?)\n(.*?)\n\s*background: rgba\(255, 255, 255, 0\.05\);\n\s*border: 1px solid rgba\(255, 255, 255, 0\.1\);\n\s*color: white;/g, '.contact-form input,\n.contact-form textarea {\n$1\n$2\n    background: rgba(0, 0, 0, 0.03);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    color: var(--text-primary);');

// Services background
css = css.replace(/background: rgba\(10, 10, 12, 0\.5\);/g, 'background: rgba(241, 245, 249, 0.5);');
css = css.replace(/background: rgba\(10, 10, 12, 0\.3\);/g, 'background: rgba(241, 245, 249, 0.3);');

// Stats background
css = css.replace(/background: linear-gradient\(180deg, rgba\(5, 5, 5, 0\) 0%, rgba\(138, 43, 226, 0\.05\) 50%, rgba\(5, 5, 5, 0\) 100%\);/g, 'background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(37, 99, 235, 0.05) 50%, rgba(255, 255, 255, 0) 100%);');

// Contact info background
css = css.replace(/background: var\(--gradient-surface\);\n\s*display: flex;/g, 'background: var(--gradient-surface);\n    background-color: rgba(248, 249, 250, 0.5);\n    display: flex;');

// Contact method text
css = css.replace(/\.contact-method-text p \{\n\s*margin: 0;\n\s*color: white;/g, '.contact-method-text p {\n    margin: 0;\n    color: var(--text-primary);');
css = css.replace(/\.contact-method-text a \{\n\s*color: white;/g, '.contact-method-text a {\n    color: var(--text-primary);');

// Form status
css = css.replace(/rgba\(255, 255, 255, 0\.08\)/g, 'rgba(0, 0, 0, 0.06)');
css = css.replace(/rgba\(138, 43, 226, 0\.1\)/g, 'rgba(37, 99, 235, 0.15)');

// Preloader background fallback
css = css.replace(/background: var\(--bg-dark\);/g, 'background: var(--bg-dark);'); 

fs.writeFileSync('style.css', css);

// ==== HTML Modifications ====
let html = fs.readFileSync('index.html', 'utf8');

// Replace bright green success background with professional blue tint to match border
html = html.replace(/rgba\(0, 255, 127, 0\.1\)/g, 'rgba(37, 99, 235, 0.1)');

fs.writeFileSync('index.html', html);

console.log("Done");
