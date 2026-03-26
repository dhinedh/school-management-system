export interface Student {
  id: string;
  studentId: string;
  name: string;
  photo: string;
  grade: string;
  section: string;
  enrollmentDate: string;
  parentName: string;
  contact: string;
  status: 'active' | 'withdrawn' | 'graduated';
  academicHistory: {
    year: string;
    gpa: number;
    attendance: string;
  }[];
}

export const mockStudents: Student[] = [
  {
    id: "1",
    studentId: "STU-2024-001",
    name: "Alex Johnson",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    grade: "Grade 10",
    section: "A",
    enrollmentDate: "2024-08-15",
    parentName: "Robert Johnson",
    contact: "+1 234-567-8901",
    status: "active",
    academicHistory: [
      { year: "2023", gpa: 3.8, attendance: "98%" },
      { year: "2022", gpa: 3.7, attendance: "96%" }
    ]
  },
  {
    id: "2",
    studentId: "STU-2024-002",
    name: "Maya Patel",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
    grade: "Grade 10",
    section: "B",
    enrollmentDate: "2024-08-16",
    parentName: "Sanjay Patel",
    contact: "+1 234-567-8902",
    status: "active",
    academicHistory: [
      { year: "2023", gpa: 4.0, attendance: "100%" }
    ]
  },
  {
    id: "3",
    studentId: "STU-2024-003",
    name: "Chris Evans",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
    grade: "Grade 9",
    section: "A",
    enrollmentDate: "2024-08-20",
    parentName: "Sarah Evans",
    contact: "+1 234-567-8903",
    status: "active",
    academicHistory: []
  },
  {
    id: "4",
    studentId: "STU-2024-004",
    name: "Sofia Rodriguez",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
    grade: "Grade 11",
    section: "C",
    enrollmentDate: "2023-08-10",
    parentName: "Elena Rodriguez",
    contact: "+1 234-567-8904",
    status: "active",
    academicHistory: [
      { year: "2023", gpa: 3.5, attendance: "92%" }
    ]
  }
];
