import React from 'react';
import { Button } from './ui/button';
import { Award, Target, Zap, Users } from 'lucide-react';
import { consultantInfo } from '../mock';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Small Business Specialist',
      description: 'Expert in websites for clinics, hotels, banks, restaurants & retail stores in Maharashtra'
    },
    {
      icon: Zap,
      title: 'Local SEO Expert',
      description: 'Get found on Google for local searches in Solapur and surrounding areas'
    },
    {
      icon: Users,
      title: 'Affordable Pricing',
      description: 'Quality websites starting from ₹15,000 with flexible payment plans for small businesses'
    },
    {
      icon: Award,
      title: 'Complete Support',
      description: 'Free 3-month support, training, and ongoing maintenance packages available'
    }
  ];

  const openLinkedIn = () => {
    window.open(`https://${consultantInfo.linkedin}`, '_blank');
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Website Developer for Small Business in Solapur & Maharashtra
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  With over 10 years of experience as a website developer, I specialize in creating
                  professional, affordable websites for small businesses across Solapur and Maharashtra.
                  Whether you run a <strong>medical clinic</strong>, <strong>hotel</strong>, <strong>bank</strong>,
                  <strong>restaurant</strong>, or <strong>retail store</strong>, I help you establish a strong
                  online presence that attracts more customers.
                </p>
                <p>
                  My expertise spans across healthcare website development for clinics and hospitals,
                  hotel booking websites with online payment systems, e-commerce solutions for retail businesses,
                  and secure banking websites. I understand the unique needs of small businesses in India and
                  deliver solutions that are both cost-effective and results-driven.
                </p>
                <p>
                  Having worked with leading MNCs and product companies, I now bring enterprise-level quality
                  to local businesses at affordable prices. From <strong>Google SEO optimization</strong> to
                  mobile-responsive design, from <strong>WhatsApp integration</strong> to online payment gateways
                  like Razorpay - I provide complete digital solutions for your business growth. Whether you're launching a new venture or
                  scaling an existing business, you get the benefit of world-class development 
                  practices without the enterprise price tag.
                </p>
              </div>
            </div>

            <Button
              onClick={openLinkedIn}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200"
            >
              Connect on LinkedIn
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;