import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, AlertTriangle, AlertCircle } from "lucide-react";

interface RiskOverviewCardsProps {
  totalStudents: number;
  lowRisk: number;
  mediumRisk: number;
  highRisk: number;
}

export function RiskOverviewCards({ totalStudents, lowRisk, mediumRisk, highRisk }: RiskOverviewCardsProps) {
  const cards = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: Users,
      gradient: "bg-gradient-primary",
      textColor: "text-primary-foreground",
    },
    {
      title: "Low Risk",
      value: lowRisk,
      icon: TrendingUp,
      gradient: "bg-gradient-risk-safe",
      textColor: "text-risk-safe-foreground",
    },
    {
      title: "Medium Risk",
      value: mediumRisk,
      icon: AlertTriangle,
      gradient: "bg-gradient-risk-warning",
      textColor: "text-risk-warning-foreground",
    },
    {
      title: "High Risk",
      value: highRisk,
      icon: AlertCircle,
      gradient: "bg-gradient-risk-critical",
      textColor: "text-risk-critical-foreground",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardHeader className={`${card.gradient} ${card.textColor} pb-3`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                  <Icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-3xl font-bold text-foreground">{card.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {card.title === "Total Students" 
                    ? "Enrolled students" 
                    : `${((card.value / totalStudents) * 100).toFixed(1)}% of total`
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}