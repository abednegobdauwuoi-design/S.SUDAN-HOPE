import React, { useState } from 'react';
import { PLEDGE_OPTIONS } from '../data/initiativeData';
import { SupportPledgeOption } from '../types/initiative';
import { Heart, Check, Sparkles, Download, CheckCircle, Shield, Award } from 'lucide-react';

export const ImpactPledgeSection: React.FC = () => {
  const [selectedPledge, setSelectedPledge] = useState<SupportPledgeOption>(PLEDGE_OPTIONS[1]);
  const [pledgerName, setPledgerName] = useState('');
  const [pledgerEmail, setPledgerEmail] = useState('');
  const [currency, setCurrency] = useState<'USD' | 'SSP'>('USD');
  const [commitmentCertificate, setCommitmentCertificate] = useState<{
    referenceId: string;
    name: string;
    amount: string;
    impact: string;
    date: string;
  } | null>(null);

  const handleGeneratePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgerName.trim()) return;

    const ref = `SSH-PLEDGE-${Math.floor(100000 + Math.random() * 900000)}`;
    const formattedAmount = currency === 'USD' 
      ? `$${selectedPledge.usdAmount} USD`
      : `${selectedPledge.sspAmount.toLocaleString()} SSP`;

    setCommitmentCertificate({
      referenceId: ref,
      name: pledgerName.trim(),
      amount: formattedAmount,
      impact: selectedPledge.tangibleImpact,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    });
  };

  return (
    <section id="support" className="py-16 sm:py-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
            <span>Direct Community Solidarity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Transparent Impact & Solidarity Calculator
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300">
            See exactly what every dollar or pound achieves on the ground. 100% of pledge commitments support community tools, seeds, and learning kits.
          </p>
        </div>

        {/* Currency Switcher & Options */}
        <div className="flex justify-center items-center gap-3">
          <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">Display Currency:</span>
          <div className="inline-flex p-1 bg-stone-200/70 dark:bg-stone-800 rounded-lg">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                currency === 'USD'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('SSP')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                currency === 'SSP'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              South Sudanese Pound (SSP)
            </button>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PLEDGE_OPTIONS.map((opt) => {
            const isSelected = selectedPledge.id === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedPledge(opt)}
                className={`p-5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-500/10 dark:bg-amber-500/15 border-amber-500 ring-2 ring-amber-500/30 shadow-xs'
                    : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700/80 hover:border-stone-300 dark:hover:border-stone-600'
                }`}
              >
                <div className="space-y-2">
                  <div className="text-lg font-bold font-display text-stone-900 dark:text-stone-100 tabular-nums">
                    {currency === 'USD' ? `$${opt.usdAmount}` : `${opt.sspAmount.toLocaleString()} SSP`}
                  </div>
                  <div className="text-xs font-bold text-amber-700 dark:text-amber-400">
                    {opt.title}
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-300 leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 dark:border-stone-700/50 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  {opt.tangibleImpact}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Pledge & Solidarity Form */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 p-6 sm:p-8 shadow-xs">
          {!commitmentCertificate ? (
            <form onSubmit={handleGeneratePledge} className="space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-100 dark:border-stone-700/60">
                <Heart className="w-5 h-5 text-amber-500 fill-amber-500/20" />
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  Record Your Solidarity Commitment
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300 space-y-1">
                <div className="font-semibold text-amber-700 dark:text-amber-400">
                  Selected Solidarity Action:
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {selectedPledge.title} — {currency === 'USD' ? `$${selectedPledge.usdAmount} USD` : `${selectedPledge.sspAmount.toLocaleString()} SSP`}
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  Delivers: {selectedPledge.tangibleImpact}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Your Name or Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={pledgerName}
                    onChange={(e) => setPledgerName(e.target.value)}
                    placeholder="e.g. Nyibol or Equatoria Diaspora Guild"
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Email Address (for pledge updates) *
                  </label>
                  <input
                    type="email"
                    required
                    value={pledgerEmail}
                    onChange={(e) => setPledgerEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm transition-colors text-center"
              >
                Generate Official Solidarity Commitment Receipt
              </button>

              <p className="text-[11px] text-center text-stone-500 dark:text-stone-400">
                S.SUDAN HOPE coordinates directly with local elders and CBO partners. You will receive an official field receipt and delivery update.
              </p>
            </form>
          ) : (
            /* Digital Commitment Certificate */
            <div className="space-y-6 text-center animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Official Solidarity Certificate
                </div>
                <h3 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-100">
                  Thank You, {commitmentCertificate.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                  Receipt Ref: {commitmentCertificate.referenceId}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-700 text-left space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-stone-200/60 dark:border-stone-800 pb-2">
                  <span className="text-stone-500 dark:text-stone-400">Committed Amount:</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100 font-display">
                    {commitmentCertificate.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-stone-200/60 dark:border-stone-800 pb-2">
                  <span className="text-stone-500 dark:text-stone-400">Designated Community Impact:</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 text-right">
                    {commitmentCertificate.impact}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500 dark:text-stone-400">Issue Date:</span>
                  <span className="text-stone-700 dark:text-stone-300">
                    {commitmentCertificate.date}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-300 italic max-w-md mx-auto">
                &ldquo;Your solidarity directly brings educational tools and vocational kits to South Sudanese hands.
                Every seed planted builds a peaceful and prosperous tomorrow.&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setCommitmentCertificate(null)}
                  className="px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white border border-stone-300 dark:border-stone-700 rounded-lg"
                >
                  Make Another Pledge
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
