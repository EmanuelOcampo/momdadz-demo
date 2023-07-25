import {BrowserRouter, Routes, Route} from "react-router-dom"
import {BookingForm, Register, Error, Landing , ProtectedRoute, GalleryClient,Menu, Package, Genderreveal,Baptismal,Debut,Corporate,Kiddie,Birthday, Wedding} from "./pages";
import {Admin, Gallery, Bookings, Profile, Stats, SharedLayout, AcceptBooking, Calendar} from './pages/dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <SharedLayout/>
            </ProtectedRoute>
        }>
          <Route index element={<Stats />}/>
          <Route path="bookings" element={<Bookings />}/>
          <Route path="upload-gallery" element={<Gallery />}/>
          <Route path="add-admin" element={<Admin />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path='AcceptBooking' element={<AcceptBooking/>}/>
          <Route path='Calendar' element={<Calendar/>}/>
        </Route>

        
        <Route path="/register" element={<Register />}  />
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/booking"  element={<BookingForm />} />
        <Route path="/package"  element={<Package />} />


        <Route path="/gallery"  element={<GalleryClient />} />
        <Route path="/wedding"  element={<Wedding />} />
        <Route path="/kiddie"  element={<Kiddie />} />
        <Route path="/corporate"  element={<Corporate />} />
        <Route path="/birthday"  element={<Birthday />} />
        <Route path="/debut"  element={<Debut />} />
        <Route path="/baptismal"  element={<Baptismal />} />
        <Route path="/genderreveal"  element={<Genderreveal />} />



        <Route path="*" element={<Error />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
