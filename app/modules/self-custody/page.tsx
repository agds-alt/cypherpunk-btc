"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function SelfCustody() {
  const { t } = useLanguage();
  const [showSeedExample, setShowSeedExample] = useState(false);

  const hardwareWallets = [
    {
      name: "Ledger Nano X",
      price: "$150",
      pros: ["Bluetooth support", "Large storage", "Mobile app", "User-friendly"],
      cons: ["Closed source", "Past data leaks", "French company"],
      rating: "Good for beginners"
    },
    {
      name: "Trezor Model T",
      price: "$200",
      pros: ["Open source", "Touchscreen", "Shamir backup", "Strong reputation"],
      cons: ["Pricier", "No Bluetooth", "Bulkier"],
      rating: "Best for security-focused"
    },
    {
      name: "Coldcard Mk4",
      price: "$150",
      pros: ["Bitcoin-only", "Air-gapped", "Open source", "Advanced features"],
      cons: ["Bitcoin only", "Less user-friendly", "No altcoins"],
      rating: "Best for Bitcoin maximalists"
    }
  ];

  const securityLevels = [
    {
      level: "Level 1: Beginner",
      setup: "Single hardware wallet + seed phrase backup",
      security: "Good (90% of users)",
      cost: "$150-200",
      complexity: "Low"
    },
    {
      level: "Level 2: Intermediate",
      setup: "Hardware wallet + metal seed backup + passphrase",
      security: "Very Good (95% of users)",
      cost: "$200-300",
      complexity: "Medium"
    },
    {
      level: "Level 3: Advanced",
      setup: "2-of-3 Multi-sig (3 hardware wallets, different locations)",
      security: "Excellent (99% of users)",
      cost: "$500-800",
      complexity: "High"
    },
    {
      level: "Level 4: Paranoid",
      setup: "Air-gapped multi-sig + Shamir backup + geographic distribution",
      security: "Maximum (99.9% of users)",
      cost: "$1000+",
      complexity: "Very High"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-500 font-mono text-sm">{t.modules.module} 5</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {t.custody.pageTitle}
          </h1>
          <p className="text-xl text-slate-400">
            {t.custody.pageSubtitle}
          </p>
        </div>

        {/* Core Principle */}
        <section className="mb-16">
          <div className="p-8 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <h2 className="text-3xl font-bold text-orange-400 mb-4 text-center">
              🔑 "Not Your Keys, Not Your Coins"
            </h2>
            <p className="text-slate-300 text-lg text-center leading-relaxed mb-6">
              This is THE most important principle in Bitcoin. If you don't control the private keys,
              <span className="text-red-400 font-bold"> you don't own Bitcoin</span> - you own an IOU.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg">
                <h3 className="text-lg font-bold text-red-400 mb-3">❌ Exchange Custody</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Exchange holds your keys</li>
                  <li>• Can freeze/seize anytime</li>
                  <li>• Hack risk (Mt.Gox, FTX, etc.)</li>
                  <li>• You're just a database entry</li>
                  <li>• <span className="text-red-400 font-semibold">Missing the entire point of Bitcoin</span></li>
                </ul>
              </div>

              <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h3 className="text-lg font-bold text-green-400 mb-3">✅ Self-Custody</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• YOU hold your keys</li>
                  <li>• No one can freeze/seize</li>
                  <li>• No counterparty risk</li>
                  <li>• Actual Bitcoin ownership</li>
                  <li>• <span className="text-green-400 font-semibold">Using Bitcoin as intended</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Wallets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🔐 {t.custody.hardwareWallets}</h2>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-orange-400 mb-3">Why Hardware Wallet?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-slate-300">Private keys never leave device</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-slate-300">Protected from malware</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-slate-300">Physical confirmation required</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {hardwareWallets.map((wallet, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{wallet.name}</h3>
                    <p className="text-slate-500 text-sm">{wallet.rating}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-200">{wallet.price}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Pros:</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      {wallet.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-green-400">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Cons:</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      {wallet.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-red-400">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seed Phrase Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🌱 {t.custody.seedPhrase}</h2>

          <div className="p-8 bg-slate-900/50 border border-orange-500/20 rounded-lg mb-6">
            <p className="text-slate-300 mb-6">
              Your <span className="text-orange-400 font-bold">seed phrase</span> (12-24 words) is a
              human-readable backup of your private keys. <span className="text-red-400 font-bold">Whoever has
              this can access your Bitcoin</span>.
            </p>

            <button
              onClick={() => setShowSeedExample(!showSeedExample)}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white font-medium transition-colors mb-4"
            >
              {showSeedExample ? "Hide" : "Show"} Example Seed Phrase
            </button>

            {showSeedExample && (
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg mb-6">
                <p className="text-red-400 text-sm mb-3 font-semibold">
                  ⚠️ EXAMPLE ONLY - NEVER use a seed phrase you found online!
                </p>
                <div className="grid grid-cols-3 gap-3 font-mono text-sm">
                  {["witch", "collapse", "practice", "feed", "shame", "open", "despair", "creek", "road", "again", "ice", "least"].map((word, i) => (
                    <div key={i} className="p-2 bg-slate-900 rounded text-slate-300">
                      <span className="text-slate-500">{i + 1}.</span> {word}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded">
                <h4 className="font-bold text-red-400 mb-3">❌ NEVER Do This:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Store digitally (photo, cloud, email)</li>
                  <li>• Share with anyone (even "support")</li>
                  <li>• Type into computer (keyloggers)</li>
                  <li>• Use generated online</li>
                  <li>• Keep only 1 copy</li>
                </ul>
              </div>

              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded">
                <h4 className="font-bold text-green-400 mb-3">✅ Best Practices:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Write on paper/metal (waterproof)</li>
                  <li>• Store 2-3 copies (different locations)</li>
                  <li>• Never digitize</li>
                  <li>• Use metal backup (fireproof)</li>
                  <li>• Consider passphrase (25th word)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Levels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🛡️ {t.custody.securityLevels}</h2>

          <div className="space-y-4">
            {securityLevels.map((level, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-orange-400 mb-1">{level.level}</h3>
                    <p className="text-slate-400 text-sm">{level.setup}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Cost</div>
                    <div className="text-lg font-bold text-slate-200">{level.cost}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Security: </span>
                    <span className="text-green-400 font-semibold">{level.security}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Complexity: </span>
                    <span className="text-slate-300">{level.complexity}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Setup Time: </span>
                    <span className="text-slate-300">{i === 0 ? "1 hour" : i === 1 ? "2 hours" : i === 2 ? "4 hours" : "8+ hours"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 bg-orange-500/5 border border-orange-500/10 rounded-lg">
            <h4 className="font-bold text-orange-400 mb-3">💡 Which Level for You?</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <div>• <span className="text-slate-400">0.01-1 BTC:</span> Level 1 (beginner setup)</div>
              <div>• <span className="text-slate-400">1-10 BTC:</span> Level 2 (add passphrase + metal backup)</div>
              <div>• <span className="text-slate-400">10-100 BTC:</span> Level 3 (multi-sig required)</div>
              <div>• <span className="text-slate-400">100+ BTC:</span> Level 4 (paranoid mode - hire expert)</div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Setup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">📝 {t.custody.setupGuide}</h2>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Buy Hardware Wallet",
                description: "Purchase from official site (Ledger.com, Trezor.io). NEVER buy used/third-party.",
                warning: "Scammers sell pre-setup wallets with compromised seeds!"
              },
              {
                step: 2,
                title: "Initialize Device",
                description: "Unbox, plug in, follow setup wizard. Choose 'Create new wallet'.",
                warning: null
              },
              {
                step: 3,
                title: "Write Seed Phrase",
                description: "Device shows 12-24 words. Write on paper IN ORDER. Double-check spelling.",
                warning: "This is your ONLY backup. Lose this = lose Bitcoin forever."
              },
              {
                step: 4,
                title: "Verify Seed",
                description: "Device asks you to confirm words (e.g., 'What is word #5?'). This ensures you wrote correctly.",
                warning: null
              },
              {
                step: 5,
                title: "Set PIN",
                description: "Choose 4-8 digit PIN. This protects against physical theft.",
                warning: "Don't use obvious PINs (1234, birthdays)."
              },
              {
                step: 6,
                title: "Install App",
                description: "Download Ledger Live or Trezor Suite. Connect wallet.",
                warning: null
              },
              {
                step: 7,
                title: "Receive Test Transaction",
                description: "Send small amount ($10) from exchange. Verify it appears.",
                warning: "Always test with small amount first!"
              },
              {
                step: 8,
                title: "Backup Seed (Physical)",
                description: "Store written seed in safe place. Consider metal backup (fireproof).",
                warning: "Make 2-3 copies in different locations."
              },
              {
                step: 9,
                title: "Send Test Transaction",
                description: "Send small amount OUT. Confirm device, verify on blockchain.",
                warning: "Practice recovery process in future."
              },
              {
                step: 10,
                title: "Transfer Full Amount",
                description: "Once comfortable, transfer remaining funds from exchange.",
                warning: "Congrats! You're now self-custodying Bitcoin properly."
              }
            ].map((item) => (
              <div key={item.step} className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-400 font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-200 mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                    {item.warning && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-sm">
                        <span className="text-red-400 font-semibold">⚠️ Warning: </span>
                        <span className="text-slate-300">{item.warning}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">⚠️ {t.custody.commonMistakes}</h2>

          <div className="space-y-4">
            {[
              {
                mistake: "Storing seed phrase digitally",
                why: "Keyloggers, cloud hacks, phone theft → instant loss",
                fix: "ONLY physical backup (paper/metal)"
              },
              {
                mistake: "Buying hardware wallet from Amazon/eBay",
                why: "Scammers sell pre-compromised devices",
                fix: "Buy ONLY from official websites"
              },
              {
                mistake: "Not testing with small amount first",
                why: "One wrong address = lose everything",
                fix: "Always send $10 test before large amounts"
              },
              {
                mistake: "Only 1 seed backup",
                why: "Fire, flood, lost → you're screwed",
                fix: "Minimum 2 copies, different locations"
              },
              {
                mistake: "Sharing seed with 'support'",
                why: "No legit service ever asks for seed",
                fix: "NEVER share, it's a scam 100% of time"
              },
              {
                mistake: "Leaving Bitcoin on exchange long-term",
                why: "Not your keys = exchange can steal/freeze/get hacked",
                fix: "Self-custody or you don't own it"
              }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-red-500/5 border border-red-500/20 rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">❌</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-red-400 mb-1">{item.mistake}</h4>
                    <p className="text-slate-400 text-sm mb-2">Why bad: {item.why}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-green-400 text-sm font-semibold">{item.fix}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🔑 {t.common.keyTakeaways}</h2>

          <div className="space-y-4">
            {[
              t.custody.takeaway1,
              t.custody.takeaway2,
              t.custody.takeaway3,
              t.custody.takeaway4,
              t.custody.takeaway5
            ].map((takeaway, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="text-orange-400 font-bold">{i + 1}.</span>
                <span className="text-slate-300">{takeaway}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final Note */}
        <div className="p-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-orange-400 mb-4 text-center">
            🎓 Congrats - You're Now a True Bitcoiner!
          </h3>
          <p className="text-slate-300 text-center leading-relaxed">
            You've learned Bitcoin from <span className="text-orange-400 font-semibold">fundamentals</span> (Austrian Economics),
            understood <span className="text-orange-400 font-semibold">history</span> (why fiat fails),
            grasped the <span className="text-orange-400 font-semibold">mechanics</span> (halvings & S2F),
            and now can <span className="text-orange-400 font-semibold">actually USE</span> Bitcoin (self-custody).
            <br /><br />
            This is the knowledge path <span className="text-green-400 font-bold">Satoshi intended</span>.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-800">
          <Link
            href="/modules/stock-to-flow"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
          >
            ← {t.modules.s2f.title}
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-colors"
          >
            ← {t.nav.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
