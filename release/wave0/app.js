"use strict";

// The native player also works without JavaScript; show a fallback on load failure.
const video = document.querySelector("#intro-video");
const placeholder = document.querySelector("#film-placeholder");
function updateVideoState() {
  const failed = Boolean(video.error);
  video.hidden = failed;
  placeholder.hidden = !failed;
}
video.addEventListener("loadedmetadata", updateVideoState);
video.addEventListener("error", updateVideoState);
updateVideoState();

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(selected, focus = false) {
  for (const tab of tabs) {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  }
  if (focus) selected.focus();
}
for (const [index, tab] of tabs.entries()) {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    const next = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[event.key];
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next], true);
    }
  });
}

const dialog = document.getElementById("figure-dialog");
const dialogImage = document.getElementById("figure-dialog-image");
for (const button of document.querySelectorAll("[data-zoom]")) {
  button.addEventListener("click", () => {
    if (typeof dialog.showModal !== "function") {
      window.open(button.dataset.zoom, "_blank", "noopener");
      return;
    }
    dialogImage.src = button.dataset.zoom;
    dialogImage.alt = button.querySelector("img").alt;
    dialog.showModal();
  });
}
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});

const copyButton = document.querySelector(".copy-button");
let copyReset;
copyButton.addEventListener("click", async () => {
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(document.getElementById("clone-command").textContent);
    copyButton.textContent = "Copied ✓";
    status.textContent = "Git clone command copied.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("clone-command"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Selected";
    status.textContent = "Copy is unavailable. The command is selected; use your device’s copy action.";
  }
  clearTimeout(copyReset);
  copyReset = setTimeout(() => { copyButton.textContent = "Copy ⧉"; }, 2400);
});

if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll(".nav-links a")];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-10% 0px -65% 0px", threshold: 0 });
  for (const link of links) observer.observe(document.querySelector(link.hash));
}
