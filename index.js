const projects = [
  {
    name: 'Notefall',
    description: 'A web app for learning songs from MIDI files with a connected piano keyboard. Generated note blocks fall continuously or stop until the right keys are pressed. The number of keys, transpose level, and tempo may also be adjusted.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Canvas API'],
    liveSiteUrl: 'https://austinrsands.github.io/notefall/',
    sourceCodeUrl: 'https://github.com/austinrsands/notefall',
    imageSrc: 'notefall.webp',
  },
  {
    name: 'Paintify',
    description: 'A web app for creating paintings using procedurally generated brushstrokes. Brush qualities such as size, direction, roundness, density, length, texture, and more may be adjusted.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Canvas API'],
    liveSiteUrl: 'https://austinrsands.github.io/paintify/',
    sourceCodeUrl: 'https://github.com/austinrsands/paintify',
    imageSrc: 'paintify.webp',
  },
  {
    name: 'ArtFair',
    description: 'A collaborative canvas drawing experience that facilitates team building through several fun activites that focus on various interpersonal skills, discussion questions that spark reflective conversation, and tangible artifacts that serve as lasting memories of the experience.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Express', 'Socket.IO', 'Node.js', 'Canvas API'],
    imageSrc: 'artfair.webp',
  },
  {
    name: 'Fractal Viewer',
    description: 'A web app for visualizing the Mandelbrot set in the complex plane at various positions and scales.',
    technologies: ['JavaScript', 'Three.js', 'GLSL', 'HTML', 'CSS'],
    liveSiteUrl: 'https://austinrsands.github.io/fractal-viewer/',
    sourceCodeUrl: 'https://github.com/austinrsands/fractal-viewer',
    imageSrc: 'mandelbrot.webp',
  },
  {
    name: 'Solar System',
    description: 'An interactive simulation of the major celestial bodies of our solar system. Objects are shaded using the Phong lighting model.',
    technologies: ['Java', 'OpenGL', 'GLSL'],
    imageSrc: 'solar-system.webp',
  },
  {
    name: 'The Block Trials',
    description: 'A 2D physics-based puzzle platformer mobile game. You play as a character with the ability to pick up and throw different kinds of blocks and must use those blocks to traverse each level.',
    technologies: ['Unity', 'C#'],
    imageSrc: 'the-block-trials.webp',
  },
  {
    name: 'Grids',
    description: 'A mobile game of infinite procedurally generated color puzzles. You must cycle the rows and columns of the larger grid until it matches the smaller one.',
    technologies: ['Swift'],
    imageSrc: 'grids.webp',
  },
];

const projectsElement = document.getElementById('projects');
projects.forEach((project) => {
  if (!project.name || !project.description || !project.imageSrc) return;

  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

  const informationElement = document.createElement('div');
  informationElement.classList.add('information');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('title');
  titleElement.innerText = project.name;
  informationElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('description');
  descriptionElement.innerText = project.description;
  informationElement.appendChild(descriptionElement);

  if (project.technologies && project.technologies.length > 0) {
    const chipsElement = document.createElement('div');
    chipsElement.classList.add('chips');
    project.technologies.forEach((technology) => {
      const chipElement = document.createElement('span');
      chipElement.classList.add('chip');
      chipElement.innerText = technology;
      chipsElement.appendChild(chipElement);
    });
    informationElement.appendChild(chipsElement);
  }

  if (project.liveSiteUrl || project.sourceCodeUrl) {
    const linksElement = document.createElement('div');
    linksElement.classList.add('links');

    if (project.liveSiteUrl) {
      const linkElement = document.createElement('a');
      linkElement.classList.add('link');
      linkElement.href = project.liveSiteUrl;
      linkElement.target = '_blank';
      linkElement.rel = 'noopener';

      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgElement.setAttribute('width', 24);
      svgElement.setAttribute('height', 24);
      svgElement.setAttribute('viewBox', '0 0 24 24');

      const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathElement.setAttribute(
        'd',
        'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H5c-.55 0-1-.45-1-1v-2.5zM19 18h-2.5V9H20v8c0 .55-.45 1-1 1z'
      );
      svgElement.appendChild(pathElement);
      linkElement.appendChild(svgElement);

      const textElement = document.createTextNode('Live Site');
      linkElement.appendChild(textElement);

      linksElement.appendChild(linkElement);
    }

    if (project.sourceCodeUrl) {
      const linkElement = document.createElement('a');
      linkElement.classList.add('link');
      linkElement.href = project.sourceCodeUrl;
      linkElement.target = '_blank';
      linkElement.rel = 'noopener';

      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgElement.setAttribute('width', 24);
      svgElement.setAttribute('height', 24);
      svgElement.setAttribute('viewBox', '0 0 24 24');

      const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathElement.setAttribute(
        'd',
        'M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z'
      );
      svgElement.appendChild(pathElement);
      linkElement.appendChild(svgElement);

      const textElement = document.createTextNode('Source Code');
      linkElement.appendChild(textElement);

      linksElement.appendChild(linkElement);
    }

    informationElement.appendChild(linksElement);
  }

  projectElement.appendChild(informationElement);

  const previewElement = document.createElement('div');
  previewElement.classList.add('preview');

  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', project.imageSrc);
  imageElement.setAttribute('alt', `${project.name} Screenshot`);
  previewElement.appendChild(imageElement);
  
  projectElement.appendChild(previewElement);

  projectsElement.appendChild(projectElement);
});
