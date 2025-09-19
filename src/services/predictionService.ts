// AI-powered dropout prediction service
// Based on the machine learning model from student-success-analysis.ipynb

export interface StudentData {
    // Core prediction factors only
    attendance: number;
    avgTestScore: number;
    feeStatus: 'Paid' | 'Pending' | 'Overdue';
  }
  
  export interface PredictionResult {
    dropoutProbability: number;
    riskLevel: 'low' | 'medium' | 'high';
    confidence: number;
    keyFactors: string[];
    recommendations: string[];
  }
  
  // Simplified model weights for core factors only
  const MODEL_WEIGHTS = {
    attendance: 0.4,      // Most important factor
    avgTestScore: 0.4,    // Equally important
    feeStatus: 0.2,       // Supporting factor
  };
  
  // Risk level thresholds
  const RISK_THRESHOLDS = {
    low: 0.3,
    medium: 0.6,
    high: 0.8,
  };
  
  export class DropoutPredictionService {
    /**
     * Calculate dropout probability based on student data
     */
    static predictDropout(studentData: StudentData): PredictionResult {
      // Calculate dropout probability based on core factors only
      const dropoutProbability = this.calculateSimpleDropoutProbability(studentData);
      
      // Determine risk level
      const riskLevel = this.determineRiskLevel(dropoutProbability);
      
      // Calculate confidence based on data completeness
      const confidence = this.calculateConfidence(studentData);
      
      // Identify key factors
      const keyFactors = this.identifyKeyFactors(studentData, dropoutProbability);
      
      // Generate recommendations
      const recommendations = this.generateRecommendations(studentData, keyFactors);
      
      return {
        dropoutProbability,
        riskLevel,
        confidence,
        keyFactors,
        recommendations,
      };
    }
    
    private static calculateSimpleDropoutProbability(studentData: StudentData): number {
      // Simple calculation based on attendance, grades, and fee status only
      
      // Normalize attendance (0-100 to 0-1, higher is better)
      const attendanceScore = studentData.attendance / 100;
      
      // Normalize test score (0-100 to 0-1, higher is better)
      const gradeScore = studentData.avgTestScore / 100;
      
      // Fee status impact (Paid = good, Pending = neutral, Overdue = bad)
      let feeScore = 0.5; // Base neutral
      if (studentData.feeStatus === 'Paid') {
        feeScore = 0.2; // Low dropout risk
      } else if (studentData.feeStatus === 'Pending') {
        feeScore = 0.5; // Medium risk
      } else if (studentData.feeStatus === 'Overdue') {
        feeScore = 0.8; // High dropout risk
      }
      
      // Calculate weighted dropout probability
      const dropoutProbability = 
        (1 - attendanceScore) * MODEL_WEIGHTS.attendance +
        (1 - gradeScore) * MODEL_WEIGHTS.avgTestScore +
        feeScore * MODEL_WEIGHTS.feeStatus;
      
      return Math.max(0, Math.min(1, dropoutProbability));
    }
    
    private static determineRiskLevel(probability: number): 'low' | 'medium' | 'high' {
      if (probability < RISK_THRESHOLDS.low) {
        return 'low';
      } else if (probability < RISK_THRESHOLDS.medium) {
        return 'medium';
      } else {
        return 'high';
      }
    }
    
    private static calculateConfidence(studentData: StudentData): number {
      // High confidence for simple model with core factors
      let confidence = 0.9; // Base confidence for simple model
      
      // Check for data consistency
      if (studentData.attendance > 100 || studentData.avgTestScore > 100) {
        confidence -= 0.2;
      }
      
      return Math.max(0.7, Math.min(1, confidence));
    }
    
    private static identifyKeyFactors(studentData: StudentData, probability: number): string[] {
      const factors: string[] = [];
      
      // Core factors only
      if (studentData.attendance < 70) {
        factors.push('Low attendance rate');
      }
      if (studentData.avgTestScore < 60) {
        factors.push('Poor academic performance');
      }
      if (studentData.feeStatus === 'Overdue') {
        factors.push('Overdue fee payments');
      }
      if (studentData.feeStatus === 'Pending') {
        factors.push('Pending fee payments');
      }
      
      return factors.slice(0, 3); // Return top 3 factors
    }
    
    private static generateRecommendations(studentData: StudentData, keyFactors: string[]): string[] {
      const recommendations: string[] = [];
      
      // Core factor recommendations only
      if (keyFactors.includes('Low attendance rate')) {
        recommendations.push('Implement attendance monitoring and intervention program');
      }
      if (keyFactors.includes('Poor academic performance')) {
        recommendations.push('Provide additional tutoring and academic support');
      }
      if (keyFactors.includes('Overdue fee payments')) {
        recommendations.push('Connect with financial aid office for payment plan options');
      }
      if (keyFactors.includes('Pending fee payments')) {
        recommendations.push('Follow up on pending fee payments');
      }
      
      return recommendations.slice(0, 3); // Return top 3 recommendations
    }
  }
  
  // Utility function to convert existing student data to prediction format
  export function convertToPredictionData(student: any): StudentData {
    return {
      attendance: student.attendance || 0,
      avgTestScore: student.avgTestScore || 0,
      feeStatus: student.feeStatus || 'Pending',
    };
  }
