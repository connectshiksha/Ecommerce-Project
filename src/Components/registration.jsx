import { useState  } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Header from "./Header"
import Footer from './Footer'




const Registration = () => {
  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [phone, setphone] = useState()
  const [countries, setcountries] = useState()
  const [address, setaddress] = useState()
  const [town, settown] = useState()
  const [postcode, setpostcode] = useState()
  const navigate = useNavigate()


  const handleRegistration = async () => {

    if (!firstName || !lastName || !email || !password || !phone || !countries || !address || !town || !postcode) {

      alert("Fill all the fields")
      return
    }
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      countries: countries,
      address: address,
      town: town,
      postcode: postcode
    }

    await axios.post("http://localhost:4000/user/registration", payload).then((data) => {
      console.log("data", data.data)
      alert("User Registration succesfully");
      setfirstName("")
      setlastName("")
      setEmail("")
      setphone("")
      setPassword("")
      setcountries("")
      setaddress("")
      settown("")
      setpostcode("")
      navigate("/login")


    }).catch((e) => {
      console.log("Error ", e.message)
      alert(e.message)
    })

  }

  return (
    <div>
      <Header />
      {/* contact section */}
      <div className="relative h-[49rem] flex items-center justify-center w-full bg-center bg-cover" style={{ "background-image": "url(https://quomodothemes.website/html/shopus/assets/images/homepage-one/login-bg.webp)" }}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-75" />
        <form action className="z-10 p-6 mx-2 w-[37rem] rounded-md lg:mx-0 dark:bg-white  bg-white " data-aos="fade-up" data-aos-delay={100} data-aos-duration={1000}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center  text-black  dark:text-black ">
              Create Account </h2>
          </div>
          <div className="flex flex-wrap mb-4 -mx-2">
            <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
              <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">First Name*</label><br />
              <input className="w-[15rem] px-3 py-2 leading-loose border rounded-md bg-[var(--bg-color)] dark:text-gray-400 dark:bg-[var(--bg-color)] dark:border-[var(--btn-bg-color)]" type="text" placeholder="First Name.." required onChange={(e) => setfirstName(e.target.value)} value={firstName} />
            </div>
            <div className="w-full px-2 lg:w-1/2">
              <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Last Name*</label><br />
              <input className="w-[15rem] px-3 py-2 leading-loose border rounded-md dark:placeholder-gray-500bg-[var(--bg-color)]  dark:text-gray-400 dark:bg-[var(--bg-color)]  dark:border-[var(--btn-bg-color)]" type="text" placeholder="Last Name.." required onChange={(e) => setlastName(e.target.value)} value={lastName} />
            </div>
          </div>
          <div className="flex flex-wrap mb-4 -mx-2">
            <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
              <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Email*</label><br />
              <input className="w-[15rem] px-3 py-2 leading-loose border border-gray-600 rounded-md dark:placeholder-gray-500 bg-white  dark:text-gray-400" type="email" placeholder="Email.." required onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="w-full px-2 lg:w-1/2">
              <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Phone No*</label><br />
              <input className="w-[15rem] px-3 py-2 leading-loose border rounded-md dark:placeholder-gray-500bg-[var(--bg-color)]  dark:text-gray-400 dark:bg-[var(--bg-color)]  dark:border-[var(--btn-bg-color)]" type="number" placeholder="Phone No.." required onChange={(e) => setphone(e.target.value)} value={phone} />
            </div>
          </div>
          <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Password*</label><br />
          <input type="password" placeholder="Password*..." required className="block w-[31rem] px-4 py-3 mb-3 leading-tight text-gray-700 border roundedbg-[var(--bg-color)]  dark:placeholder-gray-500 dark:text-gray-400 dark:border-[var(--btn-bg-color)] dark:bg-[var(--bg-color)]  " onChange={(e) => setPassword(e.target.value)} value={password} />

          <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Country*</label><br />
          <input type="text" placeholder="Country*..." required className="block w-[31rem] px-4 py-3 mb-3 leading-tight text-gray-700 border roundedbg-[var(--bg-color)]  dark:placeholder-gray-500 dark:text-gray-400 dark:border-[var(--btn-bg-color)] dark:bg-[var(--bg-color)]  " onChange={(e) => setcountries(e.target.value)} value={countries} />
          <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Address*</label><br />
          <input type="text" placeholder="Enter your Address*..." required className="block w-[31rem]  px-4 py-3 mb-3 leading-tight text-gray-700 border roundedbg-[var(--bg-color)]  dark:placeholder-gray-500 dark:text-gray-400 dark:border-[var(--btn-bg-color)] dark:bg-[var(--bg-color)]  " onChange={(e) => setaddress(e.target.value)} value={address} />
          <div className="flex flex-wrap mb-4 -mx-2">
            <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
              <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Town / City*</label><br />
              <input className="w-[15rem] px-3 py-2 leading-loose border rounded-md bg-[var(--bg-color)] dark:text-gray-400 dark:bg-[var(--bg-color)] dark:border-[var(--btn-bg-color)]" type="text" placeholder="City.." required onChange={(e) => settown(e.target.value)} value={town} />
            </div>
            <div className="w-full px-2 lg:w-1/2">
              <label className="text-[1.1rem] text-gray-600 font-medium" htmlFor="Name">Postcode / ZIP*</label><br />
              <input className="w-[15rem] px-3 py-2 leading-loose border rounded-md dark:placeholder-gray-500bg-[var(--bg-color)]  dark:text-gray-400 dark:bg-[var(--bg-color)]  dark:border-[var(--btn-bg-color)]" type="number" placeholder="0000" required onChange={(e) => setpostcode(e.target.value)} value={postcode} />
            </div>
            {/* <input className type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" /> */}
            {/* <label className=" text-gray-800" htmlFor="vehicle1">I agree all terms and condition in ShopUs.</label><br /> */}
          </div>
          <button className="w-[33rem] py-4 text-sm font-bold leading-normal text-white rounded-full  transition-all duration-300 bg-[#ae1c9a]  dark:bg-[#ae1c9a] shadow-sm hover:shadow-lg" onClick={() => handleRegistration()}>
            Create An Account
          </button>
          <p className="px-6 text-sm text-center dark:text-gray-600 font-semibold text-gray-600 ">Already have an account ?
            <a rel="noopener noreferrer" href="/login" className="hover:underline  text-gray-800 dark:text-gray-800 " >Log in</a>.
          </p>
        </form>
      </div>

      <Footer />


    </div>
  )
}

export default Registration
