import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      {/* هاد الجزء بصمتك: العنوان ووصف الصفحة */}
      <header className="home-header">
        <h1>Explore Top Movies</h1>
        <p>Discover the latest and most popular movies in one place.</p>
      </header>

      {/* هون بيبدأ شغل زميلتك (الكونتنت) */}
      <main className="movies-grid">
        {/* هي هون بتضيف الـ map والـ 10 أفلام */}
      </main>
    </div>
  );
};

export default Home;