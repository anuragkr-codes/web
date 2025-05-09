import { FC } from 'react';
import { Metadata } from 'next';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import {
  ContentGrid,
  ContentGridItem,
  Heading,
  Text,
  Button,
  Section,
} from '@xyflow/xy-ui';
import { BaseLayout, Hero } from 'xy-shared';

import christopher from '../../../../public/img/christopher.jpg';
import moritz from '../../../../public/img/moritz.jpg';
import peter from '../../../../public/img/peter.jpg';
import burak from '../../../../public/img/burak.jpg';
import abbey from '../../../../public/img/abbey.jpg';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Get to know the team behind xyflow, React Flow, and Svelte Flow.',
};

const Page: FC = () => {
  return (
    <BaseLayout>
      <Hero
        kicker="About Us"
        title="The story of xyflow"
        subtitle="How we got here"
        align="center"
      />

      <Section className="max-w-screen-md mx-auto mt-12 lg:my-12">
        <Text size="lg" className="leading-8 mb-8">
          Since 2014, Moritz and Christopher have been creating infographics,
          tools, and projects together through their interactive news agency,{' '}
          <Link href="https://webkid.io/" className="text-pink-500">
            webkid
          </Link>
          . Along the way to creating{' '}
          <Link href="https://datablocks.pro/" className="text-pink-500">
            Datablocks
          </Link>{' '}
          in 2019, they developed React Flow and decided to open-source it. More
          and more people started using it, to the point they decided to work on
          it full-time in 2021 to create a sustainable open-source project like
          the many they had used.
        </Text>
        <Text size="lg" className="leading-8 mb-8">
          While expanding the team, we generalized the core of React Flow to
          support other frameworks beyond React. In order to keep all of our
          ducks in a row, we created xyflow to be the house where all of our
          projects could live. Now, here we are- happy maintainers of a couple
          of libraries we&apos;re proud of with wonderful communities behind
          them :)
        </Text>
        <Text size="lg" className="leading-8 mb-8">
          If you need anything, have an idea, or just want to say hi, we&apos;re
          an email away at info@xyflow.com.
        </Text>
        <Text size="lg" className="leading-8">
          ✌🏻 the xyflow team
        </Text>
      </Section>

      <div className="flex justify-center mt-16 lg:mt-32">
        <div className="max-w-3xl w-full">
          <div className="flex justify-center items-center mb-2">
            <UserGroupIcon className="w-8 h-8" />
          </div>
          <Heading className="text-center">Meet the team</Heading>
          <Text size="lg" className="text-center text-light  mt-2">
            Who&apos;s driving this thing?
          </Text>
        </div>
      </div>

      <ContentGrid className="mt-16 lg:mt-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <TeamCard
          name="Christopher"
          teamPic={christopher}
          description="Christopher doesn't remember anything before 2015. He woke up on the shores of the Spree, where he wandered into the offices of the newspaper Zeit and they gave him a job as a front-end developer, mistaking him for the potential new hire. He quickly rose through the ranks there. Now he codes at xyflow, hoping one day he will remember how he got here, and what the meaning of all this is anyway."
          links={[
            { linkName: 'Twitter', route: 'https://twitter.com/chrtze' },
            { linkName: 'Github', route: 'https://github.com/chrtze' },
          ]}
        />
        <TeamCard
          name="Moritz"
          teamPic={moritz}
          description="Moritz was raised in the depths of Teutoburger Wald by a pack of wolves, learning how to hunt, survive, and develop front-end applications. He abandoned his pack after a disagreement in 2019, where he fled to the streets of Berlin. He now maintains React Flow, and dreams of one day rejoining his pack."
          links={[
            { linkName: 'Twitter', route: 'https://twitter.com/moklick' },
            { linkName: 'Github', route: 'https://github.com/moklick' },
          ]}
        />
        <TeamCard
          name="Peter"
          teamPic={peter}
          description="Peter has been directing a mockumentary of the xyflow team a la The Office since he broke into our building during the summer of 2023. Luckily for our team, the footage will never be released since he never asked us to sign a talent waiver, and none of us have the heart to tell him. Once he's done editing the footage (he keeps saying 'one more week'), we're hoping he'll make some contributions to the Svelte Flow library and docs."
          links={[
            { linkName: 'Github', route: 'https://github.com/peterkogo' },
          ]}
        />
        <TeamCard
          name="Abbey"
          teamPic={abbey}
          description="Abbey spent the first twenty years of her career finely crafting an innovative sea bass fishing technique. The world of sea bass became all too political for her, but luckily she found xyflow, which she wrongly assumed was another commercial fishing company. She is still figuring out how to turn on a computer, but once she does, she is excited to start contributing to the team."
          links={[
            { linkName: 'Github', route: 'https://github.com/printerscanner' },
          ]}
        />
        <TeamCard
          name="Burak"
          teamPic={burak}
          description="Burak created Vue Flow while aboard a pirate ship, hoping the motley crew could better organize themselves with a node-based cleaning schedule. Even after his ship was commandeered on the shores of Hamburg, he continues to seek those harsh bone-breaking conditions on land through Brazilian Jiu Jitsu, skateboarding, and open source software development.
          "
          links={[
            { linkName: 'Github', route: 'https://github.com/bcakmakoglu' },
            {
              linkName: 'Website',
              route: 'https://www.scheissaufdeinmarketingdusalamiwurst.de/',
            },
          ]}
        />
      </ContentGrid>
    </BaseLayout>
  );
};

function TeamCard({
  name,
  description,
  links,
  teamPic,
}: {
  name: string;
  description: string;
  teamPic?: StaticImageData;

  links?: Array<{ route: string; linkName: string }>;
}) {
  return (
    <ContentGridItem>
      {teamPic && (
        <Image
          src={teamPic}
          alt={name}
          className="mb-8 lg:-mt-8"
          width="260"
          height="304"
        />
      )}
      {!teamPic && (
        <div className="mb-8 lg:-mt-8" style={{ width: 260, height: 304 }} />
      )}

      <Heading as="p" size="sm" className="mb-4">
        {name}
      </Heading>
      <Text className="mb-4">{description}</Text>

      <div className="flex items-center space-x-4 mt-8">
        {links &&
          links.map((link) => {
            return (
              <Button
                key={link.route}
                asChild
                variant="link"
                className=" text-md"
              >
                <Link href={link.route}>
                  {link.linkName}{' '}
                  <ArrowRightCircleIcon className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            );
          })}
      </div>
    </ContentGridItem>
  );
}

export default Page;
