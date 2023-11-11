import { FC, useEffect } from 'react'

import { findAllApi } from '@/api/user'

const User: FC = () => {
  const findAll = async () => {
    const res = await findAllApi({})
    console.log(res)
  }
  useEffect(() => {
    void findAll()
  }, [])
  return <div>User</div>
}
export default User
