const links = document.querySelectorAll('.nav a');

links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#edf4ff';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = '#a9b7ce';
  });
});

const tagTrack = document.querySelector(".tag-track");
const firstTagGroup = tagTrack?.querySelector(".tag-group");

if (tagTrack && firstTagGroup) {
  const fillMarquee = () => {
    tagTrack.querySelectorAll('.tag-group[aria-hidden="true"]').forEach((group) => group.remove());

    const gap = Number.parseFloat(getComputedStyle(tagTrack).columnGap) || 0;
    const step = firstTagGroup.getBoundingClientRect().width + gap;
    const visibleWidth = tagTrack.parentElement.getBoundingClientRect().width;

    tagTrack.style.setProperty("--marquee-step", `${step}px`);

    while (tagTrack.scrollWidth < visibleWidth + step + 1) {
      const clone = firstTagGroup.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      tagTrack.append(clone);
    }
  };

  fillMarquee();
  window.addEventListener("resize", fillMarquee);
}
