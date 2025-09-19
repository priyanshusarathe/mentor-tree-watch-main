// AI-powered dropout prediction service
// Based on the machine learning model from student-success-analysis.ipynb

export interface StudentData {
    // Academic Performance
    attendance: number;
    avgTestScore: number;
    attempts: number;
    
    // Demographics
    age: number;
    gender: number; // 0 = Female, 1 = Male
    
    // Financial Status
    feeStatus: 'Paid' | 'Pending' | 'Overdue';
    scholarshipHolder: boolean;
    
    // Academic History
    previousQualification: number;
    admissionGrade: number;
    
    // Family Background
    parentsEducationLevel: number;
    
    // Economic Context
    unemploymentRate: number;
    inflationRate: number;
    gdp: number;
  }
  
  export interface PredictionResult {
    dropoutProbability: number;
    riskLevel: 'low' | 'medium' | 'high';
    confidence: number;
    keyFactors: string[];
    recommendations: string[];
  }
  
  // Simplified model weights based on the notebook analysis
  const MODEL_WEIGHTS = {
    // Academic Performance (highest importance)
    overallApprovalRate: 0.1098,
    secondSemApprovalRate: 0.1048,
    secondSemApproved: 0.1032,
    firstSemApprovalRate: 0.0969,
    secondSemGrade: 0.0567,
    
    // Financial factors
    scholarshipImpact: 0.045,
    feeStatusImpact: 0.038,
    
    // Demographics
    ageImpact: 0.032,
    genderImpact: 0.028,
    
    // Family background
    parentsEducationImpact: 0.025,
    
    // Economic context
    economicContextImpact: 0.020,
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
      // Calculate key performance indicators
      const overallApprovalRate = this.calculateOverallApprovalRate(studentData);
      const firstSemApprovalRate = this.calculateFirstSemApprovalRate(studentData);
      const secondSemApprovalRate = this.calculateSecondSemApprovalRate(studentData);
      
      // Calculate financial stability score
      const financialStability = this.calculateFinancialStability(studentData);
      
      // Calculate economic context
      const economicContext = this.calculateEconomicContext(studentData);
      
      // Calculate family support score
      const familySupport = this.calculateFamilySupport(studentData);
      
      // Calculate demographic risk
      const demographicRisk = this.calculateDemographicRisk(studentData);
      
      // Calculate academic performance score
      const academicPerformance = this.calculateAcademicPerformance(studentData);
      
      // Calculate weighted dropout probability
      const dropoutProbability = this.calculateWeightedProbability({
        overallApprovalRate,
        firstSemApprovalRate,
        secondSemApprovalRate,
        financialStability,
        economicContext,
        familySupport,
        demographicRisk,
        academicPerformance,
      });
      
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
    
    private static calculateOverallApprovalRate(studentData: StudentData): number {
      // Simulate approval rate based on test scores and attendance
      const baseRate = (studentData.avgTestScore / 100) * (studentData.attendance / 100);
      return Math.max(0, Math.min(1, baseRate));
    }
    
    private static calculateFirstSemApprovalRate(studentData: StudentData): number {
      // First semester performance indicator
      const attendanceWeight = 0.3;
      const scoreWeight = 0.7;
      return (studentData.attendance * attendanceWeight + studentData.avgTestScore * scoreWeight) / 100;
    }
    
    private static calculateSecondSemApprovalRate(studentData: StudentData): number {
      // Second semester performance (simulated based on current performance)
      const performanceTrend = this.calculatePerformanceTrend(studentData);
      return Math.max(0, Math.min(1, this.calculateFirstSemApprovalRate(studentData) + performanceTrend));
    }
    
    private static calculatePerformanceTrend(studentData: StudentData): number {
      // Simulate performance trend based on attempts and current scores
      const attemptPenalty = studentData.attempts > 2 ? -0.1 : 0;
      const scoreTrend = studentData.avgTestScore > 80 ? 0.05 : studentData.avgTestScore < 60 ? -0.1 : 0;
      return attemptPenalty + scoreTrend;
    }
    
    private static calculateFinancialStability(studentData: StudentData): number {
      let stability = 0.5; // Base stability
      
      // Fee status impact
      if (studentData.feeStatus === 'Paid') {
        stability += 0.3;
      } else if (studentData.feeStatus === 'Pending') {
        stability -= 0.1;
      } else {
        stability -= 0.3;
      }
      
      // Scholarship impact
      if (studentData.scholarshipHolder) {
        stability += 0.2;
      }
      
      return Math.max(0, Math.min(1, stability));
    }
    
    private static calculateEconomicContext(studentData: StudentData): number {
      // Economic context index (higher is better)
      const economicIndex = studentData.gdp - (studentData.unemploymentRate * studentData.inflationRate / 100);
      return Math.max(0, Math.min(1, (economicIndex + 100) / 200)); // Normalize to 0-1
    }
    
    private static calculateFamilySupport(studentData: StudentData): number {
      // Family education level impact
      const educationLevel = studentData.parentsEducationLevel;
      return Math.max(0, Math.min(1, educationLevel / 10)); // Assuming 0-10 scale
    }
    
    private static calculateDemographicRisk(studentData: StudentData): number {
      let risk = 0.5; // Base risk
      
      // Age impact (older students might have different risk profiles)
      if (studentData.age > 25) {
        risk += 0.1;
      } else if (studentData.age < 20) {
        risk -= 0.05;
      }
      
      // Gender impact (based on model findings)
      if (studentData.gender === 0) { // Female
        risk -= 0.05;
      }
      
      return Math.max(0, Math.min(1, risk));
    }
    
    private static calculateAcademicPerformance(studentData: StudentData): number {
      const attendanceScore = studentData.attendance / 100;
      const testScore = studentData.avgTestScore / 100;
      const attemptPenalty = Math.max(0, 1 - (studentData.attempts - 1) * 0.1);
      
      return (attendanceScore * 0.4 + testScore * 0.6) * attemptPenalty;
    }
    
    private static calculateWeightedProbability(factors: {
      overallApprovalRate: number;
      firstSemApprovalRate: number;
      secondSemApprovalRate: number;
      financialStability: number;
      economicContext: number;
      familySupport: number;
      demographicRisk: number;
      academicPerformance: number;
    }): number {
      // Weighted combination of factors
      const weights = {
        overallApprovalRate: 0.25,
        firstSemApprovalRate: 0.15,
        secondSemApprovalRate: 0.15,
        financialStability: 0.15,
        economicContext: 0.10,
        familySupport: 0.10,
        demographicRisk: 0.05,
        academicPerformance: 0.05,
      };
      
      // Calculate inverse of positive factors (higher values = lower dropout risk)
      const positiveFactors = [
        factors.overallApprovalRate,
        factors.firstSemApprovalRate,
        factors.secondSemApprovalRate,
        factors.financialStability,
        factors.economicContext,
        factors.familySupport,
        factors.academicPerformance,
      ];
      
      const negativeFactors = [factors.demographicRisk];
      
      const positiveScore = positiveFactors.reduce((sum, factor, index) => {
        const weightKeys = Object.keys(weights).filter(key => key !== 'demographicRisk');
        return sum + factor * weights[weightKeys[index] as keyof typeof weights];
      }, 0);
      
      const negativeScore = negativeFactors.reduce((sum, factor) => {
        return sum + factor * weights.demographicRisk;
      }, 0);
      
      // Convert to dropout probability (higher score = lower dropout risk)
      const dropoutProbability = Math.max(0, Math.min(1, 1 - positiveScore + negativeScore));
      
      return dropoutProbability;
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
      // Confidence based on data completeness and consistency
      let confidence = 0.8; // Base confidence
      
      // Check for data consistency
      if (studentData.attendance > 100 || studentData.avgTestScore > 100) {
        confidence -= 0.2;
      }
      
      // Check for missing critical data
      if (studentData.admissionGrade === 0 || studentData.parentsEducationLevel === 0) {
        confidence -= 0.1;
      }
      
      return Math.max(0.3, Math.min(1, confidence));
    }
    
    private static identifyKeyFactors(studentData: StudentData, probability: number): string[] {
      const factors: string[] = [];
      
      // Academic performance factors
      if (studentData.attendance < 70) {
        factors.push('Low attendance rate');
      }
      if (studentData.avgTestScore < 60) {
        factors.push('Poor academic performance');
      }
      if (studentData.attempts > 2) {
        factors.push('Multiple test attempts');
      }
      
      // Financial factors
      if (studentData.feeStatus === 'Overdue') {
        factors.push('Overdue fee payments');
      }
      if (!studentData.scholarshipHolder && studentData.feeStatus !== 'Paid') {
        factors.push('Financial instability');
      }
      
      // Demographic factors
      if (studentData.age > 25) {
        factors.push('Non-traditional student age');
      }
      if (studentData.parentsEducationLevel < 3) {
        factors.push('Limited family educational background');
      }
      
      // Economic factors
      if (studentData.unemploymentRate > 8) {
        factors.push('High unemployment environment');
      }
      
      return factors.slice(0, 5); // Return top 5 factors
    }
    
    private static generateRecommendations(studentData: StudentData, keyFactors: string[]): string[] {
      const recommendations: string[] = [];
      
      // Academic support recommendations
      if (keyFactors.includes('Low attendance rate')) {
        recommendations.push('Implement attendance monitoring and intervention program');
      }
      if (keyFactors.includes('Poor academic performance')) {
        recommendations.push('Provide additional tutoring and academic support');
      }
      if (keyFactors.includes('Multiple test attempts')) {
        recommendations.push('Offer study skills workshops and exam preparation support');
      }
      
      // Financial support recommendations
      if (keyFactors.includes('Overdue fee payments')) {
        recommendations.push('Connect with financial aid office for payment plan options');
      }
      if (keyFactors.includes('Financial instability')) {
        recommendations.push('Explore scholarship and financial aid opportunities');
      }
      
      // Support system recommendations
      if (keyFactors.includes('Limited family educational background')) {
        recommendations.push('Provide first-generation student support services');
      }
      if (keyFactors.includes('Non-traditional student age')) {
        recommendations.push('Connect with adult learner support groups');
      }
      
      // General recommendations based on risk level
      if (studentData.attendance < 80 || studentData.avgTestScore < 70) {
        recommendations.push('Schedule regular check-ins with academic advisor');
      }
      
      return recommendations.slice(0, 4); // Return top 4 recommendations
    }
  }
  
  // Utility function to convert existing student data to prediction format
  export function convertToPredictionData(student: any): StudentData {
    return {
      attendance: student.attendance || 0,
      avgTestScore: student.avgTestScore || 0,
      attempts: student.attempts || 0,
      age: student.age || 20,
      gender: student.gender || 0,
      feeStatus: student.feeStatus || 'Pending',
      scholarshipHolder: student.scholarshipHolder || false,
      previousQualification: student.previousQualification || 5,
      admissionGrade: student.admissionGrade || 100,
      parentsEducationLevel: student.parentsEducationLevel || 5,
      unemploymentRate: student.unemploymentRate || 5.0,
      inflationRate: student.inflationRate || 2.0,
      gdp: student.gdp || 100,
    };
  }