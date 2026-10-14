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
  const analytics = html.includes('data-tln-analytics') ? '' : `<script data-tln-analytics>(function(){if(!['thailivenow.com','www.thailivenow.com'].includes(location.hostname))return;window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${googleMeasurementId}');var tag=document.createElement('script');tag.async=true;tag.src='https://www.googletagmanager.com/gtag/js?id=${googleMeasurementId}';document.head.appendChild(tag);})();</script>`;
  return html.replace('</head>', `${verification}${analytics}</head>`);
}
