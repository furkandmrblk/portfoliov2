import Head from 'next/head';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Quote } from '../components/Quote';
import { Workflow } from '../components/Workflow';
import { Footer } from '../components/Footer';

const spaceId = process.env.NEXT_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

// Contentful Client
const contentful = require('contentful');
const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default function Home({ posts, projects }) {
  return (
    <>
      <Head>
        <title>furkandmrblk - Homepage</title>
      </Head>
      <Hero props={posts} />
      <About props={posts} />
      <Workflow props={posts} />
      <Projects props={projects} />
      <Quote props={posts} />
      <Contact props={posts} />
      <Footer props={posts} />
    </>
  );
}

// Contentful Data Fetching

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'portfolio',
  });

  let data2 = await client.getEntries({
    content_type: 'portfolioProjects',
  });

  return {
    props: {
      posts: data.items[0],
      projects: data2.items,
    },
    // revalidate: 60,
  };
}
