'use client';

import { useState } from 'react';
import Head from 'next/head';
import { useSignInEmailPasswordless } from '@nhost/nextjs';
import { Button, Input, InputLabel } from '@xyflow/xy-ui';

import { AuthErrorNotification, MagicLinkSuccessNotification } from './AuthNotification';

function Signup() {
  const [email, setEmail] = useState<string>('');
  const [metadata, setMetadata] = useState<{ openSource: boolean; url: string }>({ openSource: false, url: '' });
  const { signInEmailPasswordless, isLoading, isSuccess, isError, error } = useSignInEmailPasswordless();

  const handleSubmit = async (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    await signInEmailPasswordless(email, { metadata, redirectTo: '/' });
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <form onSubmit={handleSubmit}>
        {isError && <AuthErrorNotification error={error} />}
        {isSuccess && <MagicLinkSuccessNotification />}
        <div className="mb-2">
          <InputLabel htmlFor="email">Project Url</InputLabel>
          <Input
            variant="square"
            required
            id="url"
            type="url"
            value={metadata.url}
            onChange={(evt) => setMetadata({ ...metadata, url: evt.target.value })}
            placeholder="Your Project Url"
          />
        </div>
        <div className="mb-2">
          <InputLabel htmlFor="email">Contact Email</InputLabel>
          <Input
            variant="square"
            required
            id="email"
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            autoComplete="on"
            placeholder="Your Email"
          />
        </div>
        <div className="flex mb-4">
          <input
            className="shrink-0 w-4 h-4 mr-1 mb-auto mt-1"
            id="confirm"
            type="checkbox"
            required
            checked={metadata.openSource}
            onChange={(evt) => setMetadata({ ...metadata, openSource: evt.target.checked })}
          />
          <label className="text-muted-foreground text-sm" htmlFor="confirm">
            I confirm that I am using React Flow Pro only for non-commercial purposes in this open source project
          </label>
        </div>
        <Button size="lg" className="w-full" disabled={isLoading} loading={isLoading} type="submit" variant="react">
          Sign Up
        </Button>
      </form>
    </>
  );
}

export default Signup;
