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

  describe('when the user has hit the button', () => {
    beforeEach(() => {
      let button = wrapper.find('button');

      button.trigger('click');
      wrapper.setData({ weatherPicker: 'Glasgow'  });
    });

    it('allows to click the button', () => {
      expect(wrapper.find('.weather-check__description')
        .isVisible()).toBe(true);
    });

    it('displays additional information for glasgow',  () => {
      expect(wrapper.find('.weather-check__paragraph--glasgow-specific')
        .isVisible()).toBe(true);
    });


    it('advises to wear a tshirt if temperature > 15', () =>  {
      wrapper.setData({ weatherPicker: 20 });
      let paragraph = wrapper.find('.weather-check__paragraph--glasgow-specific');
      expect(paragraph.text()).toMatch('You should wear a t-shirt');
    });
  });
});
