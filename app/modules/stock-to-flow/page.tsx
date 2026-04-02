"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function StockToFlow() {
  const { t } = useLanguage();
  const assetComparison = [
    { asset: "Fiat (USD)", stock: "N/A", flow: "Unlimited", sf: "0", value: "Decreasing" },
    { asset: "Copper", stock: "~700M tons", flow: "~20M tons/yr", sf: "35", value: "Low" },
    { asset: "Silver", stock: "~1.7B oz", flow: "~27M oz/yr", sf: "63", value: "Medium" },
    { asset: "Gold", stock: "~200k tons", flow: "~3k tons/yr", sf: "66", value: "High" },
    { asset: "Bitcoin (2024)", stock: "19.7M BTC", flow: "164k BTC/yr", sf: "120", value: "Very High" },
    { asset: "Bitcoin (2028)", stock: "20.3M BTC", flow: "82k BTC/yr", sf: "247", value: "Extremely High" }
  ];

  const halvingImpact = [
    { halving: "Pre-2012", sf: 25, marketCap: "<$100M", price: "<$10" },
    { halving: "2012-2016", sf: 50, marketCap: "$10B", price: "$650" },
    { halving: "2016-2020", sf: 100, marketCap: "$200B", price: "$10k" },
    { halving: "2020-2024", sf: 120, marketCap: "$1.2T", price: "$65k" },
    { halving: "2024-2028", sf: 240, marketCap: "TBD", price: "TBD" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-500 font-mono text-sm">{t.modules.module} 4</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {t.s2f.pageTitle}
          </h1>
          <p className="text-xl text-slate-400">
            {t.s2f.pageSubtitle}
          </p>
        </div>

        {/* What is S2F */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">📐 {t.s2f.whatIsS2F}</h2>

          <div className="p-8 bg-slate-900/50 border border-orange-500/20 rounded-lg mb-6">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Stock-to-Flow (S2F) measures <span className="text-orange-400 font-bold">scarcity</span> by
              comparing existing supply (stock) to new production (flow).
            </p>

            <div className="p-6 bg-slate-800/50 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-orange-400 mb-4">The Formula:</h3>
              <div className="font-mono text-2xl text-slate-200 text-center mb-4">
                S2F = Stock / Flow
              </div>
              <div className="text-sm text-slate-400 space-y-2">
                <div>• <span className="text-slate-300">Stock</span> = Total existing supply</div>
                <div>• <span className="text-slate-300">Flow</span> = New production per year</div>
                <div>• <span className="text-orange-400">Higher S2F = More scarce = More valuable</span></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-center">
                <div className="text-sm text-slate-400 mb-2">Low S2F</div>
                <div className="text-2xl font-bold text-red-400">Fiat (0)</div>
                <div className="text-xs text-slate-500 mt-1">Infinite flow</div>
              </div>
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded text-center">
                <div className="text-sm text-slate-400 mb-2">Medium S2F</div>
                <div className="text-2xl font-bold text-yellow-400">Gold (66)</div>
                <div className="text-xs text-slate-500 mt-1">Hard to mine</div>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded text-center">
                <div className="text-sm text-slate-400 mb-2">High S2F</div>
                <div className="text-2xl font-bold text-green-400">Bitcoin (120+)</div>
                <div className="text-xs text-slate-500 mt-1">Mathematically capped</div>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">⚖️ {t.s2f.s2fComparison}</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left p-4 text-slate-400 font-medium">Asset</th>
                  <th className="text-left p-4 text-slate-400 font-medium">Stock (Supply)</th>
                  <th className="text-left p-4 text-slate-400 font-medium">Flow (Annual)</th>
                  <th className="text-left p-4 text-slate-400 font-medium">S2F Ratio</th>
                  <th className="text-left p-4 text-slate-400 font-medium">Value</th>
                </tr>
              </thead>
              <tbody>
                {assetComparison.map((asset, i) => (
                  <tr key={i} className="border-b border-slate-800/50">
                    <td className="p-4 text-slate-200 font-semibold">{asset.asset}</td>
                    <td className="p-4 text-slate-300">{asset.stock}</td>
                    <td className="p-4 text-slate-300">{asset.flow}</td>
                    <td className="p-4">
                      <span className={`font-bold ${
                        asset.asset.includes('Bitcoin') ? 'text-green-400' :
                        asset.asset === 'Gold' ? 'text-yellow-400' :
                        asset.asset === 'Fiat' ? 'text-red-400' :
                        'text-slate-400'
                      }`}>
                        {asset.sf}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400">{asset.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-orange-500/5 border border-orange-500/10 rounded-lg">
            <p className="text-slate-300 text-sm">
              <span className="text-orange-400 font-semibold">Key insight:</span> Bitcoin already has
              DOUBLE the scarcity of gold (S2F 120 vs 66), and will reach S2F ~240 after 2024 halving.
              No other asset in human history has achieved this level of hardness.
            </p>
          </div>
        </section>

        {/* Bitcoin S2F Evolution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">📈 {t.s2f.btcS2FOverTime}</h2>

          <div className="space-y-4 mb-6">
            {halvingImpact.map((data, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-orange-400">{data.halving}</h3>
                    <div className="text-sm text-slate-500">S2F Ratio: {data.sf}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Market Cap</div>
                    <div className="text-xl font-bold text-slate-200">{data.marketCap}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                      style={{ width: `${Math.min((data.sf / 240) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-slate-400 w-24 text-right">
                    Price: {data.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h3 className="text-lg font-bold text-orange-400 mb-4">📊 The Pattern:</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-orange-400">→</span>
                <span>Every halving DOUBLES the S2F ratio</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">→</span>
                <span>Higher S2F correlates with higher market cap (r² = 0.95)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">→</span>
                <span>Pattern held for 15+ years across 4 halvings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">→</span>
                <span>By 2028, Bitcoin S2F will be ~240 (4x gold's scarcity)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Plan B S2F Model */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">📉 {t.s2f.planBModel}</h2>

          <div className="p-8 bg-slate-900/50 border border-orange-500/20 rounded-lg mb-6">
            <p className="text-slate-300 leading-relaxed mb-6">
              Created by analyst <span className="text-orange-400 font-bold">@100trillionUSD</span> in 2019,
              the S2F model predicts Bitcoin price based on scarcity. It's been remarkably accurate.
            </p>

            <div className="p-6 bg-slate-800/50 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-orange-400 mb-4">Model Formula:</h3>
              <div className="font-mono text-sm text-slate-200 space-y-2">
                <div>ln(market_cap) = 14.6 + 3.3 × ln(S2F)</div>
                <div className="text-slate-500">or simplified:</div>
                <div>Price ≈ 0.4 × S2F³</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded">
                <h4 className="font-bold text-green-400 mb-3">✅ Model Successes</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• 2020-2021: Predicted $100k (hit $69k)</li>
                  <li>• 95% correlation with price (2009-2023)</li>
                  <li>• Predicted all major bull runs</li>
                  <li>• Works across multiple halvings</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded">
                <h4 className="font-bold text-yellow-400 mb-3">⚠️ Model Limitations</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• Doesn't account for demand shocks</li>
                  <li>• Past performance ≠ future results</li>
                  <li>• Assumes scarcity = only driver</li>
                  <li>• Can't predict exact timing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-orange-500/5 border border-orange-500/10 rounded-lg">
            <h4 className="font-bold text-orange-400 mb-3">🎯 2024-2028 Projection (S2F ~240):</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <div>• <span className="text-slate-400">Conservative:</span> $100k - $200k</div>
              <div>• <span className="text-slate-400">Base case:</span> $200k - $500k</div>
              <div>• <span className="text-slate-400">Optimistic:</span> $500k - $1M</div>
              <div className="pt-2 text-orange-400 font-semibold">
                ⚠️ These are MODEL predictions, not financial advice!
              </div>
            </div>
          </div>
        </section>

        {/* Why S2F Matters for Bitcoin */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">💎 {t.s2f.whyS2FMatters}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">1. Quantifies Scarcity</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                S2F gives us an OBJECTIVE measure of hardness. Before Bitcoin, gold was hardest
                money (S2F 66). Bitcoin is now TWICE as hard - and getting harder every 4 years.
              </p>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">2. Predictable</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Unlike gold (new mines can be found), Bitcoin's flow is HARDCODED. We know EXACTLY
                how many BTC will exist in 2050, 2100, 2140. No other asset has this certainty.
              </p>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">3. Validates HODLing</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                S2F model shows that HOLDING through cycles beats trading. As scarcity increases
                (halvings), value tends to follow. Time in market {'>'} timing the market.
              </p>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">4. Sound Money Metric</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Austrian economics says "hard money" = high S2F. Bitcoin is the HARDEST money ever
                created. By 2140, S2F will be infinite (flow = 0).
              </p>
            </div>
          </div>
        </section>

        {/* Criticisms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🤔 {t.s2f.s2fCriticisms}</h2>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
            <p className="text-slate-300 mb-6">
              S2F model isn't perfect. Here are valid criticisms:
            </p>

            <div className="space-y-4">
              {[
                {
                  criticism: "Correlation ≠ Causation",
                  response: "True, but 15 years of 95% correlation is significant. Scarcity IS a fundamental value driver."
                },
                {
                  criticism: "Ignores demand side",
                  response: "Correct. Model assumes demand increases with scarcity. Black swan events (bans, quantum computing) could break this."
                },
                {
                  criticism: "Small sample size (only 4 halvings)",
                  response: "Fair point. We need more cycles to validate. But so far, pattern holds."
                },
                {
                  criticism: "Past performance ≠ future results",
                  response: "Absolutely true. Use S2F for education, NOT trading decisions."
                }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-800/30 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-red-400 font-bold">❌</span>
                    <h4 className="text-red-400 font-semibold">{item.criticism}</h4>
                  </div>
                  <div className="flex items-start gap-3 pl-6">
                    <span className="text-green-400 font-bold">✓</span>
                    <p className="text-slate-400 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🔑 {t.common.keyTakeaways}</h2>

          <div className="space-y-4">
            {[
              t.s2f.takeaway1,
              t.s2f.takeaway2,
              t.s2f.takeaway3,
              t.s2f.takeaway4,
              t.s2f.takeaway5
            ].map((takeaway, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="text-orange-400 font-bold">{i + 1}.</span>
                <span className="text-slate-300">{takeaway}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-800">
          <Link
            href="/modules/halving-cycles"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
          >
            ← {t.modules.halving.title}
          </Link>
          <Link
            href="/modules/self-custody"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-colors"
          >
            {t.nav.next} {t.modules.custody.title} →
          </Link>
        </div>
      </div>
    </div>
  );
}
