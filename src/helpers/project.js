const awaitProjects = require('./projects');

const args = process.argv.slice(2);
const talkDomain = args[args.length - 1];

async function fetchProject() {
  const projects = await awaitProjects;
  const domain = talkDomain.replace('talk.', 'www.');
  let [ project ] = projects.filter(project => project.bucket_path === domain);
  if (!project) {
    const namedProjects= projects.filter(project => project.name === domain);
    project = namedProjects[0];
  }
  return project;
}

async function project() {
  const project = await fetchProject();
  project.domain = talkDomain.replace('www.', 'talk.');
  return project;
}

module.exports = project();
