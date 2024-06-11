import React, { useState } from 'react';
import profilepic from "../../../components/images/profile.jpg";

const UserChat = () => {
    const [activeMessageType, setActiveMessageType] = useState('Text');

    const renderContent = () => {
        switch (activeMessageType) {
            case 'Text':
                return (
                    <div className="flex items-start gap-2.5" dir="rtl">
                    <img className="w-8 h-8 rounded-full" src={profilepic} alt="Ahmed image" />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900">Ahmed Magdy</span>
                            <span className="text-sm font-normal text-gray-500">11:46</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900">That's awesome. I think our users will really appreciate the improvements.</p>
                        <span className="text-sm font-normal text-gray-500">Delivered</span>
                    </div>
                </div>
                
                );
            case 'Audio':
                return (
                    <div className="flex items-start gap-2.5" dir="rtl">
                    <img className="w-8 h-8 rounded-full" src={profilepic} alt="Jese image" />
                    <div className="flex flex-col gap-2.5 w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900">Bonnie Green</span>
                            <span className="text-sm font-normal text-gray-500">11:46</span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button">
                                <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                                    <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                                </svg>
                            </button>
                            <svg aria-hidden="true" className="w-[145px] md:w-[185px] md:h-[40px]" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" />
                                <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" />
                                <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" />
                                <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" />
                                <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" />
                                <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" />
                                <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" />
                                <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" />
                                <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" />
                                <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" />
                                <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" />
                                <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" />
                                <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" />
                                <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" />
                                <rect x="98" width="3" height="40" rx="1.5" fill="#E5E7EB" />
                                <rect x="105" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" />
                                <rect x="112" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" />
                                <rect x="119" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" />
                                <rect x="126" y="5.5" width="3" height="29" rx="1.5" fill="#E5E7EB" />
                                <rect x="133" y="10" width="3" height="20" rx="1.5" fill="#E5E7EB" />
                                <rect x="140" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" />
                                <rect x="147" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" />
                                <rect x="154" y="15.5" width="3" height="9" rx="1.5" fill="#E5E7EB" />
                                <rect x="161" y="10" width="3" height="20" rx="1.5" fill="#E5E7EB" />
                                <rect x="168" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" />
                                <rect x="175" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" />
                            </svg>
                            <span className="text-sm font-normal text-gray-500">0:12</span>
                        </div>
                        <span className="text-sm font-normal text-gray-500">Delivered</span>
                    </div>
                </div>
                
                );
            case 'Image':
                return (
                    <div className="flex items-start gap-2.5" dir="rtl">
                    <img className="w-8 h-8 rounded-full" src={profilepic} alt="Jese image" />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900">Bonnie Green</span>
                            <span className="text-sm font-normal text-gray-500">11:46</span>
                        </div>
                        <div className="w-full max-w-[320px] h-48 bg-gray-300 rounded-lg"></div>
                        <span className="text-sm font-normal text-gray-500">Delivered</span>
                    </div>
                </div>
                
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="flex space-x-4">
                {/* <button onClick={() => setActiveMessageType('Text')} className={`py-2 px-4 rounded ${activeMessageType === 'Text' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    Text
                </button>
                <button onClick={() => setActiveMessageType('Audio')} className={`py-2 px-4 rounded ${activeMessageType === 'Audio' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    Audio
                </button>
                <button onClick={() => setActiveMessageType('Image')} className={`py-2 px-4 rounded ${activeMessageType === 'Image' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    Image
                </button> */}
            </div>
            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default UserChat;
