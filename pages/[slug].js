import Head from 'next/head';
import { Project } from '../components/Project';
import { Footer } from '../components/Footer';

// Contentful Access Keys

const spaceId = process.env.NEXT_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_CONTENTFUL_ACCESS_TOKEN;

// Contentful Client

const contentful = require('contentful');
const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default function DynamicPage({ post, posts }) {
  return (
    <>
      <Project props={post} />
      <Footer props={posts} />
    </>
  );
}

// Contentful Data Fetching

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'portfolioProjects',
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'portfolioProjects',
    'fields.slug': params.slug,
  });

  let data2 = await client.getEntries({
    content_type: 'portfolio',
  });

  return {
    props: {
      post: data.items[0],
      posts: data2.items[0],
    },
    // revalidate: 60,
  };
}
