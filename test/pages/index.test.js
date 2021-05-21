import { getInitialised } from './utils';

describe('page | index', () => {
  let page;

  function createContentStub(contents) {
    return () => {
      return {
        only: () => {
          return {
            sortBy: () => {
              return {
                fetch: () => contents,
              };
            },
          };
        },
      };
    };
  }

  afterEach(() => {
    page.destroy();
  });

  test('is a Vue instance', async () => {
    const contents = [{}];

    page = await getInitialised({
      page: 'index',
      asyncDataOpts: { $content: createContentStub(contents) },
    });

    expect(page.vm).toBeTruthy();
  });

  test('render properly', async () => {
    const contents = [{}];

    page = await getInitialised({
      page: 'index',
      asyncDataOpts: { $content: createContentStub(contents) },
    });

    expect(page.html()).toMatchSnapshot();
  });

  [
    {
      articles: [{}],
      expectedArticles: undefined,
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
        asyncDataOpts: { $content: createContentStub(testCase.articles) },
      });

      const articlesLength = page.vm.articles
        ? page.vm.articles.length
        : undefined;

      expect(articlesLength).toBe(testCase.expectedArticles);
      expect(page.vm.remainingArticles.length).toBe(
        testCase.expectedRemainingArticles
      );
    });
  });
});
