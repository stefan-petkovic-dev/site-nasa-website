'use client';

import { Mail } from 'lucide-react';

export default function NewsletterForm() {
  return (
    <form
      className="cta-form"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          placeholder="Jane"
          autoComplete="given-name"
        />
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          autoComplete="email"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        <Mail size={18} aria-hidden="true" />
        <span>Sign Me Up for NASA Updates</span>
      </button>
      <p className="cta-form-trust">
        Your information is protected under federal privacy law. NASA does not
        sell or share your data. Unsubscribe at any time.
      </p>
    </form>
  );
}
