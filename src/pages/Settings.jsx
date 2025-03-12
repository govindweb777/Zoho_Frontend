import React, { useState } from 'react';
import {
    FiX,
    FiHelpCircle,
    FiPlus,
    FiSearch,
    FiEdit
} from 'react-icons/fi';

const Settings = () => {
    const [activeSettingsTab, setActiveSettingsTab] = useState('users');
    const [activeSubTab, setActiveSubTab] = useState('users');

    const renderContent = () => {
        // Organization tab content
        if (activeSettingsTab === 'organization') {
            return (
                <div>
                    <div className="flex border-b">
                        <button
                            className={`px-6 py-4 font-medium ${activeSubTab === 'details' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                            onClick={() => setActiveSubTab('details')}
                        >
                            Organization Details
                        </button>
                        <button
                            className={`px-6 py-4 font-medium ${activeSubTab === 'currencies' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                            onClick={() => setActiveSubTab('currencies')}
                        >
                            Currencies
                            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-md">Premier</span>
                        </button>
                        <button
                            className={`px-6 py-4 font-medium ${activeSubTab === 'payments' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                            onClick={() => setActiveSubTab('payments')}
                        >
                            Payments
                            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-md">Premier</span>
                        </button>
                    </div>

                    {activeSubTab === 'details' && (
                        <div className="p-6">
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-xl mr-4">
                                    YE
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Yashraj Enterprises</h2>
                                    <div className="flex items-center text-gray-600">
                                        <span className="mr-2">Simran Singh</span>
                                    </div>
                                </div>
                                <button className="ml-auto p-2 bg-gray-100 rounded">
                                    <FiEdit />
                                </button>
                            </div>

                            <div class="mb-8">
                                <h3 class="text-lg font-medium mb-4">Basic Information</h3>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <table class="w-full">
                                            <tr>
                                                <td class="text-gray-600 py-2 pr-4">Phone</td>
                                                <td class="text-black py-2">9922212229</td>
                                            </tr>
                                            <tr>
                                                <td class="text-gray-600 py-2 pr-4">Mobile</td>
                                                <td class="text-black py-2">9922212229</td>
                                            </tr>
                                            <tr>
                                                <td class="text-gray-600 py-2 pr-4">Fax</td>
                                                <td class="text-black py-2">--</td>
                                            </tr>
                                            <tr>
                                                <td class="text-gray-600 py-2 pr-4">Description</td>
                                                <td class="text-black py-2">MD</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-4">Address</h3>
                                <div className="mb-4">
                                    <div>Nagar - Pune Road, Rangoli Chowk, Kedgaon, Ahmednagar, Maharastra, India,</div>
                                    <div>414005.</div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-4">Locale Information</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <div className="text-gray-600 mb-1">Currency</div>
                                        <div>India - Indian Rupee (₹)</div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-gray-600 mb-1">Time Zone</div>
                                        <div>Asia/Kolkata</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-4">Access URL</h3>
                                <div className="flex items-center">
                                    <div className="text-gray-600 mr-2">URL</div>
                                    <div className="text-blue-600">https://bigin.zoho.in/bigin/org60016446319/Home#/</div>
                                    <button className="ml-2 p-1 bg-gray-100 rounded-full">
                                        <FiEdit className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        // Users related content (always show the tabs for sub-sections)
        else if (activeSettingsTab === 'users') {
            return (
                <div>
                    {/* Always display the Users, Profiles, Roles, Compliance tabs */}
                    <div className="border-b flex items-center">
                        <div className="flex-1">
                            <div className="flex">
                                <button
                                    className={`px-6 py-4 font-medium ${activeSubTab === 'users' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                                    onClick={() => setActiveSubTab('users')}
                                >
                                    Users
                                </button>
                                <button
                                    className={`px-6 py-4 font-medium ${activeSubTab === 'profiles' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                                    onClick={() => setActiveSubTab('profiles')}
                                >
                                    Profiles
                                </button>
                                <button
                                    className={`px-6 py-4 font-medium ${activeSubTab === 'roles' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                                    onClick={() => setActiveSubTab('roles')}
                                >
                                    Roles
                                </button>
                                <button
                                    className={`px-6 py-4 font-medium ${activeSubTab === 'compliance' ? 'text-green-600 border-b-2 border-green-600' : ''}`}
                                    onClick={() => setActiveSubTab('compliance')}
                                >
                                    Compliance
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center px-4">
                            <button className="text-gray-600 hover:text-gray-800 mr-4">
                                <span className="flex items-center">
                                    <FiHelpCircle className="mr-1" /> Help Guide
                                </span>
                            </button>
                        </div>
                    </div>

                    {activeSubTab === 'users' && (
                        <div className="p-4">
                            <div className="flex justify-between mb-4">
                                <div className="flex space-x-2">
                                    <button className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full">
                                        Active <span className="ml-1 bg-blue-200 px-1 rounded-full text-xs">1</span>
                                    </button>
                                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full">
                                        Inactive <span className="ml-1 bg-gray-200 px-1 rounded-full text-xs">3</span>
                                    </button>
                                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full">
                                        Invited
                                    </button>
                                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full">
                                        Deleted <span className="ml-1 bg-gray-200 px-1 rounded-full text-xs">7</span>
                                    </button>
                                </div>
                                <div className="flex">
                                    <div className="relative mr-2">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="border rounded-lg px-3 py-2 w-64"
                                        />
                                        <FiSearch className="absolute right-3 top-3 text-gray-400" />
                                    </div>
                                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center">
                                        <FiPlus className="mr-1" /> New User
                                    </button>
                                </div>
                            </div>

                            {/* User table */}
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 px-4">Full Name</th>
                                        <th className="text-left py-2 px-4">Email</th>
                                        <th className="text-left py-2 px-4">Role</th>
                                        <th className="text-left py-2 px-4">Profile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-3 px-4 flex items-center">
                                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white mr-2">
                                                SS
                                            </div>
                                            Simran Singh
                                        </td>
                                        <td className="py-3 px-4">satputebappusaheb@gmail.com</td>
                                        <td className="py-3 px-4">CEO</td>
                                        <td className="py-3 px-4">Super Admin</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeSubTab === 'profiles' && (
                        <div className="p-4">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Profiles</h2>
                                    <p className="text-gray-600">
                                        Profiles help you define a set of permissions for each user as well as the actions they can perform in Bigin. When you invite users, you assign a profile to each of them.
                                    </p>
                                </div>
                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center h-10">
                                    <FiPlus className="mr-2" />
                                    <span className="whitespace-nowrap">Create Profile</span>
                                </button>
                            </div>

                            {/* Profiles table */}
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 px-4">Profile Name</th>
                                        <th className="text-left py-2 px-4">Profile Description</th>
                                        <th className="text-left py-2 px-4">Modified By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Administrator</td>
                                        <td className="py-3 px-4">This profile will have all the permissions. Users with Administrator profile will be able...</td>
                                        <td className="py-3 px-4"></td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Standard</td>
                                        <td className="py-3 px-4">This profile will have all the permissions except administrative privileges.</td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 rounded-full bg-yellow-600 mr-2"></div>
                                                Mahesh Narsale
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Executive</td>
                                        <td className="py-3 px-4">Limited</td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 rounded-full bg-yellow-600 mr-2"></div>
                                                Mahesh Narsale
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeSubTab === 'roles' && (
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-lg font-semibold mb-1">Roles</h2>
                                    <p className="text-gray-600">
                                        Roles help you define visibility levels for records in your organization. A user on a lower role can't view the records of users above them in the role hierarchy.
                                    </p>
                                </div>
                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center h-10">
                                    <FiPlus className="mr-2" />
                                    <span className="whitespace-nowrap">Create New Role</span>
                                </button>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <h3 className="font-medium">Yashraj Enterprises</h3>
                                    <div className="ml-4 space-x-2 text-blue-600">
                                        <button>Expand All</button>
                                        <span>•</span>
                                        <button>Collapse All</button>
                                    </div>
                                </div>

                                <div className="ml-6 mt-4">
                                    <div className="flex items-center mb-4">
                                        <div className="w-5 h-5 border border-gray-400"></div>
                                        <div className="ml-2">CEO</div>
                                    </div>

                                    <div className="ml-8 border-l-2 border-gray-300 pl-6">
                                        <div className="flex items-center mb-4">
                                            <div className="w-5 h-5 border border-gray-400"></div>
                                            <div className="ml-2">Manager</div>
                                        </div>

                                        <div className="ml-8 border-l-2 border-gray-300 pl-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-5 h-5 border border-gray-400"></div>
                                                <div className="ml-2">Field Manager</div>
                                            </div>

                                            <div className="ml-8 border-l-2 border-gray-300 pl-6">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-5 h-5 border border-gray-400"></div>
                                                    <div className="ml-2">Executive</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSubTab === 'compliance' && (
                        <div className="p-6">
                            <div className="mb-6">
                                <div className="flex space-x-2 mb-6">
                                    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                                        GDPR Compliance
                                    </button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                                        HIPAA Compliance
                                    </button>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center mb-2">
                                        <h3 className="font-medium text-lg">GDPR Compliance</h3>
                                        <div className="ml-4 relative inline-block w-10 h-6 bg-gray-200 rounded-full">
                                            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                                        </div>
                                        <span className="ml-2 text-gray-600">Disabled</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Turning on GDPR compliance lets you manage the personal data of your organisation's contacts in compliance with GDPR.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        // Forms tab content
        else if (activeSettingsTab === 'forms') {
            return (
                <div className="p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Forms</h2>
                        <p className="text-gray-600">
                            With our easy-to-use form builder, build professional-looking forms that can be shared as a link, QR code or embedded in your website. Form submissions are directly added into Bigin as pipeline records or contact records.
                        </p>
                    </div>

                    <div className="overflow-auto">
                        <table className="w-full border-collapse mb-6">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-2 px-4">Form Title</th>
                                    <th className="text-left py-2 px-4">Module</th>
                                    <th className="text-left py-2 px-4">Status</th>
                                    <th className="text-left py-2 px-4">Created By</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V9L14 3Z" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-gray-600 mb-1">You haven't created any forms yet.</p>
                    </div>
                </div>
            );
        }

        // Automation tab content
        else if (activeSettingsTab === 'automation') {
            return (
                <div>
                    <div className="border-b flex">
                        <button className="px-6 py-4 font-medium text-green-600 border-b-2 border-green-600">
                            Workflow
                        </button>
                        <button className="px-6 py-4 font-medium">
                            Stage Automation
                        </button>
                    </div>

                    <div className="p-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Workflows</h2>
                            <p className="text-gray-600">
                                With workflows, you can trigger automatic actions when records match specified criteria. Workflows can trigger email alerts, create tasks, update fields, and tag or untag matching records.
                            </p>
                        </div>

                        <div className="overflow-auto">
                            <table className="w-full border-collapse mb-6">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 px-4">Workflow Name</th>
                                        <th className="text-left py-2 px-4">All Modules</th>
                                        <th className="text-left py-2 px-4">Actions</th>
                                        <th className="text-left py-2 px-4">Execute On</th>
                                        <th className="text-left py-2 px-4">Last Modified</th>
                                        <th className="text-left py-2 px-4">All Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">Big Deal Rule</td>
                                        <td className="py-3 px-4">Standard</td>
                                        <td className="py-3 px-4">1</td>
                                        <td className="py-3 px-4">Create or Edit</td>
                                        <td className="py-3 px-4"></td>
                                        <td className="py-3 px-4">
                                            <div className="relative inline-block w-10 h-6 bg-green-500 rounded-full">
                                                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }

        // Default blank content
        return <div className="p-4">Select an option from the sidebar</div>;
    };

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Settings</h2>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-gray-200 rounded-full p-2 ml-auto"
                    >
                        <FiX className="w-5 h-5" />
                    </button>
                </div>

                {/* Main content with sidebar */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-64 border-r bg-gray-50">
                        <div className="p-4 mb-12">
                            <h3 className="font-medium text-gray-700 mb-4">Users and Controls</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'users' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => {
                                            setActiveSettingsTab('users');
                                            setActiveSubTab('users');
                                        }}
                                    >
                                        Users and Controls
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'organization' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => {
                                            setActiveSettingsTab('organization');
                                            setActiveSubTab('details');
                                        }}
                                    >
                                        Organization
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'fields' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('fields')}
                                    >
                                        Fields
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'stages' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('stages')}
                                    >
                                        Stages
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'forms' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('forms')}
                                    >
                                        Forms
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'automation' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('automation')}
                                    >
                                        Automation
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'data' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('data')}
                                    >
                                        Data Administration
                                    </button>
                                </li>
                                {/* <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'toppings' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('toppings')}
                                    >
                                        Toppings
                                    </button>
                                </li> */}
                            </ul>

                            {/* <div className="my-4">
                                <button className="w-full text-left py-2 px-3 rounded flex items-center">
                                    <span className="text-yellow-500 mr-1">★</span> Free Trial
                                </button>
                            </div> */}

                            <h3 className="font-medium text-gray-700 mt-6 mb-4">Channels</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'email' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('email')}
                                    >
                                        Email
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'messages' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('messages')}
                                    >
                                        Messages
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'phone' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('phone')}
                                    >
                                        Phone
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left py-2 px-3 rounded ${activeSettingsTab === 'social' ? 'bg-blue-100 text-blue-700' : ''}`}
                                        onClick={() => setActiveSettingsTab('social')}
                                    >
                                        Social
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="flex-1 overflow-auto">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;