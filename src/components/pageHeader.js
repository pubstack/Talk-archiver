const awaitProject = require('../helpers/project');

module.exports = async function pageHeader() {
  const project = await awaitProject;

  return `
    <header>
      <svg role="img" class=" zooniverse-logo" viewBox="0 0 100 100" width="1.8em" height="1.8em" aria-labelledby="zooniverse-logo_1" style="vertical-align: -0.5em;">
        <title id="zooniverse-logo_1">Zooniverse Logo</title>
        <g fill="currentColor" stroke="none" transform="translate(50, 50)">
          <path d="M 0 -45 A 45 45 0 0 1 0 45 A 45 45 0 0 1 0 -45 Z M 0 -30 A 30 30 0 0 0 0 30 A 30 30 0 0 0 0 -30 Z"></path>
          <path d="M 0 -14 A 14 14 0 0 1 0 14 A 14 14 0 0 1 0 -14 Z"></path>
          <ellipse cx="0" cy="0" rx="6" ry="65" transform="rotate(50)"></ellipse>
        </g>
      </svg>
      <p>
        ${ project.display_name } Talk
      </p>
      <nav>
        <ul>
          <li><a href="/recent">Recent</a></li>
          <li><a href="/boards">Discussion boards</a></li>
        </ul>
      </nav>
    </header>
  `;
};
