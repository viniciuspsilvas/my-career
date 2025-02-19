"use client";

export default function BlogPage() {
  // Dados fictícios para os posts do blog
  const blogPosts = [
    {
      title: "How to Own Your Audience by Creating an Email List",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "October 10, 2023",
    },
    {
      title: "Top 10 Toolkits for Deep Learning in 2020",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "October 5, 2023",
    },
    {
      title: "Everything You Need to Know About Web Accessibility",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "October 1, 2023",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-8">
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto py-12">
        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-gray-900 dark:text-white">MY </span>
          <span className="text-primary-500">BLOG</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Read my latest blog articles!
        </p>

        {/* Lista de Posts do Blog */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.content}</p>
              <p className="text-gray-500 dark:text-gray-300 text-sm">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}