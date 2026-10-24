THANGA ABARNA M — AI DEVELOPER PORTFOLIO
========================================

FILES
- index.html       Main website
- style.css        Design, layout, responsive styles
- script.js        Certificate modal, project details, skill filters, mobile menu
- Resume_Final.pdf Resume file used by the Download Resume buttons
- assets/certificates/ Certificate images go here

HOW TO OPEN
1. Extract the ZIP file.
2. Open index.html in Chrome, Edge, or Firefox.
3. For a more reliable local preview, open the folder in VS Code and use the Live Server extension.

HOW TO CHANGE PERSONAL DETAILS
- Open index.html in VS Code.
- Use Ctrl+H to find and replace the name, email, LinkedIn URL, education, etc.
- Change the GitHub placeholder URL (https://github.com/) to the correct profile/repository.
- Replace Resume_Final.pdf with the updated resume PDF, keeping the same filename if you want the existing download buttons to work.

HOW TO CHANGE SKILLS / PROJECTS
- Skills are HTML cards in index.html. Add/remove a .skill-card and set data-category to languages, ai, or cloud.
- Project titles, descriptions, technology tags, and GitHub links are in index.html.
- Project modal descriptions are in the projects array in script.js.

HOW TO ADD CERTIFICATE IMAGES
1. Put certificate images in assets/certificates/.
2. Name them exactly:
   certificate-1.jpg
   certificate-2.jpg
   certificate-3.jpg
   certificate-4.jpg
   certificate-5.jpg
   certificate-6.jpg
   certificate-7.jpg
3. Click a certificate card on the website to open the image in a popup.
4. The popup has an X close button, a Close preview button, and supports the Escape key.
5. If your image is PNG or WebP, change the matching filename in script.js.
6. Certificate names and issuing institutions are in the certificates array at the top of script.js.

NOTES
- No achievements or personal-skills section has been added, as requested.
- The row of 5+ Projects / AI-ML / Open stats under the hero has been removed.
- The certificate images are intentionally left as placeholders until you add the actual certificate scans/photos.
- Project links currently use generic GitHub placeholders; replace them with real project URLs.
- Education and CGPA were taken from the supplied resume. Graduation year is marked as 2027* in the UI and should be confirmed/updated if needed.
- Fonts use Google Fonts when online; system fallback fonts are included.
