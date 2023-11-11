import { SortBy, type User } from '../types.d'

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}

export function UsersList ({ changeSorting, deleteUser, showColors, users }: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
        <th>Foto</th>
        <th className='pointer' onClick={() => { changeSorting(SortBy.NAME) }}>Nombre</th>
        <th className='pointer' onClick={() => { changeSorting(SortBy.LAST) }}>Apellido</th>
        <th className='pointer' onClick={() => { changeSorting(SortBy.COUNTRY) }}>Pais</th>
        <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroungColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColors ? backgroungColor : 'transparent'
          return (
            // <tr key={user.login.uuid} style={{ backgroundColor: color }}>
            <tr key={user.email} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} alt="Imagen del usuario" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={
                  () => {
                    deleteUser(user.email)
                  }}>
                    Borrar
                </button>
              </td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
}
