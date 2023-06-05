const projectData = [
  {
    tag: "frontend",
    "project name": "Frontend 1",
  },
  {
    tag: "frontend",
    "project name": "Frontend 2",
  },
  {
    tag: "frontend",
    "project name": "Frontend 3",
  },
  {
    tag: "backend",
    "project name": "Backend 1",
  },
  {
    tag: "backend",
    "project name": "Backend 2",
  },
  {
    tag: "backend",
    "project name": "Backend 3",
  },
];

function loadProject(tag) {
  var ul = document.querySelector("ul");
  ul.innerHTML = "";
  if (tag === "all") {
    projectData.map((item) => {
      ul.innerHTML += `<li>${item["project name"]}`;
    });
    return;
  }

  projectData.map((item) => {
    if (tag === item.tag) {
      ul.innerHTML += `<li>${item["project name"]}`;
    }
  });
}


loadProject("all")