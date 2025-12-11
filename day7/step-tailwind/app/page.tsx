"use client";
import { useState } from "react";

export default function Home() {

  const [state, setState] = useState(0);

  const clickHandler = () => {
    setState(state + 1);
  }
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold pb-2">Tailwind CSS</h1>
      {/* <div className="bg-amber-500 table">
        <div className="p-4 bg-sky-300 m-4 text-justify w-100 float-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore a modi delectus culpa eum recusandae amet quas explicabo saepe dolorum cum reprehenderit commodi dicta similique sed blanditiis perspiciatis vel doloremque, pariatur vero et eius? Maxime, labore culpa! Provident adipisci nesciunt sequi tenetur quos vero deserunt cumque aliquam optio aliquid voluptate eaque, ipsam iste est? Porro nobis facilis aperiam distinctio pariatur a debitis nihil amet, totam quasi odit ea neque illo consectetur quae quos unde possimus! Ratione quo eius ipsum eveniet animi nisi blanditiis rem quidem tempore aut nulla, qui itaque sint vero fugit, incidunt accusantium dolore veniam veritatis reiciendis.
        </div>
        <div className="p-4 bg-sky-300 m-4 text-justify w-100 float-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore a modi delectus culpa eum recusandae amet quas explicabo saepe dolorum cum reprehenderit commodi dicta similique sed blanditiis perspiciatis vel doloremque, pariatur vero et eius? Maxime, labore culpa! Provident adipisci nesciunt sequi tenetur quos vero deserunt cumque aliquam optio aliquid voluptate eaque, ipsam iste est? Porro nobis facilis aperiam distinctio pariatur a debitis nihil amet, totam quasi odit ea neque illo consectetur quae quos unde possimus! Ratione quo eius ipsum eveniet animi nisi blanditiis rem quidem tempore aut nulla, qui itaque sint vero fugit, incidunt accusantium dolore veniam veritatis reiciendis.
        </div>
      </div>
      <hr />
      <div className="bg-amber-500 flex flex-col">
        <div className="p-4 bg-sky-300 m-4 text-justify w-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore a modi delectus culpa eum recusandae amet quas explicabo saepe dolorum cum reprehenderit commodi dicta similique sed blanditiis perspiciatis vel doloremque, pariatur vero et eius? Maxime, labore culpa! Provident adipisci nesciunt sequi tenetur quos vero deserunt cumque aliquam optio aliquid voluptate eaque, ipsam iste est? Porro nobis facilis aperiam distinctio pariatur a debitis nihil amet, totam quasi odit ea neque illo consectetur quae quos unde possimus! Ratione quo eius ipsum eveniet animi nisi blanditiis rem quidem tempore aut nulla, qui itaque sint vero fugit, incidunt accusantium dolore veniam veritatis reiciendis.
        </div>
        <div className="p-4 bg-sky-300 m-4 text-justify w-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore a modi delectus culpa eum recusandae amet quas explicabo saepe dolorum cum reprehenderit commodi dicta similique sed blanditiis perspiciatis vel doloremque, pariatur vero et eius? Maxime, labore culpa! Provident adipisci nesciunt sequi tenetur quos vero deserunt cumque aliquam optio aliquid voluptate eaque, ipsam iste est? Porro nobis facilis aperiam distinctio pariatur a debitis nihil amet, totam quasi odit ea neque illo consectetur quae quos unde possimus! Ratione quo eius ipsum eveniet animi nisi blanditiis rem quidem tempore aut nulla, qui itaque sint vero fugit, incidunt accusantium dolore veniam veritatis reiciendis.
        </div>
      </div> */}

      <div className="bg-blue-300 text-center w-200 m-auto">
        <h1 className="text-2xl/7 font-bold text-gray-800 mb-2">Current State: {state}</h1>
        <hr />
        <button onClick={clickHandler} className="btn btn-info m-2">Click Me</button>
      </div>
    </div>
  );
}
