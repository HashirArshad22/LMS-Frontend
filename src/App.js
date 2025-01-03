import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/Home/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import LoginPage from "./pages/LoginPage";
import AdminRegisterPage from "./pages/admin/AdminRegisterPage";
import ChooseUser from "./pages/ChooseUser";
import ApplyNow from "./pages/ApplyNow/ApplyNow";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminProfile from "./pages/admin/AdminProfile";
import SeeComplains from "./pages/admin/studentRelated/SeeComplains";
import AddNotice from "./pages/admin/noticeRelated/AddNotice";
import ShowNotices from "./pages/admin/noticeRelated/ShowNotices";
import ShowSubjects from "./pages/admin/subjectRelated/ShowSubjects";
import ViewSubject from "./pages/admin/subjectRelated/ViewSubject";
import ChooseClass from "./pages/admin/teacherRelated/ChooseClass";
import SubjectForm from "./pages/admin/subjectRelated/SubjectForm";
import StudentAttendance from "./pages/admin/studentRelated/StudentAttendance";
import StudentExamMarks from "./pages/admin/studentRelated/StudentExamMarks";
import AddClass from "./pages/admin/classRelated/AddClass";
import ShowClasses from "./pages/admin/classRelated/ShowClasses";
import ClassDetails from "./pages/admin/classRelated/ClassDetails";
import AddStudent from "./pages/admin/studentRelated/AddStudent";
import ShowStudents from "./pages/admin/studentRelated/ShowStudents";
import ViewStudent from "./pages/admin/studentRelated/ViewStudent";
import ShowTeachers from "./pages/admin/teacherRelated/ShowTeachers";
import TeacherDetails from "./pages/admin/teacherRelated/TeacherDetails";
import ChooseSubject from "./pages/admin/teacherRelated/ChooseSubject";
import AddTeacher from "./pages/admin/teacherRelated/AddTeacher";
import Logout from "./pages/Logout";
import StudentHomePage from "./pages/student/StudentHomePage";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSubjects from "./pages/student/StudentSubjects";
import ViewStdAttendance from "./pages/student/ViewStdAttendance";
import StudentComplain from "./pages/student/StudentComplain";
import TeacherHomePage from "./pages/teacher/TeacherHomePage";
import TeacherProfile from "./pages/teacher/TeacherProfile";
import TeacherComplain from "./pages/teacher/TeacherComplain";
import TeacherClassDetails from "./pages/teacher/TeacherClassDetails";
import TeacherViewStudent from "./pages/teacher/TeacherViewStudent";
import OTPVerificationPage from './pages/admin/OTPVerificationPage';

const App = () => {
  const { currentRole } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ApplyNow" element={<ApplyNow />} />
      </Routes>

      <Routes>
        <Route path="/choose" element={<ChooseUser visitor="normal" />} />

        <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
        <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
        <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />

        <Route path="/Adminregister" element={<AdminRegisterPage />} />
        <Route path="/Admin/otp-verification" element={<OTPVerificationPage />} />

        <Route path="/Admin" element={<AdminDashboard />}>
          <Route path="Admin/*" element={<Navigate to="/Admin" />} />
          <Route path="/Admin/" element={<Navigate to="/Admin/Dashboard" />} />
          <Route path="/Admin/dashboard" element={<AdminHomePage />} />
          <Route path="/Admin/profile" element={<AdminProfile />} />
          <Route path="/Admin/complains" element={<SeeComplains />} />

          {/* Notice */}
          <Route path="/Admin/addnotice" element={<AddNotice />} />
          <Route path="/Admin/notices" element={<ShowNotices />} />

          {/* Subject */}
          <Route path="/Admin/subjects" element={<ShowSubjects />} />
          <Route
            path="/Admin/subjects/subject/:classID/:subjectID"
            element={<ViewSubject />}
          />
          <Route
            path="/Admin/subjects/chooseclass"
            element={<ChooseClass situation="Subject" />}
          />

          <Route path="/Admin/addsubject/:id" element={<SubjectForm />} />
          <Route
            path="/Admin/class/subject/:classID/:subjectID"
            element={<ViewSubject />}
          />

          <Route
            path="/Admin/subject/student/attendance/:studentID/:subjectID"
            element={<StudentAttendance situation="Subject" />}
          />
          <Route
            path="/Admin/subject/student/marks/:studentID/:subjectID"
            element={<StudentExamMarks situation="Subject" />}
          />

          {/* Class */}
          <Route path="/Admin/addclass" element={<AddClass />} />
          <Route path="/Admin/classes" element={<ShowClasses />} />
          <Route path="/Admin/classes/class/:id" element={<ClassDetails />} />
          <Route
            path="/Admin/class/addstudents/:id"
            element={<AddStudent situation="Class" />}
          />

          {/* Student */}
          <Route
            path="/Admin/addstudents"
            element={<AddStudent situation="Student" />}
          />
          <Route path="/Admin/students" element={<ShowStudents />} />
          <Route path="/Admin/students/student/:id" element={<ViewStudent />} />
          <Route
            path="/Admin/students/student/attendance/:id"
            element={<StudentAttendance situation="Student" />}
          />
          <Route
            path="/Admin/students/student/marks/:id"
            element={<StudentExamMarks situation="Student" />}
          />

          {/* Teacher */}
          <Route path="/Admin/teachers" element={<ShowTeachers />} />
          <Route
            path="/Admin/teachers/teacher/:id"
            element={<TeacherDetails />}
          />
          <Route
            path="/Admin/teachers/chooseclass"
            element={<ChooseClass situation="Teacher" />}
          />
          <Route
            path="/Admin/teachers/choosesubject/:id"
            element={<ChooseSubject situation="Norm" />}
          />
          <Route
            path="/Admin/teachers/choosesubject/:classID/:teacherID"
            element={<ChooseSubject situation="Teacher" />}
          />
          <Route
            path="/Admin/teachers/addteacher/:id"
            element={<AddTeacher />}
          />
        </Route>

        <Route path="/Student" element={<StudentDashboard />}>
          <Route path="Student/*" element={<Navigate to="/Student" />} />
          <Route
            path="/Student/"
            element={<Navigate to="/Student/dashboard" />}
          />
          <Route path="/Student/dashboard" element={<StudentHomePage />} />
          <Route path="/Student/profile" element={<StudentProfile />} />

          <Route path="/Student/subjects" element={<StudentSubjects />} />
          <Route path="/Student/attendance" element={<ViewStdAttendance />} />
          <Route path="/Student/complain" element={<StudentComplain />} />
        </Route>

        <Route path="/Teacher" element={<TeacherDashboard />}>
          <Route path="Teacher/*" element={<Navigate to="/Teacher" />} />
          <Route
            path="/Teacher/"
            element={<Navigate to="/Teacher/dashboard" />}
          />
          <Route path="/Teacher/dashboard" element={<TeacherHomePage />} />
          <Route path="/Teacher/profile" element={<TeacherProfile />} />

          <Route path="/Teacher/complain" element={<TeacherComplain />} />

          <Route path="/Teacher/class" element={<TeacherClassDetails />} />
          <Route
            path="/Teacher/class/student/:id"
            element={<TeacherViewStudent />}
          />

          <Route
            path="/Teacher/class/student/attendance/:studentID/:subjectID"
            element={<StudentAttendance situation="Subject" />}
          />
          <Route
            path="/Teacher/class/student/marks/:studentID/:subjectID"
            element={<StudentExamMarks situation="Subject" />}
          />
        </Route>

        <Route path="/logout" element={<Logout />} />
      </Routes>

      {/* {currentRole === "Student" && (
        <Routes>
          <Route path="/Dashboard" element={<StudentDashboard />} />
          <Route path="/Dashboard" element={<Navigate to="/Dashboard" />} />
        </Routes>
      )}

      {currentRole === "Teacher" && (
        <Routes>
          <Route path="/Dashboard" element={<TeacherDashboard />} />
          <Route path="/Dashboard" element={<Navigate to="/Dashboard" />} />
        </Routes>
      )} */}
    </Router>
  );
};

export default App;
