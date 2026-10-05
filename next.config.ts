import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Local, hand-authored decorative illustrations only (no user-uploaded
    // SVGs) — safe to let next/image optimize them like any other asset.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
      {
        pathname: '/**',
        search: '?*',
      },
    ],
  },
  async redirects() {
    return [
      // Standard homepage alias
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Common Contact aliases
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      // Common About aliases
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      // Portfolio / Case Studies -> Work
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/portfolio/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/case-studies/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
      // Singular /service/* -> Plural /services/*
      {
        source: '/service/:slug*',
        destination: '/services/:slug*',
        permanent: true,
      },
      // Singular /industry/* -> Plural /industries/*
      {
        source: '/industry/:slug*',
        destination: '/industries/:slug*',
        permanent: true,
      },
      // Alternate blog paths -> /blog
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/posts',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/posts/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
