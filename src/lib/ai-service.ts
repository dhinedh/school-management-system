export interface StudentRisk {
  id: string;
  name: string;
  level: 'high' | 'medium' | 'low';
  factors: string[];
  recommendation: string;
}

export interface TeacherAction {
  id: string;
  command: string;
  action: string;
  status: 'executed' | 'pending';
}

class AIService {
  // Pattern Detection Logic
  analyzeAttendance(history: { date: string; status: 'P' | 'A' }[]) {
    const absences = history.filter(h => h.status === 'A');
    const mondayAbsences = absences.filter(h => new Date(h.date).getDay() === 1);
    
    if (mondayAbsences.length >= 3) {
      return { 
        pattern: "Recurring Monday Absence", 
        insight: "Student frequently misses the first day of the week. Possible motivation issue.",
        risk: 'medium'
      };
    }
    return null;
  }

  analyzePerformance(marks: Record<string, number>) {
    const subjects = Object.entries(marks);
    const weakSubjects = subjects.filter(([, score]) => score < 40).map(([s]) => s);
    const topSubjects = subjects.filter(([, score]) => score > 90).map(([s]) => s);

    return {
      weak: weakSubjects,
      top: topSubjects,
      insight: weakSubjects.length > 0 ? `Critical attention needed in ${weakSubjects.join(', ')}.` : "Consistent performance across all areas."
    };
  }

  // Narrative Generation
  generateComment(studentName: string, performance: any, attendance: any) {
    let comment = `${studentName} shows ${performance.weak.length > 0 ? 'mixed' : 'excellent'} academic results. `;
    if (performance.weak.length > 0) {
      comment += `Focus is required in ${performance.weak.join(' and ')} to improve the overall grade. `;
    } else {
      comment += `They have demonstrated a strong command of the curriculum, especially in ${performance.top.join(', ')}. `;
    }
    
    if (attendance && attendance.risk !== 'low') {
      comment += `However, erratic attendance patterns are affecting classroom engagement.`;
    } else {
      comment += `Regular attendance supports their steady progress.`;
    }
    
    return comment;
  }

  // Fee Prediction
  predictPaymentDelay(history: { month: string; daysLate: number }[]) {
    const avgDelay = history.reduce((acc, curr) => acc + curr.daysLate, 0) / history.length;
    return avgDelay > 5 ? 'High probability of late payment' : 'Normal profile';
  }

  // Voice Command Simulation
  processVoiceCommand(command: string): TeacherAction {
    const c = command.toLowerCase();
    if (c.includes('attendance') && c.includes('10a')) {
      return { id: `V-${Date.now()}`, command, action: "Marking Grade 10A Attendance", status: 'executed' };
    }
    if (c.includes('report') && c.includes('publish')) {
      return { id: `V-${Date.now()}`, command, action: "Publishing Term Results", status: 'executed' };
    }
    return { id: `V-${Date.now()}`, command, action: "Unknown Command", status: 'pending' };
  }
}

export const ai = new AIService();
