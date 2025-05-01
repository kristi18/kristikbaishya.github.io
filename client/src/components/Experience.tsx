import TimelineItem from "./ui/timeline-item";

const Experience = () => {
  const experienceData = [
    {
      title: "AI Product Lead (AVP)",
      organization: "Nomura Holding America",
      location: "New York, NY",
      period: "2022 - Present",
      description: "Driving impactful AI transformations and developing innovative AI strategies to bolster organizational growth and maintain a competitive edge.",
      dotColor: "bg-primary",
      achievements: [
        "Led cross-functional team of 15 in development of AI/GenAI products, achieving 35-45% operational efficiency",
        "Spearheaded Anomaly Detection Product reducing regulatory reporting errors by 15-20%",
        "Engineered GenAI-powered legal document management solution, winning regional hackathon",
        "Established AI Risk Assessment frameworks improving risk mitigation by 30-35%"
      ],
      side: "right" as const
    },
    {
      title: "Data Science Manager",
      organization: "Aditya Birla Group",
      location: "Bengaluru, India",
      period: "2019 - 2021",
      description: "Led transformative AI/ML initiatives that achieved a 400% RoCE on a $1.3B portfolio, improved forecasting accuracy by 25%, and generated over $2M in business value.",
      dotColor: "bg-secondary",
      achievements: [
        "Enhanced demand forecasting with ML models, achieving 25% increase in accuracy",
        "Integrated Humble-AI approach for trading solutions, achieving 400% annualized RoCE",
        "Increased revenue growth by ~15% for health insurance clients through customer persona clustering"
      ],
      side: "left" as const
    },
    {
      title: "Data Scientist",
      organization: "Cummins, Inc.",
      location: "Pune, India",
      period: "2018 - 2019",
      description: "Leveraged advanced data analytics technologies to drive transformative business decisions across HR, sales, and engineering services divisions.",
      dotColor: "bg-accent",
      achievements: [
        "Implemented ML model to forecast employee attrition, improving retention by 15-20%",
        "Streamlined product offerings and pricing, unlocking ~15% growth opportunities",
        "Developed analytical tools for Engineering Services, boosting efficiency by 15-20%"
      ],
      side: "right" as const
    },
    {
      title: "Software Engineer",
      organization: "Tech Mahindra",
      location: "Chandigarh, India",
      period: "2014 - 2016",
      description: "Collaborated with product managers and software architects to design and develop innovative software solutions using cutting-edge technologies.",
      dotColor: "bg-primary",
      achievements: [
        "Provided technical support for GE Infrastructure Project applications",
        "Developed SmartLoad web application, reducing processing time by ~30%"
      ],
      side: "left" as const
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-text">
              Professional Experience
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mx-auto mt-2 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey building and leading AI products across diverse industries and challenges.
            </p>
          </div>

          <div className="timeline-container">
            {experienceData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                organization={item.organization}
                location={item.location}
                period={item.period}
                description={item.description}
                dotColor={item.dotColor}
                achievements={item.achievements}
                side={item.side}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
