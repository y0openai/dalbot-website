// ===================================
// DalBot - Language System
// ===================================

const translations = {
    en: {
        // Navigation
        'nav.intelligence': 'Intelligence',
        'nav.architecture': 'Architecture',
        'nav.quickstart': 'Quick Start',
        'nav.pricing': 'Pricing',
        'nav.faq': 'FAQ',
        'nav.start': 'Start Trading Now',

        // Hero Section
        'hero.eyebrow': 'Institutional-Grade Technology for Individual Traders',
        'hero.slogan': 'Wall Street Sophistication<br>for Individual Traders',
        'hero.catchphrase': '10x Your Savings Returns',
        'hero.subtitle': 'Bank Savings: 4%/year. DalBot: 3%/month average.\nNo conditions, for everyone, always available.',
        'hero.cta.demo': 'Try Free Demo',
        'hero.cta.video': 'Watch AI in Action',
        'hero.cta.watchVideo': 'Watch AI in Action',
        'hero.monthly': 'Expected Returns (Monthly)',
        'hero.annual': 'Compound Returns (Annual)',
        'hero.chart.bank': 'Bank\n4%',
        'hero.chart.kospi': 'KOSPI\n6.6%',
        'hero.chart.dalbot': 'DalBot\n42.58%',
        
        // Stats
        'stats.totalProfit': 'Total Profits Generated',
        'stats.activeTraders': 'Active Traders',
        'stats.trades': 'Successful Trades Today',
        'stats.winRate': 'Win Rate (Last 30 Days)',

        // Testimonials
        'testimonial1.text': '"Doubled my investment in 3 months. It really works."',
        'testimonial1.name': 'Min-su Kim',
        'testimonial1.role': 'Office Worker, Seoul',
        'testimonial2.text': '"Was skeptical at first, but AI really handles everything. Now I just check results."',
        'testimonial2.name': 'Ji-eun Park',
        'testimonial2.role': 'Freelancer, Busan',
        'testimonial3.text': '"Bloomberg tech at this price? Amazing that individuals can use institutional systems."',
        'testimonial3.name': 'Jun-ho Lee',
        'testimonial3.role': 'IT Developer, Incheon',
        'testimonial.verified': 'Verified Trader',
        'testimonial.profit': 'profit',

        // Calculator
        'calculator.title': 'Tired of low returns? Calculate your potential.',
        'calculator.conservative': 'Conservative (2% monthly)',
        'calculator.balanced': 'Balanced (3% monthly)',
        'calculator.aggressive': 'Aggressive (4% monthly)',
        'calculator.label': 'Your Investment Amount',
        'calculator.bank': 'Bank Savings (1 Year)',
        'calculator.dalbot': 'DalBot (1 Year)',
        'calculator.principal': 'Principal',
        'calculator.interest': 'Interest',
        'calculator.profit': 'Profit',
        'calculator.tax': 'Tax',
        'calculator.taxRate': 'Tax (15.4%)',
        'calculator.taxFree': '₩0 (Tax-Free) ✓',
        'calculator.total': 'Total',
        'calculator.netAmount': 'Net Amount',
        'calculator.timeline.3months': 'After 3 months',
        'calculator.timeline.6months': 'After 6 months',
        'calculator.timeline.1year': 'After 1 year',
        'calculator.cta': 'Get My Earnings Projection',
        'calculator.note': 'Past performance does not guarantee future results',
        
        // Steps
        'steps.title': 'Get Started in 3 Simple Steps',
        'steps.subtitle': 'No crypto knowledge needed. Our AI does the heavy lifting 24/7.',
        'steps.step1.title': '5-min Setup',
        'steps.step1.desc': 'Connect your exchange account securely. It\'s quick, easy, and we never hold your funds.',
        'steps.step2.title': 'AI Trades 24/7',
        'steps.step2.desc': 'Our advanced AI analyzes the market and executes trades automatically, day and night.',
        'steps.step3.title': 'Check Profits Daily',
        'steps.step3.desc': 'Log in anytime to see your portfolio grow. Withdraw your profits whenever you want.',
        
        // Pricing
        'pricing.title': 'Simple, Transparent Pricing',
        'pricing.profit.title': 'Profit Sharing',
        'pricing.profit.desc': 'Pay only when you profit. Perfect for starting out.',
        'pricing.profit.fee': '+ 50% of profits',
        'pricing.subscription.title': 'Subscription',
        'pricing.subscription.desc': 'For active traders who want to maximize their returns.',
        'pricing.subscription.fee': '+ 20% of profits',
        'pricing.month': '/month',
        'pricing.cta.trial': '7-Day Free Trial',
        'pricing.guarantee': 'No credit card required',
        'pricing.popular': 'Most Popular',

        // Limited Offer
        'pricing.limited.badge': 'Limited Time Offer',
        'pricing.limited.text': 'New signups this month',
        'pricing.limited.slots': '100 spots only',
        'pricing.limited.original': 'First month $499',
        'pricing.limited.discounted': '$99 (80% off)',
        'pricing.limited.slotsLeft': 'Spots left',
        'pricing.limited.timeLeft': 'Time left',
        
        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.q1': 'What is DalBot and how does it work?',
        'faq.a1': 'DalBot is an AI-powered crypto trading system that automatically trades futures for you 24/7. We use the same Order Flow analysis techniques as Goldman Sachs and Citadel, but make it accessible for individual investors.',
        'faq.q2': 'Do I need any crypto trading experience?',
        'faq.a2': 'No experience needed! DalBot handles everything automatically. You just need to connect your exchange account and set your investment amount.',
        'faq.q3': 'How much can I expect to earn?',
        'faq.a3': 'Based on our backtesting from Jan-Oct 2025, DalBot achieved 42.58% annual returns (2-4% monthly, 3% average). However, past performance doesn\'t guarantee future results.',
        'faq.q4': 'Is my money safe? What are the risks?',
        'faq.a4': 'Your funds stay in your exchange account - we never hold them. However, futures trading involves risk of loss. Our worst month was -2.1%, but long-term returns have been positive.',
        'faq.q5': 'Which plan should I choose?',
        'faq.a5': 'If you\'re new, start with Profit Sharing - you only pay when you make money. For active traders with larger investments, the Subscription plan offers better value.',
        'faq.q6': 'Is it really the same technology as Bloomberg Terminal or Goldman Sachs?',
        'faq.a6': 'Yes, the core technology is identical. DalBot AI implements VWAP, Volume Profile, L2/L3 Order Book analysis, Microstructure Analysis, Hidden Liquidity Detection, Order Flow Toxicity (VPIN), and Kyle\'s Lambda calculations. However, you can start from just $499/month instead of millions of dollars.',
        'faq.q7': 'Can we compete with institutional investors?',
        'faq.a7': 'DalBot AI uses the same analysis techniques as institutions while offering advantages: 24/7 uninterrupted operation (more consistent than human traders), emotion-free consistent execution (no psychological errors), and real-time learning for continuous improvement. We actually outperform average hedge fund returns.',
        'faq.q8': 'Does AI really learn by itself?',
        'faq.a8': 'Yes, DalBot AI continuously collects market data in real-time, compares it with historical patterns, and automatically optimizes strategies. Five independent AI modules each learn and evolve continuously.',
        'faq.q9': 'Why should I invest in cryptocurrency now?',
        'faq.a9': 'Three critical factors make crypto essential today: First, traditional banking products are no longer viable. With most financial institutions offering under 4% annual returns, we live in an era where bank deposits fail to preserve wealth—they merely slow its erosion. Second, crypto futures are one of the few remaining tax-free investment vehicles. While bank interest is taxed at 15.4%, crypto futures remain completely tax-exempt. Third, global monetary expansion is accelerating at an unprecedented pace. Central banks worldwide are printing money aggressively, causing fiat currency to lose purchasing power at 5-10% annually. Holding cash means watching your wealth silently evaporate. Crypto assets offer a hedge against this systemic devaluation while providing institutional-grade returns previously accessible only to the top 0.1%.',

        // Hero Badges
        'hero.badge1': 'Bloomberg-Grade Order Flow',
        'hero.badge2': 'Goldman-Level Algorithms',
        'hero.badge3': 'Citadel-Speed Execution',

        // AI System
        'aiSystem.header.eyebrow': 'Wall Street Sophistication for Individual Traders',
        'aiSystem.header.title': 'Intelligence That Learns While You Sleep',
        'aiSystem.header.description': 'Goldman Sachs and Citadel invested hundreds of millions in institutional-grade infrastructure. Now accessible to everyone.',
        'aiSystem.title': 'True AI Trading: Self-Learning and Evolving',
        'aiSystem.subtitle': 'Order Flow analysis systems built by top hedge funds and investment banks with millions of dollars now implemented with AI and accessible to individual investors',
        'aiSystem.basic.title': 'Retail Traders',
        'aiSystem.basic.item1': 'Simple bots & indicators',
        'aiSystem.basic.item2': 'Manual strategies',
        'aiSystem.basic.item3': 'Limited capital access',
        'aiSystem.basic.item4': '$50~500 monthly tools',
        'aiSystem.algo.title': 'Small-Mid Funds',
        'aiSystem.algo.item1': 'Backtested algorithms',
        'aiSystem.algo.item2': 'Professional traders',
        'aiSystem.algo.item3': 'Periodic rebalancing',
        'aiSystem.algo.item4': '$100K~1M infrastructure',
        'aiSystem.dalbot.title': 'DalBot: Institutional-Grade Infrastructure',
        'aiSystem.dalbot.badge': 'Institutional Investor Grade',
        'aiSystem.dalbot.item1': 'Real-time AI learning',
        'aiSystem.dalbot.item2': 'Goldman/Citadel tech stack',
        'aiSystem.dalbot.item3': 'Autonomous evolution',
        'aiSystem.dalbot.item4': '$499/month accessible',
        'aiSystem.tech.title': 'Institutional Investor-Grade Technology',

        // Modules
        'modules.title': 'Perfect Harmony of 5 AI Modules',
        'modules.subtitle': 'Each module learns independently and works together to create optimal trading decisions',
        'modules.ai.title': 'Next-Generation Intelligence System',
        'modules.ai.desc': 'DalBot transcends legacy automated trading programs. Our system continuously monitors market conditions, enabling 5 independent AI modules to analyze, deliberate, and synthesize optimal trading decisions autonomously.',
        'modules.ai.point1.title': 'Continuous Data Intelligence',
        'modules.ai.point1.desc': 'Real-time collection and processing of exchange data, order flows, volume dynamics, and price movements',
        'modules.ai.point2.title': 'Independent Decision-Making',
        'modules.ai.point2.desc': '5 AI modules each analyze the market and make independent judgments',
        'modules.ai.point3.title': 'Autonomous Adjustment',
        'modules.ai.point3.desc': 'AI autonomously adjusts position size, entry timing, and targets in real-time',
        'modules.ai.point4.title': 'Continuous Learning',
        'modules.ai.point4.desc': 'Automatically optimizes strategies by comparing with historical patterns',
        'modules.tab1': 'Order Flow AI',
        'modules.tab2': 'Dynamic Allocation',
        'modules.tab3': 'Execution Probability',
        'modules.tab4': 'Tiered Pyramid',
        'modules.tab5': 'Dynamic TP',

        // Technical Details Toggle
        'modules.techDetails.show': '🔬 View Technical Details',
        'modules.techDetails.hide': '🔬 Hide Technical Details',

        // Module Details - Order Flow
        'modules.orderflow.title': 'Order Flow AI',
        'modules.orderflow.benefit.title': 'Detect institutional moves within 3 seconds and follow them',
        'modules.orderflow.benefit.desc': 'We\'ve implemented the Order Flow analysis technology that Goldman Sachs and Citadel invested billions to develop. The moment institutional investors start buying/selling, our AI detects it instantly and positions in the same direction.',
        'modules.orderflow.benefit.point1': 'Instant large order detection:',
        'modules.orderflow.benefit.point1.desc': 'Real-time capture of multi-million dollar institutional trades',
        'modules.orderflow.benefit.point2': 'Predict market sentiment shifts:',
        'modules.orderflow.benefit.point2.desc': 'Detect buy/sell pressure before price moves',
        'modules.orderflow.benefit.point3': 'Avoid unfavorable trades:',
        'modules.orderflow.benefit.point3.desc': 'AI automatically filters out losing timing',
        'modules.orderflow.desc': 'Perfect AI implementation of Order Flow analysis techniques used by Bloomberg Terminal and Citadel',
        'modules.orderflow.bloomberg': 'Bloomberg Terminal Level',
        'modules.orderflow.b1': 'Real-time VWAP tracking and deviation analysis',
        'modules.orderflow.b2': 'Volume Profile price distribution',
        'modules.orderflow.b3': 'Block Trade automatic detection',
        'modules.orderflow.b4': 'L2/L3 Order Book multi-layer analysis',
        'modules.orderflow.citadel': 'Citadel/Two Sigma HFT',
        'modules.orderflow.c1': 'VPIN (Order Flow Toxicity) calculation',
        'modules.orderflow.c2': 'Kyle\'s Lambda price impact coefficient',
        'modules.orderflow.c3': 'Adverse Selection Cost measurement',
        'modules.orderflow.c4': 'Volume Clustering pattern recognition',
        'modules.orderflow.process': 'AI Learning Process',
        'modules.orderflow.process.desc': 'Analyzes institutional trading patterns → Detects market sentiment shifts → Adjusts signal strength dynamically',

        // Module Details - Dynamic Allocation
        'modules.allocation.title': 'Dynamic Allocation AI',
        'modules.allocation.benefit.title': 'Automatically adjust investment amount based on market conditions',
        'modules.allocation.benefit.desc': 'Reduce risk on volatile days, maximize profits on strong trend days. Even while you sleep, AI analyzes the market in real-time and automatically adjusts optimal position size.',
        'modules.allocation.benefit.point1': 'Auto-defense on high volatility:',
        'modules.allocation.benefit.point1.desc': 'Reduce investment by 40% in risky markets to minimize losses',
        'modules.allocation.benefit.point2': 'Aggressive on strong trends:',
        'modules.allocation.benefit.point2.desc': 'Increase investment by 40% in clear opportunities to maximize profits',
        'modules.allocation.benefit.point3': '24/7 automatic adjustment:',
        'modules.allocation.benefit.point3.desc': 'Hourly market re-evaluation, no manual changes needed',
        'modules.allocation.desc': 'Analyzes market volatility and trends to automatically determine optimal position size',
        'modules.allocation.tech': 'Technical Details',
        'modules.allocation.t1': 'Amplitude analysis (60 candle volatility)',
        'modules.allocation.t2': 'BB Width volatility measurement',
        'modules.allocation.t3': 'ADX-based trend strength assessment',
        'modules.allocation.t4': 'Auto-adjust 0.6x ~ 1.4x',
        'modules.allocation.process': 'AI Learning Process',
        'modules.allocation.process.desc': 'Measures real-time volatility → Evaluates trend strength → Dynamically adjusts position size',

        // Module Details - Execution Probability
        'modules.probability.title': 'Execution Probability AI',
        'modules.probability.benefit.title': 'Automatically skip losing trades and capture only solid opportunities',
        'modules.probability.benefit.desc': 'We don\'t blindly follow every signal. AI calculates the success probability of each trade and automatically filters out risky or uncertain timing. The most powerful weapon for high win rates.',
        'modules.probability.benefit.point1': 'Auto-avoid uncertain trades:',
        'modules.probability.benefit.point1.desc': 'Wait instead of trading when market is chaotic',
        'modules.probability.benefit.point2': 'Execute only solid opportunities:',
        'modules.probability.benefit.point2.desc': 'Aggressive investment only when 80%+ win rate expected',
        'modules.probability.benefit.point3': 'Validated by historical data:',
        'modules.probability.benefit.point3.desc': 'Decisions based on past success rates of similar patterns',
        'modules.probability.desc': 'Evaluates success probability and executes selectively instead of executing all signals',
        'modules.probability.tech': 'Technical Details',
        'modules.probability.t1': 'Market uncertainty score (0-100)',
        'modules.probability.t2': 'Position risk score (0-100)',
        'modules.probability.t3': 'Historical pattern confidence (0-100)',
        'modules.probability.t4': 'DCA: 20-80% probability execution',
        'modules.probability.t5': 'Pyramid: 40-90% probability execution',
        'modules.probability.process': 'AI Learning Process',
        'modules.probability.process.desc': 'Calculates market uncertainty → Assesses risk levels → Filters low-probability trades autonomously',

        // Module Details - Tiered Pyramid
        'modules.pyramid.title': 'Tiered Pyramid AI',
        'modules.pyramid.benefit.title': 'Smart position scaling based on signal strength',
        'modules.pyramid.benefit.desc': 'Start small on weak signals, invest aggressively on strong signals. When trends flow as expected, AI automatically adds positions to maximize profits.',
        'modules.pyramid.benefit.point1': 'Safe on weak signals:',
        'modules.pyramid.benefit.point1.desc': 'Start 40% smaller when uncertain, close at 1.5% profit',
        'modules.pyramid.benefit.point2': 'Aggressive on strong signals:',
        'modules.pyramid.benefit.point2.desc': 'Full position when confident, add more at just 0.5% gain',
        'modules.pyramid.benefit.point3': 'Auto-expand with trend:',
        'modules.pyramid.benefit.point3.desc': 'AI automatically adds to winning positions',
        'modules.pyramid.desc': 'Classifies signal quality into 3 tiers and executes differentiated position expansion strategy',
        'modules.pyramid.tiers': 'Tier System',
        'modules.pyramid.tier1': 'Tier 1 (Weak): OF 15-30',
        'modules.pyramid.tier1.desc': 'Position: 0.4x, Required profit: 1.5%',
        'modules.pyramid.tier2': 'Tier 2 (Moderate): OF 30-50',
        'modules.pyramid.tier2.desc': 'Position: 0.7x, Required profit: 1.0%',
        'modules.pyramid.tier3': 'Tier 3 (Strong): OF 50-100',
        'modules.pyramid.tier3.desc': 'Position: 1.0x, Required profit: 0.5%',

        // Module Details - Dynamic TP
        'modules.tp.title': 'Dynamic Take-Profit AI',
        'modules.tp.benefit.title': 'Adjust profit targets in real-time based on market conditions',
        'modules.tp.benefit.desc': 'Not a fixed target. Take profits quickly in high volatility, increase targets in strong trends for bigger gains. AI calculates optimal exit timing every moment.',
        'modules.tp.benefit.point1': 'Quick exit in high volatility:',
        'modules.tp.benefit.point1.desc': 'Lower target to 50% in risky markets to secure safe profits',
        'modules.tp.benefit.point2': 'Increase target in strong trends:',
        'modules.tp.benefit.point2.desc': 'Triple target in stable uptrends to maximize profits',
        'modules.tp.benefit.point3': 'Recalculate every candle:',
        'modules.tp.benefit.point3.desc': 'Detect market changes in real-time, auto-adjust targets',
        'modules.tp.desc': 'Automatically adjusts target profit 0.5x~3.0x according to market volatility',
        'modules.tp.tech': 'Technical Details',
        'modules.tp.t1': 'Real-time Amplitude measurement',
        'modules.tp.t2': 'ROI progress analysis',
        'modules.tp.t3': 'Trend sustainability assessment',
        'modules.tp.t4': 'Recalculation every candle',

        // Pricing Comparison
        'pricing.comparison.bloomberg': 'Bloomberg Terminal',
        'pricing.comparison.goldman': 'Goldman Sachs Marquee',
        'pricing.comparison.quant': 'Professional Quant Team',
        'pricing.comparison.dalbot': 'DalBot AI',
        'pricing.comparison.savings': 'Same technology, 0.4% of the cost',

        // Marquee
        'marquee.item1': 'Bloomberg Terminal Technology',
        'marquee.item2': 'Goldman Sachs Algorithms',
        'marquee.item3': 'Citadel HFT Speed',
        'marquee.item4': 'Institutional-Grade Technology for Individual Traders',
        'marquee.item5': 'Two Sigma AI Models',
        'marquee.item6': 'Accessible to Everyone',

        // Sticky Banner
        'banner.main': 'Institutional-Grade Technology for Individual Traders',

        // Footer
        'footer.tagline': 'Institutional Technology for Individual Traders',

        // Risk Warning
        'risk.title': 'Risk Warning:',
        'risk.text': 'Futures trading is a high-risk activity and involves the risk of principal loss. It is not suitable for all investors. Please ensure you fully understand the risks involved before trading.',
        
        // Footer
        'footer.terms': 'Terms of Service',
        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact'
    },
    
    ko: {
        // Navigation
        'nav.intelligence': '지능형 기술',
        'nav.architecture': '시스템 구조',
        'nav.quickstart': '시작하기',
        'nav.pricing': '요금제',
        'nav.faq': '자주 묻는 질문',
        'nav.start': '지금 시작하기',

        // Hero Section
        'hero.eyebrow': '개인 트레이더를 위한 기관급 기술',
        'hero.slogan': '개인 트레이더에게<br>Wall Street의 정교함을',
        'hero.catchphrase': '적금 금리의 10배 수익',
        'hero.subtitle': '은행 적금: 연 4%. DalBot: 월 평균 3%.\n조건 없이, 누구나, 언제나.',
        'hero.cta.demo': '무료 데모 체험',
        'hero.cta.video': 'AI 작동 영상 보기',
        'hero.cta.watchVideo': 'AI 작동 영상 보기',
        'hero.monthly': '기대 수익률(월)',
        'hero.annual': '복리 수익률(연)',
        'hero.chart.bank': '은행\n4%',
        'hero.chart.kospi': 'KOSPI\n6.6%',
        'hero.chart.dalbot': 'DalBot\n42.58%',
        
        // Stats
        'stats.totalProfit': '총 수익 창출',
        'stats.activeTraders': '활성 트레이더',
        'stats.trades': '오늘 성공한 거래',
        'stats.winRate': '승률 (최근 30일)',

        // Testimonials
        'testimonial1.text': '"깬 적금의 이자, 3개월 만에 4배로 회수. 진짜 됩니다."',
        'testimonial1.name': '김민수',
        'testimonial1.role': '직장인, 서울',
        'testimonial2.text': '"처음엔 반신반의했는데 AI가 정말 알아서 다 해주네요. 지금은 그냥 수익 확인만 합니다."',
        'testimonial2.name': '박지은',
        'testimonial2.role': '프리랜서, 부산',
        'testimonial3.text': '"Bloomberg 기술을 이 가격에? 헤지펀드에서 쓰는 시스템을 개인이 쓸 수 있어서 놀랐던 기억이 납니다."',
        'testimonial3.name': '이준호',
        'testimonial3.role': 'IT 개발자, 인천',
        'testimonial.verified': '인증된 트레이더',
        'testimonial.profit': '수익',

        // Calculator
        'calculator.title': '수익 비교 계산기 (적금 vs DalBot)',
        'calculator.conservative': '보수적 (월 2%)',
        'calculator.balanced': '균형잡힌 (월 3%)',
        'calculator.aggressive': '공격적 (월 4%)',
        'calculator.label': '투자 금액',
        'calculator.bank': '은행 적금 (1년)',
        'calculator.dalbot': 'DalBot (1년)',
        'calculator.principal': '원금',
        'calculator.interest': '이자',
        'calculator.profit': '수익',
        'calculator.tax': '세금',
        'calculator.taxRate': '세금 (15.4%)',
        'calculator.taxFree': '₩0 (비과세) ✓',
        'calculator.total': '총액',
        'calculator.netAmount': '실수령액',
        'calculator.timeline.3months': '3개월 후',
        'calculator.timeline.6months': '6개월 후',
        'calculator.timeline.1year': '1년 후',
        'calculator.cta': '내 예상 수익 이메일로 받기',
        'calculator.note': '과거 수익률은 미래 수익을 보장하지 않습니다',
        
        // Steps
        'steps.title': '간단한 3단계로 시작하기',
        'steps.subtitle': '코인 지식이 필요 없습니다. AI가 24시간 대신 일합니다.',
        'steps.step1.title': '5분 설정',
        'steps.step1.desc': '거래소 계정을 안전하게 연결하세요. 빠르고 쉬우며, 자금은 항상 당신이 관리합니다.',
        'steps.step2.title': 'AI 24시간 거래',
        'steps.step2.desc': '고급 AI가 시장을 분석하고 밤낮없이 자동으로 거래를 실행합니다.',
        'steps.step3.title': '매일 수익 확인',
        'steps.step3.desc': '언제든지 로그인하여 포트폴리오 성장을 확인하세요. 수익은 원할 때 출금 가능합니다.',
        
        // Pricing
        'pricing.title': '간단하고 투명한 요금제',
        'pricing.profit.title': '수익공유',
        'pricing.profit.desc': '수익이 날 때만 수수료를 내세요. 처음 시작하기 완벽합니다.',
        'pricing.profit.fee': '+ 수익의 50%',
        'pricing.subscription.title': '구독제',
        'pricing.subscription.desc': '수익을 최대화하고 싶은 적극적인 트레이더를 위한 플랜.',
        'pricing.subscription.fee': '+ 수익의 20%',
        'pricing.month': '/월',
        'pricing.cta.trial': '7일 무료 체험',
        'pricing.guarantee': '신용카드 필요 없음',
        'pricing.popular': '가장 인기',

        // Limited Offer
        'pricing.limited.badge': '한정 특가',
        'pricing.limited.text': '이번 달 신규 가입자',
        'pricing.limited.slots': '100명 한정',
        'pricing.limited.original': '첫 달 $499',
        'pricing.limited.discounted': '$99 (80% 할인)',
        'pricing.limited.slotsLeft': '남은 자리',
        'pricing.limited.timeLeft': '남은 시간',
        
        // FAQ
        'faq.title': '자주 묻는 질문',
        'faq.q1': 'DalBot는 무엇이고 어떻게 작동하나요?',
        'faq.a1': 'DalBot는 AI 기반 암호화폐 거래 시스템으로 24시간 자동으로 선물 거래를 수행합니다. Goldman Sachs, Citadel과 동일한 Order Flow 분석 기법을 사용하지만 개인투자자도 이용할 수 있게 만들었습니다.',
        'faq.q2': '암호화폐 거래 경험이 필요한가요?',
        'faq.a2': '전혀 필요 없습니다! DalBot가 모든 것을 자동으로 처리합니다. 거래소 계정을 연결하고 투자 금액만 설정하면 됩니다.',
        'faq.q3': '얼마나 벌 수 있나요?',
        'faq.a3': '2025년 1-10월 백테스팅 기준, DalBot는 연 42.58% 수익률(월 2-4%, 평균 3%)을 달성했습니다. 단, 과거 성과가 미래 수익을 보장하지는 않습니다.',
        'faq.q4': '내 돈은 안전한가요? 위험은 무엇인가요?',
        'faq.a4': '자금은 거래소 계정에 있으며, 저희가 보관하지 않습니다. 단, 선물거래는 손실 위험이 있습니다. 최악의 달은 -2.1%였지만, 장기 수익은 양호했습니다.',
        'faq.q5': '어떤 플랜을 선택해야 하나요?',
        'faq.a5': '처음이라면 수익공유로 시작하세요 - 돈을 벌 때만 수수료를 냅니다. 큰 금액을 투자하는 적극적인 트레이더라면 구독제가 더 유리합니다.',
        'faq.q6': '정말 Bloomberg Terminal이나 Goldman Sachs와 동일한 기술인가요?',
        'faq.a6': '네, 핵심 기술은 동일합니다. DalBot AI는 VWAP, Volume Profile, L2/L3 호가창 분석, Microstructure Analysis, Hidden Liquidity Detection, Order Flow Toxicity (VPIN), Kyle\'s Lambda 계산을 구현했습니다. 단, 수백만 달러가 아닌 월 $499부터 시작할 수 있습니다.',
        'faq.q7': '기관 투자자와 경쟁할 수 있나요?',
        'faq.a7': 'DalBot AI는 기관과 동일한 분석 기법을 사용하면서도 장점이 있습니다: 24/7 중단 없는 운영(인간 트레이더보다 일관적), 감정 없는 일관된 실행(심리적 오류 없음), 실시간 학습을 통한 지속적 개선. 실제로 평균 헤지펀드 수익률을 능가합니다.',
        'faq.q8': 'AI가 정말 스스로 학습하나요?',
        'faq.a8': '네, DalBot AI는 실시간으로 지속적으로 시장 데이터를 수집하고, 과거 패턴과 비교하며, 자동으로 전략을 최적화합니다. 5개의 독립적인 AI 모듈이 각자 학습하고 진화합니다.',
        'faq.q9': '왜 지금 암호화폐 투자가 필요한가요?',
        'faq.a9': '세 가지 결정적 이유가 있습니다. 첫째, 전통적인 금융상품은 더 이상 유효하지 않습니다. 대부분의 금융기관이 연 4% 미만의 수익률을 제공하는 시대에, 은행 예금은 자산을 지키는 것이 아니라 단지 손실 속도를 늦출 뿐입니다. 둘째, 암호화폐는 현존하는 몇 안 되는 비과세 투자 수단입니다. 은행 이자는 15.4%의 세금이 부과되지만, 암호화폐 선물거래는 완전히 비과세입니다. 셋째, 전 세계적인 통화 팽창이 전례 없는 속도로 가속화되고 있습니다. 각국 중앙은행들이 공격적으로 화폐를 발행하면서 명목화폐의 구매력이 연간 5-10%씩 감소하고 있습니다. 현금을 보유하는 것은 자산 가치가 조용히 증발하는 것을 지켜보는 것과 같습니다. 암호화폐 자산은 이러한 시스템적 가치 하락에 대한 헤지 수단이며, 동시에 상위 0.1%만 접근 가능했던 기관급 수익률을 제공합니다.',

        // Hero Badges
        'hero.badge1': 'Bloomberg-Grade Order Flow',
        'hero.badge2': 'Goldman-Level Algorithms',
        'hero.badge3': 'Citadel-Speed Execution',

        // AI System
        'aiSystem.header.eyebrow': '개인 트레이더를 위한 Wall Street 수준의 정교함',
        'aiSystem.header.title': 'Intelligence That Learns While You Sleep',
        'aiSystem.header.description': '골드만삭스와 시타델이 천문학적 금액을 투자한 기관급 인프라를 이제 모두가 사용할 수 있습니다.',
        'aiSystem.title': '진정한 AI 트레이딩: 스스로 학습하고 진화합니다',
        'aiSystem.subtitle': '탑 헤지펀드와 투자은행이 구축한 Order Flow 분석 시스템을 AI로 구현하여 개인 투자자도 접근 가능하게 만들었습니다',
        'aiSystem.basic.title': '개인 투자자',
        'aiSystem.basic.item1': '단순 봇 & 지표',
        'aiSystem.basic.item2': '수동 전략 관리',
        'aiSystem.basic.item3': '제한된 자본 접근',
        'aiSystem.basic.item4': '월 5~50만원 툴',
        'aiSystem.algo.title': '중소 펀드',
        'aiSystem.algo.item1': '백테스트 알고리즘',
        'aiSystem.algo.item2': '전문 트레이더 고용',
        'aiSystem.algo.item3': '주기적 리밸런싱',
        'aiSystem.algo.item4': '1억~10억 인프라',
        'aiSystem.dalbot.title': 'DalBot',
        'aiSystem.dalbot.badge': '기관투자자급 인프라',
        'aiSystem.dalbot.item1': '실시간 AI 학습',
        'aiSystem.dalbot.item2': 'Goldman/Citadel 기술',
        'aiSystem.dalbot.item3': '자율 진화 시스템',
        'aiSystem.dalbot.item4': '월 $499로 이용 가능',
        'aiSystem.tech.title': ' 지능형 시스템 ',

        // Modules
        'modules.title': '5대 AI 모듈의 완벽한 조화',
        'modules.subtitle': '각 모듈이 독립적으로 학습하고 함께 작동하여 최적의 거래 결정을 만듭니다',
        'modules.ai.title': '차세대 지능형 시스템',
        'modules.ai.desc': 'DalBot는 과거의 자동 매매 프로그램을 뛰어넘습니다. 실시간으로 시장 상황을 모니터링하며, 5개의 독립적인 AI 모듈이 분석하고 판단한 결과를 종합하여 최적의 거래 결정을 자율적으로 실행합니다.',
        'modules.ai.point1.title': '지속적 데이터 인텔리전스',
        'modules.ai.point1.desc': '거래소 데이터, 주문흐름, 거래량 동향, 가격 변동을 실시간으로 수집 및 처리',
        'modules.ai.point2.title': '독립적 의사결정',
        'modules.ai.point2.desc': '5개 AI 모듈이 각자 시장을 분석하고 독립적인 판단 수행',
        'modules.ai.point3.title': '자율적 조정',
        'modules.ai.point3.desc': 'AI가 스스로 투자금액, 진입시점, 목표가를 실시간 조정',
        'modules.ai.point4.title': '지속적 학습',
        'modules.ai.point4.desc': '과거 패턴과 비교하며 전략을 자동으로 최적화',
        'modules.tab1': '주문흐름 분석',
        'modules.tab2': '자동 자금배분',
        'modules.tab3': '진입 확률계산',
        'modules.tab4': '단계별 DCA',
        'modules.tab5': '목표가 자동조정',

        // Technical Details Toggle
        'modules.techDetails.show': '🔬 자세히 보기 (전문 기술)',
        'modules.techDetails.hide': '🔬 접기',

        // Module Details - Order Flow
        'modules.orderflow.title': '주문흐름 분석 AI',
        'modules.orderflow.benefit.title': '대형 투자자의 움직임을 3초 안에 포착해 따라갑니다',
        'modules.orderflow.benefit.desc': '골드만삭스와 시타델이 천문학적 비용을 투자해 개발한 Order Flow 분석 기술을 AI로 구현했습니다. 기관 투자자들이 매수/매도를 시작하는 순간, AI가 즉시 감지하고 같은 방향으로 포지션을 잡습니다.',
        'modules.orderflow.benefit.point1': '대형 주문 즉시 감지:',
        'modules.orderflow.benefit.point1.desc': '기관의 수백만 달러 거래를 실시간 포착',
        'modules.orderflow.benefit.point2': '시장 심리 변화 예측:',
        'modules.orderflow.benefit.point2.desc': '가격이 움직이기 전에 매수/매도 압력 감지',
        'modules.orderflow.benefit.point3': '불리한 거래 회피:',
        'modules.orderflow.benefit.point3.desc': 'AI가 손해 날 타이밍을 자동으로 걸러냄',
        'modules.orderflow.desc': 'Bloomberg Terminal과 Citadel이 사용하는 대량 주문 추적 기술을 AI로 완벽 구현',
        'modules.orderflow.bloomberg': 'Bloomberg Terminal 수준',
        'modules.orderflow.b1': 'VWAP (거래량 가중 평균가) - 큰 손들의 평균 매수가 실시간 추적',
        'modules.orderflow.b2': 'Volume Profile (거래량 분포) - 어느 가격대에 큰 거래가 몰렸는지 분석',
        'modules.orderflow.b3': 'Block Trade (대량거래 감지) - 기관의 대규모 주문 자동 포착',
        'modules.orderflow.b4': 'L2/L3 호가창 분석 - 여러 거래소의 매수/매도 벽 동시 분석',
        'modules.orderflow.citadel': 'Citadel/Two Sigma HFT 수준',
        'modules.orderflow.c1': 'VPIN (주문독성) - 급격한 가격변동을 일으킬 위험한 주문 감지',
        'modules.orderflow.c2': 'Kyle\'s Lambda (가격충격계수) - 내 주문이 시장에 미칠 영향 계산',
        'modules.orderflow.c3': 'Adverse Selection (역선택 비용) - 불리한 시점에 거래하는 것 방지',
        'modules.orderflow.c4': 'Volume Clustering (거래량 군집화) - 비정상적 거래량 패턴 자동 인식',
        'modules.orderflow.process': 'AI 학습 프로세스',
        'modules.orderflow.process.desc': '기관 거래 패턴 분석 → 시장 심리 변화 감지 → 신호 강도 동적 조정',

        // Module Details - Dynamic Allocation
        'modules.allocation.title': '자동 자금배분 AI',
        'modules.allocation.benefit.title': '시장 상황에 따라 자동으로 투자 금액을 조절합니다',
        'modules.allocation.benefit.desc': '변동성이 큰 날엔 위험을 줄이고, 추세가 강한 날엔 수익을 극대화합니다. 당신이 잠든 사이에도 AI가 실시간으로 시장을 분석해 최적의 포지션 크기를 자동 조정합니다.',
        'modules.allocation.benefit.point1': '변동성 큰 날 자동 방어:',
        'modules.allocation.benefit.point1.desc': '위험한 시장에선 투자 금액을 40% 줄여 손실 최소화',
        'modules.allocation.benefit.point2': '강한 추세 적극 공략:',
        'modules.allocation.benefit.point2.desc': '확실한 기회에선 투자 금액을 40% 늘려 수익 극대화',
        'modules.allocation.benefit.point3': '24시간 자동 조정:',
        'modules.allocation.benefit.point3.desc': '매시간 시장 상황 재평가, 설정 변경 불필요',
        'modules.allocation.desc': '시장 변동성과 추세를 분석하여 투자 금액을 자동으로 조절합니다',
        'modules.allocation.tech': '기술 상세',
        'modules.allocation.t1': 'Amplitude (변동폭 분석) - 최근 n개 캔들의 가격 움직임 측정',
        'modules.allocation.t2': 'BB Width (볼린저밴드 폭) - 시장 변동성이 큰지 작은지 판단',
        'modules.allocation.t3': 'ADX (추세 강도) - 현재 상승/하락 추세가 얼마나 강한지 평가',
        'modules.allocation.t4': '자동 조절 0.6배~1.4배 - 안정적일 때 적게, 기회일 때 많이 투자',
        'modules.allocation.process': 'AI 학습 프로세스',
        'modules.allocation.process.desc': '실시간 변동성 측정 → 추세 강도 평가 → 투자 금액 동적 조정',

        // Module Details - Execution Probability
        'modules.probability.title': '진입 확률계산 AI',
        'modules.probability.benefit.title': '손해 날 거래는 자동으로 건너뛰고 확실한 기회만 잡습니다',
        'modules.probability.benefit.desc': '모든 신호를 맹목적으로 따르지 않습니다. AI가 각 거래의 성공 확률을 계산하고, 위험이 크거나 불확실한 타이밍은 자동으로 거릅니다. 승률을 높이는 가장 강력한 무기입니다.',
        'modules.probability.benefit.point1': '불확실한 거래 자동 회피:',
        'modules.probability.benefit.point1.desc': '시장이 혼란스러울 땐 거래하지 않고 대기',
        'modules.probability.benefit.point2': '확실한 기회만 실행:',
        'modules.probability.benefit.point2.desc': '승률 80% 이상 예상될 때만 공격적 투자',
        'modules.probability.benefit.point3': '과거 데이터로 검증:',
        'modules.probability.benefit.point3.desc': '비슷한 패턴의 과거 성공률 기반 판단',
        'modules.probability.desc': '모든 신호에 진입하지 않고, 성공 확률을 평가하여 선별적으로 거래합니다',
        'modules.probability.tech': '기술 상세',
        'modules.probability.t1': 'Market Uncertainty (시장 불확실성) - 예측 난이도 점수 (0-100)',
        'modules.probability.t2': 'Position Risk (포지션 위험도) - 현재 위험 수준 (0-100)',
        'modules.probability.t3': 'Historical Confidence (과거 신뢰도) - 유사 패턴 성공률 (0-100)',
        'modules.probability.t4': 'DCA 진입: 20-80% 확률 범위 - 고위험 신호 제외',
        'modules.probability.t5': 'Pyramid 진입: 40-90% 확률 범위 - 엄격한 기준',
        'modules.probability.process': 'AI 학습 프로세스',
        'modules.probability.process.desc': '시장 불확실성 계산 → 위험 수준 평가 → 저확률 거래 자율 필터링',

        // Module Details - Tiered Pyramid
        'modules.pyramid.title': '단계별 DCA AI',
        'modules.pyramid.benefit.title': '신호 강도에 따라 스마트하게 포지션을 늘립니다',
        'modules.pyramid.benefit.desc': '약한 신호엔 작게 시작하고, 강한 신호엔 적극적으로 투자합니다. 추세가 예상대로 흘러가면 AI가 자동으로 포지션을 추가해 수익을 극대화합니다.',
        'modules.pyramid.benefit.point1': '약한 신호는 안전하게:',
        'modules.pyramid.benefit.point1.desc': '불확실할 땐 40% 작게 시작, 1.5% 수익 달성 시 종료',
        'modules.pyramid.benefit.point2': '강한 신호는 공격적으로:',
        'modules.pyramid.benefit.point2.desc': '확실할 땐 풀 포지션, 0.5%만 올라도 추가 투자',
        'modules.pyramid.benefit.point3': '추세 따라 자동 확장:',
        'modules.pyramid.benefit.point3.desc': '수익 나는 포지션에 AI가 자동으로 추가 투자',
        'modules.pyramid.desc': '신호 품질을 3단계로 분류하고 등급별로 다른 DCA(dollar cost averaging) 전략을 실행합니다',
        'modules.pyramid.tiers': '등급 시스템',
        'modules.pyramid.tier1': 'Tier 1 (약한 신호): OF점수 15-30',
        'modules.pyramid.tier1.desc': '투자금: 0.4배 (적게), 목표수익: 1.5% (크게)',
        'modules.pyramid.tier2': 'Tier 2 (보통 신호): OF점수 30-50',
        'modules.pyramid.tier2.desc': '투자금: 0.7배 (중간), 목표수익: 1.0% (중간)',
        'modules.pyramid.tier3': 'Tier 3 (강한 신호): OF점수 50-100',
        'modules.pyramid.tier3.desc': '투자금: 1.0배 (최대), 목표수익: 0.5% (빠른 익절)',

        // Module Details - Dynamic TP
        'modules.tp.title': '목표가 자동조정 AI',
        'modules.tp.benefit.title': '시장 상황에 맞춰 목표 수익을 실시간으로 조정합니다',
        'modules.tp.benefit.desc': '고정된 목표가 아닙니다. 변동성이 크면 빨리 수익 실현하고, 추세가 강하면 목표를 늘려 더 큰 수익을 노립니다. 매 순간 최적의 청산 타이밍을 AI가 계산합니다.',
        'modules.tp.benefit.point1': '변동성 크면 빠른 청산:',
        'modules.tp.benefit.point1.desc': '위험한 시장에선 목표를 50%로 낮춰 안전하게 수익 확보',
        'modules.tp.benefit.point2': '강한 추세면 목표 상향:',
        'modules.tp.benefit.point2.desc': '안정적 상승장에선 목표를 3배로 늘려 수익 극대화',
        'modules.tp.benefit.point3': '매 캔들마다 재계산:',
        'modules.tp.benefit.point3.desc': '실시간으로 시장 변화 감지, 목표 자동 조정',
        'modules.tp.desc': '시장 변동성에 따라 목표 수익을 0.5배~3.0배 자동으로 조절합니다',
        'modules.tp.tech': '기술 상세',
        'modules.tp.t1': 'Amplitude (변동폭) - 시장 움직임 실시간 측정',
        'modules.tp.t2': 'ROI Progress (수익 진행도) - 현재 수익이 목표의 몇 %인지 추적',
        'modules.tp.t3': 'Trend Sustainability (추세 지속성) - 이 추세가 얼마나 더 갈지 예측',
        'modules.tp.t4': '매 캔들마다 재계산 - 목표가를 다시 조정하여 최적화',

        // Marquee
        'marquee.item1': 'Bloomberg Terminal 기술',
        'marquee.item2': 'Goldman Sachs 알고리즘',
        'marquee.item3': 'Citadel HFT 속도',
        'marquee.item4': '개인 트레이더를 위한 기관급 기술',
        'marquee.item5': 'Two Sigma AI 모델',
        'marquee.item6': '누구나 접근 가능',

        // Pricing Comparison
        'pricing.comparison.bloomberg': 'Bloomberg Terminal',
        'pricing.comparison.goldman': 'Goldman Sachs Marquee',
        'pricing.comparison.quant': '전문 퀀트 팀',
        'pricing.comparison.dalbot': 'DalBot AI',
        'pricing.comparison.savings': '동일한 기술, 비용은 1.2%',

        // Sticky Banner
        'banner.main': '개인 트레이더를 위한 기관급 기술',

        // Footer
        'footer.tagline': '개인 트레이더를 위한 기관급 기술',

        // Risk Warning
        'risk.title': '투자 경고:',
        'risk.text': '선물거래는 고위험 투자 활동이며 원금 손실 위험이 있습니다. 모든 투자자에게 적합하지 않을 수 있습니다. 거래 전 위험을 충분히 이해하시기 바랍니다.',
        
        // Footer
        'footer.terms': '이용약관',
        'footer.privacy': '개인정보처리방침',
        'footer.contact': '문의하기'
    }
};

// ===================================
// Language Manager
// ===================================
class LanguageManager {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.init();
    }
    
    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add event listener to language toggle button
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
        
        // Update currency displays based on language
        this.updateCurrency();
    }
    
    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    }
    
    setStoredLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }
    
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('ko') ? 'ko' : 'en';
    }
    
    toggleLanguage() {
        // Toggle language
        this.currentLang = this.currentLang === 'en' ? 'ko' : 'en';
        
        // Add animation effect
        document.body.style.opacity = '0.9';
        
        setTimeout(() => {
            this.setLanguage(this.currentLang);
            this.setStoredLanguage(this.currentLang);
            document.body.style.opacity = '1';
        }, 100);
        
        // Show visual feedback
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.style.transform = 'scale(0.95)';
            setTimeout(() => {
                langToggle.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Use innerHTML if the translation contains HTML tags, otherwise use textContent
                const translation = translations[lang][key];
                if (translation.includes('<br>') || translation.includes('<')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update language toggle button
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'en' ? '🇰🇷 KR' : '🇺🇸 EN';
            }
        }
        
        // Update page title
        document.title = lang === 'en' 
            ? 'DalBot - AI Crypto Trading | 10x Your Savings Returns'
            : 'DalBot - AI 암호화폐 트레이딩 | 적금 금리의 10배 수익';
        
        // Update currency displays
        this.updateCurrency();

        // Trigger calculator currency update
        if (window.DalBotCalculator && window.DalBotCalculator.setCurrency) {
            window.DalBotCalculator.setCurrency(lang);
        }
    }
    
    updateCurrency() {
        const exchangeRate = 0.00075; // KRW to USD conversion rate (1 KRW ≈ $0.00075)

        // Update calculator slider values based on language
        const slider = document.getElementById('investmentSlider');
        if (slider) {
            if (this.currentLang === 'en') {
                // Convert to USD for English
                const minUSD = Math.round(500000 * exchangeRate);    // $375
                const maxUSD = Math.round(10000000 * exchangeRate);  // $7,500
                const defaultUSD = Math.round(5000000 * exchangeRate); // $3,750

                slider.min = minUSD;
                slider.max = maxUSD;
                slider.value = defaultUSD;
                slider.step = 50; // $50 steps for USD
            } else {
                // Use KRW for Korean
                slider.min = 500000;      // ₩500,000
                slider.max = 10000000;    // ₩10,000,000
                slider.value = 5000000;   // ₩5,000,000
                slider.step = 100000;     // ₩100,000 steps for KRW
            }
        }
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    translate(key) {
        return translations[this.currentLang][key] || key;
    }
}

// ===================================
// Initialize Language System
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    window.languageManager = new LanguageManager();
});

// ===================================
// Export for use in other modules
// ===================================
window.LanguageAPI = {
    getCurrentLanguage: () => window.languageManager ? window.languageManager.getCurrentLanguage() : 'en',
    setLanguage: (lang) => window.languageManager ? window.languageManager.setLanguage(lang) : null,
    toggleLanguage: () => window.languageManager ? window.languageManager.toggleLanguage() : null,
    translate: (key) => window.languageManager ? window.languageManager.translate(key) : key
};
