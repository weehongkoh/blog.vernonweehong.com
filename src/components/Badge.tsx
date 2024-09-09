export default function Badge({ category }: Readonly<{ category: string }>) {
  return <div className="badge">{category}</div>;
}
