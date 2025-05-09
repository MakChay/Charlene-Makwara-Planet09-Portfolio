import React, { useState } from 'react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: billingCycle === 'monthly' ? '$9.99' : '$99.99',
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      features: [
        '10 Projects',
        '5GB Storage',
        'Basic Support',
        'Email Assistance'
      ],
      cta: 'Get Started'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$19.99' : '$199.99',
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      features: [
        'Unlimited Projects',
        '50GB Storage',
        'Priority Support',
        '24/7 Chat Assistance',
        'Advanced Analytics'
      ],
      isPopular: true,
      cta: 'Try for Free'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited Projects & Storage',
        'Dedicated Account Manager',
        'Custom Integrations',
        'API Access',
        'SLA 99.9% Uptime',
        'Onboarding Support'
      ],
      cta: 'Contact Sales'
    }
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Pricing Plans
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-1">
            <div className="flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full transition-colors ${billingCycle === 'monthly' ? 'bg-amber-400 text-black font-medium' : 'text-gray-700 dark:text-gray-300'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full transition-colors ${billingCycle === 'yearly' ? 'bg-amber-400 text-black font-medium' : 'text-gray-700 dark:text-gray-300'}`}
              >
                Yearly (20% off)
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-xl p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 ${plan.isPopular ? 'border-2 border-amber-400 bg-white dark:bg-gray-800' : 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-amber-400 text-black px-4 py-1 rounded-bl-lg rounded-tr-xl font-bold text-sm">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600 dark:text-gray-400"> / {plan.period}</span>
                )}
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.isPopular ? 'bg-amber-400 hover:bg-amber-500 text-black' : 'bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;