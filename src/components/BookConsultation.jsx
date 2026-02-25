import React from 'react';
import { InlineWidget } from 'react-calendly';
import { Calendar, CheckCircle2, Clock, Video } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const BookConsultation = () => {
  const benefits = [
    {
      icon: Clock,
      title: '30-Minute Strategy Call',
      description: 'Discuss your project goals and requirements'
    },
    {
      icon: Video,
      title: 'Virtual Meeting',
      description: 'Connect via Zoom or Google Meet'
    },
    {
      icon: CheckCircle2,
      title: 'Free Consultation',
      description: 'No obligation, just valuable insights'
    }
  ];

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Calendar className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-slate-600">
            Let's discuss your project in detail. Schedule a convenient time for a strategy call.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              What to Expect
            </h3>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="bg-emerald-50 rounded-xl p-6 mt-8">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-emerald-700">Note:</strong> After booking, 
                you'll receive a confirmation email with meeting details and a 
                preparation questionnaire to make our call as productive as possible.
              </p>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="lg:col-span-2">
            <Card className="border-slate-200 overflow-hidden">
              <CardContent className="p-0">
                <InlineWidget
                  url="https://calendly.com/sonalkarakshay-solapur/30min"
                  styles={{
                    height: '700px',
                    minWidth: '100%'
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '10b981',
                    textColor: '0f172a'
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
