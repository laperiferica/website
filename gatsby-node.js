const path = require('path');

// Added fileInfo to markdownRemark nodes
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node {
      fileInfo: File @link(from: "parent")
    }
  `);
};

// Create team pages
const createTeamPages = async (createPage, edges) => {
  const teamTemplate = path.resolve('src/templates/team.js');
  edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: `team/${slug}`,
        component: teamTemplate,
        context: {
          slug,
        },
      });
    }
  );
};

// Create project pages
const createProjectPages = async (createPage, edges) => {
  const projectTemplate = path.resolve('src/templates/project.js');
  edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: `projects/${slug}`,
        component: projectTemplate,
        context: {
          slug,
        },
      });
    }
  );
};

// Create project pages
const createProgramPages = async (createPage, edges) => {
  const tmpl = path.resolve('src/templates/program.js');
  edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: `programs/${slug}`,
        component: tmpl,
        context: {
          slug,
        },
      });
    }
  );
};

// Create pages main process
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "projects" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      programs: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "programs" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      team: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "team" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  await createTeamPages(createPage, result.data.team.edges);
  await createProjectPages(createPage, result.data.projects.edges);
  await createProgramPages(createPage, result.data.programs.edges);
};
