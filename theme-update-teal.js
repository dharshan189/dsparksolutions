const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// ==== Replace CSS Root Variables ====
css = css.replace(/--bg-dark: #ffffff;/g, '--bg-dark: #1a252f;');
css = css.replace(/--bg-card: #f8fafc;/g, '--bg-card: #212f3d;');
css = css.replace(/--text-primary: #111827;/g, '--text-primary: #ffffff;');
css = css.replace(/--text-secondary: #4b5563;/g, '--text-secondary: #aab7c4;');

// Teal Accents
css = css.replace(/--accent-purple: #1e40af;/g, '--accent-purple: #1abc9c;');
css = css.replace(/--accent-blue: #2563eb;/g, '--accent-blue: #1abc9c;');
css = css.replace(/--accent-green: #3b82f6;/g, '--accent-green: #2ecc71;');
css = css.replace(/--accent-green-dark: #1d4ed8;/g, '--accent-green-dark: #16a085;');

// Gradients
css = css.replace(/--gradient-1: linear-gradient\(135deg, #1d4ed8 0%, #3b82f6 100%\);/g, '--gradient-1: linear-gradient(135deg, #16a085 0%, #1abc9c 100%);');
css = css.replace(/--gradient-2: linear-gradient\(135deg, #2563eb 0%, #60a5fa 100%\);/g, '--gradient-2: linear-gradient(135deg, #1abc9c 0%, #2ecc71 100%);');
css = css.replace(/--gradient-surface: linear-gradient\(180deg, rgba\(0, 0, 0, 0\.03\) 0%, rgba\(0, 0, 0, 0\) 100%\);/g, '--gradient-surface: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);');

// ==== Replace Hardcoded Light Theme Backgrounds ====
css = css.replace(/background: #f1f5f9;/g, 'background: rgba(255, 255, 255, 0.05);');
css = css.replace(/background: #f8fafc;/g, 'background: rgba(255, 255, 255, 0.02);');
css = css.replace(/background: #e0e7ff;/g, 'background: rgba(26, 188, 156, 0.1);'); // Badge background
css = css.replace(/color: #3730a3;/g, 'color: var(--accent-blue);'); // Badge text color

// Contact inputs background
css = css.replace(/background: #ffffff;/g, 'background: rgba(255, 255, 255, 0.05);');

// Header background
css = css.replace(/background: rgba\(255, 255, 255, 0\.95\);/g, 'background: rgba(26, 37, 47, 0.95);');

// Services background
css = css.replace(/background: rgba\(241, 245, 249, 0\.5\);/g, 'background: rgba(26, 37, 47, 0.5);');
css = css.replace(/background: rgba\(241, 245, 249, 0\.3\);/g, 'background: rgba(26, 37, 47, 0.3);');

// Stats background
css = css.replace(/rgba\(37, 99, 235, 0\.05\)/g, 'rgba(26, 188, 156, 0.05)');

// Contact info background
css = css.replace(/background-color: rgba\(248, 249, 250, 0\.5\);/g, 'background-color: rgba(33, 47, 61, 0.5);');

// Preloader & Logo background
css = css.replace(/background: #f8f9fa;/g, 'background: var(--bg-dark);');

// ==== Replace Hardcoded Light Theme Borders ====
css = css.replace(/border: 1px solid #cbd5e1;/g, 'border: 1px solid rgba(255, 255, 255, 0.1);');
css = css.replace(/border: 1px solid #e2e8f0;/g, 'border: 1px solid rgba(255, 255, 255, 0.05);');
css = css.replace(/border: 1px solid #94a3b8;/g, 'border: 1px solid rgba(255, 255, 255, 0.2);');
css = css.replace(/border-bottom: 1px solid rgba\(0, 0, 0, 0\.1\);/g, 'border-bottom: 1px solid rgba(255, 255, 255, 0.1);');

// Hover borders
css = css.replace(/border-color: rgba\(37, 99, 235, 0\.3\);/g, 'border-color: rgba(26, 188, 156, 0.3);');

// ==== Replace Hardcoded Text Colors ====
// Buttons text
css = css.replace(/color: #0f172a;/g, 'color: #ffffff;');

// Fix nav links mobile bg
css = css.replace(/background: rgba\(255, 255, 255, 0\.98\);/g, 'background: rgba(26, 37, 47, 0.98);');
css = css.replace(/\.mobile-menu-btn span \{\n\s*width: 25px;\n\s*height: 2px;\n\s*background: var\(--text-primary\);/g, '.mobile-menu-btn span {\n    width: 25px;\n    height: 2px;\n    background: #ffffff;');

// rgba rgb blue colors to teal
css = css.replace(/rgba\(37, 99, 235, /g, 'rgba(26, 188, 156, ');
css = css.replace(/rgba\(2, 132, 199, /g, 'rgba(26, 188, 156, ');
css = css.replace(/rgba\(14, 165, 233, /g, 'rgba(46, 204, 113, ');

// Box shadows for dark mode
css = css.replace(/box-shadow: 0 4px 6px -1px rgba\(0, 0, 0, 0\.1\), 0 2px 4px -1px rgba\(0, 0, 0, 0\.06\);/g, 'box-shadow: 0 4px 15px rgba(26, 188, 156, 0.2);');
css = css.replace(/box-shadow: 0 10px 15px -3px rgba\(0, 0, 0, 0\.1\), 0 4px 6px -2px rgba\(0, 0, 0, 0\.05\);/g, 'box-shadow: 0 10px 20px rgba(26, 188, 156, 0.3);');
css = css.replace(/box-shadow: 0 20px 25px -5px rgba\(0, 0, 0, 0\.1\), 0 10px 10px -5px rgba\(0, 0, 0, 0\.04\);/g, 'box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);');
css = css.replace(/box-shadow: 0 25px 50px -12px rgba\(0, 0, 0, 0\.15\);/g, 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);');

fs.writeFileSync('style.css', css);
console.log("CSS Updated");

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/rgba\(37, 99, 235, 0\.1\)/g, 'rgba(26, 188, 156, 0.1)'); // Success background
fs.writeFileSync('index.html', html);
console.log("HTML Updated");
