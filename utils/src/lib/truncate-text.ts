export function truncateText(text: string, maxLength = 140): string {
  const normalizedText = text.trim();

  if (maxLength <= 0) {
    return '';
  }

  if (normalizedText.length <= maxLength) {
    return normalizedText;
  }

  return `${normalizedText.slice(0, maxLength).trimEnd()}...`;
}
