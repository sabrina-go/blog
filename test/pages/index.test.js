import { mount } from '@vue/test-utils';
import Index from '@/pages/index';

describe('page | index', () => {
  let page;
  beforeEach(() => {
    page = mount(Index);
  });

  test('is a Vue instance', () => {
    expect(page.vm).toBeTruthy();
  });

  test('render properly', () => {
    expect(page.html()).toMatchSnapshot();
  });
});
