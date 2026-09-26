// Verified generated assets
export const IMAGES = {
  heroTextileMill: '/src/assets/images/hero_textile_mill_1790250536049.jpg',
  fabricDyeing: '/src/assets/images/fabric_dyeing_process_1790250563187.jpg',
  textileFinishing: '/src/assets/images/textile_finishing_stenter_1790250578392.jpg',
  qualityLab: '/src/assets/images/quality_lab_inspection_1790250594361.jpg',
  textileWarehouse: '/src/assets/images/textile_rolls_warehouse_1790250611068.jpg',
};

// Fallback high-contrast textile SVG placeholders for ultra reliability
export const createFabricPlaceholderSvg = (label: string, color: string = '#0B192C') => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="${encodeURIComponent(
    color
  )}"/><pattern id="p" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M0 15 L30 15 M15 0 L15 30" stroke="rgba(212,175,55,0.2)" stroke-width="1.5"/></pattern><rect width="800" height="600" fill="url(%23p)"/><text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" fill="%23D4AF37" font-family="Outfit, sans-serif" font-size="28" font-weight="700">AL-NOOR TEXTILES</text><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="%23FFFFFF" font-family="Plus Jakarta Sans, sans-serif" font-size="18">${encodeURIComponent(
    label
  )}</text></svg>`;
};
