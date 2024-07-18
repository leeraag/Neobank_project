import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()