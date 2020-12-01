import Head from "next/head";
import CTABanner from "../components/banner/CTABanner";

const ctaBanners = [
  {
    options: {
      flipped: false,
      dark: true,
    },
    content: {
      text: {
        heading: "Create and share your photo stories",
        paragraph:
          "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
        cta: {
          text: "Get an invite",
          link: "/",
        },
      },
      img: {
        src: "/images/home/desktop/create-and-share.jpg",
        alt: "A man standing on a port",
      },
    },
  },
  {
    options: {
      flipped: true,
      dark: false,
    },
    content: {
      text: {
        heading: "Beautiful stories every time",
        paragraph:
          "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
        cta: {
          text: "View the stories",
          link: "/",
        },
      },
      img: {
        src: "/images/home/desktop/beautiful-stories.jpg",
        alt: "Computer on a desk with graphic design program opened",
      },
    },
  },
  {
    options: {
      flipped: false,
      dark: false,
    },
    content: {
      text: {
        heading: "Designed for everyone",
        paragraph:
          "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
        cta: {
          text: "View the stories",
          link: "/",
        },
      },
      img: {
        src: "/images/home/desktop/designed-for-everyone.jpg",
        alt:
          "A man holding a professional video camera and recording something",
      },
    },
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {ctaBanners.map((config, index) => (
          <CTABanner {...config} key={index} />
        ))}
      </main>
    </div>
  );
}
