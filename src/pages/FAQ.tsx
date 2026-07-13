import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../i18n';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: t.faq.items[0][0],
      answer: t.faq.items[0][1],
    },
    {
      id: 2,
      question: t.faq.items[1][0],
      answer: t.faq.items[1][1],
    },
    {
      id: 3,
      question: t.faq.items[2][0],
      answer: t.faq.items[2][1],
    },
    {
      id: 4,
      question: t.faq.items[3][0],
      answer: t.faq.items[3][1],
    },
    {
      id: 5,
      question: t.faq.hoursQuestion,
      answer: (
        <div>
          {t.faq.hoursIntro}
          <ul className="mt-2 mb-0">
            <li><strong>{t.faq.weekday}</strong> 9:00 AM - 6:00 PM</li>
            <li><strong>{t.faq.saturday}</strong> 9:00 AM - 1:00 PM</li>
            <li><strong>{t.faq.sunday}</strong> {t.faq.closed}</li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <section id="faq" className="faq-section section-padding" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container">
          <div className="section-title-container text-center reveal-on-scroll revealed" id="faqTitleWrap">
            <span className="section-subtitle">{t.faq.subtitle}</span>
            <h1 className="section-title" id="faqHeader">{t.faq.title}</h1>
            <p className="section-description mx-auto" id="faqSubtext">
              {t.faq.desc}
            </p>
          </div>
          
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
                              flexShrink: 0,
                            }} 
                          />
                        </button>
                      </h2>
                      <div 
                        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                        style={{ 
                          display: isOpen ? 'block' : 'none',
                          transition: 'all 0.3s ease',
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
