import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    const formAction = 'https://formspree.io/f/xojzznrq';

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
        });
        setFormValues({ name: '', email: '', subject: '', message: '' });
      } else {
        try {
          const result = await response.json();
          if (result && Object.hasOwn(result, 'errors')) {
            const errMsg = result.errors.map((error: any) => error.message).join(', ');
            if (errMsg.toLowerCase().includes('form not found')) {
              setStatus({
                type: 'error',
                message: 'Formspree Form ID not found. Please update the form action in Contact.tsx with your own active Formspree Form ID.',
              });
            } else {
              setStatus({ type: 'error', message: errMsg });
            }
          } else if (result && result.error) {
            if (result.error.toLowerCase().includes('form not found')) {
              setStatus({
                type: 'error',
                message: 'Formspree Form ID not found. Please update the form action in Contact.tsx with your own active Formspree Form ID.',
              });
            } else {
              setStatus({ type: 'error', message: result.error });
            }
          } else {
            setStatus({
              type: 'error',
              message: 'Oops! There was a problem submitting your form. Please try again.',
            });
          }
        } catch (err) {
          setStatus({
            type: 'error',
            message: 'Oops! There was a problem submitting your form. Please try again.',
          });
        }
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! There was a network error. Please verify your internet connection and try again.',
      });
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Get In Touch</h2>
          <div className="accent-line"></div>
        </div>

        <div className="contact-card-modern reveal-item">
          <div className="contact-grid-modern">
            <div className="contact-meta-panel">
              <h3>Let's build something together</h3>
              <p>
                Currently seeking opportunities as an Associate/Junior Software Developer. If you'd like to discuss a job role, have technical questions, or want to connect, feel free to reach out.
              </p>

              <div className="contact-details-list">
                <a href="mailto:prachiiii235@gmail.com" className="contact-info-pill">
                  <div className="icon-circle"><Mail size={18} /></div>
                  <div className="text-block">
                    <span className="label">Email Me</span>
                    <span className="value">prachiiii235@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+918788697861" className="contact-info-pill">
                  <div className="icon-circle"><Phone size={18} /></div>
                  <div className="text-block">
                    <span className="label">Call Me</span>
                    <span className="value">+91 8788697861</span>
                  </div>
                </a>

                <div className="contact-info-pill non-interactive">
                  <div className="icon-circle"><MapPin size={18} /></div>
                  <div className="text-block">
                    <span className="label">Location</span>
                    <span className="value">Nandurbar, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Pane */}
            <div className="contact-form-panel">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Inquiry / Job Role"
                    value={formValues.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Hi Prachi, I'd like to talk about..."
                    value={formValues.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}{' '}
                  <Send className="btn-icon" />
                </button>
                {status.message && (
                  <div
                    id="form-status"
                    className={`form-status ${status.type === 'success' ? 'success' : ''} ${
                      status.type === 'error' ? 'error' : ''
                    }`}
                    style={{ display: 'block' }}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
