import { shallowMount } from '@vue/test-utils'
import ArticleCard from '@/components/ArticleCard'

describe('components | ArticleCard', () => {
  const article = {
    slug: 'test',
    title: 'Article Card test',
    description: 'description',
  }
  let component

  beforeEach(() => {
    component = shallowMount(ArticleCard, {
      stubs: {
        NuxtLink: true,
      },
      propsData: {
        article,
      },
    })
  })

  test('is a Vue instance', () => {
    expect(component.vm).toBeTruthy()
  })

  test('render properly', () => {
    expect(component.html()).toMatchSnapshot()
  })

  test('should create one nuxt-link', () => {
    expect(component.findAll('nuxtlink-stub').length).toBe(1)
  })

  test('should use article title', () => {
    expect(component.find('h2').text()).toBe(article.title)
  })

  test('should use article description', () => {
    expect(component.find('p').text()).toBe(article.description)
  })
})
