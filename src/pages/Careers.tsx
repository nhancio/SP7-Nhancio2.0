import React from 'react';
import { MapPin, Clock, DollarSign, Users, Briefcase, ArrowRight, Code, Brain, Palette, TrendingUp } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹15-25 LPA",
      description: "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Knowledge of database design and optimization",
        "Experience with CI/CD pipelines"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹18-30 LPA",
      description: "Work on cutting-edge AI projects, developing machine learning models and deploying them at scale.",
      requirements: [
        "Strong background in Python and ML frameworks",
        "Experience with TensorFlow, PyTorch, or similar",
        "Knowledge of MLOps and model deployment",
        "Understanding of deep learning architectures"
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹12-20 LPA",
      description: "Create beautiful, intuitive user experiences for our AI-powered applications and client projects.",
      requirements: [
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio showcasing UI/UX work",
        "Understanding of design systems and accessibility",
        "Experience with user research and testing"
      ],
      icon: <Palette className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹10-18 LPA + Incentives",
      description: "Drive business growth by identifying new opportunities and building relationships with potential clients.",
      requirements: [
        "Proven track record in B2B sales",
        "Experience in tech/software industry",
        "Strong communication and negotiation skills",
        "Understanding of AI/tech solutions"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹14-22 LPA",
      description: "Build and maintain our infrastructure, ensuring scalable and reliable deployment of applications.",
      requirements: [
        "Experience with Docker, Kubernetes",
        "Knowledge of AWS/Azure cloud services",
        "Proficiency in Infrastructure as Code",
        "Experience with monitoring and logging tools"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "AI Research",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹12-20 LPA",
      description: "Analyze complex datasets and build predictive models to drive business insights and decisions.",
      requirements: [
        "Strong background in statistics and mathematics",
        "Proficiency in Python, R, and SQL",
        "Experience with data visualization tools",
        "Knowledge of machine learning algorithms"
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Flexible Work",
      description: "Remote and hybrid work options",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Learning & Growth",
      description: "Continuous learning opportunities and conferences",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Great Team",
      description: "Work with passionate IITians and tech experts",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const departments = ["All", "Engineering", "AI Research", "Design", "Sales & Marketing"];
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");

  const filteredJobs = selectedDepartment === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Join Our <span className="text-purple-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of our mission to build the future with AI. Work with passionate IITians and shape the next generation of technology.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg border border-white/30"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="text-purple-600 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedDepartment === department
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
              }`}
              style={{
                boxShadow: selectedDepartment === department 
                  ? '0 8px 32px rgba(147, 51, 234, 0.3)' 
                  : 'inset 0 2px 4px rgba(255, 255, 255, 0.6), 0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-white/30 group"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${job.color} flex items-center justify-center`}>
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-2xl">
                      {job.experience} experience
                    </span>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <button className="w-full lg:w-auto bg-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-white/30"
               style={{
                 boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
               }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-colors">
                Send Resume
              </button>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors">
                Contact HR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;