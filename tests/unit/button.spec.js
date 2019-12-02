import { expect } from 'chai'
// import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'

describe('Button.vue', () => {
  it('set icon', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'phone'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#i-phone')
  })
})
