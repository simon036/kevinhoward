"use client";

import { useState } from 'react';
import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { BookOpen, MessageCircle, User } from 'lucide-react';

interface GuestBookEntry {
  id: number;
  name: string;
  email: string;
  location: string;
  message: string;
  date: string;
}

export default function GuestBook() {
  const [entries, setEntries] = useState<GuestBookEntry[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      location: "Baltimore, MD",
      message: "Thank you for the excellent tax preparation service. Kevin was very knowledgeable and helped me save money on my taxes.",
      date: "2024-03-15"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      location: "Annapolis, MD",
      message: "Professional and friendly service. Kevin helped me with my business accounting and I couldn't be happier with the results.",
      date: "2024-02-28"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const newEntry: GuestBookEntry = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        location: formData.location,
        message: formData.message,
        date: new Date().toISOString().split('T')[0]
      };
      setEntries(prev => [newEntry, ...prev]);
      setFormData({ name: '', email: '', location: '', message: '' });
      alert('Thank you for signing our guest book!');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Guest Book
          </h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <p className="mb-6">
              Thank you for visiting our website! We'd love to hear from you. Please take a moment 
              to sign our guest book and let us know about your experience with our services or 
              any feedback you'd like to share.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Sign Our Guest Book</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">
                      Location (City, State)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Baltimore, MD"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Share your experience, feedback, or just say hello..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Sign Guest Book
                  </button>

                  <p className="text-xs text-muted-foreground">
                    * Required fields. Your email address will not be displayed publicly.
                  </p>
                </form>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Recent Guest Book Entries</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {entries.map((entry) => (
                    <div key={entry.id} className="border border-border rounded p-4 bg-muted/30">
                      <div className="flex items-start gap-3 mb-2">
                        <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="font-bold text-foreground">{entry.name}</span>
                            {entry.location && (
                              <span className="text-sm text-muted-foreground">
                                from {entry.location}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-foreground mb-2">{entry.message}</p>
                          <p className="text-xs text-muted-foreground">
                            Posted on {new Date(entry.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {entries.length === 0 && (
                  <div className="text-center py-8">
                    <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No guest book entries yet. Be the first to sign!</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Thank You for Your Visit</h3>
              <p className="mb-4">
                We appreciate you taking the time to visit our website and learn about our services. 
                If you have any questions or would like to schedule a consultation, please don't 
                hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact-us"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors text-center"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}