import React, { useState } from 'react'
import { CheckCircle2, Circle, Clock, User } from 'lucide-react'

const MyTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Medication Reminder', client: 'Mrs. Sarah Smith', time: '10:00 AM', priority: 'High', description: 'Administer 2 tablets of Lisinopril 10mg', completed: false },
    { id: 2, title: 'Physical Therapy Exercise', client: 'Mr. Robert Johnson', time: '02:00 PM', priority: 'High', description: 'Assist with 30-minute range of motion exercises', completed: false },
    { id: 3, title: 'Meal Preparation', client: 'Mrs. Elizabeth Brown', time: '12:00 PM', priority: 'Medium', description: 'Prepare low-sodium lunch', completed: true },
  ])

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const completedCount = tasks.filter(t => t.completed).length
  const highPriority = tasks.filter(t => !t.completed && t.priority === 'High').length

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">My Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Tasks</p><p className="text-3xl font-bold text-blue-600 mt-2">{tasks.length}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Completed</p><p className="text-3xl font-bold text-green-600 mt-2">{completedCount}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">High Priority Pending</p><p className="text-3xl font-bold text-red-600 mt-2">{highPriority}</p></div>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className={`bg-white rounded-lg shadow p-6 border-l-4 ${task.priority === 'High' ? 'border-red-500' : 'border-yellow-500'} ${task.completed ? 'opacity-75' : ''} hover:shadow-lg transition`}>
            <div className="flex items-start gap-4">
              <button onClick={() => toggleTask(task.id)} className="mt-1">
                {task.completed ? <CheckCircle2 size={24} className="text-green-600" /> : <Circle size={24} className="text-gray-400" />}
              </button>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-lg font-bold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{task.title}</h3>
                  <span className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${task.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>{task.priority}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><User size={16} />{task.client}</div>
                  <div className="flex items-center gap-2"><Clock size={16} />{task.time}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MyTask
