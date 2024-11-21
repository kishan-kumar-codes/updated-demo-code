import { useDispatch } from 'react-redux';

const useDispatchAction = (actionCreator: (payload: any) => any) => {
    const dispatch = useDispatch();

    return (field: string, value: any) => {
        dispatch(
            actionCreator({
                [field]: value,
            })
        );
    };
};

export default useDispatchAction;
