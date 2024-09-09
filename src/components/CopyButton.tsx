"use client";

import { useState } from "react";

import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CopyToClipboardButton({
  content,
}: Readonly<{
  content: string;
}>) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className="flex items-center gap-x-1"
    >
      <FontAwesomeIcon icon={faCopy} className="h-3 w-3" />
      <span className="font-xs">{isCopied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
