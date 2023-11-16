import React from "react";

const Gallery = () => {
  return (
    <div className="my-20 bg-[#f9f7f6] gallery p-6">
      <figure className="!col-start-1 col-span-2 !row-start-1 row-span-2">
        <img
          src="/img/gal-1.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="!col-start-3 col-span-3 !row-start-1 row-span-3">
        <img
          src="/img/gal-2.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="col-start-6 col-end-7 !row-start-1 row-span-2">
        <img
          src="/img/gal-3.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="col-start-7 col-end-[-1] !row-start-1 row-span-2">
        <img
          src="/img/gal-4.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="!col-start-1 col-span-2 !row-start-3 row-span-3">
        <img
          src="/img/gal-5.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="!col-start-3 col-span-2 !row-start-4 row-span-2">
        <img
          src="/img/gal-6.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="col-start-5 col-end-6 row-start-4 row-end-5">
        <img
          src="/img/gal-7.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="!col-start-6 col-span-2 !row-start-3 row-span-2">
        <img
          src="/img/gal-8.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="col-start-8 col-end-[-1] !row-start-3 row-span-3">
        <img
          src="/img/gal-9.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="col-start-1 col-end-2 row-start-6 row-end-[-1]">
        <img
          src="/img/gal-10.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="!col-start-2 col-span-2 row-start-6 row-end-[-1]">
        <img
          src="/img/gal-11.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="col-start-4 col-end-5 row-start-6 row-end-[-1]">
        <img
          src="/img/gal-12.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="!col-start-5 col-span-3 row-start-5 row-end-[-1]">
        <img
          src="/img/gal-13.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
      <figure className="col-start-8 col-end-[-1] row-start-6 row-end-[-1]">
        <img
          src="/img/gal-14.jpeg"
          className="w-full h-full block object-cover"
          alt=""
        />
      </figure>
    </div>
  );
};

export default Gallery;
