import React from "react";

const BlogDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="flex justify-center items-center mt-8">
    <div className="p-6 w-full max-w-lg bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
        {post.title}
      </h1>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </div>
  </div>
  
  );
};

export default BlogDetails;
