import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Mentor from '../../features/mentor'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Mentor"}))
      }, [])


    return(
        <Mentor />
    )
}

export default InternalPage