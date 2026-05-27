// chrome.js — shared nav + footer with the official Finrock logo
document.addEventListener('DOMContentLoaded', () => {
  const here = location.pathname.split('/').pop() || 'index.html';

  const logo = () =>
    `<a href="index.html" class="flogo" aria-label="Finrock">
      <span class="flogo-bg">
        <img src="assets/finrock-logo.png" alt="Finrock" />
      </span>
    </a>`;

  const navHost = document.querySelector('[data-nav]');
  if (navHost) {
    const link = (href, label) =>
      `<a href="${href}" class="${here === href ? 'active' : ''}">${label}</a>`;
    navHost.outerHTML = `
      <nav class="nav">
        <div class="container nav-inner">
          ${logo()}
          <div class="nav-links">
            ${link('personal.html', 'Personal')}
            ${link('business.html', 'Business')}
            ${link('side-hustlers.html', 'Side hustle')}
            ${link('accountants.html', 'Accountants')}
            ${link('pricing.html', 'Pricing')}
            ${link('banking.html', 'Banking · Soon')}
          </div>
          <div class="nav-spacer"></div>
          <div class="nav-cta">
            <a href="login.html" class="btn btn-ghost">Sign in</a>
            <a href="signup.html" class="btn btn-primary">Download free</a>
          </div>
        </div>
      </nav>`;
  }

  const ftHost = document.querySelector('[data-footer]');
  if (ftHost) {
    const yr = new Date().getFullYear();
    ftHost.outerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              ${logo()}
              <p>The Life OS that does your accounts. Built for sole traders, SMEs and everyone in between.</p>
              <div class="footer-social">
                <a href="https://x.com/gofinrock" title="X">𝕏</a>
                <a href="https://linkedin.com/company/gofinrock" title="LinkedIn">in</a>
                <a href="https://instagram.com/gofinrock" title="Instagram">◉</a>
              </div>
            </div>
            <div class="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="personal.html">Personal</a></li>
                <li><a href="business.html">Business</a></li>
                <li><a href="accountants.html">For accountants</a></li>
                <li><a href="banking.html">Banking · 2026</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="careers.html">Careers</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="help.html">Help centre</a></li>
                <li><a href="security.html">Security</a></li>
                <li><a href="status.html">Status</a></li>
                <li><a href="changelog.html">Changelog</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="privacy.html">Privacy</a></li>
                <li><a href="terms.html">Terms</a></li>
                <li><a href="cookies.html">Cookies</a></li>
                <li><a href="gdpr.html">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <div>© ${yr} Finrock Ltd · Made in Great Britain</div>
            <div>FCA-regulated comparison · ICO-registered · AES-256 vault</div>
          </div>
        </div>
      </footer>`;
  }
});
