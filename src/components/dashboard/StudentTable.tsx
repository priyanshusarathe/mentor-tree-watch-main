import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, TrendingUp, TrendingDown, Filter } from "lucide-react";

export interface Student {
  id: string;
  rollNo: string;
  name: string;
  attendance: number;
  avgTestScore: number;
  attempts: number;
  riskLevel: "low" | "medium" | "high";
  trend: "up" | "down" | "stable";
  class: string;
  department: string;
  feeStatus: "Paid" | "Pending" | "Overdue";
}

interface StudentTableProps {
  students: Student[];
  onStudentClick: (student: Student) => void;
}

export function StudentTable({ students, onStudentClick }: StudentTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRisk, setFilterRisk] = useState<string>("all");

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterRisk === "all" || student.riskLevel === filterRisk;
    
    return matchesSearch && matchesFilter;
  });

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

  const getRowClassName = (riskLevel: string) => {
    switch (riskLevel) {
      case "low":
        return "hover:bg-risk-safe-light/20 border-l-4 border-l-risk-safe/50";
      case "medium":
        return "hover:bg-risk-warning-light/20 border-l-4 border-l-risk-warning/50";
      case "high":
        return "hover:bg-risk-critical-light/20 border-l-4 border-l-risk-critical/50";
      default:
        return "hover:bg-muted/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Student Risk Assessment</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by name, roll no, class, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterRisk === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRisk("all")}
              >
                All
              </Button>
              <Button
                variant={filterRisk === "low" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRisk("low")}
                className="data-[state=active]:bg-risk-safe data-[state=active]:text-risk-safe-foreground"
              >
                Low Risk
              </Button>
              <Button
                variant={filterRisk === "medium" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRisk("medium")}
                className="data-[state=active]:bg-risk-warning data-[state=active]:text-risk-warning-foreground"
              >
                Medium Risk
              </Button>
              <Button
                variant={filterRisk === "high" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRisk("high")}
                className="data-[state=active]:bg-risk-critical data-[state=active]:text-risk-critical-foreground"
              >
                High Risk
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Roll No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Attendance %</TableHead>
                  <TableHead>Avg Score</TableHead>
                  <TableHead>Attempts</TableHead>
                  <TableHead>Fee Status</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Risk Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student, index) => (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`cursor-pointer transition-colors ${getRowClassName(student.riskLevel)}`}
                    onClick={() => onStudentClick(student)}
                  >
                    <TableCell className="font-medium">{student.rollNo}</TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.department}</TableCell>
                    <TableCell>
                      <span className={`font-semibold ${
                        student.attendance >= 80 ? 'text-risk-safe' : 
                        student.attendance >= 60 ? 'text-risk-warning' : 'text-risk-critical'
                      }`}>
                        {student.attendance}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`font-semibold ${
                        student.avgTestScore >= 80 ? 'text-risk-safe' : 
                        student.avgTestScore >= 60 ? 'text-risk-warning' : 'text-risk-critical'
                      }`}>
                        {student.avgTestScore}%
                      </span>
                    </TableCell>
                    <TableCell>{student.attempts}</TableCell>
                    <TableCell>
                      <Badge 
                        className={
                          student.feeStatus === "Paid" ? "bg-risk-safe text-risk-safe-foreground" :
                          student.feeStatus === "Pending" ? "bg-risk-warning text-risk-warning-foreground" :
                          "bg-risk-critical text-risk-critical-foreground"
                        }
                      >
                        {student.feeStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {student.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-risk-safe mr-1" />
                        ) : student.trend === "down" ? (
                          <TrendingDown className="h-4 w-4 text-risk-critical mr-1" />
                        ) : (
                          <div className="h-4 w-4 mr-1" />
                        )}
                        <span className={
                          student.trend === "up" ? "text-risk-safe" :
                          student.trend === "down" ? "text-risk-critical" :
                          "text-muted-foreground"
                        }>
                          {student.trend === "up" ? "Improving" : 
                           student.trend === "down" ? "Declining" : "Stable"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge {...getRiskBadgeProps(student.riskLevel)}>
                        {student.riskLevel.toUpperCase()} RISK
                      </Badge>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No students found matching your search criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}