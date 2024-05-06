import React from 'react';
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar';
import profilepic from "../../components/images/profile.jpg";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className=" flex flex-col bg-gray-800 min-h-screen">
            <Sidebar />
            <div className="space-y-12 ml-4">
                <div className="border-b ml-64 mt-24 border-gray-700 pb-12  text-gray-300 p-3">
                    {/* ======================User Infoo======================== */}
                    {/* ================== User Name ===================== */}
                    <div className='flex flex-row'>
                        <div class="relative">
                            <img class="w-20 h-20 rounded-full" src={profilepic} />
                            <span class="top-0 left-14 absolute w-6 h-6 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                        <div className='col flex-col ml-2'>
                            <h1 className=" font-bold leading-9 text-4xl" id='UserName'>Cody Rhodes </h1>
                            <h1 className=" font-normal leading-9 text-m" id='UserNameTag'>@CodyRhodes343 </h1>
                        </div>
                        {/* =============Button Edit Profile Info =============== */}

                       

                        <div className='ml-100'>
                        <Link to="/EditProfile"> 
                            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit Profile</button>
                            </Link>
                        </div>


                    </div>
                    {/* ================== User Bio ===================== */}
                    <p className="mt-4 text-sm leading-6" id='bio'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <br /> using Lorem Ipsum is that it has a more-or-less normal distribution of letters, <br />as opposed to using 'Content here, content here', making it look like readable English.
                    </p>



                    {/* ================ Analytics ======================== */}
                    <hr className="border-b mt-8 border-gray-700" />
                    <div className='border-gray-700 mt-12 flex flex-row'>

                        {/* =======Analytics Part======================= */}
                        <div class="max-w-sm w-full rounded-md  md:p-1">
                            <div class="flex justify-between mb-3">
                                <div class="flex items-center">
                                    <div class="flex justify-center items-center">
                                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-gray-200 pe-1">Your progress</h5>
                                        <svg data-popover-target="chart-info" data-popover-placement="bottom" class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                                        </svg>
                                        <div data-popover id="chart-info" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                                            <div class="p-3 space-y-2">
                                                <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
                                                <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                                                <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
                                                <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
                                                <a href="#" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read more <svg class="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                                </svg></a>
                                            </div>
                                            <div data-popper-arrow></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                <div class="grid grid-cols-3 gap-3 mb-2">
                                    <dl class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                                        <dt class="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">12</dt>
                                        <dd class="text-orange-600 dark:text-orange-300 text-sm font-medium">To do</dd>
                                    </dl>
                                    <dl class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                                        <dt class="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">23</dt>
                                        <dd class="text-teal-600 dark:text-teal-300 text-sm font-medium">In progress</dd>
                                    </dl>
                                    <dl class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                                        <dt class="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">64</dt>
                                        <dd class="text-blue-600 dark:text-blue-300 text-sm font-medium">Done</dd>
                                    </dl>
                                </div>
                                <button data-collapse-toggle="more-details" type="button" class="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center">Show more details <svg class="w-2 h-2 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                                </button>
                                <div id="more-details" class="border-gray-200 border-t dark:border-gray-600 pt-3 mt-3 space-y-2 hidden">
                                    <dl class="flex items-center justify-between">
                                        <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">Average task completion rate:</dt>
                                        <dd class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                                            <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                                            </svg> 57%
                                        </dd>
                                    </dl>
                                    <dl class="flex items-center justify-between">
                                        <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">Days until sprint ends:</dt>
                                        <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">13 days</dd>
                                    </dl>
                                    <dl class="flex items-center justify-between">
                                        <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">Next meeting:</dt>
                                        <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">Thursday</dd>
                                    </dl>
                                </div>
                            </div>



                        </div>



                        {/* ======================== Block Qoute================================= */}
                        <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white ml-8">
                            <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p className='Qoute'>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
