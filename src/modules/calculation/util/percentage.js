export default function percentage(part, total) {
  if (total === 0) {
    throw new Error("Cannot divide by zero");
  }
  return (part / total) * 100;
}
