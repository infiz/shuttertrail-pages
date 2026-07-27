const appStoreUrl = "https://apps.apple.com/us/app/shutter-trail/id6792596736";

document.addEventListener("click", (event) => {
  const appStoreLink = event.target.closest(`a[href="${appStoreUrl}"]`);
  if (!appStoreLink) {
    return;
  }

  event.preventDefault();
  window.open(appStoreUrl, "_blank", "noopener");
});
