import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <Link href="/" style={{ color: "blue" }}>
        Go back home
      </Link>
    </div>
  );
}