import React from 'react';
import { Button } from './ui/button';
import { Award, Target, Zap, Users } from 'lucide-react';
import { consultantInfo } from '../mock';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Enterprise Experience',
      description: '10+ years working with MNCs and leading product-based companies'
    },
    {
      icon: Zap,
      title: 'Full Stack Expertise',
      description: 'End-to-end development from architecture to deployment'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is my priority. Clear communication every step of the way'
    },
    {
      icon: Award,
      title: 'Quality Driven',
      description: 'Enterprise-grade solutions with startup agility and affordability'
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
                Full Stack Developer & Consultant with 10+ Years of Excellence
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  With over a decade of experience as a Full Stack Developer and Consultant, 
                  I've had the privilege of working with leading MNCs and product-based companies, 
                  delivering high-impact digital solutions that drive business growth.
                </p>
                <p>
                  My journey spans diverse industries and technologies, from building scalable 
                  enterprise applications to crafting seamless user experiences for startups. 
                  This extensive experience with Fortune 500 companies and innovative product 
                  firms has shaped my ability to understand complex business requirements and 
                  translate them into robust, efficient solutions.
                </p>
                <p>
                  Now, I bring this enterprise-level expertise to help small and medium businesses 
                  establish a powerful online presence. Whether you're launching a new venture or 
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