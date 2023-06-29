import React from 'react';

const SideUsersList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-cyan-500 dark:text-cyan-400">
        <thead className="text-xs text-cyan-700 uppercase bg-white dark:bg-cyan-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900">
            <td className="px-6 py-4">
              1
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              James Ayo
            </td>
            <td className="px-6 py-4">
              jamesayo@example.com
            </td>
            <td className="px-6 py-4">
              Active
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900">
            <td className="px-6 py-4">
              2
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              LeBron James
            </td>
            <td className="px-6 py-4">
              lebronjames@example.com
            </td>
            <td className="px-6 py-4">
              Offline
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
            </td>
          </tr>
          <tr className="bg-white dark:bg-white hover:bg-blue-100 dark:hover:bg-blue-900">
            <td className="px-6 py-4">
              3
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              David Ade
            </td>
            <td className="px-6 py-4">
              davidade@example.com
            </td>
            <td className="px-6 py-4">
              Active
            </td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SideUsersList;
