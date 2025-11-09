function timeline(selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  const items = container.querySelectorAll(".timeline-item");
  const activeClass = "timeline-item--active";
  const imgSelector = ".timeline__img";

  // Set the first item as active
  if (items.length > 0) {
    items[0].classList.add(activeClass);
    const firstImg = items[0].querySelector(imgSelector);
    if (firstImg) {
      container.style.backgroundImage = `url(${firstImg.getAttribute("src")})`;
    }
  }

  const itemLength = items.length;

  window.addEventListener("scroll", () => {
    const pos = window.scrollY;

    items.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      const min = window.scrollY + rect.top;
      const max = min + rect.height;

      // If near the last item
      if (i === itemLength - 2 && pos > min + rect.height / 2) {
        items.forEach(el => el.classList.remove(activeClass));
        const lastItem = items[itemLength - 1];
        const lastImg = lastItem.querySelector(imgSelector);
        if (lastImg) {
          container.style.backgroundImage = `url(${lastImg.getAttribute("src")})`;
        }
        lastItem.classList.add(activeClass);
      }
      // If this item is currently visible in the viewport
      else if (pos <= max - 40 && pos >= min) {
        items.forEach(el => el.classList.remove(activeClass));
        const img = item.querySelector(imgSelector);
        if (img) {
          container.style.backgroundImage = `url(${img.getAttribute("src")})`;
        }
        item.classList.add(activeClass);
      }
    });
  });
}

// Initialize
timeline("#timeline-1");

