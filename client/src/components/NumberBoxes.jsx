import React from 'react';

function NumberBoxes() {
  // Array of box data - you can easily add more boxes here
  const boxes = [
    { id: 1, number: '01', driveUrl: 'https://drive.google.com/your-link-1' },
    { id: 2, number: '02', driveUrl: 'https://drive.google.com/your-link-2' },
    { id: 3, number: '03', driveUrl: 'https://drive.google.com/your-link-3' },
    { id: 4, number: '04', driveUrl: 'https://drive.google.com/your-link-4' },
    { id: 5, number: '05', driveUrl: 'https://drive.google.com/your-link-5' },
    { id: 6, number: '06', driveUrl: 'https://drive.google.com/your-link-6' },
    { id: 7, number: '07', driveUrl: 'https://drive.google.com/your-link-7' },
    { id: 8, number: '08', driveUrl: 'https://drive.google.com/your-link-8' },
    { id: 9, number: '09', driveUrl: 'https://drive.google.com/your-link-9' },
    { id: 10, number: '10', driveUrl: 'https://drive.google.com/your-link-10' },
    { id: 11, number: '11', driveUrl: 'https://drive.google.com/your-link-11' },
    { id: 12, number: '12', driveUrl: 'https://drive.google.com/your-link-12' },
    { id: 13, number: '13', driveUrl: 'https://drive.google.com/your-link-13' },
    { id: 14, number: '14', driveUrl: 'https://drive.google.com/your-link-14' },
    { id: 15, number: '15', driveUrl: 'https://drive.google.com/your-link-15' },
    { id: 16, number: '16', driveUrl: 'https://drive.google.com/your-link-16' },
    { id: 17, number: '17', driveUrl: 'https://drive.google.com/your-link-17' },
    { id: 18, number: '18', driveUrl: 'https://drive.google.com/your-link-18' },
    { id: 19, number: '19', driveUrl: 'https://drive.google.com/your-link-19' },
    { id: 20, number: '20', driveUrl: 'https://drive.google.com/your-link-20' },
    { id: 21, number: '21', driveUrl: 'https://drive.google.com/your-link-21' },
    { id: 22, number: '22', driveUrl: 'https://drive.google.com/your-link-22' },
    { id: 23, number: '23', driveUrl: 'https://drive.google.com/your-link-23' },
    { id: 24, number: '24-25', driveUrl: 'https://drive.google.com/your-link-24' },
  ];

  return (
    <section className="number-boxes-section" id="questions">
      <h2 className="section-title">Multiple Choice Questions</h2>
      <div className="number-boxes-grid">
        {boxes.map((box) => (
          <a
            key={box.id}
            href={box.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="number-box"
          >
            {box.number}
          </a>
        ))}
      </div>
    </section>
  );
}

export default NumberBoxes;
