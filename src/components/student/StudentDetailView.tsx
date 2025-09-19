import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { ArrowLeft } from "lucide-react";
=======
import { ArrowLeft, Brain, AlertTriangle, CheckCircle, Target } from "lucide-react";
>>>>>>> origin/ai
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Student } from "../dashboard/StudentTable";
import { AnimatedTree } from "./AnimatedTree";

interface StudentDetailViewProps {
  student: Student;
  onBack: () => void;
}

// Mock data for charts
const attendanceData = [
  { month: "Jan", attendance: 85 },
  { month: "Feb", attendance: 78 },
  { month: "Mar", attendance: 82 },
  { month: "Apr", attendance: 75 },
  { month: "May", attendance: 70 },
  { month: "Jun", attendance: 68 },
];

const testScoreData = [
  { test: "Test 1", score: 85 },
  { test: "Test 2", score: 78 },
  { test: "Test 3", score: 82 },
  { test: "Test 4", score: 75 },
  { test: "Test 5", score: 70 },
  { test: "Test 6", score: 68 },
];

export function StudentDetailView({ student, onBack }: StudentDetailViewProps) {
  const getRiskBadgeProps = (riskLevel: string) => {
    switch (riskLevel) {
      case "low":
        return { className: "bg-risk-safe text-risk-safe-foreground hover:bg-risk-safe/90" };
      case "medium":
        return { className: "bg-risk-warning text-risk-warning-foreground hover:bg-risk-warning/90" };
      case "high":
        return { className: "bg-risk-critical text-risk-critical-foreground hover:bg-risk-critical/90" };
      default:
        return { className: "bg-muted text-muted-foreground" };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p className="text-muted-foreground">Roll No: {student.rollNo} | {student.class} | {student.department}</p>
        </div>
        <Badge {...getRiskBadgeProps(student.riskLevel)}>
          {student.riskLevel.toUpperCase()} RISK
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Profile Card */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Student Profile</CardTitle>
            <CardDescription>Current academic standing and risk assessment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Current Attendance</p>
                <p className={`text-2xl font-bold ${
                  student.attendance >= 80 ? 'text-risk-safe' : 
                  student.attendance >= 60 ? 'text-risk-warning' : 'text-risk-critical'
                }`}>
                  {student.attendance}%
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Average Test Score</p>
                <p className={`text-2xl font-bold ${
                  student.avgTestScore >= 80 ? 'text-risk-safe' : 
                  student.avgTestScore >= 60 ? 'text-risk-warning' : 'text-risk-critical'
                }`}>
                  {student.avgTestScore}%
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Test Attempts</p>
                <p className="text-2xl font-bold text-foreground">{student.attempts}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Fee Status</p>
                <Badge variant="outline" className="text-risk-safe border-risk-safe">
                  Paid
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Tree Visualization */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Performance Visualization</CardTitle>
            <CardDescription>
              Tree health represents student performance and dropout risk
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-64">
            <AnimatedTree 
              performanceLevel={student.avgTestScore} 
              riskLevel={student.riskLevel}
            />
          </CardContent>
        </Card>
      </div>

<<<<<<< HEAD
=======
      {/* AI Prediction Section */}
      {student.aiPrediction && (
        <Card className="shadow-soft border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI-Powered Dropout Risk Assessment
            </CardTitle>
            <CardDescription>
              Machine learning analysis based on academic, financial, and demographic factors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Risk Probability */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Dropout Chance</span>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {(student.aiPrediction.dropoutProbability * 100).toFixed(1)}%
                </div>
              </div>

              {/* Key Factors */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Key Risk Factors</span>
                </div>
                <div className="space-y-1">
                  {student.aiPrediction.keyFactors.slice(0, 3).map((factor, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {factor}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">AI Recommendations</span>
                </div>
                <div className="space-y-1">
                  {student.aiPrediction.recommendations.slice(0, 3).map((recommendation, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {recommendation}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

>>>>>>> origin/ai
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trend */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Attendance Trend</CardTitle>
            <CardDescription>Monthly attendance percentage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Test Score Trend */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Test Score Trend</CardTitle>
            <CardDescription>Performance across recent assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={testScoreData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="test" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="score" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}