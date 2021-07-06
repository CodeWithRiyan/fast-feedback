import Head from 'next/head';
import { Button, Heading, Text, Code } from '@chakra-ui/core';
import { useAuth } from '../lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Create Next Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
