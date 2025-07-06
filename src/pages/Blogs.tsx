import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb, ArrowLeft } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Exploring how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.",
      author: "Rahul Sharma",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AI", "Automation", "Business"],
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "A comprehensive guide to creating robust, scalable web applications using React, Node.js, and cloud technologies.",
      author: "Priya Gupta",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Node.js", "Scalability"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Data Science Trends That Will Shape 2024",
      excerpt: "Discover the latest trends in data science and machine learning that are transforming industries worldwide.",
      author: "Arjun Patel",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Data Science",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Data Science", "ML", "Trends"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 4,
      title: "UI/UX Design Principles for AI-Powered Applications",
      excerpt: "Learn how to design intuitive user interfaces for AI-powered applications that users love to interact with.",
      author: "Sneha Reddy",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["UI/UX", "Design", "AI"],
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Implementing n8n Workflows for Business Automation",
      excerpt: "Step-by-step guide to creating powerful automation workflows using n8n to streamline your business operations.",
      author: "Rahul Sharma",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Automation",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["n8n", "Automation", "Workflows"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 6,
      title: "The Rise of No-Code Solutions in Enterprise",
      excerpt: "How no-code platforms are democratizing software development and enabling rapid digital transformation.",
      author: "Priya Gupta",
      date: "February 15, 2024",
      readTime: "4 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["No-Code", "Enterprise", "Digital Transformation"],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const categories = ["All", "AI & Technology", "Web Development", "Data Science", "Design", "Automation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [openBlog, setOpenBlog] = React.useState<null | typeof blogPosts[0]>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (openBlog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <button
            className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 mb-8"
            onClick={() => setOpenBlog(null)}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </button>
          <img src={openBlog.image} alt={openBlog.title} className="w-full h-56 object-cover rounded-2xl mb-6" />
          <h2 className="text-3xl font-bold mb-2">{openBlog.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span><User className="inline w-4 h-4 mr-1" />{openBlog.author}</span>
            <span><Calendar className="inline w-4 h-4 mr-1" />{openBlog.date}</span>
            <span>{openBlog.readTime}</span>
          </div>
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-2xl text-xs font-medium">{openBlog.category}</span>
          </div>
          <p className="text-gray-700 mb-4">{openBlog.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {openBlog.tags.map((tag, idx) => (
              <span key={idx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-2xl text-xs font-medium">{tag}</span>
            ))}
          </div>
          <div className="text-gray-400 text-xs">* Full blog content goes here *</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-purple-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on AI, technology, and innovation from our team of experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
              }`}
              style={{
                boxShadow: selectedCategory === category 
                  ? '0 8px 32px rgba(147, 51, 234, 0.3)' 
                  : 'inset 0 2px 4px rgba(255, 255, 255, 0.6), 0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/30 group"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-2xl text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2">
                  {post.icon}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-2xl text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button
                    className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors group"
                    onClick={() => setOpenBlog(post)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;