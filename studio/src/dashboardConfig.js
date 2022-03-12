export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "622cdea20deada791125a9a1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-cpqmeyzd",
                  apiId: "6dc28096-54d4-46ce-881e-f9ac0b1d8675",
                },
                {
                  buildHookId: "622cdea23bf38e7c0cdab9dc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-h19je3nv",
                  apiId: "3831533b-a18c-45fd-b949-53f4a70b8df1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mosesimbahale/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-h19je3nv.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
