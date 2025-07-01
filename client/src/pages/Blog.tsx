import React from 'react';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const featuredPost = {
    title: 'The Future of AI in Business Automation',
    excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what it means for your organization\'s future.',
    image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Nhancio Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Automation'
  };

  const blogPosts = [
    {
      title: 'Building Scalable SaaS Applications: Best Practices',
      excerpt: 'Learn the essential principles and patterns for creating SaaS applications that can grow with your business.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Development'
    },
    {
      title: 'E-commerce Trends: What to Expect in 2024',
      excerpt: 'Explore the latest trends shaping the e-commerce landscape and how to prepare your business for success.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'E-commerce'
    },
    {
      title: 'Mobile App Development: iOS vs Android in 2024',
      excerpt: 'A comprehensive comparison of iOS and Android development approaches for modern mobile applications.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Mobile Development'
    },
    {
      title: 'WordPress Security: Essential Tips for 2024',
      excerpt: 'Protect your WordPress website with these crucial security measures and best practices.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'David Wilson',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'WordPress'
    },
    {
      title: 'Data Science for Business: Getting Started',
      excerpt: 'Learn how data science can transform your business decisions and drive growth.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Anna Thompson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Data Science'
    },
    {
      title: 'Voice Technology in Customer Service',
      excerpt: 'Discover how voice agents are revolutionizing customer service experiences.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Robert Kim',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'AI & Automation'
    }
  ];

  const categories = [
    'All',
    'AI & Automation',
    'Development',
    'E-commerce',
    'Mobile Development',
    'WordPress',
    'Data Science'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and industry trends from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                  <Tag className="w-4 h-4 mr-1" />
                  {featuredPost.category}
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6 space-x-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-3">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, tutorials, and industry trends.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}