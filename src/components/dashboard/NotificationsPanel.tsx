import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Download, AlertTriangle, TrendingDown, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  type: "alert" | "warning" | "info";
  title: string;
  description: string;
  timestamp: string;
  priority: "high" | "medium" | "low";
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "alert",
    title: "High Risk Alert",
    description: "2 students moved to High Risk category this week",
    timestamp: "2 hours ago",
    priority: "high"
  },
  {
    id: "2",
    type: "warning", 
    title: "Attendance Drop",
    description: "5 students showing declining attendance patterns",
    timestamp: "4 hours ago",
    priority: "medium"
  },
  {
    id: "3",
    type: "info",
    title: "Weekly Report Ready",
    description: "Student performance report for Week 12 is available",
    timestamp: "1 day ago",
    priority: "low"
  },
  {
    id: "4",
    type: "warning",
    title: "Test Score Alert",
    description: "3 students scored below 50% in recent assessments",
    timestamp: "2 days ago",
    priority: "medium"
  }
];

export function NotificationsPanel() {
  const handleExportReport = (format: "excel" | "pdf") => {
    toast({
      title: `Exporting ${format.toUpperCase()} Report`,
      description: `Student risk assessment report will be downloaded shortly.`,
    });
    // Mock export functionality
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Report downloaded successfully as ${format.toUpperCase()}.`,
      });
    }, 2000);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-risk-critical" />;
      case "warning":
        return <TrendingDown className="h-4 w-4 text-risk-warning" />;
      default:
        return <Calendar className="h-4 w-4 text-primary" />;
    }
  };

  const getNotificationBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-risk-critical text-risk-critical-foreground">High</Badge>;
      case "medium":
        return <Badge className="bg-risk-warning text-risk-warning-foreground">Medium</Badge>;
      default:
        return <Badge variant="outline">Low</Badge>;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Notifications List */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <CardTitle>Recent Notifications</CardTitle>
                </div>
                <Badge variant="outline" className="bg-primary-light text-primary">
                  {mockNotifications.length} New
                </Badge>
              </div>
              <CardDescription>
                Latest alerts and updates on student risk levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockNotifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-card-hover transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-foreground">
                          {notification.title}
                        </h4>
                        {getNotificationBadge(notification.priority)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Export Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              <CardTitle>Export Reports</CardTitle>
            </div>
            <CardDescription>
              Generate and download student risk assessment reports
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button
                onClick={() => handleExportReport("excel")}
                className="w-full bg-gradient-risk-safe hover:opacity-90 transition-opacity"
                variant="default"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Excel Report
              </Button>
              <Button
                onClick={() => handleExportReport("pdf")}
                className="w-full bg-gradient-risk-warning hover:opacity-90 transition-opacity"
                variant="default"
              >
                <Download className="h-4 w-4 mr-2" />
                Export PDF Report
              </Button>
            </div>
            
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-medium mb-2">Report Includes:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Student risk assessments</li>
                <li>• Attendance trends</li>
                <li>• Test performance data</li>
                <li>• Risk level changes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}