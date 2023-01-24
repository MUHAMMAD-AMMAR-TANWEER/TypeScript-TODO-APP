import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import './addnew-todo'
import AddNewTodo from './addnew-todo'
import Todolist from './todolist'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

    <AddNewTodo/>
    <Todolist/>
    </div>
  )
}
