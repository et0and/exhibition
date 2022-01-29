import Head from "next/head";
import Link from "next/link";
import Image from "next/image"

import Container from "../components/Container";
import Section from "../components/Section";
import SingleColumn from "../components/SingleColumn";
import Header from "../components/Header";
import Footer from "../components/Footer";

import TwoUp from "../components/TwoUp";
import {
  getPostBySlug,
} from "../lib/lib";

function GuideCard({ guide, className }) {
  return (
    <div className={"bg-wall-100 dark:bg-antiwall-100 rounded-xl cursor-pointer aspect-w-none aspect-h-none md:aspect-w-5 md:aspect-h-4 " + className}>
      <Link href={`/guides/${guide.slug}`}>
        <div className="p-8 measure ">
          <h4 className="mb-4">{guide.title}</h4>
          <p>{guide.description}</p>
        </div>
      </Link>
    </div>
  )
}

GuideCard.defaultProps = {
  className: "",
}

function FaqCard({ faq, className }) {
  return (
    <div className={"bg-green-100 dark:bg-antiwall-100 rounded-xl cursor-pointer h-96 " + className}>
      <Link href={`/faq`}>
        <div className="p-8 measure">
          <h4 className="mb-4">{faq.title}</h4>
          <p>{faq.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default function Home({
  imaginaryId,
  lockedDown,
  faq,
}) {
  
  return (
    <Container>
      <Head>
        <title>Exhibitions</title>
      </Head>
      <SingleColumn>
        <Header />
        {
          // Hero Statement
        }
        <Section>
          <div className="relative w-full bg-gray-200 rounded-2xl hero-image-height overflow-hidden bg-hero-img">
            <div className="absolute text-black dark:text-white flex w-full h-full items-center p-4 md:p-8 lg:p-12">
              <div>
                <h1>A place for exhibitions </h1>
                <h1>past, present, future</h1>
              </div>
            </div>

          </div>

        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">What's on now</h2>
          <TwoUp className="mt-8">
            <GuideCard guide={imaginaryId} />
          </TwoUp>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Upcoming</h2>
          <TwoUp className="mt-8">
          <GuideCard guide={imaginaryId} />
          </TwoUp>
        </Section>

        <Section>
          <h2 className="m-0 p-0 mr-4">Past shows</h2>
          <TwoUp className="mt-8">
            <GuideCard guide={lockedDown} />
          </TwoUp>
        </Section>

        {/* <Section>
          <h2 className="m-0 p-0 mr-4">FAQ</h2>
          <FaqCard faq={faq} className="mt-8" />
        </Section> */}

        <Section>
          <h2 className="m-0 p-0 mr-4 measure">An initiative by Te Wāhi Auaha</h2>
          <p className="pb-12 mt-8 measure">
            A new kind of makerspace, at Takapuna Grammar School
          </p>
          {/* <Link href="/faq">
            <button className="button-lg type-ui text-white bg-wall-600 mb-4">
            Check out the FAQ
            </button>
          </Link> */}
        </Section>

        <Footer />
      </SingleColumn>
    </Container>
  );
}

export async function getStaticProps() {

  const imaginaryId = getPostBySlug('imaginary-museum', ['slug', 'title', 'description'], 'guides')

  const lockedDown = getPostBySlug('locked-down', ['slug', 'title', 'description'], 'guides')

  const faq = getPostBySlug('faq', ['slug', 'title', 'description'], '/')

  return {
    props: {
      imaginaryId,
      lockedDown,
      faq,
    },
  };
}
