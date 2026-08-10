// Mobile menu toggle
document.addEventListener('click', function (event) {
  var toggle = event.target.closest('[data-menu-toggle]');
  if (toggle) {
    var menu = document.querySelector('[data-mobile-menu]');
    if (menu) {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    return;
  }

  // Quantity steppers (product page and cart)
  var stepper = event.target.closest('[data-quantity-change]');
  if (stepper) {
    var wrapper = stepper.closest('.quantity');
    var input = wrapper && wrapper.querySelector('input[type="number"]');
    if (input) {
      var step = parseInt(stepper.getAttribute('data-quantity-change'), 10);
      var min = parseInt(input.min || '0', 10);
      var next = Math.max(min, (parseInt(input.value, 10) || 0) + step);
      input.value = next;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
});

// Auto-submit the cart form when a quantity changes
document.addEventListener('change', function (event) {
  var input = event.target.closest('[data-cart-quantity]');
  if (input) {
    var form = input.closest('form');
    if (form) form.submit();
  }

  // Product page variant selection: update price, availability, and URL
  var variantSelect = event.target.closest('[data-variant-select]');
  if (variantSelect) {
    var productForm = variantSelect.closest('[data-product-form]');
    if (!productForm) return;
    var script = productForm.querySelector('[data-variants-json]');
    if (!script) return;

    var variants = JSON.parse(script.textContent);
    var selects = productForm.querySelectorAll('[data-variant-select]');
    var selected = Array.prototype.map.call(selects, function (s) { return s.value; });

    var match = variants.find(function (variant) {
      return variant.options.every(function (option, index) {
        return option === selected[index];
      });
    });

    var idInput = productForm.querySelector('input[name="id"]');
    var priceEl = productForm.querySelector('[data-product-price]');
    var button = productForm.querySelector('[data-add-to-cart]');

    if (match) {
      idInput.value = match.id;
      if (priceEl && match.price_formatted) priceEl.innerHTML = match.price_formatted;
      if (button) {
        button.disabled = !match.available;
        button.textContent = match.available
          ? button.getAttribute('data-label-add')
          : button.getAttribute('data-label-soldout');
      }
      var url = new URL(window.location.href);
      url.searchParams.set('variant', match.id);
      window.history.replaceState({}, '', url.toString());
    } else if (button) {
      button.disabled = true;
      button.textContent = button.getAttribute('data-label-unavailable');
    }
  }
});
