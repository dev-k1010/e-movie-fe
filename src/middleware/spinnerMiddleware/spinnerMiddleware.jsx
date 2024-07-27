import { setSpinner } from "../../stores/quanLySpinner/quanLySpinnerReducer";

const spinnerMiddleware = ({ dispatch }) => {
    let pendingActionsCount = 0;
    let timeoutId = null;

    return (next) => (action) => {
        if (action.type.endsWith('/pending')) {
            if (pendingActionsCount === 0) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    dispatch(setSpinner(true)); // Bật Spinner nếu không có tác vụ nào đang chờ
                }, 3000); // Thêm một chút thời gian trễ
            }
            pendingActionsCount++;
            
        }

        const handleComplete = () => {
            pendingActionsCount--;
            if (pendingActionsCount === 0) {
                clearTimeout(timeoutId);
                dispatch(setSpinner(false)); // Tắt Spinner khi tất cả các tác vụ đã hoàn thành
            }
        };

        if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) {
            handleComplete();
        }

        return next(action);
    };
};

export default spinnerMiddleware;
