// app/page.js
import React from "react";
import Link from "next/link";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div>
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-500 underline">
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
