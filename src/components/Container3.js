import React from 'react'

export default function Container3() {
    const testimonials = [
        {
          name: 'Aditi Sharma',
          comment: 'Reactutor gave me the confidence to crack interviews.',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
          name: 'Rahul Verma',
          comment: 'Best React learning platform. Period.',
          avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
        },
        {
          name: 'Priya Patel',
          comment: 'Hands-on support is truly helpful!',
          avatar: 'https://randomuser.me/api/portraits/women/47.jpg'
        }
      ];
  return (
    <div>
      <section style={{ backgroundColor: 'white', padding: '80px 5%' }}>
          <h2 style={{ textAlign: 'center' }}>Loved by Learners</h2>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {testimonials.map((testi, idx) => (
              <div key={idx} style={{ borderRadius: '12px', padding: '30px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', maxWidth: '300px', textAlign: 'center' }}>
                <p style={{ fontStyle: 'italic' }}>&quot;{testi.comment}&quot;</p>
                <img src={testi.avatar} alt={testi.name} style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '10px 0' }} />
                <strong>{testi.name}</strong>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}
