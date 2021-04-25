import Head from 'next/head';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Quote } from '../components/Quote';
import { Workflow } from '../components/Workflow';

export default function Home() {
  return (
    <>
      <Head>
        <title>furkandmrblk - Homepage</title>
      </Head>
      <Hero />
      <About />
      <Workflow />
      <Projects />
      <Quote />
      <Contact />
    </>
  );
}
