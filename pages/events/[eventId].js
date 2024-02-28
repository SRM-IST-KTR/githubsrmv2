import Link from "next/link";

function NextPage() {
  return (
    <div>
      <h1>Next Page</h1>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
    </div>
  );
}

export default NextPage;
