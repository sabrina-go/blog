import { shallowMount } from '@vue/test-utils';
import ArticleCard from '@/components/ArticleCard';

describe('components | ArticleCard', () => {
  const article = {
    uid: 'test',
    data: {
      title: [{ text: 'Article Card test' }],
      excerpt: 'description',
      icon: { data: { image: 'img' } },
    },
  };
  let component;

  beforeEach(() => {
    component = shallowMount(ArticleCard, {
      stubs: {
        NuxtLink: true,
        PrismicRichText: true,
        PrismicImage: true,
      },
      propsData: {
        article,
      },
    });
  });

  test('is a Vue instance', () => {
    expect(component.vm).toBeTruthy();
  });

  test('render properly', () => {
    expect(component.html()).toMatchSnapshot();
  });

  test('should create one nuxt-link', () => {
    expect(component.findAll('nuxtlink-stub').length).toBe(1);
  });

  test('should use article title', () => {
    expect(component.find('h2').text()).toBe(article.data.title[0].text);
  });
});
