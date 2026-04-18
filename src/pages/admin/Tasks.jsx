import React from 'react'
import { CheckSquare } from 'lucide-react'

const Tasks = () => {
  const tasks = [
    { id: 1, title: 'Approve Payroll for Apr 15', assignee: 'Admin', priority: 'High', dueDate: '2026-04-17', status: 'In Progress' },
    { id: 2, title: 'Review Care Plan Updates', assignee: 'Manager', priority: 'High', dueDate: '2026-04-18', status: 'Not Started' },
    { id: 3, title: 'Reconcile Billing Discrepancies', assignee: 'Finance', priority: 'Medium', dueDate: '2026-04-20', status: 'In Progress' },
    { id: 4, title: 'Schedule Staff Training', assignee: 'HR', priority: 'Medium', dueDate: '2026-04-25', status: 'Not Started' },
  ]

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Task Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Tasks</p><p className="text-3xl font-bold text-blue-600 mt-2">{tasks.length}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">In Progress</p><p className="text-3xl font-bold text-green-600 mt-2">2</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Not Started</p><p className="text-3xl font-bold text-yellow-600 mt-2">2</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Overdue</p><p className="text-3xl font-bold text-red-600 mt-2">0</p></div>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Assigned to: {task.assignee}</p>
              </div>
              <span className={`px-3 py-1 rounded text-xs font-semibold ${task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>{task.status}</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className={`px-3 py-1 rounded text-xs font-semibold ${task.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>{task.priority}</span>
              <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks
