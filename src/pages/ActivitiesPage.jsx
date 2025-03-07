import React, { useState } from 'react';

const ActivitiesPage = () => {
  const [activeTab, setActiveTab] = useState('Tasks');
  const [viewMode, setViewMode] = useState('list');
  
  const tasks = [
    { id: 1, name: "Make Tehsil Application", dueDate: "May 27, 2024", status: "In Progress", priority: "High", relatedTo: "Vyankatesh Enpterpri...", owner: "Hr Yashraj" },
    { id: 2, name: "Make Tehsil Application", dueDate: "May 27, 2024", status: "In Progress", priority: "High", relatedTo: "Vishal Patil", owner: "Hr Yashraj" },
    { id: 3, name: "Follow Up", dueDate: "Jun 15, 2024", status: "In Progress", priority: "High", relatedTo: "Vishal Sampat Wakch...", owner: "Raj Pacharne" },
    { id: 4, name: "Visit To Dm", dueDate: "May 15, 2024", status: "Completed", priority: "Normal", relatedTo: "Vishal Sampat Wakch...", owner: "Raj Pacharne" },
    { id: 5, name: "Make Notary", dueDate: "May 15, 2024", status: "Completed", priority: "Normal", relatedTo: "Vishal Sampat Wakch...", owner: "Raj Pacharne" },
    { id: 6, name: "Make Dm Application", dueDate: "May 14, 2024", status: "Completed", priority: "Normal", relatedTo: "Vishal Sampat Wakch...", owner: "Hr Yashraj" },
    { id: 7, name: "Collect Documents", dueDate: "Apr 23, 2024", status: "Completed", priority: "Normal", relatedTo: "Vishal Sampat Wakch...", owner: "Hr Yashraj" },
    { id: 8, name: "Bill Follow Up", dueDate: "May 13, 2024", status: "In Progress", priority: "High", relatedTo: "Vishal Patil", owner: "Hr Yashraj" },
    { id: 9, name: "Bill Follow Up", dueDate: "May 15, 2024", status: "In Progress", priority: "High", relatedTo: "Vyankatesh Enpterpri...", owner: "Hr Yashraj" }
  ];

  const taskStats = {
    total: 24,
    open: 5,
    completed: 19,
    overdue: 5
  };

  const eventStats = {
    total: 0,
    upcoming: 0,
    closed: 0
  };

  const callStats = {
    total: 0
  };

  const TabButton = ({ name, isActive }) => (
    <button
      className={`px-6 py-4 border-b-2 font-medium ${isActive ? 'border-green-500 text-green-500' : 'border-transparent'}`}
      onClick={() => setActiveTab(name)}
    >
      {name}
    </button>
  );

  const renderTasksTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-600">
            <th className="p-3 border-b"></th>
            <th className="p-3 border-b">Task Name</th>
            <th className="p-3 border-b">Due Date</th>
            <th className="p-3 border-b">Status</th>
            <th className="p-3 border-b">Priority</th>
            <th className="p-3 border-b">Related To</th>
            <th className="p-3 border-b">Task Owner</th>
            <th className="p-3 border-b">
              <div className="flex items-center">
                <span className="text-blue-500">+ Create Field</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">
                <input type="checkbox" className="rounded text-green-500" />
              </td>
              <td className="p-3 border-b">{task.name}</td>
              <td className="p-3 border-b">{task.dueDate}</td>
              <td className="p-3 border-b">{task.status}</td>
              <td className="p-3 border-b">{task.priority}</td>
              <td className="p-3 border-b">
                <div className="flex items-center">
                  <span className="ml-1">{task.relatedTo}</span>
                </div>
              </td>
              <td className="p-3 border-b">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">
                    {task.owner.split(' ').map(n => n[0]).join('')}
                  </div>
                  {task.owner}
                </div>
              </td>
              <td className="p-3 border-b"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderEmptyView = () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center text-gray-500">
        <p className="text-lg">No records in this view.</p>
      </div>
    </div>
  );

  const renderCalendarUpgrade = () => (
    <div className="relative">
      <div className="grid grid-cols-7 gap-0">
        <div className="p-2 text-center border">Sun</div>
        <div className="p-2 text-center border">Mon</div>
        <div className="p-2 text-center border">Tue</div>
        <div className="p-2 text-center border">Wed</div>
        <div className="p-2 text-center border">Thu</div>
        <div className="p-2 text-center border">Fri</div>
        <div className="p-2 text-center border">Sat</div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center w-96">
          <div className="text-gray-700 mb-6">
            <div className="inline-block rounded-full bg-gray-50 p-6 mb-4">
              <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5C13.9543 5 5 13.9543 5 25C5 36.0457 13.9543 45 25 45Z" fill="#E6F0FF" />
                <path d="M15 25H35L25 10L15 25Z" fill="#80B4FF" />
                <path d="M20 25L25 15L30 25H20Z" fill="#FFC857" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Upgrade to Express</h2>
            <p className="mb-1">Calendar View for Activities is not a part of the 'Free' plan.</p>
            <p>Please upgrade to our 'Express' plan to access premium features like this.</p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md">
            Upgrade Now!
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'Tasks') {
      return renderTasksTable();
    } else if (activeTab === 'Events' || activeTab === 'Calls') {
      return renderEmptyView();
    }
    return null;
  };

  const renderStats = () => {
    let stats;
    if (activeTab === 'Tasks') stats = taskStats;
    else if (activeTab === 'Events') stats = eventStats;
    else if (activeTab === 'Calls') stats = callStats;

    return (
      <div className="flex items-center py-2 text-sm text-gray-500 border-t">
        {Object.entries(stats).map(([key, value], index) => (
          <React.Fragment key={key}>
            <div className="flex items-center">
              <span className="mr-1">{key.charAt(0).toUpperCase() + key.slice(1)} {activeTab}</span>
              <span className="bg-gray-200 rounded-full px-2 py-0.5">{value}</span>
            </div>
            {index < Object.entries(stats).length - 1 && <span className="mx-4">•</span>}
          </React.Fragment>
        ))}
        <div className="ml-auto flex items-center">
          <span className="mr-2">Records per page</span>
          <select className="border rounded p-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-md shadow">
      {/* Navigation Tabs */}
      <div className="flex border-b">
        <div className="flex-shrink-0 flex items-center px-4">
          <svg className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-2 font-medium text-gray-600">Calendar</span>
        </div>
        <TabButton name="Tasks" isActive={activeTab === 'Tasks'} />
        <TabButton name="Events" isActive={activeTab === 'Events'} />
        <TabButton name="Calls" isActive={activeTab === 'Calls'} />
      </div>

      {/* Controls Bar */}
      <div className="flex items-center p-4 border-b">
        <div className="flex items-center">
          <div className="bg-gray-100 rounded-full p-2 mr-4">
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-full py-1 pl-4 pr-10 text-gray-700 focus:outline-none focus:border-blue-500">
              <option>All {activeTab}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="ml-auto flex space-x-2">
          <button 
            className="p-2 border rounded" 
            onClick={() => setViewMode('list')}
          >
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => {}}
          >
            <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            {activeTab.slice(0, -1)}
          </button>
          <button>
            <svg className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 6a2 2 0 100-4 2 2 0 000 4zM10 12a2 2 0 100-4 2 2 0 000 4zM10 18a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className={viewMode === 'calendar' ? 'p-4' : ''}>
        {viewMode === 'list' ? renderContent() : renderCalendarUpgrade()}
      </div>

      {/* Stats Footer */}
      <div className="px-4">
        {renderStats()}
      </div>
    </div>
  );
};

export default ActivitiesPage;
