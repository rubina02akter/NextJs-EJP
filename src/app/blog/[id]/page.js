import React from "react";

const BlogDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="p-4 w-3/5 mx-auto mt-5 bg-slate-300 rounded-md">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.body}</p>
    </div>
  );
};

export default BlogDetails;
