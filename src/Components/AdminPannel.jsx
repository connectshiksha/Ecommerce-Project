import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const AdminPannel = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("inside handle log ");
    const payload = {
      "email": email,
      "password": password
    }
    await axios.post("http://localhost:4000/admin/login", payload).then((data) => {
      console.log("data of login", data.data)

      localStorage.setItem("usertoken", data.data.token)
      navigate("/admindashboard")

    }).catch((e) => {
      console.log(e)
      // setError("Invalid Email or password")
    })
  }


  return (
    <div>

      <Header />
      <div className="w-full max-w-sm my-28 p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src="https://quomodothemes.website/html/shopus/assets/images/logos/logo.webp" alt="" />
        </div>

        <form className="mt-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Email*</label>
            <input type="text" placeholder="Enter your Email*..." className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-[var(--purple-color)] focus:border-[var(--purple-color)] dark:focus:border-[var(--purple-color)] focus:ring-[var(--purple-color)] focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password*</label>
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[var(--purple-color)] dark:focus:border-[var(--purple-color)] focus:ring-[var(--purple-color)] focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e) => setPassword(e.target.value)} value={password} />
            <a href="#" className="text-xs pt-4 text-gray-600 dark:text-gray-400 hover:text-[var(--purple-color)] hover:underline">Forget Password?</a>

          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[var(--purple-color)] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" onClick={(e) => handleLogin(e)} >
              Log In
            </button>
          </div>
        </form>


      </div>
      <Footer />
    </div>
  )
}

export default AdminPannel
