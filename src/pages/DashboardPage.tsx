import { useState } from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
=======
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
>>>>>>> origin/ai
import { RiskOverviewCards } from "@/components/dashboard/RiskOverviewCards";
import { StudentTable, Student } from "@/components/dashboard/StudentTable";
import { StudentDetailView } from "@/components/student/StudentDetailView";
import { NotificationsPanel } from "@/components/dashboard/NotificationsPanel";
<<<<<<< HEAD
import { LogOut } from "lucide-react";

// Mock student data
=======
import { useAIPredictions } from "@/hooks/useAIPredictions";
import { LogOut } from "lucide-react";
// Mock student data with core fields only
>>>>>>> origin/ai
const mockStudents: Student[] = [
  {
    id: "1",
    rollNo: "CS001",
<<<<<<< HEAD
    name: "Pallavi rana",
=======
    name: "Pallavi Rana",
>>>>>>> origin/ai
    attendance: 95,
    avgTestScore: 88,
    attempts: 3,
    riskLevel: "low",
    trend: "up",
    class: "CS-A",
    department: "Computer Science",
<<<<<<< HEAD
  },
  {
    id: "2",
=======
    feeStatus: "Paid"
  },
  {
    id: "2", 
>>>>>>> origin/ai
    rollNo: "CS002",
    name: "Shiv Chaurasiya",
    attendance: 72,
    avgTestScore: 65,
    attempts: 4,
<<<<<<< HEAD
    riskLevel: "medium",
    trend: "down",
    class: "CS-A",
    department: "Computer Science",
  },
  {
    id: "3",
    rollNo: "EE003",
=======
    riskLevel: "medium", 
    trend: "down",
    class: "CS-A",
    department: "Computer Science",
    feeStatus: "Pending"
  },
  {
    id: "3",
    rollNo: "EE003", 
>>>>>>> origin/ai
    name: "Rachit Gupta",
    attendance: 58,
    avgTestScore: 45,
    attempts: 6,
    riskLevel: "high",
    trend: "down",
<<<<<<< HEAD
    class: "EE-B",
    department: "Electrical Engineering",
=======
    class: "EE-B", 
    department: "Electrical Engineering",
    feeStatus: "Overdue"
>>>>>>> origin/ai
  },
  {
    id: "4",
    rollNo: "ME004",
<<<<<<< HEAD
    name: "Priya yadav",
    attendance: 89,
    avgTestScore: 92,
=======
    name: "Priya Sharma",
    attendance: 88,
    avgTestScore: 82,
>>>>>>> origin/ai
    attempts: 2,
    riskLevel: "low",
    trend: "up",
    class: "ME-A",
    department: "Mechanical Engineering",
<<<<<<< HEAD
  },
  {
    id: "5",
    rollNo: "CS005",
    name: "hrishika nema ",
    attendance: 76,
    avgTestScore: 68,
    attempts: 5,
    riskLevel: "medium",
    trend: "stable",
    class: "CS-B",
    department: "Computer Science",
  },
  {
    id: "6",
    rollNo: "EE006",
    name: "Priyanshu sarathe",
    attendance: 45,
    avgTestScore: 38,
    attempts: 8,
    riskLevel: "high",
    trend: "down",
    class: "EE-A",
    department: "Electrical Engineering",
  },
=======
    feeStatus: "Paid"
  },
  {
    id: "5",
    rollNo: "IT005",
    name: "Arjun Singh",
    attendance: 65,
    avgTestScore: 55,
    attempts: 5,
    riskLevel: "high",
    trend: "down",
    class: "IT-B",
    department: "Information Technology",
    feeStatus: "Overdue"
  }
>>>>>>> origin/ai
];

interface DashboardPageProps {
  onLogout: () => void;
}

export default function DashboardPage({ onLogout }: DashboardPageProps) {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
<<<<<<< HEAD
  const [showProfile, setShowProfile] = useState(false);

  // Calculate risk statistics
  const totalStudents = mockStudents.length;
  const lowRisk = mockStudents.filter((s) => s.riskLevel === "low").length;
  const mediumRisk = mockStudents.filter(
    (s) => s.riskLevel === "medium"
  ).length;
  const highRisk = mockStudents.filter((s) => s.riskLevel === "high").length;
=======
  const navigate = useNavigate();

  // Generate AI predictions for all students
  const studentsWithAI = useAIPredictions(mockStudents);

  // Calculate risk statistics based on AI predictions
  const totalStudents = studentsWithAI.length;
  const lowRisk = studentsWithAI.filter(s => s.riskLevel === "low").length;
  const mediumRisk = studentsWithAI.filter(s => s.riskLevel === "medium").length;
  const highRisk = studentsWithAI.filter(s => s.riskLevel === "high").length;

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/auth');
  };
>>>>>>> origin/ai

  if (selectedStudent) {
    return (
      <div className="min-h-screen bg-background p-6">
        <StudentDetailView
          student={selectedStudent}
          onBack={() => setSelectedStudent(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border-b border-border shadow-soft"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
<<<<<<< HEAD
              {/* Logo: file copied to public/raah-logo.jpg */}
              <img
                src="/raah-logo.jpg"
                alt="RAAH logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  RAAH - rise above academic hurdels
                </h1>
                <p className="text-muted-foreground">
                  Monitor and assess student dropout risk
                </p>
              </div>
            </div>
            {/* Profile avatar & dropdown */}
            <div className="relative">
              <button
                aria-label="Open profile"
                className="rounded-full hover:ring-2 hover:ring-primary/30 focus:outline-none"
                onClick={() => setShowProfile((s) => !s)}
              >
                <Avatar>
                  <AvatarImage src="/mentor-photo.jpg" alt="Mentor avatar" />
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-md shadow-lg p-4 z-20">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage
                        src="/mentor-photo.jpg"
                        alt="Mentor avatar"
                      />
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Dr. Ankit Sharma</div>
                      <div className="text-sm text-muted-foreground">
                        Computer Science
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 mb-3">
                    <div>Age: 38</div>
                    <div>Section: CS-A</div>
                    <div>Phone: +91-9876543210</div>
                    <div>Email: ankit.sharma@example.com</div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      className="mr-2"
                      onClick={() => setShowProfile(false)}
                    >
                      Close
                    </Button>
                    <Button onClick={onLogout} variant="destructive">
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </div>
=======
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/Raah.png" 
                  alt="RAAH Logo" 
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  RAAH - Rise Above Academic Hurdles
                </h1>
                <p className="text-muted-foreground">Monitor and assess student dropout risk</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
>>>>>>> origin/ai
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Risk Overview Cards */}
        <RiskOverviewCards
          totalStudents={totalStudents}
          lowRisk={lowRisk}
          mediumRisk={mediumRisk}
          highRisk={highRisk}
        />

        {/* Student Table */}
        <StudentTable
<<<<<<< HEAD
          students={mockStudents}
=======
          students={studentsWithAI}
>>>>>>> origin/ai
          onStudentClick={setSelectedStudent}
        />

        {/* Notifications Panel */}
        <NotificationsPanel />
      </main>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/ai
