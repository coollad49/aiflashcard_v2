import Link from "next/link";
import {Search} from "lucide-react"

const categories = [
  { id: 1, name: 'Basic Science', icon: '🧪', link: '/dashboard/basic-science' },
  { id: 2, name: 'Mathematics', icon: '➗', link: '/dashboard/mathematics' },
  { id: 3, name: 'English Language', icon: '📚', link: '/dashboard/english-language' },
  { id: 4, name: 'Social Studies', icon: '🌍', link: '/dashboard/social-studies' },
  { id: 5, name: 'Civic Education', icon: '🏛️', link: '/dashboard/civic-education' },
  { id: 6, name: 'Christian Religious Studies', icon: '✝️', link: '/dashboard/christian-religious-studies' },
  { id: 7, name: 'Home Economics', icon: '🏠', link: '/dashboard/home-economics' },
  { id: 8, name: 'Agricultural Science', icon: '🌾', link: '/dashboard/agricultural-science' },
  { id: 9, name: 'History', icon: '📜', link: '/dashboard/history' },
  { id: 10, name: 'Geography', icon: '🗺️', link: '/dashboard/geography' },
  { id: 11, name: 'Physical Education', icon: '🏃', link: '/dashboard/physical-education' },
  { id: 12, name: 'Computer Science', icon: '💻', link: '/dashboard/computer-science' },
  { id: 13, name: 'Fine Arts', icon: '🎨', link: '/dashboard/fine-arts' },
  { id: 14, name: 'Music', icon: '🎵', link: '/dashboard/music' },
  { id: 15, name: 'Business Studies', icon: '💼', link: '/dashboard/business-studies' },
  { id: 16, name: 'French', icon: '🇫🇷', link: '/dashboard/french' },
  { id: 17, name: 'Literature', icon: '📚', link: '/dashboard/literature' },
  { id: 18, name: 'Chemistry', icon: '🧪', link: '/dashboard/chemistry' },
  { id: 19, name: 'Biology', icon: '🦠', link: '/dashboard/biology' },
  { id: 20, name: 'Physics', icon: '⚛️', link: '/dashboard/physics' },
  { id: 21, name: 'Economics', icon: '📊', link: '/dashboard/economics' },
];

const CategorySelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-teal-400 p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Pick a Subject/Category</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.link}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium text-center text-slate-700">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
