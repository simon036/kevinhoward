import { ModernCard, ModernCardContent } from "@/components/ui/modern-card";
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from "@/components/ui/section";

const testimonials = [
  {
    quote: "Kevin's expertise in tax planning has saved our business thousands of dollars. His proactive approach and attention to detail are exceptional. We trust him completely with our financial future.",
    author: "Sarah Johnson",
    role: "Small Business Owner",
    company: "Johnson & Associates",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5
  },
  {
    quote: "The financial planning services through Flying Cloud Money Management have put us on track for a secure retirement. Kevin's guidance has been invaluable in navigating complex investment decisions.",
    author: "Michael Chen",
    role: "Retired Engineer",
    company: "Former Boeing Executive",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5
  },
  {
    quote: "Professional, knowledgeable, and always available when we need guidance. Kevin has been our trusted advisor for over 10 years and has helped us grow our practice significantly.",
    author: "Dr. Lisa Rodriguez",
    role: "Family Practice Physician",
    company: "Rodriguez Medical Group",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    rating: 5
  }
];

export default function ModernTestimonials() {
  return (
    <Section variant="muted" spacing="xl" className="bg-gradient-to-r from-blue-50 to-teal-50">
      <SectionHeader>
        <SectionTitle className="text-blue-900">What Our Clients Say</SectionTitle>
        <SectionSubtitle>
          Trusted by Maryland businesses and families for over 18 years of professional financial guidance
        </SectionSubtitle>
      </SectionHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <ModernCard key={index} className="h-full bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <ModernCardContent className="p-8">
              {/* Star Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-slate-700 mb-6 italic text-lg leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center pt-4 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-200 mr-4"
                />
                <div>
                  <div className="font-bold text-blue-900 text-lg">{testimonial.author}</div>
                  <div className="text-teal-600 font-medium text-sm">{testimonial.role}</div>
                  <div className="text-slate-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-slate-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-slate-600 mb-6">
            Experience the same level of professional service and financial expertise that our clients rave about.
          </p>
          <a 
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Financial Success Story
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}