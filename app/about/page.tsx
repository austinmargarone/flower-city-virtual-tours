// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flower City Virtual Tours',
  description: 'About our Matterport 3D Virtual Tours and Web Applications developed with React and Next.js.',
  keywords: ['Virtual', 'Tours', 'Matterport', '3D', 'Web', 'Development', 'Next.js', 'React', 'JavaScript'],
}

export default function Page() {
    return <h1>Hello, About Page!</h1>
  }