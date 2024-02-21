import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {ReactNode} from "react";

import Navigator from '~/components/navigator';
import stylesGlobal from '~/styles/global.css';
import stylesNormalizer from '~/styles/normalizer.css';

export function meta(){
  return (
    [
      {
        title: 'Inicio'
      },
      {
        charset: 'UTF-8'
      },
      {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ]
  )
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: stylesNormalizer
  },
  {
    rel: 'stylesheet',
    href: stylesGlobal
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: undefined
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap'
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

function Document({children}: { children: ReactNode }){
  return (
   <html lang='es'>
   <head>
     <Meta/>
     <Links/>
     <title></title>
   </head>

   <body>
   <Navigator/>
   {children}
   <ScrollRestoration/>
   <Scripts/>
        <LiveReload/>
      </body>
   </html>
  )
}
export default function App() {
  return (
    <Document>
      <Outlet/>
    </Document>
  );
}
