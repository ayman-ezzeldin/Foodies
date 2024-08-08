'use client'
import { useFormStatus } from 'react-dom'
const MealsFormSubmit = ({...props}) => {
  const {pending } = useFormStatus() ;
  return (
    <button {...props} disabled={pending} >{pending ? 'Submitting...' : 'Share Meal'}</button>
  )
}

export default MealsFormSubmit