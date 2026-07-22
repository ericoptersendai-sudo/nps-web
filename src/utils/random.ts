export function sample<T>(items: T[], count: number) {
  return shuffle(items).slice(0, count);
}

export function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return hours ? `${hours}h ${remaining}m` : `${remaining}m`;
}

export function formatStudyTime(seconds: number) {
  if (seconds < 60) return `${seconds}s`;
  return formatMinutes(Math.floor(seconds / 60));
}
