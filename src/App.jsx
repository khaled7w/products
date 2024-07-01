import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 2px;
  border: 1px solid #777;
  border-radius: 11px;
  background-color: #fff;
`;

const productData = {
  productID: '12333',
  price: '$205.17',
  description:
    "Men's Women's 3D Tie Dye Shirt Casual Blouses Fashion Shirt Short Sleeve Streetwear",
  colors: [
    {
      src: 'https://ae01.alicdn.com/kf/S587b28b3cfd546d586624cc84c4387baZ/-.jpg_640x640.jpg_.webp',
      color: 'C01-SI0082',
    },
    {
      src: 'https://ae01.alicdn.com/kf/Sbfa14094d2ae4bce937c8adf04553b1cy/-.jpg_640x640.jpg_.webp',
      color: 'C01-SI0084',
    },
    {
      src: 'https://ae01.alicdn.com/kf/S385bcdf8799b4d8ea8ecfe956f7fb7d4G/-.jpg_640x640.jpg_.webp',
      color: 'C01-SI0077',
    },
    {
      src: 'https://ae01.alicdn.com/kf/S8ef75837699e43e190e42ebf45644914M/-.jpg_640x640.jpg_.webp',
      color: 'C01-SI0081',
    },
    {
      src: 'https://ae01.alicdn.com/kf/S164fc4377aef42a8bd4add052b5cab61v/-.jpg_640x640.jpg_.webp',
      color: 'C01-SI0078',
    },
    {
      src: 'https://ae01.alicdn.com/kf/S959419c7b9384f30ac199bfe180a29abN/-.jpg_640x640.jpg_.webp',
      color: 'C01-SI0079',
    },
    {
      src: 'https://ae01.alicdn.com/kf/Se3666a3f210948a782187cd0a4fb5fa3o/-.jpg_640x640.jpg_.webp',
      color: 'C01-SI0083',
    },
  ],
  sizes: ['X', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL'],
};

function App() {
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  function handleSize(selectedSize) {
    setSize(selectedSize);
  }

  function handleImage(selectedImage) {
    setImage(selectedImage);
  }

  function handleSumbit() {
    if (!image || !size) {
      alert('please select image and size');
    } else {
      console.log(productData.productID, size, image);
    }
  }

  function handleMode() {
    setDarkMode((mode) => !mode);
  }

  return (
    <div className={darkMode && 'dark'}>
      <button onClick={handleMode} className="absolute top-4 left-5">
        {darkMode ? (
          <img src="sun_146182.png" className="w-8 h-8" />
        ) : (
          <img src="Large Screens.png" className="w-8 h-8" />
        )}
      </button>
      <div className=" dark:bg-zinc-900 w-[100%] h-[100vh]">
        <div className="grid grid-cols-[1fr,2fr,1fr] w-[70%] mx-auto gap-4 pt-10">
          <div className="flex flex-col border-[1px] border-black p-3 dark:border-red-700">
            <h1 className="mb-4 dark:text-stone-50 text-xl">
              <span className="dark:text-red-700">Ship to: </span>
              <span className="font-semibold">Egypt</span>
            </h1>
            <button
              className="bg-red-600 text-stone-50 rounded-full py-1 px-5 mb-2"
              onClick={handleSumbit}>
              Buy Now
            </button>
            <button
              className="text-red-700 rounded-full py-1 bg-red-200"
              onClick={handleSumbit}>
              Add To Cart
            </button>
          </div>

          <div>
            <div className="grid grid-cols-">
              <h2 className="text-red-500  text-2xl text-right col-span-2 pr-1">
                {productData.price}
              </h2>
            </div>
            <div>
              <p className="pb-2 dark:text-stone-50">
                {productData.description}
              </p>
              <hr />
            </div>

            <div className="mt-[12px]">
              <h3 className="dark:text-stone-50 text-xl">
                <span className="dark:text-red-700">Color: </span>
                <span className="font-semibold">
                  {image ? image.color : productData.colors.at(0).color}
                </span>
              </h3>
              <div className="grid grid-cols-10 mt-2 gap-y-2 gap-1 mx-auto">
                {productData.colors.map((color) => (
                  <button
                    key={color.color}
                    onClick={() => handleImage(color)}
                    className={
                      image.src === color.src
                        ? 'border-2 border-solid border-gray-900 dark:border-red-700'
                        : ''
                    }>
                    <img src={color.src} className="w-[100%]" />
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-[12px] pb-4">
              <h3 className="text-xl">
                <span className="dark:text-red-700">Size: </span>
                <span className="font-semibold dark:text-stone-50">
                  {size ? size : productData.sizes.at(0)}
                </span>
              </h3>
              <div className="grid grid-cols-10 mt-2 gap-y-2 gap-2 mx-auto">
                {productData.sizes.map((productSize) => (
                  <Button
                    key={productSize}
                    onClick={() => handleSize(productSize)}
                    className={
                      size === productSize
                        ? 'border-2 border-solid border-gray-900'
                        : ''
                    }>
                    {productSize}
                  </Button>
                ))}
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="w-[150%]">
              <img
                src={image ? image.src : productData.colors.at(0).src}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
