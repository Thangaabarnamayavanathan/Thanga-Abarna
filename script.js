/* CUSTOMIZE YOUR PORTFOLIO HERE
   1) Update personal details and links below.
   2) Replace certificate-1.jpg ... certificate-7.jpg inside assets/certificates/.
   3) Edit project descriptions/links in this file or directly in index.html.
*/
const portfolioData = {
  certificates: [
    { name: "Google Cloud Computing", issuer: "IIT Kharagpur", file: "assets/certificates/c3.jpeg", icon: "☁" },
    { name: "Programming in Java", issuer: "IIT Madras", file: "assets/certificates/c2.jpeg", icon: "♨" },
    { name: "Data Science for Engineering", issuer: "IIT Madras", file: "assets/certificates/c1.jpeg", icon: "▥" },
    { name: "Database Management Systems", issuer: "IIT Kharagpur", file: "assets/certificates/c7.jpeg", icon: "▤" },
    { name: "Cloud Computing", issuer: "IIT Kharagpur", file: "assets/certificates/c4.jpeg", icon: "☁" },
    { name: "Cloud Computing and Distributed Systems", issuer: "IIT Kanpur", file: "assets/certificates/c6.jpeg", icon: "⌘" },
    { name: "Foundations of Data Science", issuer: "Analytics Vidya", file: "assets/certificates/c1.jpeg", icon: "✦" }
  ],
  projects: [
    { title: "Company-Based AI Chatbot", type: "Artificial Intelligence", description: "The chatbot was designed for customer support, focusing on helping users interact with the system and obtain relevant responses to their queries.", details: ["Project type: Individual project", "Focus: AI-powered customer support"] },
    { title: "AI-Based Drawing Extractor", type: "AI · Document Processing", description: "Worked on an AI-based solution to extract and verify countertop dimensions from architectural drawings and submittal drawings. The project used object detection, image processing, and a vision-language model to identify relevant drawing regions, extract dimensions, and compare the extracted information.", details: ["Project type: Individual project", "Focus: Drawing analysis and information extraction", "Technologies: Python, Grounding DINO, OpenCV, Qwen, JSON"] },
    { title: "Blood E-Commerce Website", type: "Web Application", description: "An individual website project centered on connecting people with blood-related needs and information.", details: ["Project type: Individual project", "Focus: Blood-related web application", "Add the actual features, technology stack, and GitHub URL when ready."] },
    { title: "Election Live Vote Counting", type: "Web · Group Project", description: "A group project presenting election vote-counting information through a web interface.", details: ["Project type: Group project", "Focus: Election vote-counting information", "Add the actual data source, technology stack, and repository URL when ready."] },
    { title: "TNEA Seat Availability Predictor", type: "Machine Learning · Group Project", description: "A machine-learning-based project to help estimate engineering counselling seat availability.", details: ["Project type: Group project", "Focus: Seat availability prediction for TNEA counselling", "Add the model details, evaluation metrics, technology stack, and repository URL when ready."] }
  ]
};

const certificateGrid = document.getElementById("certificateGrid");
const certificateModal = document.getElementById("certificateModal");
const modalTitle = document.getElementById("modalTitle");
const modalIssuer = document.getElementById("modalIssuer");
const certificatePreview = document.getElementById("certificatePreview");
const projectModal = document.getElementById("projectModal");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalBody = document.getElementById("projectModalBody");

function renderCertificates() {
  certificateGrid.innerHTML = portfolioData.certificates.map((cert, index) => `
    <button class="certificate-card" type="button" data-certificate="${index}" aria-label="View ${escapeHTML(cert.name)} certificate">
      <span class="cert-icon">${escapeHTML(cert.icon || "✦")}</span>
      <span class="cert-info"><b>${escapeHTML(cert.name)}</b><small>${escapeHTML(cert.issuer)}</small></span>
      <span class="cert-open" aria-hidden="true">↗</span>
    </button>
  `).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
}
function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const close = modal.querySelector("[data-close-modal], [data-close-project]");
  if (close) close.focus();
}
function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal.open")) document.body.classList.remove("modal-open");
}
function openCertificate(index) {
  const cert = portfolioData.certificates[index];
  if (!cert) return;
  modalTitle.textContent = cert.name;
  modalIssuer.textContent = cert.issuer;
  certificatePreview.innerHTML = "";
  const img = document.createElement("img");
  img.src = cert.file;
  img.alt = `${cert.name} certificate`;
  img.onerror = () => {
    certificatePreview.innerHTML = `<div class="preview-placeholder"><span>${escapeHTML(cert.icon || "✧")}</span><b>Certificate image not added yet</b><p>Save your certificate as <code>${escapeHTML(cert.file)}</code>. Use JPG, PNG, or WebP; if you use a different extension, update the filename in script.js.</p></div>`;
  };
  certificatePreview.appendChild(img);
  openModal(certificateModal);
}
function openProject(index) {
  const project = portfolioData.projects[index];
  if (!project) return;
  projectModalTitle.textContent = project.title;
  projectModalBody.innerHTML = `<h3>${escapeHTML(project.type)}</h3><p>${escapeHTML(project.description)}</p><ul>${project.details.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  openModal(projectModal);
}
renderCertificates();
document.getElementById("year").textContent = new Date().getFullYear();

certificateGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-certificate]");
  if (button) openCertificate(Number(button.dataset.certificate));
});
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", () => closeModal(certificateModal)));
document.querySelectorAll("[data-close-project]").forEach(el => el.addEventListener("click", () => closeModal(projectModal)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal(certificateModal);
    closeModal(projectModal);
  }
});
document.querySelectorAll(".project-details").forEach(button => button.addEventListener("click", () => openProject(Number(button.dataset.project))));

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));


const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(item => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        skillCards.forEach(card => {
            const matches = filter === "all" ||
                card.dataset.category === filter;

            card.hidden = !matches;
        });
    });
});


// Smooth active navigation state while scrolling.
const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.querySelectorAll("a").forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  sections.forEach(section => observer.observe(section));
}
