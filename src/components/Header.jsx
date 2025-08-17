import Navbar from './Navbar'
import './Header.css'
export default function Header() {
  return (
    <div className='header'>
      <Navbar></Navbar>
      <div className='header-text'>
        <h1>Quick Reference</h1>
        <h2>Here are some cheatsheets and quick references contributed by open source angels.</h2>
      </div>
    </div>
  )
}
