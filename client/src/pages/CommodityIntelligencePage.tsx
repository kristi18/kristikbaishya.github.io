import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FaChartLine, 
  FaShip, 
  FaTwitter, 
  FaDatabase, 
  FaRobot, 
  FaChartBar, 
  FaExchangeAlt,
  FaCogs,
  FaUsers,
  FaBrain,
  FaSyncAlt,
  FaTable
} from "react-icons/fa";

const CommodityIntelligencePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Section 1: Header */}
      <section className="relative h-80">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-violet-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=400&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Commodity Intelligence Platform
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Strategic multi-signal AI system for bulk commodity trading optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-indigo-700 hover:bg-indigo-600 text-white">Predictive AI</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 text-white">Humble AI</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 text-white">NLP Sentiment</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 text-white">AIS Tracking</Badge>
              <Badge className="bg-indigo-700 hover:bg-indigo-600 text-white">Time Series Forecasting</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Section 2: Executive Overview */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Executive Overview
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Developed an enterprise-grade Commodity Intelligence Platform integrating predictive analytics, 
              shipping activity, and sentiment signals to enhance bulk trading decisions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Delivered 400%+ RoCE on a $1.3B portfolio and enabled new derivatives trading revenue 
              through freight rate forecasting.
            </p>
          </div>
        </section>

        {/* Section 3: Key Use Cases */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Key Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UseCaseCard 
              icon={<FaChartLine className="text-indigo-600 dark:text-indigo-400" />}
              title="Predict Baltic 5TC Freight Index"
              outcome="Improved timing for freight charters and FFAs"
            />
            <UseCaseCard 
              icon={<FaChartBar className="text-indigo-600 dark:text-indigo-400" />}
              title="Forecast Coal & Iron Ore Prices"
              outcome="Enabled proactive hedging decisions"
            />
            <UseCaseCard 
              icon={<FaShip className="text-indigo-600 dark:text-indigo-400" />}
              title="AIS Vessel Movement Analysis"
              outcome="Detected port-level demand/supply shifts"
            />
            <UseCaseCard 
              icon={<FaTwitter className="text-indigo-600 dark:text-indigo-400" />}
              title="Sentiment Tracking (Twitter)"
              outcome="Anticipated price swings from market sentiment"
            />
            <UseCaseCard 
              icon={<FaExchangeAlt className="text-indigo-600 dark:text-indigo-400" />}
              title="Crude Oil Macro Exposure Modeling"
              outcome="Enhanced macro hedge optimization"
            />
          </div>
        </section>

        {/* Section 4: Architecture Snapshot */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Architecture Snapshot
          </h2>
          <div className="space-y-4">
            <ArchitectureLayer 
              number="1"
              title="Data Sources"
              icon={<FaDatabase className="text-indigo-600 dark:text-indigo-400" />}
              items={[
                "Commodity pricing APIs",
                "AIS maritime data feeds",
                "Twitter streaming API",
                "Macroeconomic indicators"
              ]}
            />
            <ArchitectureLayer 
              number="2"
              title="Feature Engineering"
              icon={<FaCogs className="text-indigo-600 dark:text-indigo-400" />}
              items={[
                "Ship movement trend aggregation",
                "Time-series lag features",
                "Twitter sentiment scoring"
              ]}
            />
            <ArchitectureLayer 
              number="3"
              title="Predictive Modeling"
              icon={<FaBrain className="text-indigo-600 dark:text-indigo-400" />}
              items={[
                "XGBoost, ARIMA hybrids",
                "Multiple time horizons (1–2 weeks, 1–2 months)"
              ]}
            />
            <ArchitectureLayer 
              number="4"
              title="Humble AI Guardrails"
              icon={<FaRobot className="text-indigo-600 dark:text-indigo-400" />}
              items={[
                "Uncertainty tracking",
                "Volatility scores",
                "Manual override flows"
              ]}
            />
            <ArchitectureLayer 
              number="5"
              title="Optimization & Insights"
              icon={<FaChartLine className="text-indigo-600 dark:text-indigo-400" />}
              items={[
                "Entry/exit recommendation logic",
                "FFA strategy signals"
              ]}
            />
            <ArchitectureLayer 
              number="6"
              title="Delivery"
              icon={<FaTable className="text-indigo-600 dark:text-indigo-400" />}
              items={[
                "Internal dashboards (Tableau/Python Dash)",
                "Alerts and confidence scores"
              ]}
            />
          </div>
        </section>

        {/* Section 5: Business Impact */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImpactCard 
              title="400%+ Annualized RoCE" 
              description="Return on capital employed across $1.3B portfolio"
            />
            <ImpactCard 
              title="New Revenue Stream" 
              description="Expansion into FFA derivatives trading"
            />
            <ImpactCard 
              title="Improved Sharpe Ratio" 
              description="Volatility-adjusted decision-making"
            />
            <ImpactCard 
              title="First-of-its-kind Integration" 
              description="AIS + Sentiment for commodity trading"
            />
          </div>
        </section>

        {/* Section 6: Strategic Principles */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Strategic Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PrincipleCard
              icon={<FaRobot className="text-4xl text-indigo-600 dark:text-indigo-400" />}
              title="Humble AI"
              description="Always-on uncertainty handling to avoid overconfident automation"
            />
            <PrincipleCard
              icon={<FaSyncAlt className="text-4xl text-indigo-600 dark:text-indigo-400" />}
              title="Multi-Signal Intelligence"
              description="Integrating real-world logistics + sentiment + pricing"
            />
            <PrincipleCard
              icon={<FaUsers className="text-4xl text-indigo-600 dark:text-indigo-400" />}
              title="Trader-Centric Design"
              description="AI-assisted, not AI-replacing — empowering better decisions"
            />
          </div>
        </section>

        {/* Section 7: Reflection / Legacy */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Beyond Models — Building a New Trading Mindset
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This initiative shifted trading culture from reactive, lagging-indicator-based decisions to forward-looking, 
              AI-supported strategies. It laid the foundation for predictive analytics expansion into other commodities 
              and set a benchmark for intelligence-led trading transformation.
            </p>
          </div>
        </section>

        {/* Section 8: Back Button */}
        <section className="max-w-4xl mx-auto">
          <Link href="/projects">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

// Helper Components
const UseCaseCard: React.FC<{ icon: React.ReactNode; title: string; outcome: string }> = ({ 
  icon, title, outcome 
}) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="text-2xl">{icon}</div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{outcome}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ArchitectureLayer: React.FC<{ number: string; title: string; icon: React.ReactNode; items: string[] }> = ({
  number, title, icon, items
}) => {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
          <span className="text-indigo-700 dark:text-indigo-300 font-bold">{number}</span>
        </div>
        <div className="text-xl mr-3">{icon}</div>
        <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="p-4 bg-white dark:bg-gray-900">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ImpactCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card className="border-l-4 border-l-indigo-600 dark:border-l-indigo-500">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-3 text-indigo-600 dark:text-indigo-400">✅</div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PrincipleCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon, title, description
}) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CommodityIntelligencePage;