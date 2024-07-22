import { useSelector } from 'react-redux'
import type { RootState } from '../store/main'

export const useAppSelector = useSelector.withTypes<RootState>()