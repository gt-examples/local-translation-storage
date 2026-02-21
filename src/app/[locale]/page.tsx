import { T } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

export default async function Home() {
  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <div className="bg-indigo-600 text-white text-center py-2 px-4 text-sm">
        <T>
          This is an example app built with{" "}
          <a
            href="https://generaltranslation.com"
            className="underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Translation
          </a>
          . It is not a real product.
        </T>
      </div>
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Local Translation Storage")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/local-translation-storage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label={gt("View on GitHub")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <section className="mb-12">
          <T>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Bundle translations in your build
            </h2>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
              This app ships its translations as static JSON files instead of
              fetching them from a CDN at runtime. The{" "}
              <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-sm">
                loadTranslations
              </code>{" "}
              pattern lets you import translation data at build time, giving you
              zero-latency locale switching with no external dependencies.
            </p>
          </T>
        </section>

        <section className="mb-12">
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              How it works
            </h3>
          </T>
          <div className="space-y-4">
            <div className="border border-neutral-800 rounded-lg p-5">
              <T>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-mono text-neutral-500 mt-0.5 shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200 mb-1">
                      Generate translation files
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Run{" "}
                      <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-xs">
                        npx gtx-cli translate
                      </code>{" "}
                      to extract all translatable strings and produce JSON files
                      for each locale. These files live in your repository.
                    </p>
                  </div>
                </div>
              </T>
            </div>

            <div className="border border-neutral-800 rounded-lg p-5">
              <T>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-mono text-neutral-500 mt-0.5 shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200 mb-1">
                      Commit translations to your repo
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      The generated JSON files are checked into version control
                      alongside your source code. They are static assets, just
                      like images or fonts.
                    </p>
                  </div>
                </div>
              </T>
            </div>

            <div className="border border-neutral-800 rounded-lg p-5">
              <T>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-mono text-neutral-500 mt-0.5 shrink-0">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200 mb-1">
                      Load at build time
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      The{" "}
                      <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-xs">
                        loadTranslations
                      </code>{" "}
                      function imports the correct JSON file for each locale.
                      Translations are resolved during the build, so there is no
                      runtime fetch.
                    </p>
                  </div>
                </div>
              </T>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              Configuration
            </h3>
          </T>
          <div className="space-y-4">
            <div className="border border-neutral-800 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800">
                <T>
                  <span className="text-xs font-mono text-neutral-500">
                    gt.config.json — point to local translation files
                  </span>
                </T>
              </div>
              <pre className="px-4 py-3 text-sm font-mono text-neutral-300 overflow-x-auto">
                <code>{`{
  "defaultLocale": "en",
  "locales": ["es", "ja"],
  "files": {
    "gt": {
      "output": "public/_gt/[locale].json"
    }
  }
}`}</code>
              </pre>
            </div>

            <div className="border border-neutral-800 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800">
                <T>
                  <span className="text-xs font-mono text-neutral-500">
                    loadTranslations.ts — import JSON at build time
                  </span>
                </T>
              </div>
              <pre className="px-4 py-3 text-sm font-mono text-neutral-300 overflow-x-auto">
                <code>{`export default async function loadTranslations(locale: string) {
  const translations = await import(\`../public/_gt/\${locale}.json\`);
  return translations.default;
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              Why bundle translations locally?
            </h3>
          </T>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-neutral-800 rounded-lg p-5">
              <T>
                <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                  Zero runtime latency
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Translations are already in the bundle. No network request, no
                  loading state, no flash of untranslated content.
                </p>
              </T>
            </div>
            <div className="border border-neutral-800 rounded-lg p-5">
              <T>
                <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                  No external dependencies
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Your app does not depend on a CDN or translation service being
                  available at runtime. It works entirely offline.
                </p>
              </T>
            </div>
            <div className="border border-neutral-800 rounded-lg p-5">
              <T>
                <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                  Version-controlled translations
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Translation files live in your repository. You can review
                  changes in pull requests and roll back if needed.
                </p>
              </T>
            </div>
            <div className="border border-neutral-800 rounded-lg p-5">
              <T>
                <h4 className="text-sm font-semibold text-neutral-200 mb-2">
                  Simple deployment
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Deploy like any other static site. No environment variables or
                  API keys required at runtime for translations to work.
                </p>
              </T>
            </div>
          </div>
        </section>

        <footer className="border-t border-neutral-800 pt-8 mt-12">
          <T>
            <p className="text-sm text-neutral-500">
              Built with{" "}
              <a
                href="https://generaltranslation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-200 transition-colors underline underline-offset-2"
              >
                General Translation
              </a>
              ,{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-200 transition-colors underline underline-offset-2"
              >
                Next.js
              </a>
              , and{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-200 transition-colors underline underline-offset-2"
              >
                Tailwind CSS
              </a>
              . View the{" "}
              <a
                href="https://generaltranslation.com/en-US/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-200 transition-colors underline underline-offset-2"
              >
                documentation
              </a>{" "}
              to learn more about{" "}
              <a
                href="https://generaltranslation.com/en-US/blog/multilingual-nextjs-seo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-200 transition-colors underline underline-offset-2"
              >
                multilingual SEO
              </a>
              .
            </p>
          </T>
        </footer>
      </main>
    </div>
  );
}
