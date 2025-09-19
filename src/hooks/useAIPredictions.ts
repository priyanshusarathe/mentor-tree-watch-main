import { useMemo } from 'react';
import { DropoutPredictionService, convertToPredictionData, StudentData } from '@/services/predictionService';
import { Student } from '@/components/dashboard/StudentTable';

export function useAIPredictions(students: Student[]) {
  return useMemo(() => {
    return students.map(student => {
      // Convert student data to prediction format
      const predictionData: StudentData = convertToPredictionData(student);
      
      // Generate AI prediction
      const prediction = DropoutPredictionService.predictDropout(predictionData);
      
      // Return student with AI prediction data
      return {
        ...student,
        aiPrediction: {
          dropoutProbability: prediction.dropoutProbability,
          confidence: prediction.confidence,
          keyFactors: prediction.keyFactors,
          recommendations: prediction.recommendations,
        },
        // Update risk level based on AI prediction
        riskLevel: prediction.riskLevel,
      };
    });
  }, [students]);
}

