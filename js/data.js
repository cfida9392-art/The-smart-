/* THE SMART MODERN PUBLIC SCHOOL - Data Store & Auth System */

const SchoolDB = {
  // Initialize default data if not present
  init() {
    if (!localStorage.getItem('smps_initialized')) {
      this.seedData();
      localStorage.setItem('smps_initialized', 'true');
    }
  },

  seedData() {
    // Admin user
    const admin = {
      id: 'admin001',
      username: 'admin',
      email: 'admin@smartmodern.edu',
      password: this.hash('admin123'),
      role: 'admin',
      name: 'System Administrator'
    };

    // Teachers
    const teachers = [
      {
        id: 'TCH001',
        username: 'teacher1',
        password: this.hash('teacher123'),
        role: 'teacher',
        name: 'Dr. Sarah Williams',
        email: 'sarah.w@smartmodern.edu',
        subject: 'Mathematics',
        qualification: 'Ph.D. Mathematics',
        experience: '12 years',
        phone: '+1 555-0101',
        classes: ['Class 10-A', 'Class 9-B'],
        photo: '👩‍🏫'
      },
      {
        id: 'TCH002',
        username: 'teacher2',
        password: this.hash('teacher123'),
        role: 'teacher',
        name: 'Mr. James Anderson',
        email: 'james.a@smartmodern.edu',
        subject: 'Physics',
        qualification: 'M.Sc. Physics',
        experience: '8 years',
        phone: '+1 555-0102',
        classes: ['Class 11-A', 'Class 12-A'],
        photo: '👨‍🏫'
      },
      {
        id: 'TCH003',
        username: 'teacher3',
        password: this.hash('teacher123'),
        role: 'teacher',
        name: 'Ms. Emily Chen',
        email: 'emily.c@smartmodern.edu',
        subject: 'English Literature',
        qualification: 'M.A. English',
        experience: '10 years',
        phone: '+1 555-0103',
        classes: ['Class 8-A', 'Class 9-A'],
        photo: '👩‍🏫'
      },
      {
        id: 'TCH004',
        username: 'teacher4',
        password: this.hash('teacher123'),
        role: 'teacher',
        name: 'Mr. Robert Kumar',
        email: 'robert.k@smartmodern.edu',
        subject: 'Computer Science',
        qualification: 'M.Tech CSE',
        experience: '7 years',
        phone: '+1 555-0104',
        classes: ['Class 10-B', 'Class 11-B'],
        photo: '👨‍💻'
      },
      {
        id: 'TCH005',
        username: 'teacher5',
        password: this.hash('teacher123'),
        role: 'teacher',
        name: 'Mrs. Priya Sharma',
        email: 'priya.s@smartmodern.edu',
        subject: 'Biology',
        qualification: 'M.Sc. Biology',
        experience: '9 years',
        phone: '+1 555-0105',
        classes: ['Class 9-A', 'Class 10-A'],
        photo: '👩‍🔬'
      },
      {
        id: 'TCH006',
        username: 'teacher6',
        password: this.hash('teacher123'),
        role: 'teacher',
        name: 'Mr. David Lee',
        email: 'david.l@smartmodern.edu',
        subject: 'History',
        qualification: 'M.A. History',
        experience: '11 years',
        phone: '+1 555-0106',
        classes: ['Class 8-B', 'Class 9-B'],
        photo: '👨‍🏫'
      }
    ];

    // Students
    const students = [
      {
        id: 'STU001',
        username: 'student1',
        password: this.hash('student123'),
        role: 'student',
        name: 'Aarav Patel',
        email: 'aarav.p@student.smartmodern.edu',
        class: 'Class 10-A',
        section: 'A',
        rollNo: '10A01',
        dob: '2010-05-15',
        parentName: 'Rajesh Patel',
        phone: '+1 555-1001',
        address: '123 Green Avenue, City',
        attendance: 92,
        feesStatus: 'Paid',
        photo: '👨‍🎓'
      },
      {
        id: 'STU002',
        username: 'student2',
        password: this.hash('student123'),
        role: 'student',
        name: 'Sophia Martinez',
        email: 'sophia.m@student.smartmodern.edu',
        class: 'Class 10-A',
        section: 'A',
        rollNo: '10A02',
        dob: '2010-08-22',
        parentName: 'Carlos Martinez',
        phone: '+1 555-1002',
        address: '456 Oak Street, City',
        attendance: 88,
        feesStatus: 'Paid',
        photo: '👩‍🎓'
      },
      {
        id: 'STU003',
        username: 'student3',
        password: this.hash('student123'),
        role: 'student',
        name: 'Liam Thompson',
        email: 'liam.t@student.smartmodern.edu',
        class: 'Class 9-B',
        section: 'B',
        rollNo: '9B05',
        dob: '2011-03-10',
        parentName: 'John Thompson',
        phone: '+1 555-1003',
        address: '789 Pine Road, City',
        attendance: 95,
        feesStatus: 'Pending',
        photo: '👨‍🎓'
      },
      {
        id: 'STU004',
        username: 'student4',
        password: this.hash('student123'),
        role: 'student',
        name: 'Olivia Brown',
        email: 'olivia.b@student.smartmodern.edu',
        class: 'Class 11-A',
        section: 'A',
        rollNo: '11A03',
        dob: '2009-11-05',
        parentName: 'Michael Brown',
        phone: '+1 555-1004',
        address: '321 Maple Lane, City',
        attendance: 90,
        feesStatus: 'Paid',
        photo: '👩‍🎓'
      },
      {
        id: 'STU005',
        username: 'student5',
        password: this.hash('student123'),
        role: 'student',
        name: 'Noah Wilson',
        email: 'noah.w@student.smartmodern.edu',
        class: 'Class 8-A',
        section: 'A',
        rollNo: '8A07',
        dob: '2012-01-18',
        parentName: 'David Wilson',
        phone: '+1 555-1005',
        address: '654 Cedar Court, City',
        attendance: 85,
        feesStatus: 'Paid',
        photo: '👨‍🎓'
      },
      {
        id: 'STU006',
        username: 'student6',
        password: this.hash('student123'),
        role: 'student',
        name: 'Emma Davis',
        email: 'emma.d@student.smartmodern.edu',
        class: 'Class 12-A',
        section: 'A',
        rollNo: '12A01',
        dob: '2008-07-30',
        parentName: 'Robert Davis',
        phone: '+1 555-1006',
        address: '987 Birch Blvd, City',
        attendance: 97,
        feesStatus: 'Paid',
        photo: '👩‍🎓'
      }
    ];

    // Classes
    const classes = [
      { id: 'CLS001', name: 'Class 8-A', section: 'A', teacher: 'Ms. Emily Chen', students: 32, room: '101' },
      { id: 'CLS002', name: 'Class 8-B', section: 'B', teacher: 'Mr. David Lee', students: 30, room: '102' },
      { id: 'CLS003', name: 'Class 9-A', section: 'A', teacher: 'Ms. Emily Chen', students: 35, room: '201' },
      { id: 'CLS004', name: 'Class 9-B', section: 'B', teacher: 'Dr. Sarah Williams', students: 33, room: '202' },
      { id: 'CLS005', name: 'Class 10-A', section: 'A', teacher: 'Dr. Sarah Williams', students: 36, room: '301' },
      { id: 'CLS006', name: 'Class 10-B', section: 'B', teacher: 'Mr. Robert Kumar', students: 34, room: '302' },
      { id: 'CLS007', name: 'Class 11-A', section: 'A', teacher: 'Mr. James Anderson', students: 28, room: '401' },
      { id: 'CLS008', name: 'Class 11-B', section: 'B', teacher: 'Mr. Robert Kumar', students: 27, room: '402' },
      { id: 'CLS009', name: 'Class 12-A', section: 'A', teacher: 'Mr. James Anderson', students: 25, room: '501' }
    ];

    // Notices
    const notices = [
      {
        id: 'NTC001',
        title: 'Annual Sports Day 2026',
        content: 'The Annual Sports Day will be held on 15th March 2026. All students are required to participate. Registration starts from 1st March.',
        date: '2026-02-20',
        author: 'Admin',
        priority: 'high'
      },
      {
        id: 'NTC002',
        title: 'Parent-Teacher Meeting',
        content: 'PTM for Classes 9 to 12 will be conducted on 10th March 2026 from 9:00 AM to 1:00 PM. Parents are requested to attend.',
        date: '2026-02-18',
        author: 'Admin',
        priority: 'medium'
      },
      {
        id: 'NTC003',
        title: 'Science Exhibition',
        content: 'Inter-school Science Exhibition will be organized on 25th February 2026. Interested students should submit their project proposals by 15th February.',
        date: '2026-02-10',
        author: 'Admin',
        priority: 'medium'
      },
      {
        id: 'NTC004',
        title: 'Holiday Notice - Republic Day',
        content: 'The school will remain closed on 26th January 2026 on account of Republic Day. Regular classes will resume on 27th January.',
        date: '2026-01-20',
        author: 'Admin',
        priority: 'low'
      }
    ];

    // Events
    const events = [
      {
        id: 'EVT001',
        title: 'Annual Day Celebration',
        description: 'Grand Annual Day with cultural performances, awards ceremony and guest speakers.',
        date: '2026-04-12',
        time: '10:00 AM',
        venue: 'School Auditorium'
      },
      {
        id: 'EVT002',
        title: 'Science Fair 2026',
        description: 'Students showcase innovative science projects and experiments.',
        date: '2026-03-25',
        time: '9:00 AM',
        venue: 'Science Block'
      },
      {
        id: 'EVT003',
        title: 'Inter-School Debate Competition',
        description: 'Debate competition on contemporary topics. Open for Classes 9-12.',
        date: '2026-03-08',
        time: '11:00 AM',
        venue: 'Conference Hall'
      },
      {
        id: 'EVT004',
        title: 'Career Counseling Session',
        description: 'Guidance session for senior students on career choices and higher education.',
        date: '2026-02-28',
        time: '2:00 PM',
        venue: 'Library Hall'
      }
    ];

    // Homework
    const homework = [
      { id: 'HW001', class: 'Class 10-A', subject: 'Mathematics', title: 'Chapter 5 - Quadratic Equations', dueDate: '2026-02-15', assignedBy: 'Dr. Sarah Williams' },
      { id: 'HW002', class: 'Class 10-A', subject: 'Physics', title: 'Laws of Motion - Numerical Problems', dueDate: '2026-02-14', assignedBy: 'Mr. James Anderson' },
      { id: 'HW003', class: 'Class 9-B', subject: 'English', title: 'Essay Writing - Climate Change', dueDate: '2026-02-16', assignedBy: 'Ms. Emily Chen' },
      { id: 'HW004', class: 'Class 11-A', subject: 'Computer Science', title: 'Python Project - Student Management', dueDate: '2026-02-20', assignedBy: 'Mr. Robert Kumar' }
    ];

    // Results
    const results = [
      { studentId: 'STU001', exam: 'Mid-Term 2025', subjects: { Mathematics: 92, Physics: 88, Chemistry: 85, English: 90, Computer: 95 }, percentage: 90 },
      { studentId: 'STU002', exam: 'Mid-Term 2025', subjects: { Mathematics: 85, Physics: 82, Chemistry: 88, English: 94, Computer: 90 }, percentage: 87.8 },
      { studentId: 'STU003', exam: 'Mid-Term 2025', subjects: { Mathematics: 78, Science: 82, English: 88, History: 85, Geography: 80 }, percentage: 82.6 },
      { studentId: 'STU004', exam: 'Mid-Term 2025', subjects: { Mathematics: 90, Physics: 92, Chemistry: 88, English: 85, Computer: 96 }, percentage: 90.2 },
      { studentId: 'STU005', exam: 'Mid-Term 2025', subjects: { Mathematics: 75, Science: 80, English: 82, History: 78, Art: 88 }, percentage: 80.6 },
      { studentId: 'STU006', exam: 'Mid-Term 2025', subjects: { Mathematics: 95, Physics: 94, Chemistry: 92, English: 90, Computer: 98 }, percentage: 93.8 }
    ];

    // Admission applications
    const admissions = [
      { id: 'ADM001', name: 'Rohan Mehta', classApplied: 'Class 8', parentName: 'Suresh Mehta', phone: '+1 555-2001', email: 'suresh.m@email.com', status: 'Pending', date: '2026-02-01' },
      { id: 'ADM002', name: 'Ananya Singh', classApplied: 'Class 9', parentName: 'Vikram Singh', phone: '+1 555-2002', email: 'vikram.s@email.com', status: 'Under Review', date: '2026-01-28' },
      { id: 'ADM003', name: 'Kabir Khan', classApplied: 'Class 6', parentName: 'Imran Khan', phone: '+1 555-2003', email: 'imran.k@email.com', status: 'Approved', date: '2026-01-20' }
    ];

    // Gallery
    const gallery = [
      { id: 'GAL001', title: 'Annual Day 2025', category: 'Events', emoji: '🎭' },
      { id: 'GAL002', title: 'Science Lab', category: 'Campus', emoji: '🔬' },
      { id: 'GAL003', title: 'Sports Day', category: 'Sports', emoji: '🏆' },
      { id: 'GAL004', title: 'Library', category: 'Campus', emoji: '📚' },
      { id: 'GAL005', title: 'Classroom Session', category: 'Academics', emoji: '📖' },
      { id: 'GAL006', title: 'Cultural Fest', category: 'Events', emoji: '🎨' },
      { id: 'GAL007', title: 'Smart Classroom', category: 'Campus', emoji: '💻' },
      { id: 'GAL008', title: 'Graduation Ceremony', category: 'Events', emoji: '🎓' }
    ];

    // Timetable sample
    const timetable = {
      'Class 10-A': [
        { day: 'Monday', periods: ['Mathematics', 'Physics', 'English', 'Break', 'Chemistry', 'Computer', 'PT'] },
        { day: 'Tuesday', periods: ['Physics', 'Mathematics', 'Chemistry', 'Break', 'English', 'Biology', 'Library'] },
        { day: 'Wednesday', periods: ['English', 'Chemistry', 'Mathematics', 'Break', 'Physics', 'Computer', 'Art'] },
        { day: 'Thursday', periods: ['Mathematics', 'English', 'Physics', 'Break', 'Chemistry', 'History', 'PT'] },
        { day: 'Friday', periods: ['Chemistry', 'Mathematics', 'Computer', 'Break', 'English', 'Physics', 'Activity'] },
        { day: 'Saturday', periods: ['Mathematics', 'English', 'Science Lab', 'Break', 'Sports', '-', '-'] }
      ]
    };

    // School info
    const schoolInfo = {
      name: 'THE SMART MODERN PUBLIC SCHOOL',
      tagline: 'Learn Today, Lead Tomorrow',
      address: '123 Education Boulevard, Knowledge City, State 560001',
      phone: '+1 (555) 123-4567',
      email: 'info@smartmodern.edu',
      website: 'www.smartmodern.edu',
      established: '1998',
      principal: 'Dr. Margaret Thompson',
      principalMessage: 'Welcome to THE SMART MODERN PUBLIC SCHOOL. Our mission is to nurture young minds with knowledge, values, and skills that prepare them to lead tomorrow. We believe every child has unique potential, and our dedicated faculty works tirelessly to unlock that potential through innovative teaching, modern infrastructure, and a caring environment. Together, let us shape the leaders of the future.',
      vision: 'To be a center of excellence in education that inspires lifelong learning and responsible global citizenship.',
      mission: 'To provide holistic education that develops intellectual, emotional, social, and physical capabilities of every student.'
    };

    localStorage.setItem('smps_admin', JSON.stringify(admin));
    localStorage.setItem('smps_teachers', JSON.stringify(teachers));
    localStorage.setItem('smps_students', JSON.stringify(students));
    localStorage.setItem('smps_classes', JSON.stringify(classes));
    localStorage.setItem('smps_notices', JSON.stringify(notices));
    localStorage.setItem('smps_events', JSON.stringify(events));
    localStorage.setItem('smps_homework', JSON.stringify(homework));
    localStorage.setItem('smps_results', JSON.stringify(results));
    localStorage.setItem('smps_admissions', JSON.stringify(admissions));
    localStorage.setItem('smps_gallery', JSON.stringify(gallery));
    localStorage.setItem('smps_timetable', JSON.stringify(timetable));
    localStorage.setItem('smps_schoolInfo', JSON.stringify(schoolInfo));
  },

  // Simple hash for demo (not production secure, but functional for this purpose)
  hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return 'h_' + Math.abs(hash).toString(16);
  },

  // Auth
  login(username, password, role) {
    const hashed = this.hash(password);
    let user = null;

    if (role === 'admin') {
      const admin = JSON.parse(localStorage.getItem('smps_admin') || '{}');
      if ((admin.username === username || admin.email === username) && admin.password === hashed) {
        user = { ...admin };
        delete user.password;
      }
    } else if (role === 'teacher') {
      const teachers = JSON.parse(localStorage.getItem('smps_teachers') || '[]');
      user = teachers.find(t => (t.username === username || t.id === username) && t.password === hashed);
      if (user) {
        user = { ...user };
        delete user.password;
      }
    } else if (role === 'student') {
      const students = JSON.parse(localStorage.getItem('smps_students') || '[]');
      user = students.find(s => (s.username === username || s.id === username) && s.password === hashed);
      if (user) {
        user = { ...user };
        delete user.password;
      }
    }

    if (user) {
      sessionStorage.setItem('smps_session', JSON.stringify({ ...user, loginTime: Date.now() }));
      return { success: true, user };
    }
    return { success: false, message: 'Invalid credentials. Please try again.' };
  },

  logout() {
    sessionStorage.removeItem('smps_session');
  },

  getSession() {
    const session = sessionStorage.getItem('smps_session');
    return session ? JSON.parse(session) : null;
  },

  requireAuth(role) {
    const session = this.getSession();
    if (!session || (role && session.role !== role)) {
      return false;
    }
    return true;
  },

  // Data getters/setters
  getTeachers() {
    return JSON.parse(localStorage.getItem('smps_teachers') || '[]');
  },
  saveTeachers(data) {
    localStorage.setItem('smps_teachers', JSON.stringify(data));
  },

  getStudents() {
    return JSON.parse(localStorage.getItem('smps_students') || '[]');
  },
  saveStudents(data) {
    localStorage.setItem('smps_students', JSON.stringify(data));
  },

  getClasses() {
    return JSON.parse(localStorage.getItem('smps_classes') || '[]');
  },
  saveClasses(data) {
    localStorage.setItem('smps_classes', JSON.stringify(data));
  },

  getNotices() {
    return JSON.parse(localStorage.getItem('smps_notices') || '[]');
  },
  saveNotices(data) {
    localStorage.setItem('smps_notices', JSON.stringify(data));
  },

  getEvents() {
    return JSON.parse(localStorage.getItem('smps_events') || '[]');
  },
  saveEvents(data) {
    localStorage.setItem('smps_events', JSON.stringify(data));
  },

  getHomework() {
    return JSON.parse(localStorage.getItem('smps_homework') || '[]');
  },
  saveHomework(data) {
    localStorage.setItem('smps_homework', JSON.stringify(data));
  },

  getResults() {
    return JSON.parse(localStorage.getItem('smps_results') || '[]');
  },

  getAdmissions() {
    return JSON.parse(localStorage.getItem('smps_admissions') || '[]');
  },
  saveAdmissions(data) {
    localStorage.setItem('smps_admissions', JSON.stringify(data));
  },

  getGallery() {
    return JSON.parse(localStorage.getItem('smps_gallery') || '[]');
  },
  saveGallery(data) {
    localStorage.setItem('smps_gallery', JSON.stringify(data));
  },

  getSchoolInfo() {
    return JSON.parse(localStorage.getItem('smps_schoolInfo') || '{}');
  },
  saveSchoolInfo(data) {
    localStorage.setItem('smps_schoolInfo', JSON.stringify(data));
  },

  getTimetable() {
    return JSON.parse(localStorage.getItem('smps_timetable') || '{}');
  },

  // CRUD helpers
  generateId(prefix) {
    return prefix + Date.now().toString(36).toUpperCase().slice(-6);
  },

  changePassword(role, userId, oldPass, newPass) {
    const hashedOld = this.hash(oldPass);
    const hashedNew = this.hash(newPass);

    if (role === 'admin') {
      const admin = JSON.parse(localStorage.getItem('smps_admin'));
      if (admin.password !== hashedOld) return { success: false, message: 'Current password is incorrect.' };
      admin.password = hashedNew;
      localStorage.setItem('smps_admin', JSON.stringify(admin));
      return { success: true, message: 'Password updated successfully.' };
    }
    // Similar for others if needed
    return { success: false, message: 'Not implemented for this role.' };
  }
};

// Initialize on load
SchoolDB.init();
