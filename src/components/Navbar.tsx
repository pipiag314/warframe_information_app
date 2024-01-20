import Link from "next/link"

const Navbar = () => {
  return (
    <div className="p-10 flex justify-between">
      <h1 className="mb-10 text-2xl font-bold text-white font-serif">
        Warframes Information App
      </h1>
      <Link href="/">
        <h1 className="text-xl font-bold font-serif text-white">Home</h1>
      </Link>
    </div>
  )
}
export default Navbar
