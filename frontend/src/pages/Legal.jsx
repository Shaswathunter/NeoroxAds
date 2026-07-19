import LegalPage from '../components/LegalPage.jsx'

export function Dmca() {
  return (
    <LegalPage title="DMCA Policy">
      <p>
        NeoRox Games respects the intellectual property rights of others and expects users of
        this site to do the same. We do not knowingly host copyrighted files ourselves; download
        links point to official or third-party sources.
      </p>
      <h2>Filing a notice</h2>
      <p>
        If you believe content linked from this site infringes your copyright, send a notice to
        our contact address including: a description of the work, the URL in question, and your
        contact information. We will review and respond promptly.
      </p>
    </LegalPage>
  )
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This site does not require account creation and collects only the minimum data needed to
        operate — such as basic analytics and, where enabled, advertising cookies from our ad
        partners.
      </p>
      <h2>Cookies & ads</h2>
      <p>
        Third-party ad networks (e.g. Google AdSense) may set cookies to serve relevant ads. You
        can control cookie preferences through your browser settings at any time.
      </p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent through the Contact page.</p>
    </LegalPage>
  )
}

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        Games listed on NeoRox Games are provided for informational and personal-use purposes.
        We make reasonable efforts to verify links but cannot guarantee third-party download
        sources are free of issues at every moment.
      </p>
      <h2>No warranty</h2>
      <p>
        Files are provided "as is" without warranty of any kind. Always scan downloads with your
        own antivirus software before running them.
      </p>
    </LegalPage>
  )
}

export function Contact() {
  return (
    <LegalPage title="Contact">
      <p>
        For DMCA requests, general questions, or broken-link reports, reach out at{' '}
        <a href="mailto:contact@neoroxgames.com" className="text-neonblue hover:underline">
          contact@neoroxgames.com
        </a>
        .
      </p>
    </LegalPage>
  )
}
