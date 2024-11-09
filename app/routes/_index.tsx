import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "GitHub Repository Directory" },
    { name: "description", content: "Best GitHub repositories by category" },
  ];
};

const categories = [
  {
    title: "Programming Languages",
    repos: [
      {
        name: "microsoft/TypeScript",
        description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
        stars: "94k",
        forks: "11.8k",
        url: "https://github.com/microsoft/TypeScript"
      },
      {
        name: "python/cpython",
        description: "The Python programming language",
        stars: "55k",
        forks: "27.5k",
        url: "https://github.com/python/cpython"
      }
    ]
  },
  {
    title: "Frameworks",
    repos: [
      {
        name: "remix-run/remix",
        description: "Build Better Websites. Create modern, resilient user experiences with web fundamentals.",
        stars: "26k",
        forks: "2.1k",
        url: "https://github.com/remix-run/remix"
      },
      {
        name: "vercel/next.js",
        description: "The React Framework for the Web",
        stars: "118k",
        forks: "25.2k",
        url: "https://github.com/vercel/next.js"
      }
    ]
  },
  {
    title: "Organizations",
    repos: [
      {
        name: "facebook/react",
        description: "The library for web and native user interfaces",
        stars: "218k",
        forks: "46.7k",
        url: "https://github.com/facebook/react"
      },
      {
        name: "google/go",
        description: "The Go programming language",
        stars: "117k",
        forks: "17.4k",
        url: "https://github.com/golang/go"
      }
    ]
  }
];

function RepoCard({ repo }: { repo: typeof categories[0]["repos"][0] }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        <a href={repo.url} className="hover:text-blue-600 dark:hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{repo.description}</p>
      <div className="flex flex-wrap gap-2">
        <img
          src={`https://img.shields.io/github/stars/${repo.name}?style=flat-square&logo=github`}
          alt={`${repo.stars} stars`}
          className="h-5"
        />
        <img
          src={`https://img.shields.io/github/forks/${repo.name}?style=flat-square&logo=github`}
          alt={`${repo.forks} forks`}
          className="h-5"
        />
        <img
          src={`https://img.shields.io/github/last-commit/${repo.name}?style=flat-square`}
          alt="Last commit"
          className="h-5"
        />
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            GitHub Repository Directory
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A curated list of the best GitHub repositories
          </p>
        </header>

        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category.title}>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h2>
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                {category.repos.map((repo) => (
                  <RepoCard key={repo.name} repo={repo} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}