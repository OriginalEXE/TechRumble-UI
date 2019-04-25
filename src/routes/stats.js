import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import ViewPage from '../views/page';
import TechTable from '../components/tech-table';
import TechCard from '../components/tech-card';
import PageHeading from '../components/page-heading';
import PageNotFound from '../components/page-not-found';
import PageDescription from '../components/page-description';
import Container from '../components/container';
import socket from '../socket';
import getCategoryBySlug from '../utils/get-category-by-slug';
import getCardsWithCounts from '../utils/get-cards-with-counts';

export default function Stats ({ categorySlug }) {
  const category = getCategoryBySlug ({ slug: categorySlug });

  if (!category) {
    return (
      <ViewPage>
        <Container maxWidth={500}>
          <PageNotFound/>
        </Container>
      </ViewPage>
    );
  }

  const [cards, setCards] = useState (getCardsWithCounts ({
    cards: category.cards,
    counts: [],
  }));

  const [initialDataLoaded, setInitialDataLoaded] = useState (false);

  // Subscribe to the web sockets
  useEffect (() => {
    const askForMentionsCount = () => {
      socket.emit (
        'getMentionsCount',
        { category: 'JavaScriptFramework' },
      );
    };
    const jsFrameworkCountChannel = socket.subscribe ('JavaScriptFrameworkCounts');

    jsFrameworkCountChannel.watch (({ counts, errors }) => {
      if (errors.length) {
        return;
      }

      if (!initialDataLoaded) {
        setInitialDataLoaded (true);
      }

      setCards (getCardsWithCounts ({
        cards: category.cards,
        counts,
      }));
    });

    jsFrameworkCountChannel.on ('subscribe', askForMentionsCount);

    return () => {
      jsFrameworkCountChannel.unsubscribe ();
    };
  }, []);

  return (
    <ViewPage>
      <Container maxWidth={500}>
        <PageHeading>Trending <span>{category.name}</span></PageHeading>
        <PageDescription>Results are updated in real-time</PageDescription>
        <TechTable initialDataLoaded={initialDataLoaded}>
          {cards.map (card => (
            <TechCard
              key={card.name}
              name={card.name}
              icon={card.icon}
              description={card.description}
              mentions={card.mentions}
              website={card.website}
            />
          ))}
        </TechTable>
      </Container>
    </ViewPage>
  );
}
