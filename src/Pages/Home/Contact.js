import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-800 px-10 py-14 ">
      <div className="text-center pb-14 text-white">
        <p className="text-4xl ">Contact Us</p>
        <h1 className="text-3xl text-orange-700">Stay Connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input type="email" placeholder="Email" class="input w-full max-w-md" />
        <input
          type="text"
          placeholder="Subject"
          class="input w-full max-w-md"
        />
        <textarea
          class="textarea  w-full max-w-md"
          rows={6}
          placeholder="Your massage"
        ></textarea>
        <button className="btn btn-active w-40">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
