import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to first item open

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How long does the battery delivery and installation take?",
      answer: "Our delivery and installation team operates efficiently. During our standard business hours, we schedule and dispatch your battery promptly, ensuring a quick and seamless setup process."
    },
    {
      id: 2,
      question: "Do you provide a warranty with the car batteries?",
      answer: "Yes! All of our batteries come with a official manufacturer's warranty. Standard petrol cars are backed by an onsite 12 to 18-month warranty, whereas commercial/diesel vehicles are covered for 6 to 12 months."
    },
    {
      id: 3,
      question: "Can you install the battery at my office or shopping mall parking?",
      answer: "Absolutely. Our mobile dispatch units are fully outfitted with compact, powerful diagnostic equipment. We can perform complete diagnostic sweeps and battery installations in tight underground structures, office parking bays, or home porches."
    },
    {
      id: 4,
      question: "What brands of car batteries do you have available?",
      answer: "We maintain stock of high-performance car battery lines from international automotive tier-1 manufacturers including Bosch, Century, Amaron, Varta, and Yuasa. All units are fresh from production lines."
    },
    {
      id: 5,
      question: "What are your business operating hours?",
      answer: (
        <div>
          Our headquarters and supply operations are open during the following hours:
          <ul className="mt-2 mb-0">
            <li><strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM</li>
            <li><strong>Saturday:</strong> 9:00 AM – 1:00 PM</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>
      )
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <section id="faq" className="faq-section section-padding" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container">
          {/* Header */}
          <div className="section-title-container text-center reveal-on-scroll revealed" id="faqTitleWrap">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title" id="faqHeader">Frequently Asked Questions</h2>
            <p className="section-description mx-auto" id="faqSubtext">
              Find rapid answers to the most common inquiries regarding our onsite delivery, warranty procedures, and battery configurations.
            </p>
          </div>
          
          {/* Custom Styled Accordion */}
          <div className="row justify-content-center" id="faqAccordionWrap">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="faqAccordion">
                {faqItems.map((item, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <div 
                      key={item.id} 
                      className="accordion-item reveal-on-scroll revealed" 
                      id={`faqItem${item.id}`}
                    >
                      <h2 className="accordion-header">
                        <button 
                          className={`accordion-button d-flex align-items-center justify-content-between ${isOpen ? '' : 'collapsed'}`} 
                          type="button" 
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={isOpen}
                          style={{ width: '100%' }}
                        >
                          <span className="pe-3">{item.question}</span>
                          <ChevronDown 
                            size={18} 
                            style={{ 
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                              transition: 'transform 0.3s ease',
                              color: isOpen ? 'var(--color-accent, #FBBF24)' : 'var(--color-gray-500, #9CA3AF)',
                              flexShrink: 0
                            }} 
                          />
                        </button>
                      </h2>
                      <div 
                        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                        style={{ 
                          display: isOpen ? 'block' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="accordion-body">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
