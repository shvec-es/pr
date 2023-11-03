import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import article from '../../data/article.json';
import stats from '../../data/data.json';
import forbes from '../../data/forbes.json';
import transactions from '../../data/transactions.json';

export const App = () => {
  const { poster, tag, title, description, name, avatar, postedAt } = article;
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          name={name}
          avatar={avatar}
          postedAt={postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={stats} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
};
