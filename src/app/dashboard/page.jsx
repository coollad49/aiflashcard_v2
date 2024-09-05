import Link from "next/link";


const subjects = [
  { "id": 1, "subject": "Basic Science 🔬", "link": "dashboard/basic-science" },
  { "id": 2, "subject": "Mathematics ➗", "link": "dashboard/mathematics" },
  { "id": 3, "subject": "English Language 📖", "link": "dashboard/english-language" },
  { "id": 4, "subject": "Social Studies 🌍", "link": "dashboard/social-studies" },
  { "id": 5, "subject": "Civic Education 🏛️", "link": "dashboard/civic-education" },
  { "id": 6, "subject": "Christian Religious Studies ✝️", "link": "dashboard/christian-religious-studies" },
  { "id": 7, "subject": "Home Economics 🍳", "link": "dashboard/home-economics" },
  { "id": 8, "subject": "Agricultural Science 🌾", "link": "dashboard/agricultural-science" },
  { "id": 9, "subject": "History 📜", "link": "dashboard/history" },
  { "id": 10, "subject": "Geography 🗺️", "link": "dashboard/geography" },
  { "id": 11, "subject": "Physical Education 🏃‍♂️", "link": "dashboard/physical-education" },
  { "id": 12, "subject": "Computer Science 💻", "link": "dashboard/computer-science" },
  { "id": 13, "subject": "Fine Arts 🎨", "link": "dashboard/fine-arts" },
  { "id": 14, "subject": "Music 🎶", "link": "dashboard/music" },
  { "id": 15, "subject": "Business Studies 💼", "link": "dashboard/business-studies" },
  { "id": 16, "subject": "French 🇫🇷", "link": "dashboard/french" },
  { "id": 17, "subject": "Literature 📚", "link": "dashboard/literature" },
  { "id": 18, "subject": "Chemistry ⚗️", "link": "dashboard/chemistry" },
  { "id": 19, "subject": "Biology 🧬", "link": "dashboard/biology" },
  { "id": 20, "subject": "Physics ⚛️", "link": "dashboard/physics" },
  { "id": 21, "subject": "Economics 📊", "link": "dashboard/economics" }
]

const Card = ({ subject }) => {
  return(
    <Link href={subject.link} key={subject.id}>
      <div className="border border-slate-300/20 p-6 hover:bg-white hover:text-black duration-200">{subject.subject}</div>
    </Link>
  )
}

export default function Dashboard() {
  return (
    <div className="container mx-auto h-screen mt-12 gap-5 flex flex-col">
      <h1 className="text-center text-2xl p-3 font-bold">Pick a Subject/Category</h1>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {subjects.map((subject)=>(
          <Card subject={subject} key={subject.id} />
        ))}
      </div>
    </div>
  );
}
