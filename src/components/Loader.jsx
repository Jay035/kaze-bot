import logo from "../assets/Logo.svg";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen animate-pulse">
        <img className="w-24" src={logo} alt="logo" />
    </div>
  )
}
