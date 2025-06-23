



import React from 'react'

const themeColors = {
  primary: '#1890ff',
  accent: '#52c41a',
  dark: '#001529',
  light: '#f0f2f5'
};

export default function Container2() {

  const features = [
    {
      icon: '🎥',
      title: "Live Courses",
      description: "Interactive sessions led by top mentors.",
      bg: '#e6f7ff'
    },
    {
      icon: '🛠️',
      title: "Project Support",
      description: "Real-world tasks that build your portfolio.",
      bg: '#f6ffed'
    },
    {
      icon: '📚',
      title: "Structured Learning",
      description: "Well-crafted curriculum & resources.",
      bg: '#f9f0ff'
    },
    {
      icon: '✅',
      title: "Beginner-Friendly Yet Powerful",
      description: "Simple, real-world React lessons",
      bg: '#e6f7ff'
    },
    {
      icon: '⚛️',
      title: "Focused on React Ecosystem",
      description: "All about React, always updated",
      bg: '#f6ffed'
    },
    {
      icon: '🎓',
      title: "Project-Based Learning",
      description: "Learn by building real apps",
      bg: '#fffbe6'
    },
    {
      icon: '🚀',
      title: "Clean & Modern UI",
      description: "Minimal, fast, distraction-free",
      bg: '#f0f5ff'
    },
    {
      icon: '🌐',
      title: "Accessible Anywhere",
      description: "Responsive and device-friendly",
      bg: '#fff0f6'
    },
    {
      icon: '🧠',
      title: "Curated Learning Path",
      description: "Step-by-step React mastery",
      bg: '#f9f0ff'
    }
  ];

  return (
    <div>
      <section style={{ background: themeColors.light, padding: '80px 5%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>🔥 Level Up Your Skills — The ReactTutor Way</h2>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: feat.bg,
                padding: '30px',
                borderRadius: '12px',
                flex: '1 1 250px',
                maxWidth: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '40px' }}>{feat.icon}</div>
              <h4>{feat.title}</h4>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
