import FirstDemoMonday from '../images/DemoMondayFeedback.jpg'; // Adjust the path to your image file
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My Coding Journey: Combining Sports, Academics & Tech Together",
      excerpt: "How I manage to combine my passion for sports, academics and technology together.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Personal Journey",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=400",
      featured: false,
      link: "https://your-blog-link-1.com" // Add your actual link here
    },
    //{
      //id: 2,
      //title: "4IR in Africa: Building the Future Through Technology",
      //excerpt: "Exploring how the Fourth Industrial Revolution is transforming Africa and the role of young developers in this transformation.",
      //date: "2024-01-10",
      //readTime: "7 min read",
      //category: "Technology",
      //image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=400",
      //featured: false,
      //link: "https://your-blog-link-2.com" // Add your actual link here
    //},
    {
      id: 3,
      title: "Tips for Students Learning Web Development",
      excerpt: "Practical advice for students starting their web development journey, based on my experience mentoring at DUT Labs.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=400",
      featured: false,
      link: "https://your-blog-link-3.com" // Add your actual link here
    },
    {
      id: 4,
      title: "The Power of Community in Tech Education",
      excerpt: "How platforms like Hybrid Demo Monday are creating spaces for innovation and collaboration in South African universities.",
      date: "2025-08-25",
      readTime: "4 min read",
      category: "Community",
      image: FirstDemoMonday,
      link: "https://www.linkedin.com/company/dut-arm-e%C2%B3-ngage-student-club/",
      featured: false
    }
  ];


  return (
    <section id="blog" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Blog & Insights</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts on coding, technology trends, and building communities through innovation
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium mr-4">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map(post => (
            <article key={post.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium mr-3">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-600 font-medium transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action 
         <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Follow my journey and get insights on web development, technology, and community building.
          </p>
            <button className="px-8 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-colors duration-300">
              View All Posts
            </button>
          </div>
        */}
      </div>
     </section>
   );
};

export default Blog;
