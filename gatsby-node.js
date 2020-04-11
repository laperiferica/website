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
const createTeamPages = async (createPage, graphql, reporter) => {
  const teamTemplate = path.resolve('src/templates/team.js');
  const result = await graphql(`
    {
      allMarkdownRemark(
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
  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug }
      }
    }) => {
      createPage({
        path: `team/${slug}`,
        component: teamTemplate,
        context: {
          slug
        }
      });
    }
  );
};

// Create project pages
const createProjectPages = async (createPage, graphql, reporter) => {
  const projectTemplate = path.resolve('src/templates/project.js');
  const result = await graphql(`
    {
      allMarkdownRemark(
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
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug }
      }
    }) => {
      createPage({
        path: `projects/${slug}`,
        component: projectTemplate,
        context: {
          slug
        }
      });
    }
  );
};

// Create pages main process
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  await createTeamPages(createPage, graphql, reporter);
  await createProjectPages(createPage, graphql, reporter);
};
