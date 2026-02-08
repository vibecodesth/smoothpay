export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Stop Worrying If Next Month's <br />
            <span className="text-blue-600">Paycheck Will Come</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Turn your unpredictable freelance income into a steady paycheck—automatically. 
            No more anxiety about slow months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#waitlist" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Join the Waitlist (It's Free)
            </a>
          </div>

          <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-slate-700 italic">
              "I'm constantly worried that one day I'll just stop getting inquiries. 
              The uncertainty gives me anxiety."
            </p>
            <p className="text-slate-500 text-sm mt-2">— Freelance Photographer, Reddit</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💰',
                title: 'Steady Monthly Income',
                desc: 'Get paid the same amount every month, even during slow seasons'
              },
              {
                icon: '🤖',
                title: 'Automatic Smoothing',
                desc: 'We calculate your 12-month average and handle the rest'
              },
              {
                icon: '🔓',
                title: 'Always Accessible',
                desc: 'Access your full funds anytime—no lock-in, no penalties'
              },
              {
                icon: '🎯',
                title: 'Built for You',
                desc: 'Designed specifically for freelancers, contractors, and gig workers'
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            You're Not Lazy.
          </h2>
          <p className="text-2xl text-slate-300 text-center mb-16">
            Traditional Finance Tools Just Don't Work for You.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                The Anxiety Never Stops
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                You made $8K last month. Great! But this month you only have $2K lined up. 
                Your brain is already running worst-case scenarios: "What if the clients don't pay? 
                What if I don't get any new bookings?"
                <br /><br />
                You check your bank account 5 times a day. You calculate and recalculate your runway. 
                The stress is exhausting.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                "Just Budget Better" Doesn't Help
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Everyone says "save 6 months of expenses" or "follow the 50/30/20 rule." Cool. 
                But how do you budget when you don't know if you'll make $3K or $10K this month?
                <br /><br />
                YNAB and Mint are built for people with steady paychecks. You need something different.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Seasonal Swings Wreck Everything
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Summer is slow. December is crazy. Tax season is packed. Wedding season prints money. 
                You know the patterns—but you still can't smooth them out.
                <br /><br />
                You end up either feast-or-famine: overspending during good months, panicking during slow ones.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-800 border border-slate-700 rounded-lg">
            <p className="text-xl text-blue-300 font-semibold">
              The problem isn't your discipline. 
            </p>
            <p className="text-lg text-slate-300 mt-2">
              It's that every financial tool assumes you get paid the same amount every two weeks. 
              You don't. And that changes everything.
            </p>
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Imagine: A Steady Paycheck.
          </h2>
          <p className="text-2xl text-slate-600 text-center mb-16">
            Every Month. No Matter What.
          </p>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                😴 You Sleep Better
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Your income still varies—but you get paid the same amount every month. 
                SmoothPay calculates your 12-month average and pays you that. 
                <br /><br />
                High-income months? The extra stays in your account. Low-income months? You still get your "salary."
                <br /><br />
                No more 3am anxiety spirals about next month's rent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                📊 You Can Finally Budget (For Real)
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                When you know exactly how much you'll receive every month, budgeting becomes easy. 
                Not "aspirational spreadsheet" easy—actually easy.
                <br /><br />
                You can commit to a gym membership without second-guessing. 
                You can plan a vacation. You can say yes to dinner without mentally calculating your runway.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                ✅ You Look Legit
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                "I make $4K-$12K/month depending on the season" sounds sketchy. 
                "I receive $7,500/month through SmoothPay" sounds stable.
                <br /><br />
                Get approved for rentals, loans, and credit cards like a real adult.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            How It Works
          </h2>

          <div className="space-y-8">
            {[
              {
                num: '1',
                title: 'Connect Your Accounts',
                desc: 'Link your business bank account, Stripe, PayPal—wherever you receive income. We analyze your last 12 months to calculate your average.'
              },
              {
                num: '2',
                title: 'We Pay You Every Month',
                desc: 'Based on your average, we automatically transfer a consistent amount to your personal account every month. Your "salary."'
              },
              {
                num: '3',
                title: 'Adjust Anytime',
                desc: 'Income going up? Your monthly payout increases automatically. Need access to your full balance? Withdraw anytime. You\'re always in control.'
              }
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-lg text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Waitlist */}
      <div id="waitlist" className="bg-gradient-to-b from-blue-600 to-blue-700 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Get Early Access
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the waitlist to get 3 months free when we launch
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-6 py-4 rounded-lg text-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Your name (optional)"
              className="w-full px-6 py-4 rounded-lg text-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <select className="w-full px-6 py-4 rounded-lg text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="">I'm a...</option>
              <option value="freelancer">Freelancer</option>
              <option value="contractor">Contractor</option>
              <option value="gig">Gig Worker</option>
              <option value="creator">Content Creator</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Join the Waitlist
            </button>
          </form>

          <div className="mt-8 space-y-2 text-blue-100">
            <p>✅ 3 months free for early adopters</p>
            <p>✅ Help shape the product</p>
            <p>✅ Skip the line when we launch</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">
            SmoothPay - Steady income for freelancers
          </p>
          <p className="text-sm">
            🔒 Bank-level security · 📊 Your data stays private · 🚀 Launching Q1 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
