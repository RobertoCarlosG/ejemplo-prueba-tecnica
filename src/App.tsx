import { useEffect, useState, useRef, useMemo } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'
import { SortBy, type User } from './types.d'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>()

  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  // El cálculo dentro de useMemo se realiza en una función anónima,
  // la cual se ejecuta cada vez que una de las dependencias especificadas
  const filteredUsers = useMemo(() => {
    // Primero, se verifica si filterCountry es una cadena de texto no vacía
    return typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter((users) => {
        return users.location.country.toLowerCase().includes(filterCountry.toLocaleLowerCase())
      }) // Si filterCountry no es una cadena de texto no vacía,
    // se devuelve la lista original de users sin ninguna modificación.
      : users
      // Si ninguno de estos valores cambia,
      // se utiliza la versión memoizada del resultado anterior
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NAME) {
      return filteredUsers.toSorted((a, b) =>
      // Esta función de comparación compara los nombres
      // de los usuarios y los ordena alfabéticamente en orden ascendente
      // invertir b a para cambiar el order a descendente
        a.name.first.localeCompare(b.name.first)
      )
    }
    if (sorting === SortBy.LAST) {
      return filteredUsers.toSorted((a, b) =>
        a.name.last.localeCompare(b.name.last)
      )
    }
    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    }
    // default SortBy.NONE
    return filteredUsers
  }, [filteredUsers, sorting])

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(async (res) => await res.json())
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (
  <div className='App'>
    <h1>Prueba tecnica</h1>
    <header>
      <button onClick={toggleColors}>Colorear Filas</button>
      <button onClick={handleReset}>Restaurar estado</button>
      <button onClick={toggleSortByCountry}>{ sorting === SortBy.COUNTRY ? 'No ordenar' : 'Ordenar por pais'}</button>
      <input type="text" placeholder='Filtrar por pais' onChange={ (e) => {
        setFilterCountry(e.target.value)
      }}/>
    </header>
    <UsersList changeSorting={handleChangeSort} deleteUser={handleDelete} showColors={showColors} users = {sortedUsers}/>
    </div>
  )
}

export default App
