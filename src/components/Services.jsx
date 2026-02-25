import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Settings, ShoppingCart, Palette, TrendingUp, Lightbulb } from 'lucide-react';
import { services } from '../mock';

const iconMap = {
  Code,
  Settings,
  ShoppingCart,
  Palette,
  TrendingUp,
  Lightbulb
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Services That Drive Results
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;