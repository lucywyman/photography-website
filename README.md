# Lucy Voigt Photography

A static photography portfolio built for GitHub Pages. The site includes the homepage, portrait, engagement, and maternity galleries, plus pricing pages for boudoir and family photography. No build step or external JavaScript is required.

## Publish with GitHub Pages

1. Push the repository contents to GitHub.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.
3. The `CNAME` file sets the custom domain to `lucyvoigt.com`. In **Settings → Pages**, confirm that domain is shown. At Namecheap, configure the DNS records GitHub Pages requires for an apex domain. See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
4. After DNS resolves and GitHub Pages issues the certificate, enable **Enforce HTTPS** in **Settings → Pages**.

## Contact form

The inquiry form sends submissions to `thelucyvoigt@gmail.com` using FormSubmit. On the first submission, FormSubmit sends a confirmation email to that address; confirm it to activate delivery. The form depends on this third-party service.

## Site files

- `index.html` is the homepage.
- `portraits.html`, `engagement.html`, and `maternity.html` contain the available category galleries and pricing.
- `boudoir.html` and `family.html` currently contain pricing only.
- `sitemap.xml` lists the public pages at `https://lucyvoigt.com/`. Update it when pages are added or removed.
- The logo is in `images/groovy-lucy-voigt-full-logo.png`.
- Voigt Display is hosted locally in `fonts/`; Outfit is loaded from Google Fonts.
