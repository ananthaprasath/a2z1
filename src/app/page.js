import Home from './Component/Home/Home';

export const metadata = {
  title: "A2ZSMS | Bulk SMS & WhatsApp API Solutions in Bangaloressss",
  description: "Get reliable Bulk SMS and WhatsApp API solutions in Bangalore with A2ZSMS.",
  keywords: "Bulk SMS service, WhatsApp messaging API, business communication solutions, SMS marketing, WhatsApp API solutions in Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in" }],
  openGraph: {
    title: "A2ZSMS | Bulk SMS & WhatsApp API Solutions in Bangalore",
    description: "Enhance business communication with efficient messaging solutions.",
    url: "https://www.a2zsms.in",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Bulk SMS & WhatsApp API Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A2ZSMS | Bulk SMS & WhatsApp API Solutions in Bangalore",
    description: "Get reliable Bulk SMS and WhatsApp API solutions in Bangalore with A2ZSMS.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  themeColor: "#007bff",
  alternates: {
    canonical: "https://www.a2zsms.in",
  },
};

const Page = () => {
  return <Home />;
};

export default Page;
