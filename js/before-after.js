const beforeAfterSlider = document.querySelector('[data-component="before-after-slider"]')
            
      function setSliderstate(e, element) {
        const sliderRange = element.querySelector('[data-before-after-range]');

        if (e.type === 'input') {
          sliderRange.classList.add('before-after-range-active');
          return;
        }

        sliderRange.classList.remove('before-after-range-active');
        element.removeEventListener('mousemove', moveSliderThumb);
      }

      function moveSliderThumb(e) {
        const sliderRange = document.querySelector('[data-before-after-range]');
        const thumb = document.querySelector('[data-image-comparison-thumb]');
        let position = e.layerY - 20;

        if (e.layerY <= sliderRange.offsetTop) {
          position = -20;
        }

        if (e.layerY >= sliderRange.offsetHeight) {
          position = sliderRange.offsetHeight - 20;
        }

        thumb.style.top = `${position}px`;
      }

      function moveSliderRange(e, element) {
        const value = e.target.value;
        const slider = element.querySelector('[data-before-after-slider]');
        const imageWrapperOverlay = element.querySelector('[data-before-after-overlay]');

        slider.style.left = `${value}%`;
        imageWrapperOverlay.style.width = `${value}%`;

        element.addEventListener('mousemove', moveSliderThumb);
        setSliderstate(e, element);
      }

      function init(element) {
        const sliderRange = element.querySelector('[data-before-after-range]');

        if ('ontouchstart' in window === false) {
          sliderRange.addEventListener('mouseup', e => setSliderstate(e, element));
          sliderRange.addEventListener('mousedown', moveSliderThumb);
        }

        sliderRange.addEventListener('input', e => moveSliderRange(e, element));
        sliderRange.addEventListener('change', e => moveSliderRange(e, element));
      }

      init(beforeAfterSlider);