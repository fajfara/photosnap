import React from "react";
import Heading from "../base/Heading";
import Image from "next/image";
import Button from "../button/Button";

const CTABanner = ({
  content: {
    text: { heading, paragraph, cta },
    img: { src, alt },
  },
  options: { flipped, dark },
}) => {
  return (
    <div
      className={`flex flex-row-reverse flex-wrap ${
        flipped ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`md:w-42/100 py-20 sm:py-44 px-7 sm:px-28 bg-black ${
          dark ? "bg-black" : "bg-white"
        }`}
      >
        <Heading
          h2Ash1={true}
          className={`uppercase mb-5 ${dark ? "text-white" : "text-black"}`}
          level={2}
        >
          {heading}
        </Heading>
        <p className={`mb-12 ${dark ? "text-white" : "text-black"}`}>
          {paragraph}
        </p>
        <Button
          asLink={true}
          href={cta.link}
          type="secondary"
          variation={dark ? "light" : "dark"}
          padding="py-3"
        >
          {cta.text}
        </Button>
      </div>
      <div className="h-64 w-full flex-grow relative pr-28">
        <Image src={src} alt={alt} layout="fill" objectFit={"cover"} />
      </div>
    </div>
  );
};

export default CTABanner;
