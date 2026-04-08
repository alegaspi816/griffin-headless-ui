export default async function Home() {
  const res = await fetch("https://griffinheadlesscms.kinsta.cloud/wp-json/wp/v2/pages");
  const data = await res.json();

  return (
    <div>
      <h1>Griffin Headless Site</h1>
      {data.map((page) => (
        <div key={page.id}>
          <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
        </div>
      ))}
    </div>
  );
}