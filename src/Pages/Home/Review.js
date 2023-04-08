import React from "react";

const Review = ({ review }) => {
  const { id, name, description, location, img } = review;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h5 className="text-xl">{name}</h5>
            <p>{description}</p>
            <p>Location: {location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
