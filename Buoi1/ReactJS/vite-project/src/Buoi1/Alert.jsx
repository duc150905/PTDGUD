import './Alert.css'
function Alert({ type }) {
    return (
        <div className={`alert alert-${type}`}>
            {type === 'success' && 'Success thao tác thành công'}
            {type === 'warning' && 'warning cảnh báo'}
            {type === 'error' && 'error có lỗi xảy ra'}
        </div>
    )
}
export default Alert;
