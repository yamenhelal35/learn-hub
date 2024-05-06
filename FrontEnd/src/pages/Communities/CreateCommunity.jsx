import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';
import SearchBar from '../../components/landingPage/Searchbar/Searchbar';


const CreateCommunity = ({ onSave }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [owner, setOwner] = useState('');
  const [Bio, setBio] = useState('');
  const [CommunityPic, setCommunityPic] = useState('');

  const handleSave = () => {
    // Validate data if needed
    const newCommunity = {
      name,
      details,
      owner,
      Bio,
      CommunityPic
    };
    onSave(newCommunity);
  };

  useEffect(() => {
    console.log('Props received by CreateCommunity:', { onSave });
  }, [onSave]);

  return (

    <div className="flex flex-col bg-gray-800 min-h-screen">
      <Sidebar />
      <form className='ml-64 mt-24 bg-gray-800 text-gray-300 p-3'>


        {/* ====================== Whole Form ================================= */}
        <div className="space-y-12">
          {/* ===================== Create Community Part =============================== */}
          <div className="border-b border-gray-700 pb-12">
            <h1 className=" font-bold leading-9 text-3xl">Create Community</h1>
            <p className="mt-1 text-sm leading-6">
              This information will be displayed publicly so be careful what you share and what you will do in it .
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="CommunityName" className="block text-sm font-medium leading-6">
                  Community Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">LearnHub.com/</span>
                    <input
                      type="text"
                      name="CommunityName"
                      id="CommunityName"
                      autoComplete="CommunityName"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="ProductDesign1"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6">
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className=" w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6">Write a few sentences about the Community.</p>
              </div>

              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6">
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-600/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-gray-700 font-semibold text-indigo-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================Form for Personal Information Edit Profile ========================*/}

          {/* <div className="border-b border-gray-700 pb-12">
            <h2 className="text-base font-semibold leading-7">Personal Information</h2>
            <p className="mt-1 text-sm leading-6">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6">
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6">
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6">
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* ================================ Special Information =================================== */}
          <div className="border-b border-gray-700 pb-12">
            <h2 className="font-bold leading-9 text-3xl">Community Information</h2>
            <p className="mt-1 text-sm leading-6">
              We always let you know about important things, but you need to help us knowing your prefernces.
            </p>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-l font-semibold leading-6">Community Privacy</legend>
                <p className="mt-1 text-sm leading-6">Choose the privacy setting for your community.</p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="privacy-public"
                      name="community-privacy"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-400 focus:ring-indigo-600"
                    />
                    <label htmlFor="privacy-public" className="block text-sm font-medium leading-6">
                      Public
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="privacy-private"
                      name="community-privacy"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-400 focus:ring-indigo-600"
                    />
                    <label htmlFor="privacy-private" className="block text-sm font-medium leading-6">
                      Private
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>


        {/* ===========================Save Buttons=================================== */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>







      {/* <main className="flex-grow p-4 md:p-8 ml-0 md:ml-64 flex flex-col items-start">
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communityName">
              Community Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="communityName"
              type="text"
              placeholder="Enter community name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter community description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
              Topic
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="topic"
              type="text"
              placeholder="Enter community topic"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="privacyToggle">
              Privacy
            </label>
            <div className="flex items-center">
              <input
                id="privacyToggle"
                type="checkbox"
                className="mr-2 leading-tight"
              />
              <span className="text-sm">Private</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#968BC9] hover:bg-[#827aa8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create Community
            </button>
          </div>
        </form>
      </div>
    </div>

     








     
     
    </main> */}
    </div>



  );
};

export default CreateCommunity;
{/* <div className="mb-4 w-full">
<label htmlFor="details" className="block text-lg font-medium mb-2">Details</label>
<input
  id="details"
  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
  type="text"
  placeholder="Enter community details"
  value={details}
  onChange={(e) => setDetails(e.target.value)}
/>
</div>
<div className="mb-4 w-full">
<label htmlFor="owner" className="block text-lg font-medium mb-2">Owner</label>
<input
  id="owner"
  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
  type="text"
  placeholder="Enter community owner"
  value={owner}
  onChange={(e) => setOwner(e.target.value)}
/>
</div> */}