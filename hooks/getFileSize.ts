"use client";

import { useState } from "react";

type Props = {
  file: File | null;
};

export default function GetFileSize(file: File | null) {
  const [imageSizeSupported, setImageSizeSupported] = useState(false);
  if (file) {
    const img = document.createElement("img");

    const selectedImage = file;

    const objectURL = URL.createObjectURL(file);

    img.onload = function handleLoad() {
      console.log(`Width: ${img.width}, Height: ${img.height}`);

      if (img.width > 400 || img.height > 400) {
        alert("The image's width or height is more than 400px");
        setImageSizeSupported(false);
      }
      setImageSizeSupported(true);
      URL.revokeObjectURL(objectURL);
    };
    img.src = objectURL;

    return imageSizeSupported;
  }
}
