import { useState, FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const labels = {
    en: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      messageRequired: 'Message is required'
    },
    de: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet...',
      success: 'Nachricht erfolgreich gesendet!',
      error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
      nameRequired: 'Name ist erforderlich',
      emailRequired: 'E-Mail ist erforderlich',
      messageRequired: 'Nachricht ist erforderlich'
    }
  };

  const t = labels[language];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          placeholder={t.name}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          placeholder={t.email}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          {t.message}
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
          placeholder={t.message}
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
          {t.success}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
          {t.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-10 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-mono text-sm hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'sending' ? t.sending : t.send}
      </button>
    </form>
  );
}
