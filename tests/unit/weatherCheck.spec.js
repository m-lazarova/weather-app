import { shallowMount } from '@vue/test-utils'
import WeatherCheck from '@/components/WeatherCheck.vue'

describe('WeatherCheck.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(WeatherCheck, {
    })
  });

  describe('when the user has not interacted with the page', () => {
    it('has a `Weather App` heading', () => {
      expect(wrapper.text()).toMatch('Weather App');
    });

    it('has a button with text `Check the temperature`', () => {
      let button = wrapper.find('button');
      expect(button.text()).toMatch('Check the temperature');
    });

    it('does not display any text initially', () => {
      expect(wrapper.find('.weather-check__description')
        .isVisible()).toBe(false);
    });
  });



})
