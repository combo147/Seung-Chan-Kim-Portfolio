import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function ProductPage({ params }: any) {
  const filePath = path.join(
    process.cwd(),
    "content/products",
    `${params.slug}.md`
  );

  const file = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(file);

  return (
    <main style={{ padding: 24 }}>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <p>{data.region} · {data.duration_days}일</p>
      <p>시작가 {Number(data.price_from).toLocaleString()}원</p>
    </main>
  );
}
