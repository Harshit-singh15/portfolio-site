/* ============================================================
   EDIT THIS FILE to wire up your real links.
   Every page on the site reads from here — change a URL once,
   it updates everywhere.
   ============================================================ */

const LINKS = {
  linkedin: "https://www.linkedin.com/in/harshit-kumar-singh-29b68325b",
  github: "https://github.com/Harshit-singh15",
  email: "harshitsunita2006@gmail.com",
  phone: "+918920794974",

  // One repo link per project. Leave as "#" until the repo is public.
  projects: {
    "lcr-benchmarking":         "https://github.com/Harshit-singh15/LCR_Project",
    "drone-simulation":         "#",
    "road-safety-index":        "#",
    "matchmaking-optimization": "https://github.com/Harshit-singh15/project_matchmaking",
    "tb-treatment-prediction":  "#",
    "copula-risk-model":        "#",
    "population-growth-model":  "#",
    "biometric-attendance":     "#"
  },

  // Optional live demo links — only fill in if a project has a hosted site.
  demos: {
    "lcr-benchmarking": "#"
  }
};

// Wires up every element with a data-link attribute, e.g.
// <a data-link="linkedin">...</a>  or  <a data-link="project:lcr-benchmarking">...</a>
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-link]").forEach(el => {
    const key = el.getAttribute("data-link");
    let url = "#";
    if (key.startsWith("project:")) {
      url = LINKS.projects[key.split(":")[1]] || "#";
    } else if (key.startsWith("demo:")) {
      url = LINKS.demos[key.split(":")[1]] || "#";
    } else if (key === "email") {
      url = "mailto:" + LINKS.email;
    } else if (key === "phone") {
      url = "tel:" + LINKS.phone;
    } else {
      url = LINKS[key] || "#";
    }
    el.setAttribute("href", url);
  });
});
