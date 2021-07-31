import { getInitialised } from './utils';

describe('page | index', () => {
  let page;

  function createContentStub(contents) {
    return {
      api: {
        query: () => {
          return { results: contents };
        },
      },
      predicates: {
        at: () => {},
      },
    };
  }

  afterEach(() => {
    page.destroy();
  });

  test('is a Vue instance', async () => {
    const contents = [{}];

    page = await getInitialised({
      page: 'index',
      opts: { stubs: { ArticleCard: true } },
      asyncDataOpts: { $prismic: createContentStub(contents) },
    });

    expect(page.vm).toBeTruthy();
  });

  test('render properly', async () => {
    const contents = [{}];

    page = await getInitialised({
      page: 'index',
      opts: { stubs: { ArticleCard: true } },
      asyncDataOpts: { $prismic: createContentStub(contents) },
    });

    expect(page.html()).toMatchSnapshot();
  });

  [
    {
      articles: [{}],
      expectedArticles: 0,
      expectedRemainingArticles: 1,
    },
    {
      articles: [{}, {}, {}, {}, {}, {}, {}],
      expectedArticles: 6,
      expectedRemainingArticles: 1,
    },
  ].forEach((testCase) => {
    test(`articles should be ${testCase.expectedArticles} and remaining-articles should be ${testCase.expectedRemainingArticles}`, async () => {
      page = await getInitialised({
        page: 'index',
        opts: { stubs: { ArticleCard: true } },
        asyncDataOpts: { $prismic: createContentStub(testCase.articles) },
      });

      const articlesLength = page.vm.articles.length;

      expect(articlesLength).toBe(testCase.expectedArticles);
      expect(page.vm.remainingArticles.length).toBe(
        testCase.expectedRemainingArticles
      );
    });
  });
});
