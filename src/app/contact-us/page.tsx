import Header from '@/components/sections/header';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-[1170px] mx-auto px-[15px] py-[30px]">
        <div className="bg-white p-5 rounded-none shadow-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">Contact Us</h1>
          <div className="text-[14px] leading-[1.6] text-foreground">
            <p className="mb-6">
              We're here to help with all your accounting, tax, and financial planning needs. 
              Contact us today to schedule your complimentary consultation.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-link hover:text-link-hover">
                        <a href="tel:+14436683636">(443) 668-3636</a>
                      </p>
                      <p className="text-link hover:text-link-hover">
                        <a href="tel:+18669926771">(866) 992-6771</a>
                      </p>
                      <p className="text-sm text-muted-foreground">Call for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-link hover:text-link-hover">
                        <a href="mailto:kevin@kevinhowardcpa.com">kevin@kevinhowardcpa.com</a>
                      </p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Address</h4>
                      <p>6030 Marshalee Drive<br />Suite 106<br />Elkridge, MD 21075-5987</p>
                      <p className="text-sm text-muted-foreground">By appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-primary flex-shrink-0 mt-1 flex items-center justify-center">
                      <span className="text-sm font-bold">Fax</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Fax</h4>
                      <p>(410) 992-4305</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Office Hours</h4>
                      <div className="text-sm">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: By appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Extended hours during tax season</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded">
                  <h4 className="font-bold text-foreground mb-2">Complimentary Consultation</h4>
                  <p className="text-sm">
                    We offer a no-cost, no-obligation initial consultation to discuss your needs 
                    and how we can help. Contact us today to schedule your appointment.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Schedule Consultation</option>
                      <option value="tax">Tax Services</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="financial">Financial Planning</option>
                      <option value="business">Business Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Please tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-muted-foreground">
                    * Required fields. By submitting this form, you agree to our privacy policy 
                    and consent to be contacted regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}