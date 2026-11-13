# AegisFS — GitHub Pages startup showcase

A responsive, five-page, static website for AegisFS and the independent File Manager story. No packages, external fonts, build tools, analytics, or backend are needed.

## Pages
- `index.html` — home and startup introduction
- `file-manager.html` — origin story and separate product track
- `architecture.html` — deep broker-centered security architecture
- `progress.html` — reported simulated evidence, limitations, next milestones, and resource needs
- `contact.html` — provider-independent visible email + copy function; optional mailto button

## Deploying to GitHub Pages
1. **Back up your existing website files** before replacing anything.
2. Upload **the contents of this folder** into the root of your existing Pages publishing source (for example the selected branch's `/` directory or `/docs`, depending on your settings). The index.html must be at the publishing root.
3. Keep the `CNAME` file only if `drkavinet.tech` is your intended custom domain for this repository. It contains `drkavinet.tech`. If you publish with a custom GitHub Actions workflow, GitHub Pages does not need the CNAME file; configure the domain in Settings → Pages.
4. In the repository's **Settings → Pages**, confirm the correct branch/folder and custom domain.
5. For `drkavinet.tech` (apex domain), check DNS records against GitHub's current documentation. Do not create wildcard DNS records. Configure **Enforce HTTPS** after certificate issuance. If HTTPS is not available, inspect the certificate provisioning error.
6. Open the website on desktop and mobile; verify menu, navigation, contact links, and the console.

## Important editorial notes
- Public content describes **reported** single-machine simulated CPSB test results, not production verification or an independent audit.
- The 8/8 PASS statement is limited to S1, S2, S2b, S3–S7 in the isolated prototype. S8 connect-race is not yet run.
- Real Windows Service security isolation, P1–P7 production runtime verification, pending-native-I/O guarantees, and final recovery fencing are not yet proven.
- The File Manager is a separate application and **does not yet integrate production AegisFS**.
- Contact is currently `contact@drkavinet.tech` and the GitHub link goes to `https://github.com/kavidev33`, based on the existing website screenshot. Update both if needed.
- This is a static project showcase, not a claim that AegisFS is already released or publicly open-sourced.

## Editing
Edit HTML content directly and site-wide styling in `assets/styles.css`. All links between pages are relative and work on GitHub Pages. No package install or build command is required.

## GitHub documentation
- [Custom domain settings](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [HTTPS security](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## Contact setup
The buttons now open `contact.html`, not an Outlook-specific page. The page shows `contact@drkavinet.tech` and a Copy Email button (with manual-copy fallback). The optional Open Email Application link uses `mailto:`; the visitor’s browser/OS decides which mail provider handles it. **GitHub Pages cannot provide an inbox or receive email.** Ensure the address exists and that domain MX/DNS mail routing has been configured with an email provider, and send a test from another email account before publishing for startup applications.


## Contact v2 (topic-first layout)

The contact page now has inquiry topics, a direct email copy button, and a Web3Forms-ready AJAX form.

**IMPORTANT:** Submission is deliberately disabled until setup. Register at https://web3forms.com/ with your Zoho inbox, verify ownership, and replace `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` in `contact.html` with the public access key. This key is meant to be embedded in static HTML; do not put passwords, Zoho login credentials or API secrets in this site. Test a real submission and check your Zoho inbox/spam folder before announcing the form. Consider the provider's anti-spam/domain settings and privacy terms before launch.

Until configured, the button is visibly disabled and the contact email copy fallback works. LinkedIn and F6S URLs have **not** been invented; add them when ready.
