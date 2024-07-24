import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../components/pages/Shop/Main/Main';
import { SecondaryPage } from '../components/pages/Shop/Secondary/Secondary';
import { ShopPageLayout } from '../components/page-layouts/shop-layout/Shop-layout';
import BasePage from '../components/pages/basePage';
import { LoginPage } from '../components/pages/Auth-pages/Login/Login';

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BasePage />} />
        <Route path='/sign-in' element={<LoginPage />} />
        <Route path='/sign-up' element={<BasePage />} />
        <Route path='/forgot-password' element={<BasePage />} />
        <Route path='/reset-password/:token' element={<BasePage />} />
        <Route path='/shop' element={<ShopPageLayout />}>
          <Route path='main' element={<MainPage />} />
          <Route path='secondary' element={<SecondaryPage />} />
          {/* <Route path='courses' element={<CoursesPage {...coursesPageProps} />} />
          <Route path='lectors' element={<LectorsPage {...lectorsPageProps} />} />
          <Route path='groups' element={<GroupsPage {...groupsPageProps} />} />
          <Route path='students' element={<StudentsPage {...studentsPageProps} />} /> */}
        </Route>
        <Route path='/profile/:id' element={<BasePage />} />
      </Routes>
    </>
  );
}
