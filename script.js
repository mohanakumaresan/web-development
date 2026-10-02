/* =========================================================
   STUDENT PORTAL - COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. STUDENT DATA
========================================================= */

const studentData = {
    name: "Mohanapriya K",
    department: "Artificial Intelligence & Data Science",
    year: "3rd Year",
    semester: "5th Semester",
    cgpa: 8.76,
    studentId: "VSB2024",
    college: "VSB College of Engineering Technical Campus",
    email: "mohanapriya@gmail.com",
    phone: "+91 98765 43210"
};


/* =========================================================
   2. SUBJECT DATA
========================================================= */

const subjects = [
    {
        name: "Big Data Analysis",
        teacher: "Mrs. Jeba Ranjani",
        present: 28,
        absent: 2,
        internal: 45,
        external: 46
    },
    {
        name: "Data Warehousing",
        teacher: "Mrs. Aberna Kumari",
        present: 27,
        absent: 3,
        internal: 43,
        external: 44
    },
    {
        name: "Cloud Computing",
        teacher: "Dr. Durgam Ajaykumar",
        present: 29,
        absent: 1,
        internal: 46,
        external: 45
    },
    {
        name: "Distributed Computing",
        teacher: "Dr. Ravi Rajesh",
        present: 26,
        absent: 4,
        internal: 42,
        external: 43
    },
    {
        name: "Deep Learning",
        teacher: "Dr. Kalimuthu",
        present: 25,
        absent: 5,
        internal: 40,
        external: 42
    },
    {
        name: "Data & Information Security",
        teacher: "Mrs. Kiruthika",
        present: 24,
        absent: 6,
        internal: 39,
        external: 40
    }
];


/* =========================================================
   3. ASSIGNMENTS
========================================================= */

const assignments = [
    {
        title: "Big Data Analysis Case Study",
        subject: "Big Data Analysis",
        description:
            "Prepare a case study explaining how big data is used in a real-world application.",
        dueDate: "2026-10-05",
        status: "pending",
        marks: 10
    },
    {
        title: "Data Warehouse Design",
        subject: "Data Warehousing",
        description:
            "Design a simple data warehouse architecture and explain the ETL process.",
        dueDate: "2026-10-03",
        status: "soon",
        marks: 10
    },
    {
        title: "Cloud Service Comparison",
        subject: "Cloud Computing",
        description:
            "Compare AWS, Microsoft Azure and Google Cloud services.",
        dueDate: "2026-10-10",
        status: "upcoming",
        marks: 10
    },
    {
        title: "Distributed System Report",
        subject: "Distributed Computing",
        description:
            "Write a report about distributed systems and their real-world applications.",
        dueDate: "2026-09-28",
        status: "submitted",
        marks: 10
    },
    {
        title: "Neural Network Implementation",
        subject: "Deep Learning",
        description:
            "Implement a basic neural network and explain the working process.",
        dueDate: "2026-10-08",
        status: "pending",
        marks: 15
    },
    {
        title: "Cyber Security Awareness",
        subject: "Data & Information Security",
        description:
            "Prepare a presentation about common cyber security threats.",
        dueDate: "2026-10-12",
        status: "upcoming",
        marks: 10
    },
    {
        title: "Big Data Tools Assignment",
        subject: "Big Data Analysis",
        description:
            "Study and explain any two popular big data processing tools.",
        dueDate: "2026-09-25",
        status: "submitted",
        marks: 10
    }
];


/* =========================================================
   4. EXAMS
========================================================= */

const exams = [
    {
        category: "internal",
        type: "Internal Exam",
        subject: "Big Data Analysis",
        date: "2026-10-08",
        time: "09:00 AM - 12:00 PM",
        venue: "Block A - Hall 101"
    },
    {
        category: "internal",
        type: "Internal Exam",
        subject: "Data Warehousing",
        date: "2026-10-10",
        time: "09:00 AM - 12:00 PM",
        venue: "Block A - Hall 102"
    },
    {
        category: "internal",
        type: "Internal Exam",
        subject: "Cloud Computing",
        date: "2026-10-13",
        time: "09:00 AM - 12:00 PM",
        venue: "Block B - Hall 201"
    },
    {
        category: "internal",
        type: "Internal Exam",
        subject: "Distributed Computing",
        date: "2026-10-15",
        time: "09:00 AM - 12:00 PM",
        venue: "Block B - Hall 202"
    },
    {
        category: "internal",
        type: "Internal Exam",
        subject: "Deep Learning",
        date: "2026-10-17",
        time: "09:00 AM - 12:00 PM",
        venue: "Block A - Hall 103"
    },
    {
        category: "internal",
        type: "Internal Exam",
        subject: "Data & Information Security",
        date: "2026-10-20",
        time: "09:00 AM - 12:00 PM",
        venue: "Block A - Hall 104"
    },

    {
        category: "semester",
        type: "Semester Exam",
        subject: "Big Data Analysis",
        date: "2026-11-20",
        time: "10:00 AM - 01:00 PM",
        venue: "Main Examination Hall"
    },
    {
        category: "semester",
        type: "Semester Exam",
        subject: "Data Warehousing",
        date: "2026-11-22",
        time: "10:00 AM - 01:00 PM",
        venue: "Main Examination Hall"
    },
    {
        category: "semester",
        type: "Semester Exam",
        subject: "Cloud Computing",
        date: "2026-11-24",
        time: "10:00 AM - 01:00 PM",
        venue: "Main Examination Hall"
    },
    {
        category: "semester",
        type: "Semester Exam",
        subject: "Distributed Computing",
        date: "2026-11-26",
        time: "10:00 AM - 01:00 PM",
        venue: "Main Examination Hall"
    },
    {
        category: "semester",
        type: "Semester Exam",
        subject: "Deep Learning",
        date: "2026-11-28",
        time: "10:00 AM - 01:00 PM",
        venue: "Main Examination Hall"
    },
    {
        category: "semester",
        type: "Semester Exam",
        subject: "Data & Information Security",
        date: "2026-11-30",
        time: "10:00 AM - 01:00 PM",
        venue: "Main Examination Hall"
    }
];


/* =========================================================
   5. PREVIOUS RESULTS
========================================================= */

const previousResults = [
    {
        subject: "Big Data Analysis",
        internal: 43,
        external: 42
    },
    {
        subject: "Data Warehousing",
        internal: 41,
        external: 41
    },
    {
        subject: "Cloud Computing",
        internal: 44,
        external: 43
    },
    {
        subject: "Distributed Computing",
        internal: 40,
        external: 42
    },
    {
        subject: "Deep Learning",
        internal: 39,
        external: 40
    },
    {
        subject: "Data & Information Security",
        internal: 38,
        external: 39
    }
];


/* =========================================================
   6. FEES
========================================================= */

const feeData = {
    semester: "5th Semester",
    total: 85000,
    paid: 60000,
    dueDate: "2026-10-15"
};

const feeBreakdown = [
    {
        name: "Tuition Fee",
        amount: 50000
    },
    {
        name: "Examination Fee",
        amount: 10000
    },
    {
        name: "Library Fee",
        amount: 5000
    },
    {
        name: "Laboratory Fee",
        amount: 8000
    },
    {
        name: "Development Fee",
        amount: 7000
    },
    {
        name: "Other Charges",
        amount: 5000
    }
];

const paymentHistory = [
    {
        receipt: "VSB-FEE-2026-001",
        date: "2026-06-15",
        amount: 30000,
        method: "Online Payment",
        status: "Paid"
    },
    {
        receipt: "VSB-FEE-2026-002",
        date: "2026-08-20",
        amount: 30000,
        method: "UPI",
        status: "Paid"
    }
];


/* =========================================================
   7. ANNOUNCEMENTS
========================================================= */

const announcements = [
    {
        icon: "📢",
        title: "Internal Examination Schedule Released",
        text:
            "The internal examination schedule for the 5th semester has been published.",
        date: "October 1, 2026"
    },
    {
        icon: "📚",
        title: "Library Timing Updated",
        text:
            "The central library will remain open until 7:00 PM on working days.",
        date: "September 29, 2026"
    },
    {
        icon: "🎓",
        title: "Placement Training Program",
        text:
            "Placement training sessions for third-year students will begin shortly.",
        date: "September 25, 2026"
    },
    {
        icon: "🏆",
        title: "Technical Symposium",
        text:
            "Students are invited to participate in the upcoming technical symposium.",
        date: "September 22, 2026"
    }
];


/* =========================================================
   8. ACADEMIC CALENDAR
========================================================= */

const calendarEvents = [
    {
        day: "08",
        month: "OCT",
        title: "Internal Examination Begins",
        description: "5th semester internal examinations"
    },
    {
        day: "20",
        month: "OCT",
        title: "Internal Examination Ends",
        description: "Last internal examination"
    },
    {
        day: "02",
        month: "NOV",
        title: "Semester Preparation",
        description: "Semester examination preparation period"
    },
    {
        day: "20",
        month: "NOV",
        title: "Semester Examination Begins",
        description: "End semester examination"
    },
    {
        day: "30",
        month: "NOV",
        title: "Semester Examination Ends",
        description: "Final semester examination"
    },
    {
        day: "05",
        month: "DEC",
        title: "Semester Break",
        description: "Semester vacation begins"
    }
];


/* =========================================================
   9. DOCUMENTS
========================================================= */

const documents = [
    {
        icon: "📄",
        title: "Bonafide Certificate",
        description: "Student bonafide certificate"
    },
    {
        icon: "📜",
        title: "Course Certificate",
        description: "Academic course certificate"
    },
    {
        icon: "🧾",
        title: "Fee Receipt",
        description: "Semester fee receipt"
    },
    {
        icon: "📊",
        title: "Mark Statement",
        description: "Previous semester marks"
    },
    {
        icon: "📋",
        title: "Attendance Report",
        description: "Current attendance report"
    },
    {
        icon: "🎓",
        title: "Student ID Card",
        description: "Digital student identity card"
    }
];


/* =========================================================
   10. TIMETABLE
========================================================= */

const timetable = [
    {
        day: "Monday",
        periods: [
            "Big Data Analysis",
            "Data Warehousing",
            "Cloud Computing",
            "Lunch",
            "Deep Learning",
            "Distributed Computing"
        ]
    },
    {
        day: "Tuesday",
        periods: [
            "Cloud Computing",
            "Big Data Analysis",
            "Deep Learning",
            "Lunch",
            "Data Security",
            "Data Warehousing"
        ]
    },
    {
        day: "Wednesday",
        periods: [
            "Distributed Computing",
            "Deep Learning",
            "Big Data Analysis",
            "Lunch",
            "Cloud Computing",
            "Data Security"
        ]
    },
    {
        day: "Thursday",
        periods: [
            "Data Warehousing",
            "Cloud Computing",
            "Data Security",
            "Lunch",
            "Big Data Analysis",
            "Deep Learning"
        ]
    },
    {
        day: "Friday",
        periods: [
            "Deep Learning",
            "Distributed Computing",
            "Data Warehousing",
            "Lunch",
            "Data Security",
            "Cloud Computing"
        ]
    }
];

const timetableTimes = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "01:00 - 02:00",
    "02:00 - 03:00"
];


/* =========================================================
   11. HELPER FUNCTIONS
========================================================= */

function getAttendance(subject) {

    const total = subject.present + subject.absent;

    return ((subject.present / total) * 100).toFixed(1);
}


function getMark(subject) {

    return subject.internal + subject.external;
}


function getGrade(mark) {

    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B+";
    if (mark >= 60) return "B";
    if (mark >= 50) return "C";

    return "F";
}


function formatCurrency(amount) {

    return "₹" + amount.toLocaleString("en-IN");
}


function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


function getOverallAttendance() {

    let present = 0;
    let total = 0;

    subjects.forEach(subject => {

        present += subject.present;

        total += subject.present + subject.absent;

    });

    return ((present / total) * 100).toFixed(1);
}


function getAverageMarks() {

    let total = 0;

    subjects.forEach(subject => {

        total += getMark(subject);

    });

    return (total / subjects.length).toFixed(2);
}


function getHighestMark() {

    return Math.max(
        ...subjects.map(subject => getMark(subject))
    );
}


/* =========================================================
   12. PAGE LOADING
========================================================= */

const pages = {

    dashboard: renderDashboard,

    profile: renderProfile,

    attendance: renderAttendance,

    marks: renderMarks,

    assignments: renderAssignments,

    exams: renderExams,

    fees: renderFees,

    timetable: renderTimetable,

    subjects: renderSubjects,

    announcements: renderAnnouncements,

    calendar: renderCalendar,

    documents: renderDocuments,

    settings: renderSettings
};


function loadPage(page) {

    const pageContent = document.getElementById("pageContent");

    if (!pageContent) return;

    if (pages[page]) {

        pageContent.innerHTML = pages[page]();

    }

    document.querySelectorAll(".nav-item").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === page
        );

    });

    const titles = {

        dashboard: "Dashboard",
        profile: "My Profile",
        attendance: "Attendance",
        marks: "Marks & Performance",
        assignments: "Assignments & Tasks",
        exams: "Exams & Results",
        fees: "Fees & Payments",
        timetable: "Timetable",
        subjects: "Subjects",
        announcements: "Announcements",
        calendar: "Academic Calendar",
        documents: "Documents & Certificates",
        settings: "Settings"

    };

    const pageTitle = document.getElementById("pageTitle");

    if (pageTitle) {

        pageTitle.textContent =
            titles[page] || "Dashboard";

    }

    closeMobileMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   13. DASHBOARD
========================================================= */

function renderDashboard() {

    const attendance = getOverallAttendance();

    const average = getAverageMarks();

    const highest = getHighestMark();

    const pendingAssignments =
        assignments.filter(
            item => item.status !== "submitted"
        ).length;

    return `

        <div class="welcome-banner">

            <h2>
                Good Morning, ${studentData.name.split(" ")[0]}! 👋
            </h2>

            <p>
                Welcome back to your academic dashboard.
                Here's your current academic overview.
            </p>

            <div class="welcome-date">
                📅 ${new Date().toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })}
            </div>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-top">

                    <div class="stat-icon blue">
                        📊
                    </div>

                    <span class="stat-label">
                        ATTENDANCE
                    </span>

                </div>

                <div class="stat-value">
                    ${attendance}%
                </div>

                <div class="stat-description">
                    Overall attendance
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-top">

                    <div class="stat-icon green">
                        📈
                    </div>

                    <span class="stat-label">
                        AVERAGE
                    </span>

                </div>

                <div class="stat-value">
                    ${average}
                </div>

                <div class="stat-description">
                    Average marks out of 100
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-top">

                    <div class="stat-icon orange">
                        🏆
                    </div>

                    <span class="stat-label">
                        HIGHEST
                    </span>

                </div>

                <div class="stat-value">
                    ${highest}
                </div>

                <div class="stat-description">
                    Highest subject mark
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-top">

                    <div class="stat-icon purple">
                        📝
                    </div>

                    <span class="stat-label">
                        TASKS
                    </span>

                </div>

                <div class="stat-value">
                    ${pendingAssignments}
                </div>

                <div class="stat-description">
                    Pending assignments
                </div>

            </div>

        </div>


        <div class="dashboard-grid">

            <div class="section-card">

                <div class="card-header">

                    <div>
                        <h3>Attendance Overview</h3>
                        <p>Current attendance by subject</p>
                    </div>

                    <button
                        class="card-action"
                        data-page="attendance"
                    >
                        View Details
                    </button>

                </div>


                ${subjects.map(subject => `

                    <div style="margin-bottom:14px">

                        <div class="progress-info">

                            <strong>
                                ${subject.name}
                            </strong>

                            <span>
                                ${getAttendance(subject)}%
                            </span>

                        </div>

                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                style="width:${getAttendance(subject)}%"
                            ></div>

                        </div>

                    </div>

                `).join("")}

            </div>


            <div class="section-card">

                <div class="card-header">

                    <div>
                        <h3>Quick Access</h3>
                        <p>Frequently used sections</p>
                    </div>

                </div>


                <div class="quick-access-grid">

                    <div
                        class="quick-access-item"
                        data-page="attendance"
                    >
                        <div class="quick-icon">
                            📊
                        </div>

                        <strong>Attendance</strong>

                        <span>
                            ${attendance}%
                        </span>

                    </div>


                    <div
                        class="quick-access-item"
                        data-page="marks"
                    >
                        <div class="quick-icon">
                            📈
                        </div>

                        <strong>Marks</strong>

                        <span>
                            ${average}
                        </span>

                    </div>


                    <div
                        class="quick-access-item"
                        data-page="assignments"
                    >
                        <div class="quick-icon">
                            📝
                        </div>

                        <strong>Assignments</strong>

                        <span>
                            ${pendingAssignments} pending
                        </span>

                    </div>


                    <div
                        class="quick-access-item"
                        data-page="exams"
                    >
                        <div class="quick-icon">
                            🎓
                        </div>

                        <strong>Exams</strong>

                        <span>
                            View schedule
                        </span>

                    </div>


                    <div
                        class="quick-access-item"
                        data-page="fees"
                    >
                        <div class="quick-icon">
                            💳
                        </div>

                        <strong>Fees</strong>

                        <span>
                            ₹25,000 due
                        </span>

                    </div>


                    <div
                        class="quick-access-item"
                        data-page="timetable"
                    >
                        <div class="quick-icon">
                            📅
                        </div>

                        <strong>Timetable</strong>

                        <span>
                            View classes
                        </span>

                    </div>


                    <div
                        class="quick-access-item"
                        data-page="subjects"
                    >
                        <div class="quick-icon">
                            📚
                        </div>

                        <strong>Subjects</strong>

                        <span>
                            ${subjects.length} subjects
                        </span>

                    </div>


                    <div
                        class="quick-access-item"
                        data-page="documents"
                    >
                        <div class="quick-icon">
                            📄
                        </div>

                        <strong>Documents</strong>

                        <span>
                            View documents
                        </span>

                    </div>

                </div>

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Upcoming Assignments</h3>
                    <p>Your nearest academic deadlines</p>
                </div>

                <button
                    class="card-action"
                    data-page="assignments"
                >
                    View All
                </button>

            </div>


            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>

                            <th>Assignment</th>

                            <th>Subject</th>

                            <th>Due Date</th>

                            <th>Marks</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        ${assignments
                            .filter(item => item.status !== "submitted")
                            .slice(0, 4)
                            .map(item => `

                                <tr>

                                    <td>
                                        <div class="subject-name">
                                            ${item.title}
                                        </div>
                                    </td>

                                    <td>
                                        ${item.subject}
                                    </td>

                                    <td>
                                        ${formatDate(item.dueDate)}
                                    </td>

                                    <td>
                                        ${item.marks}
                                    </td>

                                    <td>
                                        ${getAssignmentBadge(item.status)}
                                    </td>

                                </tr>

                            `).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =========================================================
   14. ASSIGNMENT BADGE
========================================================= */

function getAssignmentBadge(status) {

    if (status === "submitted") {

        return `
            <span class="badge badge-success">
                Submitted
            </span>
        `;

    }

    if (status === "soon") {

        return `
            <span class="badge badge-warning">
                Due Soon
            </span>
        `;

    }

    if (status === "pending") {

        return `
            <span class="badge badge-danger">
                Pending
            </span>
        `;

    }

    return `
        <span class="badge badge-primary">
            Upcoming
        </span>
    `;
}


/* =========================================================
   15. ATTENDANCE PAGE
========================================================= */

function renderAttendance() {

    return `

        <div class="attendance-overview">

            <div class="section-card attendance-circle-card">

                <h3>Overall Attendance</h3>

                <div class="attendance-circle">

                    <span>
                        ${getOverallAttendance()}%
                    </span>

                </div>

                <p>
                    Current semester attendance
                </p>

            </div>


            <div class="section-card">

                <div class="card-header">

                    <div>
                        <h3>Attendance Summary</h3>
                        <p>Subject-wise attendance</p>
                    </div>

                </div>


                ${subjects.map(subject => `

                    <div style="margin-bottom:18px">

                        <div class="progress-info">

                            <strong>
                                ${subject.name}
                            </strong>

                            <span>
                                ${getAttendance(subject)}%
                            </span>

                        </div>

                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                style="width:${getAttendance(subject)}%"
                            ></div>

                        </div>

                        <div
                            style="
                                display:flex;
                                justify-content:space-between;
                                margin-top:5px;
                                font-size:8px;
                                color:#9aa3b2;
                            "
                        >

                            <span>
                                Present: ${subject.present}
                            </span>

                            <span>
                                Absent: ${subject.absent}
                            </span>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Detailed Attendance</h3>
                    <p>Complete attendance record</p>
                </div>

            </div>


            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>
                            <th>Subject</th>
                            <th>Faculty</th>
                            <th>Present</th>
                            <th>Absent</th>
                            <th>Total</th>
                            <th>Percentage</th>
                            <th>Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${subjects.map(subject => {

                            const percentage =
                                Number(getAttendance(subject));

                            let status = "";

                            if (percentage >= 90) {

                                status =
                                    `<span class="badge badge-success">Excellent</span>`;

                            } else if (percentage >= 75) {

                                status =
                                    `<span class="badge badge-primary">Good</span>`;

                            } else {

                                status =
                                    `<span class="badge badge-danger">Low</span>`;

                            }

                            return `

                                <tr>

                                    <td>
                                        <div class="subject-name">
                                            ${subject.name}
                                        </div>
                                    </td>

                                    <td>
                                        ${subject.teacher}
                                    </td>

                                    <td>
                                        ${subject.present}
                                    </td>

                                    <td>
                                        ${subject.absent}
                                    </td>

                                    <td>
                                        ${subject.present + subject.absent}
                                    </td>

                                    <td>
                                        <strong>
                                            ${percentage}%
                                        </strong>
                                    </td>

                                    <td>
                                        ${status}
                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =========================================================
   16. MARKS PAGE
========================================================= */

function renderMarks() {

    const average = Number(getAverageMarks());

    const highest = getHighestMark();

    return `

        <div class="marks-summary">

            <div class="marks-summary-card">

                <span>
                    AVERAGE MARK
                </span>

                <strong>
                    ${average}
                </strong>

            </div>


            <div class="marks-summary-card">

                <span>
                    HIGHEST MARK
                </span>

                <strong>
                    ${highest}
                </strong>

            </div>


            <div class="marks-summary-card">

                <span>
                    CGPA
                </span>

                <strong>
                    ${studentData.cgpa}
                </strong>

            </div>

        </div>


        <div class="section-card chart-card">

            <div class="card-header">

                <div>
                    <h3>Subject Performance</h3>
                    <p>Current semester marks</p>
                </div>

            </div>


            <div class="chart-container">

                ${subjects.map(subject => {

                    const mark = getMark(subject);

                    return `

                        <div class="chart-column">

                            <div
                                class="chart-bar"
                                style="height:${mark}%"
                            >

                                <span class="chart-value">
                                    ${mark}
                                </span>

                            </div>

                            <span class="chart-label">
                                ${subject.name}
                            </span>

                        </div>

                    `;

                }).join("")}

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Current Semester Marks</h3>
                    <p>Internal + external assessment</p>
                </div>

            </div>


            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>
                            <th>Subject</th>
                            <th>Internal</th>
                            <th>External</th>
                            <th>Total</th>
                            <th>Grade</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${subjects.map(subject => {

                            const total = getMark(subject);

                            return `

                                <tr>

                                    <td>
                                        <div class="subject-name">
                                            ${subject.name}
                                        </div>
                                    </td>

                                    <td>
                                        ${subject.internal}
                                    </td>

                                    <td>
                                        ${subject.external}
                                    </td>

                                    <td>
                                        <strong>
                                            ${total}
                                        </strong>
                                    </td>

                                    <td>
                                        <span class="badge badge-primary">
                                            ${getGrade(total)}
                                        </span>
                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Previous Semester Result</h3>
                    <p>Previous semester performance</p>
                </div>

            </div>


            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>
                            <th>Subject</th>
                            <th>Internal</th>
                            <th>External</th>
                            <th>Total</th>
                            <th>Grade</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${previousResults.map(item => {

                            const total =
                                item.internal + item.external;

                            return `

                                <tr>

                                    <td>
                                        ${item.subject}
                                    </td>

                                    <td>
                                        ${item.internal}
                                    </td>

                                    <td>
                                        ${item.external}
                                    </td>

                                    <td>
                                        <strong>
                                            ${total}
                                        </strong>
                                    </td>

                                    <td>
                                        <span class="badge badge-success">
                                            ${getGrade(total)}
                                        </span>
                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =========================================================
   17. ASSIGNMENTS PAGE
========================================================= */

function renderAssignments(filter = "all") {

    let filtered = assignments;

    if (filter !== "all") {

        filtered = assignments.filter(
            item => item.status === filter
        );

    }

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Assignments & Tasks</h3>
                    <p>
                        Manage your academic assignments
                    </p>
                </div>

                <span class="badge badge-primary">
                    ${filtered.length} items
                </span>

            </div>


            <div class="filter-row">

                <button
                    class="filter-btn ${filter === "all" ? "active" : ""}"
                    data-assignment-filter="all"
                >
                    All
                </button>

                <button
                    class="filter-btn ${filter === "pending" ? "active" : ""}"
                    data-assignment-filter="pending"
                >
                    Pending
                </button>

                <button
                    class="filter-btn ${filter === "soon" ? "active" : ""}"
                    data-assignment-filter="soon"
                >
                    Due Soon
                </button>

                <button
                    class="filter-btn ${filter === "upcoming" ? "active" : ""}"
                    data-assignment-filter="upcoming"
                >
                    Upcoming
                </button>

                <button
                    class="filter-btn ${filter === "submitted" ? "active" : ""}"
                    data-assignment-filter="submitted"
                >
                    Submitted
                </button>

            </div>


            <div class="assignment-grid">

                ${filtered.map(item => `

                    <div class="assignment-card">

                        <div class="assignment-top">

                            <div>

                                <h3>
                                    ${item.title}
                                </h3>

                                <div class="assignment-subject">
                                    ${item.subject}
                                </div>

                            </div>

                            ${getAssignmentBadge(item.status)}

                        </div>


                        <p class="assignment-description">
                            ${item.description}
                        </p>


                        <div class="assignment-bottom">

                            <span class="assignment-date">
                                📅 Due: ${formatDate(item.dueDate)}
                            </span>

                            <span class="assignment-marks">
                                ${item.marks} Marks
                            </span>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   18. EXAMS PAGE
========================================================= */

function renderExams(filter = "all") {

    let filteredExams = exams;

    if (filter !== "all") {

        filteredExams =
            exams.filter(exam => exam.category === filter);

    }

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Examination Schedule</h3>
                    <p>Upcoming examination timetable</p>
                </div>

            </div>


            <div class="filter-row">

                <button
                    class="filter-btn ${filter === "all" ? "active" : ""}"
                    data-exam-filter="all"
                >
                    All Exams
                </button>

                <button
                    class="filter-btn ${filter === "internal" ? "active" : ""}"
                    data-exam-filter="internal"
                >
                    Internal Exams
                </button>

                <button
                    class="filter-btn ${filter === "semester" ? "active" : ""}"
                    data-exam-filter="semester"
                >
                    Semester Exams
                </button>

            </div>


            <div class="exam-grid">

                ${filteredExams.map(exam => `

                    <div class="exam-card">

                        <div class="exam-card-top">

                            <div>

                                <h3>
                                    ${exam.subject}
                                </h3>

                                <div class="exam-type">
                                    ${exam.type}
                                </div>

                            </div>

                            <span class="badge badge-primary">
                                ${exam.category === "internal"
                                    ? "Internal"
                                    : "Semester"}
                            </span>

                        </div>


                        <div class="exam-detail">
                            <span>📅</span>
                            <span>
                                ${formatDate(exam.date)}
                            </span>
                        </div>


                        <div class="exam-detail">
                            <span>⏰</span>
                            <span>
                                ${exam.time}
                            </span>
                        </div>


                        <div class="exam-detail">
                            <span>📍</span>
                            <span>
                                ${exam.venue}
                            </span>
                        </div>

                    </div>

                `).join("")}

            </div>

        </div>


        ${renderPreviousResults()}

    `;
}


/* =========================================================
   19. PREVIOUS RESULTS
========================================================= */

function renderPreviousResults() {

    const average =
        previousResults.reduce(
            (sum, item) =>
                sum + item.internal + item.external,
            0
        ) / previousResults.length;

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Previous Semester Results</h3>
                    <p>
                        Result summary and subject marks
                    </p>
                </div>

                <span class="badge badge-success">
                    Passed
                </span>

            </div>


            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>
                            <th>Subject</th>
                            <th>Internal</th>
                            <th>External</th>
                            <th>Total</th>
                            <th>Grade</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${previousResults.map(item => {

                            const total =
                                item.internal + item.external;

                            return `

                                <tr>

                                    <td>
                                        ${item.subject}
                                    </td>

                                    <td>
                                        ${item.internal}
                                    </td>

                                    <td>
                                        ${item.external}
                                    </td>

                                    <td>
                                        <strong>
                                            ${total}
                                        </strong>
                                    </td>

                                    <td>
                                        <span class="badge badge-success">
                                            ${getGrade(total)}
                                        </span>
                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>

            </div>


            <div
                style="
                    margin-top:15px;
                    display:flex;
                    gap:20px;
                    flex-wrap:wrap;
                    font-size:10px;
                    color:#718096;
                "
            >

                <span>
                    Average: <strong>${average.toFixed(1)}</strong>
                </span>

                <span>
                    Subjects Passed:
                    <strong>${previousResults.length}/${previousResults.length}</strong>
                </span>

                <span>
                    Highest:
                    <strong>Cloud Computing - 87</strong>
                </span>

            </div>

        </div>

    `;
}


/* =========================================================
   20. FEES PAGE
========================================================= */

function renderFees() {

    const pending =
        feeData.total - feeData.paid;

    const paidPercentage =
        ((feeData.paid / feeData.total) * 100).toFixed(0);

    return `

        <div class="fee-summary">

            <div class="fee-card fee-total">

                <span>
                    TOTAL FEE
                </span>

                <strong>
                    ${formatCurrency(feeData.total)}
                </strong>

                <small>
                    ${feeData.semester}
                </small>

            </div>


            <div class="fee-card fee-paid">

                <span>
                    PAID
                </span>

                <strong>
                    ${formatCurrency(feeData.paid)}
                </strong>

                <small>
                    ${paidPercentage}% completed
                </small>

            </div>


            <div class="fee-card fee-pending">

                <span>
                    PENDING
                </span>

                <strong>
                    ${formatCurrency(pending)}
                </strong>

                <small>
                    Due: ${formatDate(feeData.dueDate)}
                </small>

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Fee Payment Progress</h3>
                    <p>
                        ${paidPercentage}% of semester fee paid
                    </p>
                </div>

                <button
                    class="payment-btn"
                    id="payFeeBtn"
                >
                    Pay Now
                </button>

            </div>


            <div class="progress-wrapper">

                <div class="progress-info">

                    <strong>
                        Paid
                    </strong>

                    <span>
                        ${formatCurrency(feeData.paid)}
                        / ${formatCurrency(feeData.total)}
                    </span>

                </div>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${paidPercentage}%"
                    ></div>

                </div>

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Fee Breakdown</h3>
                    <p>
                        Semester fee details
                    </p>
                </div>

            </div>


            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>
                            <th>Fee Type</th>
                            <th>Amount</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${feeBreakdown.map(item => `

                            <tr>

                                <td>
                                    ${item.name}
                                </td>

                                <td>
                                    <strong>
                                        ${formatCurrency(item.amount)}
                                    </strong>
                                </td>

                            </tr>

                        `).join("")}


                        <tr>

                            <td>
                                <strong>Total</strong>
                            </td>

                            <td>
                                <strong>
                                    ${formatCurrency(feeData.total)}
                                </strong>
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Payment History</h3>
                    <p>
                        Previous fee transactions
                    </p>
                </div>

            </div>


            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>
                            <th>Receipt</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${paymentHistory.map(item => `

                            <tr>

                                <td>
                                    ${item.receipt}
                                </td>

                                <td>
                                    ${formatDate(item.date)}
                                </td>

                                <td>
                                    ${formatCurrency(item.amount)}
                                </td>

                                <td>
                                    ${item.method}
                                </td>

                                <td>
                                    <span class="badge badge-success">
                                        ${item.status}
                                    </span>
                                </td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =========================================================
   21. PROFILE PAGE
========================================================= */

function renderProfile() {

    return `

        <div class="profile-header-card">

            <div class="profile-large-avatar">
                MK
            </div>

            <div class="profile-header-info">

                <h2>
                    ${studentData.name}
                </h2>

                <p>
                    ${studentData.department}
                    • ${studentData.year}
                </p>

                <p>
                    Student ID: ${studentData.studentId}
                </p>

            </div>

        </div>


        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Personal & Academic Information</h3>
                    <p>
                        Your student profile details
                    </p>
                </div>

            </div>


            <div class="profile-info-grid">

                <div class="profile-info-item">
                    <span>FULL NAME</span>
                    <strong>${studentData.name}</strong>
                </div>

                <div class="profile-info-item">
                    <span>STUDENT ID</span>
                    <strong>${studentData.studentId}</strong>
                </div>

                <div class="profile-info-item">
                    <span>DEPARTMENT</span>
                    <strong>${studentData.department}</strong>
                </div>

                <div class="profile-info-item">
                    <span>YEAR</span>
                    <strong>${studentData.year}</strong>
                </div>

                <div class="profile-info-item">
                    <span>SEMESTER</span>
                    <strong>${studentData.semester}</strong>
                </div>

                <div class="profile-info-item">
                    <span>CGPA</span>
                    <strong>${studentData.cgpa}</strong>
                </div>

                <div class="profile-info-item">
                    <span>EMAIL</span>
                    <strong>${studentData.email}</strong>
                </div>

                <div class="profile-info-item">
                    <span>PHONE</span>
                    <strong>${studentData.phone}</strong>
                </div>

                <div class="profile-info-item">
                    <span>COLLEGE</span>
                    <strong>${studentData.college}</strong>
                </div>

            </div>

        </div>

    `;
}


/* =========================================================
   22. TIMETABLE PAGE
========================================================= */

function renderTimetable() {

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Weekly Timetable</h3>
                    <p>
                        ${studentData.semester} class schedule
                    </p>
                </div>

            </div>


            <div class="timetable-wrapper">

                <table class="timetable">

                    <thead>

                        <tr>

                            <th>
                                Time
                            </th>

                            ${timetable.map(day => `

                                <th>
                                    ${day.day}
                                </th>

                            `).join("")}

                        </tr>

                    </thead>


                    <tbody>

                        ${timetableTimes.map((time, index) => `

                            <tr>

                                <td class="time-cell">
                                    ${time}
                                </td>

                                ${timetable.map(day => {

                                    const subject =
                                        day.periods[index];

                                    if (subject === "Lunch") {

                                        return `
                                            <td>
                                                🍴 Lunch
                                            </td>
                                        `;

                                    }

                                    return `
                                        <td class="subject-cell">
                                            ${subject}
                                        </td>
                                    `;

                                }).join("")}

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =========================================================
   23. SUBJECTS PAGE
========================================================= */

function renderSubjects() {

    const icons = [
        "📊",
        "🗄️",
        "☁️",
        "🔗",
        "🧠",
        "🔐"
    ];

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>My Subjects</h3>
                    <p>
                        Current semester subjects
                    </p>
                </div>

                <span class="badge badge-primary">
                    ${subjects.length} Subjects
                </span>

            </div>


            <div class="subject-grid">

                ${subjects.map((subject, index) => `

                    <div class="subject-card">

                        <div class="subject-card-icon">
                            ${icons[index]}
                        </div>

                        <h3>
                            ${subject.name}
                        </h3>

                        <p>
                            Faculty:
                            ${subject.teacher}
                        </p>


                        <div class="progress-info">

                            <span>
                                Attendance
                            </span>

                            <strong>
                                ${getAttendance(subject)}%
                            </strong>

                        </div>


                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                style="width:${getAttendance(subject)}%"
                            ></div>

                        </div>


                        <div
                            style="
                                display:flex;
                                justify-content:space-between;
                                margin-top:12px;
                                font-size:9px;
                                color:#718096;
                            "
                        >

                            <span>
                                Marks:
                                <strong>
                                    ${getMark(subject)}
                                </strong>
                            </span>

                            <span>
                                Grade:
                                <strong>
                                    ${getGrade(getMark(subject))}
                                </strong>
                            </span>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   24. ANNOUNCEMENTS PAGE
========================================================= */

function renderAnnouncements() {

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Announcements</h3>
                    <p>
                        Latest college and department updates
                    </p>
                </div>

            </div>


            <div class="announcement-list">

                ${announcements.map(item => `

                    <div class="announcement-card">

                        <div class="announcement-icon">
                            ${item.icon}
                        </div>

                        <div class="announcement-content">

                            <h3>
                                ${item.title}
                            </h3>

                            <p>
                                ${item.text}
                            </p>

                            <div class="announcement-meta">
                                Published: ${item.date}
                            </div>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   25. CALENDAR PAGE
========================================================= */

function renderCalendar() {

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Academic Calendar</h3>
                    <p>
                        Important academic dates
                    </p>
                </div>

            </div>


            <div class="calendar-grid">

                ${calendarEvents.map(event => `

                    <div class="calendar-event">

                        <div class="calendar-date">

                            <strong>
                                ${event.day}
                            </strong>

                            <span>
                                ${event.month}
                            </span>

                        </div>

                        <h3>
                            ${event.title}
                        </h3>

                        <p>
                            ${event.description}
                        </p>

                    </div>

                `).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   26. DOCUMENTS PAGE
========================================================= */

function renderDocuments() {

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Documents & Certificates</h3>
                    <p>
                        Access your academic documents
                    </p>
                </div>

            </div>


            <div class="documents-grid">

                ${documents.map(document => `

                    <div class="document-card">

                        <div class="document-icon">
                            ${document.icon}
                        </div>

                        <h3>
                            ${document.title}
                        </h3>

                        <p>
                            ${document.description}
                        </p>

                        <button
                            class="document-btn"
                            data-document="${document.title}"
                        >
                            View Document
                        </button>

                    </div>

                `).join("")}

            </div>

        </div>

    `;
}


/* =========================================================
   27. SETTINGS PAGE
========================================================= */

function renderSettings() {

    return `

        <div class="section-card">

            <div class="card-header">

                <div>
                    <h3>Settings</h3>
                    <p>
                        Manage your portal preferences
                    </p>
                </div>

            </div>


            <div class="settings-list">


                <div class="setting-item">

                    <div class="setting-info">

                        <div class="setting-icon">
                            🔔
                        </div>

                        <div>

                            <strong>
                                Notifications
                            </strong>

                            <span>
                                Receive academic notifications
                            </span>

                        </div>

                    </div>

                    <button
                        class="toggle active"
                        data-setting="notifications"
                    ></button>

                </div>


                <div class="setting-item">

                    <div class="setting-info">

                        <div class="setting-icon">
                            📧
                        </div>

                        <div>

                            <strong>
                                Email Updates
                            </strong>

                            <span>
                                Receive important updates by email
                            </span>

                        </div>

                    </div>

                    <button
                        class="toggle active"
                        data-setting="email"
                    ></button>

                </div>


                <div class="setting-item">

                    <div class="setting-info">

                        <div class="setting-icon">
                            📱
                        </div>

                        <div>

                            <strong>
                                SMS Alerts
                            </strong>

                            <span>
                                Receive urgent academic alerts
                            </span>

                        </div>

                    </div>

                    <button
                        class="toggle"
                        data-setting="sms"
                    ></button>

                </div>


                <div class="setting-item">

                    <div class="setting-info">

                        <div class="setting-icon">
                            🔒
                        </div>

                        <div>

                            <strong>
                                Login Security
                            </strong>

                            <span>
                                Keep your student account protected
                            </span>

                        </div>

                    </div>

                    <button
                        class="toggle active"
                        data-setting="security"
                    ></button>

                </div>


            </div>

        </div>

    `;
}


/* =========================================================
   28. MOBILE MENU
========================================================= */

function closeMobileMenu() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    if (sidebar) {
        sidebar.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.remove("show");
    }
}


function openMobileMenu() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    if (sidebar) {
        sidebar.classList.add("open");
    }

    if (overlay) {
        overlay.classList.add("show");
    }
}


/* =========================================================
   29. LOGOUT
========================================================= */

function logout() {

    sessionStorage.removeItem("studentLoggedIn");

    localStorage.removeItem("studentLoggedIn");

    window.location.href = "login.html";
}


/* =========================================================
   30. LOGIN
========================================================= */

function setupLogin() {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) return;


    const passwordInput =
        document.getElementById("password");

    const togglePassword =
        document.getElementById("togglePassword");


    if (togglePassword) {

        togglePassword.addEventListener(
            "click",
            () => {

                if (passwordInput.type === "password") {

                    passwordInput.type = "text";

                    togglePassword.textContent = "🙈";

                } else {

                    passwordInput.type = "password";

                    togglePassword.textContent = "👁️";

                }

            }
        );

    }


    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const studentId =
                document
                    .getElementById("studentId")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("password")
                    .value;


            const rememberMe =
                document
                    .getElementById("rememberMe")
                    .checked;


            const loginError =
                document.getElementById("loginError");


            if (
                studentId === "VSB2024" &&
                password === "123456"
            ) {

                loginError.textContent = "";


                if (rememberMe) {

                    localStorage.setItem(
                        "studentLoggedIn",
                        "true"
                    );

                } else {

                    sessionStorage.setItem(
                        "studentLoggedIn",
                        "true"
                    );

                }


                window.location.href = "index.html";

            } else {

                loginError.textContent =
                    "Invalid Student ID or Password.";

            }

        }
    );
}


/* =========================================================
   31. LOGIN PROTECTION
========================================================= */

function checkLoginStatus() {

    const isDashboard =
        document.getElementById("pageContent");

    if (!isDashboard) return;


    const sessionLogin =
        sessionStorage.getItem("studentLoggedIn");

    const savedLogin =
        localStorage.getItem("studentLoggedIn");


    if (
        sessionLogin !== "true" &&
        savedLogin !== "true"
    ) {

        window.location.href = "login.html";

    }

}


/* =========================================================
   32. GLOBAL CLICK EVENTS
========================================================= */

document.addEventListener(
    "click",
    function(event) {


        /* -----------------------------------------
           Navigation
        ------------------------------------------ */

        const navItem =
            event.target.closest("[data-page]");

        if (
            navItem &&
            !navItem.classList.contains("nav-item")
        ) {

            const page =
                navItem.dataset.page;

            if (page) {

                loadPage(page);

                document
                    .getElementById("profileDropdown")
                    ?.classList.remove("show");

            }

        }


        if (
            navItem &&
            navItem.classList.contains("nav-item")
        ) {

            const page =
                navItem.dataset.page;

            if (page) {

                loadPage(page);

            }

        }


        /* -----------------------------------------
           Assignment Filter
        ------------------------------------------ */

        const assignmentFilter =
            event.target.closest(
                "[data-assignment-filter]"
            );

        if (assignmentFilter) {

            loadPage("assignments");

            const content =
                document.getElementById("pageContent");

            content.innerHTML =
                renderAssignments(
                    assignmentFilter.dataset.assignmentFilter
                );

        }


        /* -----------------------------------------
           Exam Filter
        ------------------------------------------ */

        const examFilter =
            event.target.closest(
                "[data-exam-filter]"
            );

        if (examFilter) {

            const content =
                document.getElementById("pageContent");

            content.innerHTML =
                renderExams(
                    examFilter.dataset.examFilter
                );

        }


        /* -----------------------------------------
           Document Button
        ------------------------------------------ */

        const documentButton =
            event.target.closest(
                "[data-document]"
            );

        if (documentButton) {

            const documentName =
                documentButton.dataset.document;

            alert(
                `${documentName}\n\nDemo Mode:\nThis document is available for viewing in the full college portal.`
            );

        }


        /* -----------------------------------------
           Settings Toggle
        ------------------------------------------ */

        const toggle =
            event.target.closest(
                "[data-setting]"
            );

        if (toggle) {

            toggle.classList.toggle("active");

        }


        /* -----------------------------------------
           Payment Button
        ------------------------------------------ */

        if (
            event.target.closest("#payFeeBtn")
        ) {

            alert(
                "Payment Gateway Demo\n\nThis is a frontend demonstration only. Real payment processing is not connected."
            );

        }

    }
);


/* =========================================================
   33. DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* Login */

        setupLogin();


        /* Dashboard login protection */

        checkLoginStatus();


        /* Load dashboard */

        if (
            document.getElementById("pageContent")
        ) {

            loadPage("dashboard");

        }


        /* -----------------------------------------
           Logout buttons
        ------------------------------------------ */

        const logoutBtn =
            document.getElementById("logoutBtn");

        if (logoutBtn) {

            logoutBtn.addEventListener(
                "click",
                logout
            );

        }


        const dropdownLogout =
            document.getElementById("dropdownLogout");

        if (dropdownLogout) {

            dropdownLogout.addEventListener(
                "click",
                logout
            );

        }


        /* -----------------------------------------
           Mobile menu
        ------------------------------------------ */

        const mobileMenuBtn =
            document.getElementById(
                "mobileMenuBtn"
            );

        if (mobileMenuBtn) {

            mobileMenuBtn.addEventListener(
                "click",
                openMobileMenu
            );

        }


        const sidebarOverlay =
            document.getElementById(
                "sidebarOverlay"
            );

        if (sidebarOverlay) {

            sidebarOverlay.addEventListener(
                "click",
                closeMobileMenu
            );

        }


        /* -----------------------------------------
           Notification
        ------------------------------------------ */

        const notificationBtn =
            document.getElementById(
                "notificationBtn"
            );

        const notificationPanel =
            document.getElementById(
                "notificationPanel"
            );


        if (notificationBtn) {

            notificationBtn.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    notificationPanel?.classList.toggle(
                        "show"
                    );

                    document
                        .getElementById("profileDropdown")
                        ?.classList.remove("show");

                }
            );

        }


        /* -----------------------------------------
           Mark notifications read
        ------------------------------------------ */

        const markAllRead =
            document.getElementById(
                "markAllRead"
            );

        if (markAllRead) {

            markAllRead.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(
                            ".notification-item.unread"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "unread"
                            );

                        });


                    const badge =
                        document.getElementById(
                            "notificationBadge"
                        );

                    if (badge) {

                        badge.textContent = "0";

                        badge.style.display = "none";

                    }

                }
            );

        }


        /* -----------------------------------------
           Profile dropdown
        ------------------------------------------ */

        const profileBtn =
            document.getElementById(
                "profileBtn"
            );

        const profileDropdown =
            document.getElementById(
                "profileDropdown"
            );


        if (profileBtn) {

            profileBtn.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    profileDropdown?.classList.toggle(
                        "show"
                    );

                    notificationPanel?.classList.remove(
                        "show"
                    );

                }
            );

        }


        /* -----------------------------------------
           Close dropdowns
        ------------------------------------------ */

        document.addEventListener(
            "click",
            function(event) {

                if (
                    !event.target.closest(
                        ".notification-wrapper"
                    )
                ) {

                    notificationPanel?.classList.remove(
                        "show"
                    );

                }


                if (
                    !event.target.closest(
                        ".profile-wrapper"
                    )
                ) {

                    profileDropdown?.classList.remove(
                        "show"
                    );

                }

            }
        );


        /* -----------------------------------------
           Global Search
        ------------------------------------------ */

        const globalSearch =
            document.getElementById(
                "globalSearch"
            );

        if (globalSearch) {

            globalSearch.addEventListener(
                "input",
                function() {

                    const search =
                        this.value
                            .toLowerCase()
                            .trim();

                    if (!search) return;


                    const matchedSubject =
                        subjects.find(
                            subject =>
                                subject.name
                                    .toLowerCase()
                                    .includes(search)
                        );


                    if (matchedSubject) {

                        console.log(
                            "Subject found:",
                            matchedSubject.name
                        );

                    }

                }
            );

        }

    }
);