const appStoreUrl = "https://apps.apple.com/us/app/shutter-trail/id6792596736";
const siteRootUrl = new URL(".", document.currentScript.src);

const downloadDialog = document.createElement("dialog");
downloadDialog.className = "download-dialog";
downloadDialog.setAttribute("aria-labelledby", "download-dialog-title");
downloadDialog.innerHTML = `
  <div class="download-dialog-content">
    <button class="download-dialog-close" type="button" aria-label="Close download dialog">×</button>
    <img class="download-dialog-icon" src="${new URL("images/app-icon.png", siteRootUrl)}" alt="" width="64" height="64">
    <p class="eyebrow">Shutter Trail for iPhone</p>
    <h2 id="download-dialog-title">Ready to record your next trail?</h2>
    <p>Open Shutter Trail in the App Store in a new tab. This page will stay open so you can continue exploring the workflow.</p>
    <div class="actions">
      <a class="button app-store-button" href="${appStoreUrl}" target="_blank" rel="noopener" data-download-continue>
        <span class="app-store-kicker">View on the</span>
        <span class="app-store-name">App Store</span>
      </a>
      <button class="button secondary" type="button" data-download-cancel>Stay on this page</button>
    </div>
  </div>
`;
document.body.append(downloadDialog);

const closeButton = downloadDialog.querySelector(".download-dialog-close");
const cancelButton = downloadDialog.querySelector("[data-download-cancel]");

function closeDownloadDialog() {
  downloadDialog.close();
}

closeButton.addEventListener("click", closeDownloadDialog);
cancelButton.addEventListener("click", closeDownloadDialog);
downloadDialog.addEventListener("click", (event) => {
  if (event.target === downloadDialog) {
    closeDownloadDialog();
  }
});

document.addEventListener("click", (event) => {
  const appStoreLink = event.target.closest(`a[href="${appStoreUrl}"]`);
  if (!appStoreLink || appStoreLink.hasAttribute("data-download-continue")) {
    return;
  }

  event.preventDefault();
  downloadDialog.showModal();
});
