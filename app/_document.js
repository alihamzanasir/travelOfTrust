import Head from 'next/head'
import React from 'react'

const _document = () => {
  const headersList = headers();
  const primary = headersList.get("x-theme-primary") || "199 89% 48%";
  return (
    <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"/>
    <meta name="x-theme-primary" content={/* get from headers */ ""} />
      <meta name="x-theme-primary-foreground" content={/* get from headers */ ""} />
      <meta name="google-adsense-account" content="ca-pub-7182622830003276"></meta>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7182622830003276"
     crossorigin="anonymous"></script>
    

    <style>{`:root {
            --primary: ${primary};
          }`}</style>
    </Head>
  )
}

export default _document