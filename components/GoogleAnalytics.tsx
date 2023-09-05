import Script from 'next/script.js';

const isProduction = process.env.NODE_ENV === 'production';

const GoogleAnalytics = ({ analyticsId }: { analyticsId: string }) => {
  return (
    <>
      {isProduction && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
          />

          <Script strategy="afterInteractive" id="ga-script">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}');
      `}
          </Script>
        </>
      )}
    </>
  );
};

export default GoogleAnalytics;
