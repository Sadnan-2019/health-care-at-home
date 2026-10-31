import React from 'react';
import { Phone, HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FamiliesLivingAbroad() {
  return (
    <section className="bg-slate-50 py-12 md:py-16 text-slate-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          
          {/* Top Banner Accent */}
          <div className="bg-emerald-700 h-2 w-full" />

          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            
            {/* Main Section Heading */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                <HeartHandshake className="w-4 h-4 text-emerald-700" />
                <span>Dedicated Support for NRBs & Diaspora Families</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Elderly Care at Home in Dhaka for Families Living Abroad
              </h1>
            </div>

            {/* Introductory Body Text */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Living abroad while your elderly parents live in Dhaka can make their everyday care challenging. You may worry about whether they are taking their medicines on time, eating properly, moving safely or receiving help when needed. Although relatives may visit occasionally, providing consistent daily assistance is not always possible, especially when parents need support with personal care, mobility or everyday routines.
              </p>
              <p>
                Elderly care at home in Dhaka offers families a practical way to arrange daily assistance while allowing their parents to remain in familiar surroundings. According to WHO's 2024 Bangladesh healthy ageing factsheet, approximately 16.5 million people in Bangladesh are aged 60 or older, representing around 10% of the population. Healthcare at Home Bangladesh (HCAH) provides caregiver support and professional nursing assistance according to individual care requirements.
              </p>
            </div>

            {/* Highlighted Fact / Trust Box */}
            <div className="bg-slate-50 border-l-4 border-emerald-600 p-4 sm:p-5 rounded-r-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>WHO 2024 Bangladesh Healthy Ageing Factsheet</span>
              </div>
              <p className="text-sm text-slate-600">
                Over 16.5 million seniors in Bangladesh (~10% of the population) require structured home-care support, personal care, or professional nursing assistance to age safely and comfortably at home.
              </p>
            </div>

            {/* Call to Action Callout Box */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <h3 className="text-lg font-bold text-slate-900">
                  Need help arranging care for your parents in Dhaka?
                </h3>
                <p className="text-sm text-slate-600">
                  Contact HCAH to discuss suitable caregiver or nursing support.
                </p>
              </div>

              {/* Suggested CTA button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all duration-200"
                >
                  Contact HCAH
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:01619848555"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm px-4 py-3 rounded-lg transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  01619-848555
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}