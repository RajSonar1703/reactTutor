import React from 'react'
const styles ={
    imageContainer: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '20px'  // spacing between image and form
  },
  container5:{
    display:'flex',

  }
}
export default function Image() {
  return (
      <div style={styles.imageContainer}>
                  <img
                    src="/image_abc.png"  // ✅ Make sure this image is placed in your public folder
                    alt="Online Learning"
                    style={{ marginLeft:'30px' ,maxWidth: '500px', height: 'auto', borderRadius: '10px' }}
                  />
                </div>
  )
}
