(() => {
  const fileInput = document.querySelector("#brand-assets");
  const previewList = document.querySelector("#image-preview-list");

  if (!fileInput || !previewList) {
    return;
  }

  let selectedFiles = [];
  const objectUrls = new Map();

  function getRemoveLabel() {
    const language = document.documentElement.lang;
    if (language === "fr") return "Supprimer l'image";
    if (language === "en") return "Remove image";
    return "Eliminar imagen";
  }

  function syncFileInput() {
    if (!("DataTransfer" in window)) {
      return;
    }

    const transfer = new DataTransfer();
    selectedFiles.forEach((file) => transfer.items.add(file));
    fileInput.files = transfer.files;
  }

  function renderPreviews() {
    objectUrls.forEach((url) => URL.revokeObjectURL(url));
    objectUrls.clear();
    previewList.replaceChildren();

    selectedFiles.forEach((file, index) => {
      const preview = document.createElement("div");
      preview.className = "image-preview";

      const image = document.createElement("img");
      const objectUrl = URL.createObjectURL(file);
      objectUrls.set(index, objectUrl);
      image.src = objectUrl;
      image.alt = file.name;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "image-preview-remove";
      removeButton.textContent = "×";
      removeButton.setAttribute("aria-label", `${getRemoveLabel()}: ${file.name}`);
      removeButton.addEventListener("click", () => {
        selectedFiles = selectedFiles.filter((_, fileIndex) => fileIndex !== index);
        syncFileInput();
        renderPreviews();
      });

      preview.append(image, removeButton);
      previewList.append(preview);
    });
  }

  function updateRemoveLabels() {
    previewList.querySelectorAll(".image-preview-remove").forEach((button) => {
      const preview = button.closest(".image-preview");
      const image = preview && preview.querySelector("img");
      if (image) {
        button.setAttribute("aria-label", `${getRemoveLabel()}: ${image.alt}`);
      }
    });
  }

  fileInput.addEventListener("change", () => {
    const newFiles = Array.from(fileInput.files).filter((file) => file.type.startsWith("image/"));
    const existingKeys = new Set(selectedFiles.map((file) => `${file.name}-${file.size}-${file.lastModified}`));

    newFiles.forEach((file) => {
      const key = `${file.name}-${file.size}-${file.lastModified}`;
      if (!existingKeys.has(key)) {
        selectedFiles.push(file);
        existingKeys.add(key);
      }
    });

    syncFileInput();
    renderPreviews();
  });

  document.querySelector("#site-language")?.addEventListener("change", () => {
    window.setTimeout(updateRemoveLabels, 0);
  });

  window.addEventListener("beforeunload", () => {
    objectUrls.forEach((url) => URL.revokeObjectURL(url));
  });
})();
