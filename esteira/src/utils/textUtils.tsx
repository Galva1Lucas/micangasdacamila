import React from 'react';

/**
 * Renders a headline string and applies a stylized, high-converting underline
 * to the specified target keyword or phrase.
 */
export function renderHeadline(
  headline: string,
  underlinedWord?: string,
  underlineColorClass: string = 'decoration-[#D83361]'
): React.ReactNode {
  if (!underlinedWord) {
    return headline;
  }

  const lowerHeadline = headline.toLowerCase();
  const lowerWord = underlinedWord.toLowerCase();
  const startIndex = lowerHeadline.indexOf(lowerWord);

  if (startIndex === -1) {
    return headline;
  }

  const endIndex = startIndex + underlinedWord.length;
  const before = headline.substring(0, startIndex);
  const match = headline.substring(startIndex, endIndex);
  const after = headline.substring(endIndex);

  return (
    <>
      {before}
      <span
        className={`underline ${underlineColorClass} decoration-[4px] sm:decoration-[6px] underline-offset-6 sm:underline-offset-8 font-black transition-all`}
      >
        {match}
      </span>
      {after}
    </>
  );
}
