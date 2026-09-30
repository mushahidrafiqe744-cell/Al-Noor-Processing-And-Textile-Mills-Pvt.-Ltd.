import heroTextileFactory from './hero_textile_factory_1790767392098.jpg';
import aboutTextileProcessing from './about_textile_processing_1790767407647.jpg';
import productProcessedFabrics from './product_processed_fabrics_1790767419656.jpg';
import productDyedFabrics from './product_dyed_fabrics_1790767430395.jpg';
import productFinishedFabrics from './product_finished_fabrics_1790767442682.jpg';
import productCustomProcessing from './product_custom_processing_1790767454387.jpg';

export const IMAGES = {
  heroTextileFactory,
  aboutTextileProcessing,
  productProcessedFabrics,
  productDyedFabrics,
  productFinishedFabrics,
  productCustomProcessing,
};

export const createFabricPlaceholderSvg = (label: string, color: string = '#063F3A') => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="${encodeURIComponent(
    color
  )}"/><pattern id="p" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M0 15 L30 15 M15 0 L15 30" stroke="rgba(200,169,90,0.2)" stroke-width="1.5"/></pattern><rect width="800" height="600" fill="url(%23p)"/><text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" fill="%23C8A95A" font-family="Outfit, sans-serif" font-size="28" font-weight="700">AL-NOOR TEXTILES</text><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="%23FFFFFF" font-family="Plus Jakarta Sans, sans-serif" font-size="18">${encodeURIComponent(
    label
  )}</text></svg>`;
};
