

// import React from 'react';

// export default function Image() {
//   return (
//     <>
//       <style>
//         {`
//           .container5 {
//             display: flex;
//             flex-wrap: wrap;
//             background-color: antiquewhite;
//             padding: 20px;
//             justify-content: center;
//             align-items: center;
//           }

//           .image-container {
//             flex: 1 1 400px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             padding: 20px;
//           }

//           .image-container img {
//             width: 100%;
//             max-width: 500px;
//             height: auto;
//             border-radius: 10px;
//           }

//           @media (max-width: 768px) {
//             .image-container {
//               padding: 10px;
//             }

//             .image-container img {
//               max-width: 90%;
//             }
//           }
//         `}
//       </style>

//       <div className="container5">
//         <div className="image-container">
//           <img
//             src="/image_abc.png"
//             alt="Online Learning"
//           />
//         </div>

//         {/* Example form or another element to test layout */}
//         <div className="image-container">
//           <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
//             <h2>Form goes here</h2>
//             <input type="text" placeholder="Your Name" style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
//             <button style={{ padding: '10px 20px' }}>Submit</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from 'react';

export default function Image() {
  return (
    <>
      <style>
        {`
          .image-block {
            flex: 1 1 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .image-block img {
            width: 100%;
            max-width: 500px;
            height: auto;
            border-radius: 10px;
          }

          @media (max-width: 992px) {
            .image-block {
              padding: 10px 0;
            }

            .image-block img {
              max-width: 90%;
            }
          }
        `}
      </style>

      <div className="image-block">
        <img
          src="/image_abc.png"
          alt="Online Learning"
        />
      </div>
    </>
  );
}
