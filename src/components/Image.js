


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
