import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    address: "",
    phone: "",
    area: "",
    productPicture: null,
    carName: "",
    carModel: "",
    namePlate: "",
    password: "",
    confirmPassword: "",
    vehicleType: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }
    try {
      console.log("data");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-mx-auto">
      <h1 className="text-4xl">Start Your Own Business </h1>
      <h2 className="text-orange-700 text-3xl">Book Your Product</h2>
      <form
        className="text-start mx-auto container mt-10"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              value={formData.fullName}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              id="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
              value={formData.age}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea
              name="address"
              id="address"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
              value={formData.address}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              name="phone"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              id="phone"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="area">Area:</label>
            <input
              type="text"
              name="area"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              id="area"
              onChange={handleChange}
              value={formData.area}
              required
            />
          </div>
          <div>
            <label htmlFor="nidPicture">Product Picture:</label>
            <input
              type="file"
              name="nidPicture"
              class="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
          "
              id="productPicture"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className="bg-blue-500 my-5 hover:bg-blue-700 text-white font-bold w-36 py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;
