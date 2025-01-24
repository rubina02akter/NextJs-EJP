// app/page.js
import React from "react";
import Link from "next/link";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg max-w-3xl mx-auto">
    <h1 className="text-3xl font-extrabold text-gray-800 underline mb-6">Blogs :</h1>
    <div className="space-y-4">
      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <ul>
            <li>
              <Link
                href={`/blog/${post.id}`}
                className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline"
              >
                {post.title}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default page;
