// Public verification values from the site's logged-in webmaster accounts.
export const siteVerification = {
  'naver-site-verification': '1233e763ec3f9b2a909bf3ecfe85baa45ad94010',
  'google-site-verification': 'hArOnO_mX_eEZ_WZMkDt9JbxZDaU-jQLl8aNp4A0QAY',
  'msvalidate.01': 'C10044D9545A2DCA3A2D0E71E7F86894',
};
export const googleMeasurementId = 'G-56PNXZ2KKJ';
export function applySiteIntegrations(html) {
  const verification = Object.entries(siteVerification)
    .filter(([name]) => !html.includes(`name="${name}"`))
    .map(([name, content]) => `<meta name="${name}" content="${content}">`).join('');
  const analytics = html.includes('data-tln-analytics') ? '' : '<script data-tln-analytics type="module" src="/analytics-consent.mjs"></script>';
  return html.replace('</head>', `${verification}${analytics}</head>`);
}
