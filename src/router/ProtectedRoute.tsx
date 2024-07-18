import { ReactNode } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { applicationIdState, applicationStepState } from '../store/applicationSlice';
import { useAppSelector } from '../hooks';

interface IRouteProps {
    step: number;
    children: ReactNode;
}

export const ProtectedRoute = ({ step, children } : IRouteProps): ReactNode => {
    const currentApplicationId = useAppSelector(applicationIdState);
    const currentApplicationStep = useAppSelector(applicationStepState);
    const { applicationId } = useParams();

    // проверка совпадения id сохраненного в store и из параметров url
    const checkId = (): boolean => {
        return !!( applicationId && currentApplicationId 
            && (Number(applicationId) === currentApplicationId)
        );
    };

    // проверка шага
    if ((step > currentApplicationStep) || !checkId()) {
        return <Navigate to={"/loan"} />;
    }
    return children;
};