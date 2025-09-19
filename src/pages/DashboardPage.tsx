import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RiskOverviewCards } from "@/components/dashboard/RiskOverviewCards";
import { StudentTable, Student } from "@/components/dashboard/StudentTable";
import { StudentDetailView } from "@/components/student/StudentDetailView";
import { NotificationsPanel } from "@/components/dashboard/NotificationsPanel";
import { useAIPredictions } from "@/hooks/useAIPredictions";
import { LogOut } from "lucide-react";
// Mock student data with core fields only
const mockStudents: Student[] = [
  {
    id: "1",
    rollNo: "CS001",
    name: "Pallavi Rana",
    attendance: 95,
    avgTestScore: 88,
    attempts: 3,
    riskLevel: "low",
    trend: "up",
    class: "CS-A",
    department: "Computer Science",
    feeStatus: "Paid"
  },
  {
    id: "2", 
    rollNo: "CS002",
    name: "Shiv Chaurasiya",
    attendance: 72,
    avgTestScore: 65,
    attempts: 4,
    riskLevel: "medium", 
    trend: "down",
    class: "CS-A",
    department: "Computer Science",
    feeStatus: "Pending"
  },
  {
    id: "3",
    rollNo: "EE003", 
    name: "Rachit Gupta",
    attendance: 58,
    avgTestScore: 45,
    attempts: 6,
    riskLevel: "high",
    trend: "down",
    class: "EE-B", 
    department: "Electrical Engineering",
    feeStatus: "Overdue"
  },
  {
    id: "4",
    rollNo: "ME004",
    name: "Priya Sharma",
    attendance: 88,
    avgTestScore: 82,
    attempts: 2,
    riskLevel: "low",
    trend: "up",
    class: "ME-A",
    department: "Mechanical Engineering",
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
];

interface DashboardPageProps {
  onLogout: () => void;
}

export default function DashboardPage({ onLogout }: DashboardPageProps) {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
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
          students={studentsWithAI}
          onStudentClick={setSelectedStudent}
        />

        {/* Notifications Panel */}
        <NotificationsPanel />
      </main>
    </div>
  );
}

